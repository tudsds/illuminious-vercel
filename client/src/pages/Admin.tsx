import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogIn,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Save,
  Eye,
  FileText,
  Newspaper,
  MessageSquare,
  Users,
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  Image,
  Youtube,
  ChevronDown,
  X,
  Loader2,
  Check,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

// Rich Text Editor Component
function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showYoutubeDialog, setShowYoutubeDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const insertAtCursor = (text: string) => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = value.substring(0, start) + text + value.substring(end);
    onChange(newValue);

    // Reset cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  const wrapSelection = (before: string, after: string) => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newValue =
      value.substring(0, start) + before + selectedText + after + value.substring(end);
    onChange(newValue);
  };

  const handleBold = () => wrapSelection("**", "**");
  const handleItalic = () => wrapSelection("*", "*");
  const handleUnderline = () => wrapSelection("<u>", "</u>");

  const handleLink = () => {
    if (linkUrl && linkText) {
      insertAtCursor(`[${linkText}](${linkUrl})`);
      setLinkUrl("");
      setLinkText("");
      setShowLinkDialog(false);
    }
  };

  const handleImage = () => {
    if (imageUrl) {
      insertAtCursor(`![Image](${imageUrl})`);
      setImageUrl("");
      setShowImageDialog(false);
    }
  };

  const handleYoutube = () => {
    if (youtubeUrl) {
      // Extract video ID from YouTube URL
      const videoId = youtubeUrl.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      )?.[1];
      if (videoId) {
        insertAtCursor(
          `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`
        );
      }
      setYoutubeUrl("");
      setShowYoutubeDialog(false);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b">
        <Button type="button" variant="ghost" size="sm" onClick={handleBold} title="Bold">
          <Bold className="w-4 h-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={handleItalic} title="Italic">
          <Italic className="w-4 h-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={handleUnderline} title="Underline">
          <Underline className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        
        {/* Link Dialog */}
        <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
          <DialogTrigger asChild>
            <Button type="button" variant="ghost" size="sm" title="Insert Link">
              <LinkIcon className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insert Link</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Link text"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
              />
              <Input
                placeholder="URL (https://...)"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
              <Button onClick={handleLink} className="w-full">
                Insert Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Image Dialog */}
        <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
          <DialogTrigger asChild>
            <Button type="button" variant="ghost" size="sm" title="Insert Image">
              <Image className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insert Image</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <Button onClick={handleImage} className="w-full">
                Insert Image
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* YouTube Dialog */}
        <Dialog open={showYoutubeDialog} onOpenChange={setShowYoutubeDialog}>
          <DialogTrigger asChild>
            <Button type="button" variant="ghost" size="sm" title="Insert YouTube Video">
              <Youtube className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insert YouTube Video</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="YouTube URL"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
              />
              <Button onClick={handleYoutube} className="w-full">
                Insert Video
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Editor */}
      <Textarea
        id="content-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[400px] border-0 rounded-none focus-visible:ring-0 resize-y"
        placeholder="Write your content here... Use Markdown for formatting."
      />
    </div>
  );
}

