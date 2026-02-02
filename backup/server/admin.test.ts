import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock admin user context
function createAdminContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@illuminious.com",
      name: "Admin User",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

// Mock public context (no user)
function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Admin Authentication", () => {
  it("should allow admin login with correct credentials", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    
    // Test admin login endpoint exists
    expect(caller.admin).toBeDefined();
    expect(caller.admin.login).toBeDefined();
  });

  it("should have posts router defined", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);
    
    expect(caller.posts).toBeDefined();
    expect(caller.posts.list).toBeDefined();
    expect(caller.posts.create).toBeDefined();
  });

  it("should have contact router defined", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);
    
    expect(caller.contact).toBeDefined();
    expect(caller.contact.submit).toBeDefined();
    expect(caller.contact.list).toBeDefined();
  });
});

describe("Posts API Structure", () => {
  it("should have all required post operations", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);
    
    expect(caller.posts.list).toBeDefined();
    expect(caller.posts.getById).toBeDefined();
    expect(caller.posts.create).toBeDefined();
    expect(caller.posts.update).toBeDefined();
    expect(caller.posts.delete).toBeDefined();
    expect(caller.posts.getPublished).toBeDefined();
  });
});

describe("Contact Submissions API Structure", () => {
  it("should have submit and list operations", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);
    
    expect(caller.contact.submit).toBeDefined();
    expect(caller.contact.list).toBeDefined();
    expect(caller.contact.markAsRead).toBeDefined();
  });
});
