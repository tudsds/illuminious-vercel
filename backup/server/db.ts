import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, admins, posts, contactSubmissions, InsertAdmin, InsertPost, InsertContactSubmission, Admin, Post, ContactSubmission } from "../drizzle/schema";
import { ENV } from './_core/env';
import * as crypto from 'crypto';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Password hashing utilities
function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(':');
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ Admin Functions ============

export async function createAdmin(admin: { username: string; password: string; name?: string; email?: string; isSuperAdmin?: boolean }): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const passwordHash = hashPassword(admin.password);
  
  try {
    await db.insert(admins).values({
      username: admin.username,
      passwordHash,
      name: admin.name || null,
      email: admin.email || null,
      isSuperAdmin: admin.isSuperAdmin || false,
    });
    
    const result = await db.select().from(admins).where(eq(admins.username, admin.username)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create admin:", error);
    return null;
  }
}

export async function verifyAdmin(username: string, password: string): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
  
  if (result.length === 0) return null;
  
  const admin = result[0];
  if (!verifyPassword(password, admin.passwordHash)) return null;
  
  // Update last signed in
  await db.update(admins).set({ lastSignedIn: new Date() }).where(eq(admins.id, admin.id));
  
  return admin;
}

export async function getAdminById(id: number): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(admins).where(eq(admins.id, id)).limit(1);
  return result[0] || null;
}

export async function getAdminByUsername(username: string): Promise<Admin | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
  return result[0] || null;
}

export async function getAllAdmins(): Promise<Admin[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(admins).orderBy(desc(admins.createdAt));
}

export async function deleteAdmin(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.delete(admins).where(eq(admins.id, id));
  return true;
}

// ============ Post Functions ============

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    + '-' + Date.now().toString(36);
}

export async function createPost(post: { title: string; content: string; excerpt?: string; featuredImage?: string; type: 'news' | 'blog'; status?: 'draft' | 'published'; authorName?: string; authorId?: number }): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const slug = generateSlug(post.title);
  
  try {
    await db.insert(posts).values({
      title: post.title,
      slug,
      content: post.content,
      excerpt: post.excerpt || null,
      featuredImage: post.featuredImage || null,
      type: post.type,
      status: post.status || 'draft',
      authorName: post.authorName || null,
      authorId: post.authorId || null,
      publishedAt: post.status === 'published' ? new Date() : null,
    });
    
    const result = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create post:", error);
    return null;
  }
}

export async function updatePost(id: number, post: Partial<{ title: string; content: string; excerpt: string; featuredImage: string; status: 'draft' | 'published'; authorName: string }>): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const updateData: Record<string, unknown> = { ...post };
  
  if (post.status === 'published') {
    const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
    if (existing[0] && !existing[0].publishedAt) {
      updateData.publishedAt = new Date();
    }
  }
  
  await db.update(posts).set(updateData).where(eq(posts.id, id));
  
  const result = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return result[0] || null;
}

export async function deletePost(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.delete(posts).where(eq(posts.id, id));
  return true;
}

export async function getPostById(id: number): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return result[0] || null;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
  return result[0] || null;
}

export async function getPostsByType(type: 'news' | 'blog', publishedOnly: boolean = true): Promise<Post[]> {
  const db = await getDb();
  if (!db) return [];

  if (publishedOnly) {
    return await db.select().from(posts)
      .where(and(eq(posts.type, type), eq(posts.status, 'published')))
      .orderBy(desc(posts.publishedAt));
  }
  
  return await db.select().from(posts)
    .where(eq(posts.type, type))
    .orderBy(desc(posts.createdAt));
}

export async function getAllPosts(): Promise<Post[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(posts).orderBy(desc(posts.createdAt));
}

// ============ Contact Submission Functions ============

export async function createContactSubmission(submission: { name: string; email: string; company?: string; phone?: string; message: string; source?: string }): Promise<ContactSubmission | null> {
  const db = await getDb();
  if (!db) return null;

  try {
    await db.insert(contactSubmissions).values({
      name: submission.name,
      email: submission.email,
      company: submission.company || null,
      phone: submission.phone || null,
      message: submission.message,
      source: submission.source || null,
    });
    
    // Get the last inserted submission
    const result = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.id)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error("[Database] Failed to create contact submission:", error);
    return null;
  }
}

export async function getAllContactSubmissions(): Promise<ContactSubmission[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
}

export async function updateContactSubmissionStatus(id: number, status: 'new' | 'read' | 'replied' | 'archived'): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.update(contactSubmissions).set({ status }).where(eq(contactSubmissions.id, id));
  return true;
}

export async function deleteContactSubmission(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
  return true;
}

// ============ Initialize Default Super Admin ============

export async function initializeDefaultAdmin(): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const existing = await getAdminByUsername('illuminious');
  if (!existing) {
    await createAdmin({
      username: 'illuminious',
      password: 'Djpcs17529#',
      name: 'Super Admin',
      email: 'admin@illuminious.com',
      isSuperAdmin: true,
    });
    console.log('[Database] Default super admin created');
  }
}