// Login Form Component
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const loginMutation = trpc.admin.login.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      await loginMutation.mutateAsync({ username, password });
      toast.success("Login successful! Redirecting...");
      // Force a small delay to ensure cookie is set, then reload to pick up the session
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error: any) {
      toast.error(error.message || "Invalid credentials");
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="text-center">
            <img
              src="/images/illuminious-logo-blue.png"
              alt="Illuminious"
              className="w-16 h-16 mx-auto mb-4"
            />
            <CardTitle className="text-2xl">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-illuminious-blue hover:bg-illuminious-navy"
                disabled={loginMutation.isPending || isLoggingIn}
              >
                {(loginMutation.isPending || isLoggingIn) ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <LogIn className="w-4 h-4 mr-2" />
                )}
                {isLoggingIn ? "Redirecting..." : "Login"}
              </Button>
            </form>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Default: illuminious / Djpcs17529#
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Post Editor Component
function PostEditor({
  post,
  onSave,
  onCancel,
}: {
  post?: any;
  onSave: () => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [featuredImage, setFeaturedImage] = useState(post?.featuredImage || "");
  const [type, setType] = useState<"news" | "blog">(post?.type || "blog");
  const [status, setStatus] = useState<"draft" | "published">(post?.status || "draft");
  const [authorName, setAuthorName] = useState(post?.authorName || "");
  const [isUploading, setIsUploading] = useState(false);

  const createMutation = trpc.posts.create.useMutation();
  const updateMutation = trpc.posts.update.useMutation();
  const uploadMutation = trpc.posts.uploadImage.useMutation();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(",")[1];
        const result = await uploadMutation.mutateAsync({
          filename: file.name,
          contentType: file.type,
          base64Data: base64,
        });
        setFeaturedImage(result.url);
        toast.success("Image uploaded successfully");
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async (saveStatus: "draft" | "published") => {
    try {
      if (post?.id) {
        await updateMutation.mutateAsync({
          id: post.id,
          title,
          content,
          excerpt,
          featuredImage,
          status: saveStatus,
          authorName,
        });
      } else {
        await createMutation.mutateAsync({
          title,
          content,
          excerpt,
          featuredImage,
          type,
          status: saveStatus,
          authorName,
        });
      }
      toast.success(saveStatus === "published" ? "Post published!" : "Draft saved!");
      onSave();
    } catch (error: any) {
      toast.error(error.message || "Failed to save post");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {post?.id ? "Edit Post" : "Create New Post"}
        </h2>
        <Button variant="ghost" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          <Input
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl font-semibold"
          />
          <RichTextEditor value={content} onChange={setContent} />
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!post?.id && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Type</label>
                  <Select value={type} onValueChange={(v: "news" | "blog") => setType(v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="news">News Article</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label className="text-sm font-medium mb-2 block">Author Name</label>
                <Input
                  placeholder="Author name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Excerpt</label>
                <Textarea
                  placeholder="Brief description..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Featured Image</label>
                {featuredImage && (
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
                {isUploading && (
                  <p className="text-sm text-muted-foreground mt-1">Uploading...</p>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => handleSave("draft")}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button
              className="flex-1 bg-illuminious-blue hover:bg-illuminious-navy"
              onClick={() => handleSave("published")}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              <Check className="w-4 h-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Posts List Component
function PostsList({ type }: { type: "news" | "blog" }) {
  const [editingPost, setEditingPost] = useState<any>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const { data: posts, refetch } = trpc.posts.list.useQuery({
    type,
    publishedOnly: false,
  });
  const deleteMutation = trpc.posts.delete.useMutation();

  const handleDelete = async () => {
    if (deleteId) {
      await deleteMutation.mutateAsync({ id: deleteId });
      toast.success("Post deleted");
      setDeleteId(null);
      refetch();
    }
  };

  if (showEditor) {
    return (
      <PostEditor
        post={editingPost}
        onSave={() => {
          setShowEditor(false);
          setEditingPost(null);
          refetch();
        }}
        onCancel={() => {
          setShowEditor(false);
          setEditingPost(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {type === "news" ? "News Articles" : "Blog Posts"}
        </h2>
        <Button
          onClick={() => setShowEditor(true)}
          className="bg-illuminious-blue hover:bg-illuminious-navy"
        >
          <Plus className="w-4 h-4 mr-2" />
          New {type === "news" ? "Article" : "Post"}
        </Button>
      </div>

      <div className="space-y-2">
        {posts?.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{post.title}</h3>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      post.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {post.authorName && `By ${post.authorName} • `}
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingPost(post);
                    setShowEditor(true);
                  }}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDeleteId(post.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {(!posts || posts.length === 0) && (
          <div className="text-center py-12 text-muted-foreground">
            No {type === "news" ? "articles" : "posts"} yet. Create your first one!
          </div>
        )}
      </div>

      <AlertDialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// Contact Submissions Component
function ContactSubmissions() {
  const { data: submissions, refetch } = trpc.contact.list.useQuery();
  const updateStatusMutation = trpc.contact.updateStatus.useMutation();
  const deleteMutation = trpc.contact.delete.useMutation();
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);

  const handleStatusChange = async (id: number, status: "new" | "read" | "replied" | "archived") => {
    await updateStatusMutation.mutateAsync({ id, status });
    refetch();
  };

  const handleDelete = async (id: number) => {
    await deleteMutation.mutateAsync({ id });
    toast.success("Submission deleted");
    refetch();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Contact Submissions</h2>

      <div className="space-y-2">
        {submissions?.map((submission) => (
          <Card key={submission.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{submission.name}</h3>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        submission.status === "new"
                          ? "bg-blue-100 text-blue-700"
                          : submission.status === "read"
                          ? "bg-gray-100 text-gray-700"
                          : submission.status === "replied"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {submission.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{submission.email}</p>
                  {submission.company && (
                    <p className="text-sm text-muted-foreground">{submission.company}</p>
                  )}
                  <p className="text-sm mt-2 line-clamp-2">{submission.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(submission.createdAt).toLocaleString()}
                    {submission.source && ` • From: ${submission.source}`}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Select
                    value={submission.status}
                    onValueChange={(v: "new" | "read" | "replied" | "archived") =>
                      handleStatusChange(submission.id, v)
                    }
                  >
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="read">Read</SelectItem>
                      <SelectItem value="replied">Replied</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(submission.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {(!submissions || submissions.length === 0) && (
          <div className="text-center py-12 text-muted-foreground">
            No contact submissions yet.
          </div>
        )}
      </div>
    </div>
  );
}

// Admin Management Component (Super Admin Only)
function AdminManagement() {
  const { data: admins, refetch } = trpc.admin.listAdmins.useQuery();
  const createMutation = trpc.admin.createAdmin.useMutation();
  const deleteMutation = trpc.admin.deleteAdmin.useMutation();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ username: "", password: "", name: "", email: "" });

  const handleCreate = async () => {
    try {
      await createMutation.mutateAsync(newAdmin);
      toast.success("Admin created successfully");
      setShowCreateDialog(false);
      setNewAdmin({ username: "", password: "", name: "", email: "" });
      refetch();
    } catch (error: any) {
      toast.error(error.message || "Failed to create admin");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteMutation.mutateAsync({ id });
      toast.success("Admin deleted");
      refetch();
    } catch (error: any) {
      toast.error(error.message || "Failed to delete admin");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Admin Management</h2>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-illuminious-blue hover:bg-illuminious-navy">
              <Plus className="w-4 h-4 mr-2" />
              Add Admin
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Admin</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Username"
                value={newAdmin.username}
                onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
              />
              <Input
                type="password"
                placeholder="Password"
                value={newAdmin.password}
                onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
              />
              <Input
                placeholder="Name (optional)"
                value={newAdmin.name}
                onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email (optional)"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
              />
              <Button onClick={handleCreate} className="w-full" disabled={createMutation.isPending}>
                Create Admin
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-2">
        {admins?.map((admin) => (
          <Card key={admin.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{admin.username}</h3>
                  {admin.isSuperAdmin && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700">
                      Super Admin
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {admin.name || "No name"} • {admin.email || "No email"}
                </p>
                <p className="text-xs text-muted-foreground">
                  Last login: {admin.lastSignedIn ? new Date(admin.lastSignedIn).toLocaleString() : "Never"}
                </p>
              </div>
              {!admin.isSuperAdmin && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(admin.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Main Admin Dashboard
export default function Admin() {
  const { data: admin, isLoading, refetch } = trpc.admin.me.useQuery();
  const logoutMutation = trpc.admin.logout.useMutation();
  const [, setLocation] = useLocation();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    refetch();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-illuminious-blue" />
      </div>
    );
  }

  if (!admin) {
    return <LoginForm onLogin={() => refetch()} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/illuminious-logo-blue.png"
              alt="Illuminious"
              className="w-10 h-10"
            />
            <div>
              <h1 className="font-semibold text-illuminious-navy">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Welcome, {admin.name || admin.username}
                {admin.isSuperAdmin && " (Super Admin)"}
              </p>
            </div>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs defaultValue="blog" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="w-4 h-4" />
              News
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Contacts
            </TabsTrigger>
            {admin.isSuperAdmin && (
              <TabsTrigger value="admins" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Admins
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="blog">
            <PostsList type="blog" />
          </TabsContent>

          <TabsContent value="news">
            <PostsList type="news" />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactSubmissions />
          </TabsContent>

          {admin.isSuperAdmin && (
            <TabsContent value="admins">
              <AdminManagement />
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
}
