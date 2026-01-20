import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "@/components/ui/dialog";
import {
  Loader2,
  Plus,
  Edit,
  Trash2,
  LogOut,
  FileText,
  Newspaper,
  LayoutDashboard,
  Eye,
  Save,
  Image as ImageIcon,
  Upload,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

type ContentType = "news" | "blog";

interface EditingPost {
  id?: number;
  type: ContentType;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImage: string;
  authorName: string;
  status: "draft" | "published";
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"dashboard" | "news" | "blog">("dashboard");
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<EditingPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock super admin for testing (login verification disabled)
  const admin = { id: 1, username: "illuminious", name: "Super Admin" };

  // Fetch posts from database
  const { data: allPosts, isLoading: postsLoading, refetch: refetchPosts } = trpc.posts.list.useQuery({
    publishedOnly: false,
  });

  // Mutations
  const createPostMutation = trpc.posts.create.useMutation({
    onSuccess: () => {
      toast.success("Post created successfully!");
      refetchPosts();
      setIsDialogOpen(false);
      setEditingItem(null);
    },
    onError: (error) => {
      toast.error(`Failed to create post: ${error.message}`);
    },
  });

  const updatePostMutation = trpc.posts.update.useMutation({
    onSuccess: () => {
      toast.success("Post updated successfully!");
      refetchPosts();
      setIsDialogOpen(false);
      setEditingItem(null);
    },
    onError: (error) => {
      toast.error(`Failed to update post: ${error.message}`);
    },
  });

  const deletePostMutation = trpc.posts.delete.useMutation({
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      refetchPosts();
    },
    onError: (error) => {
      toast.error(`Failed to delete post: ${error.message}`);
    },
  });

  const uploadImageMutation = trpc.posts.uploadImage.useMutation({
    onSuccess: (data) => {
      if (editingItem) {
        setEditingItem({ ...editingItem, featuredImage: data.url });
      }
      toast.success("Image uploaded successfully!");
      setIsUploading(false);
    },
    onError: (error) => {
      toast.error(`Failed to upload image: ${error.message}`);
      setIsUploading(false);
    },
  });

  const handleLogout = async () => {
    window.location.href = "/";
  };

  const handleCreate = (type: ContentType) => {
    setEditingItem({
      type,
      title: "",
      excerpt: "",
      content: "",
      category: type === "news" ? "Company News" : "Industry Insights",
      featuredImage: "",
      authorName: admin?.name || "Illuminious Team",
      status: "draft",
    });
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleEdit = (post: typeof allPosts extends (infer T)[] | undefined ? T : never) => {
    if (!post) return;
    setEditingItem({
      id: post.id,
      type: post.type as ContentType,
      title: post.title,
      excerpt: post.excerpt || "",
      content: post.content,
      category: post.category || "",
      featuredImage: post.featuredImage || "",
      authorName: post.authorName || "Illuminious Team",
      status: post.status as "draft" | "published",
    });
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePostMutation.mutate({ id });
    }
  };

  const handleSave = () => {
    if (!editingItem) return;

    if (!editingItem.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!editingItem.content.trim()) {
      toast.error("Content is required");
      return;
    }

    if (editingItem.id) {
      // Update existing
      updatePostMutation.mutate({
        id: editingItem.id,
        title: editingItem.title,
        content: editingItem.content,
        excerpt: editingItem.excerpt,
        featuredImage: editingItem.featuredImage,
        status: editingItem.status,
        authorName: editingItem.authorName,
      });
    } else {
      // Create new
      createPostMutation.mutate({
        title: editingItem.title,
        content: editingItem.content,
        excerpt: editingItem.excerpt,
        featuredImage: editingItem.featuredImage,
        type: editingItem.type,
        status: editingItem.status,
        authorName: editingItem.authorName,
      });
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB");
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    setIsUploading(true);

    // Convert to base64
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      uploadImageMutation.mutate({
        filename: file.name,
        contentType: file.type,
        base64Data: base64,
      });
    };
    reader.onerror = () => {
      toast.error("Failed to read file");
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Filter posts by type
  const filteredPosts = allPosts?.filter((post) => {
    if (activeTab === "news") return post.type === "news";
    if (activeTab === "blog") return post.type === "blog";
    return true;
  }) || [];

  const stats = {
    totalNews: allPosts?.filter((p) => p.type === "news").length || 0,
    totalBlog: allPosts?.filter((p) => p.type === "blog").length || 0,
    published: allPosts?.filter((p) => p.status === "published").length || 0,
    drafts: allPosts?.filter((p) => p.status === "draft").length || 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Full Width */}
      <header className="bg-illuminious-navy text-white py-6 px-8">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center gap-6">
            <img
              src="/images/illuminious-logo-white.png"
              alt="Illuminious"
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-white/70 text-sm">Manage your content</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/80 text-lg">Welcome, {admin?.name}</span>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-white/30 text-white hover:bg-white/10 px-6 py-2"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-88px)]">
        {/* Sidebar - Wider */}
        <aside className="w-72 bg-white border-r border-gray-200 p-6">
          <nav className="space-y-3">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left text-lg transition-colors ${
                activeTab === "dashboard"
                  ? "bg-illuminious-blue text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <LayoutDashboard className="w-6 h-6" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left text-lg transition-colors ${
                activeTab === "news"
                  ? "bg-illuminious-blue text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Newspaper className="w-6 h-6" />
              News Articles
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left text-lg transition-colors ${
                activeTab === "blog"
                  ? "bg-illuminious-blue text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-6 h-6" />
              Blog Posts
            </button>
          </nav>
        </aside>

        {/* Main Content - Full Width */}
        <main className="flex-1 p-8">
          {postsLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-12 h-12 animate-spin text-illuminious-blue" />
            </div>
          ) : (
            <>
              {/* Dashboard Overview */}
              {activeTab === "dashboard" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-illuminious-navy">Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Newspaper className="w-7 h-7 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-lg">News Articles</p>
                          <p className="text-4xl font-bold text-illuminious-navy">{stats.totalNews}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                          <FileText className="w-7 h-7 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-lg">Blog Posts</p>
                          <p className="text-4xl font-bold text-illuminious-navy">{stats.totalBlog}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                          <Eye className="w-7 h-7 text-green-600" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-lg">Published</p>
                          <p className="text-4xl font-bold text-illuminious-navy">{stats.published}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                          <Edit className="w-7 h-7 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-lg">Drafts</p>
                          <p className="text-4xl font-bold text-illuminious-navy">{stats.drafts}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h3 className="text-2xl font-semibold text-illuminious-navy mb-6">Quick Actions</h3>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => handleCreate("news")}
                        className="bg-illuminious-blue text-white hover:bg-illuminious-navy px-8 py-6 text-lg"
                      >
                        <Plus className="w-6 h-6 mr-2" />
                        New News Article
                      </Button>
                      <Button
                        onClick={() => handleCreate("blog")}
                        variant="outline"
                        className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-blue/10 px-8 py-6 text-lg"
                      >
                        <Plus className="w-6 h-6 mr-2" />
                        New Blog Post
                      </Button>
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h3 className="text-2xl font-semibold text-illuminious-navy mb-6">Recent Posts</h3>
                    {allPosts && allPosts.length > 0 ? (
                      <div className="space-y-4">
                        {allPosts.slice(0, 5).map((post) => (
                          <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-4">
                              {post.featuredImage && (
                                <img src={post.featuredImage} alt="" className="w-16 h-16 rounded-lg object-cover" />
                              )}
                              <div>
                                <p className="font-medium text-lg text-illuminious-navy">{post.title}</p>
                                <p className="text-gray-500">{post.type} • {post.status}</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">No posts yet. Create your first post!</p>
                    )}
                  </div>
                </div>
              )}

              {/* News/Blog List */}
              {(activeTab === "news" || activeTab === "blog") && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-illuminious-navy">
                      {activeTab === "news" ? "News Articles" : "Blog Posts"}
                    </h2>
                    <Button
                      onClick={() => handleCreate(activeTab as ContentType)}
                      className="bg-illuminious-blue text-white hover:bg-illuminious-navy px-6 py-3 text-lg"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Create New
                    </Button>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-6 font-semibold text-illuminious-navy text-lg">Title</th>
                          <th className="text-left p-6 font-semibold text-illuminious-navy text-lg">Status</th>
                          <th className="text-left p-6 font-semibold text-illuminious-navy text-lg">Date</th>
                          <th className="text-right p-6 font-semibold text-illuminious-navy text-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPosts.map((post) => (
                          <tr key={post.id} className="border-t border-gray-100 hover:bg-gray-50">
                            <td className="p-6">
                              <div className="flex items-center gap-4">
                                {post.featuredImage && (
                                  <img
                                    src={post.featuredImage}
                                    alt=""
                                    className="w-16 h-16 rounded-lg object-cover"
                                  />
                                )}
                                <div>
                                  <p className="font-medium text-lg text-illuminious-navy">{post.title}</p>
                                  <p className="text-gray-500 line-clamp-1">{post.excerpt || post.content.substring(0, 100)}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-6">
                              <span
                                className={`px-4 py-2 rounded-full text-sm font-medium ${
                                  post.status === "published"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {post.status}
                              </span>
                            </td>
                            <td className="p-6 text-gray-500">
                              {new Date(post.createdAt).toLocaleDateString()}
                            </td>
                            <td className="p-6">
                              <div className="flex justify-end gap-3">
                                <Button
                                  variant="outline"
                                  onClick={() => handleEdit(post)}
                                  className="px-4 py-2"
                                >
                                  <Edit className="w-5 h-5 mr-2" />
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => handleDelete(post.id)}
                                  className="text-red-500 hover:text-red-600 hover:border-red-300 px-4 py-2"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {filteredPosts.length === 0 && (
                      <div className="p-16 text-center text-gray-500 text-lg">
                        No {activeTab === "news" ? "news articles" : "blog posts"} found. Create your first one!
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* Edit/Create Dialog - Much Larger */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-illuminious-navy">
              {editingItem?.id ? "Edit Post" : "Create New Post"}
            </DialogTitle>
          </DialogHeader>
          {editingItem && (
            <div className="space-y-6 py-4">
              <div>
                <label className="block text-lg font-medium mb-3">Title *</label>
                <Input
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  placeholder="Enter post title"
                  className="text-lg py-6 px-4"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-3">Excerpt</label>
                <Textarea
                  value={editingItem.excerpt}
                  onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
                  placeholder="Brief summary of the post"
                  rows={3}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-3">Content *</label>
                <Textarea
                  value={editingItem.content}
                  onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                  placeholder="Full article content (HTML supported)"
                  rows={15}
                  className="text-lg font-mono"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-3">Featured Image</label>
                <div className="space-y-4">
                  {/* Image Preview */}
                  {editingItem.featuredImage && (
                    <div className="relative inline-block">
                      <img
                        src={editingItem.featuredImage}
                        alt="Preview"
                        className="max-w-md max-h-64 rounded-lg object-cover border border-gray-200"
                      />
                      <button
                        onClick={() => setEditingItem({ ...editingItem, featuredImage: "" })}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  
                  {/* Upload Options */}
                  <div className="flex gap-4 items-center">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="px-6 py-3"
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 mr-2" />
                          Upload Image
                        </>
                      )}
                    </Button>
                    <span className="text-gray-500">or</span>
                    <Input
                      value={editingItem.featuredImage}
                      onChange={(e) => setEditingItem({ ...editingItem, featuredImage: e.target.value })}
                      placeholder="Enter image URL"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium mb-3">Category</label>
                  <Input
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    placeholder="e.g., Company News, Industry Insights"
                    className="text-lg py-6 px-4"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3">Author</label>
                  <Input
                    value={editingItem.authorName}
                    onChange={(e) => setEditingItem({ ...editingItem, authorName: e.target.value })}
                    placeholder="Author name"
                    className="text-lg py-6 px-4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium mb-3">Status</label>
                <Select
                  value={editingItem.status}
                  onValueChange={(value: "draft" | "published") =>
                    setEditingItem({ ...editingItem, status: value })
                  }
                >
                  <SelectTrigger className="text-lg py-6">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft" className="text-lg py-3">Draft</SelectItem>
                    <SelectItem value="published" className="text-lg py-3">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-4 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(false);
                    setEditingItem(null);
                  }}
                  className="px-8 py-3 text-lg"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={createPostMutation.isPending || updatePostMutation.isPending}
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy px-8 py-3 text-lg"
                >
                  {(createPostMutation.isPending || updatePostMutation.isPending) ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5 mr-2" />
                      {editingItem.status === "published" ? "Publish" : "Save Draft"}
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
