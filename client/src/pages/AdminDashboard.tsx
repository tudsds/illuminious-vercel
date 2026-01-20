import { useState, useEffect } from "react";
import { useLocation } from "wouter";
// Using custom admin authentication via trpc.admin
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
  DialogTrigger,
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
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

type ContentType = "news" | "blog";

interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

// Sample data - in production this would come from the database
const sampleContent: ContentItem[] = [
  {
    id: "1",
    type: "news",
    title: "Illuminious Expands Manufacturing Capacity in Southeast Asia",
    slug: "illuminious-expands-manufacturing-capacity",
    excerpt: "We are excited to announce a significant expansion of our manufacturing capabilities.",
    content: "<p>Full content here...</p>",
    category: "Company News",
    image: "/images/about-factory-equipment.png",
    author: "Illuminious Team",
    status: "published",
    createdAt: "2026-01-15",
    updatedAt: "2026-01-15",
  },
  {
    id: "2",
    type: "blog",
    title: "How to Choose the Right Manufacturing Partner",
    slug: "choosing-right-manufacturing-partner",
    excerpt: "Selecting the right manufacturing partner is critical for hardware startups.",
    content: "<p>Full content here...</p>",
    category: "Startup Guide",
    image: "/images/about-factory-equipment.png",
    author: "Illuminious Team",
    status: "published",
    createdAt: "2026-01-12",
    updatedAt: "2026-01-12",
  },
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"dashboard" | "news" | "blog">("dashboard");
  const [content, setContent] = useState<ContentItem[]>(sampleContent);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Check admin authentication using custom admin system
  const { data: admin, isLoading: adminLoading } = trpc.admin.me.useQuery();
  const adminLogoutMutation = trpc.admin.logout.useMutation();

  useEffect(() => {
    if (!adminLoading && !admin) {
      window.location.href = "/admin/login";
    }
  }, [adminLoading, admin]);

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-illuminious-light">
        <Loader2 className="w-12 h-12 animate-spin text-illuminious-blue" />
      </div>
    );
  }

  if (!admin) {
    return null;
  }

  const handleLogout = async () => {
    await adminLogoutMutation.mutateAsync();
    window.location.href = "/";
  };

  const handleCreate = (type: ContentType) => {
    setEditingItem({
      id: "",
      type,
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      image: "",
      author: admin?.name || admin?.username || "Illuminious Team",
      status: "draft",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    });
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setContent(content.filter((item) => item.id !== id));
      toast.success("Item deleted successfully");
    }
  };

  const handleSave = () => {
    if (!editingItem) return;

    if (editingItem.id) {
      // Update existing
      setContent(
        content.map((item) =>
          item.id === editingItem.id
            ? { ...editingItem, updatedAt: new Date().toISOString().split("T")[0] }
            : item
        )
      );
      toast.success("Item updated successfully");
    } else {
      // Create new
      const newItem = {
        ...editingItem,
        id: Date.now().toString(),
        slug: editingItem.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      };
      setContent([newItem, ...content]);
      toast.success("Item created successfully");
    }

    setIsDialogOpen(false);
    setEditingItem(null);
    setIsEditing(false);
  };

  const filteredContent = content.filter((item) => {
    if (activeTab === "news") return item.type === "news";
    if (activeTab === "blog") return item.type === "blog";
    return true;
  });

  const stats = {
    totalNews: content.filter((c) => c.type === "news").length,
    totalBlog: content.filter((c) => c.type === "blog").length,
    published: content.filter((c) => c.status === "published").length,
    drafts: content.filter((c) => c.status === "draft").length,
  };

  return (
    <div className="min-h-screen bg-illuminious-light/30">
      {/* Header */}
      <header className="bg-illuminious-navy text-white py-4 px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              src="/images/illuminious-logo-blue.png"
              alt="Illuminious"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-illuminious-light/70">
                Content Management System
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-illuminious-light/70">
              Welcome, {admin?.name || admin?.username}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === "dashboard" ? "default" : "outline"}
            onClick={() => setActiveTab("dashboard")}
            className={activeTab === "dashboard" ? "bg-illuminious-blue" : ""}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "news" ? "default" : "outline"}
            onClick={() => setActiveTab("news")}
            className={activeTab === "news" ? "bg-illuminious-blue" : ""}
          >
            <Newspaper className="w-4 h-4 mr-2" />
            News
          </Button>
          <Button
            variant={activeTab === "blog" ? "default" : "outline"}
            onClick={() => setActiveTab("blog")}
            className={activeTab === "blog" ? "bg-illuminious-blue" : ""}
          >
            <FileText className="w-4 h-4 mr-2" />
            Blog
          </Button>
        </div>

        {/* Dashboard View */}
        {activeTab === "dashboard" && (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-illuminious-light">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm text-muted-foreground">Total News</span>
              </div>
              <p className="text-3xl font-bold text-illuminious-navy">{stats.totalNews}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-illuminious-light">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm text-muted-foreground">Total Blog Posts</span>
              </div>
              <p className="text-3xl font-bold text-illuminious-navy">{stats.totalBlog}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-illuminious-light">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">Published</span>
              </div>
              <p className="text-3xl font-bold text-illuminious-navy">{stats.published}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-illuminious-light">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <Edit className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="text-sm text-muted-foreground">Drafts</span>
              </div>
              <p className="text-3xl font-bold text-illuminious-navy">{stats.drafts}</p>
            </div>
          </div>
        )}

        {/* Content List */}
        {(activeTab === "news" || activeTab === "blog") && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-illuminious-navy">
                {activeTab === "news" ? "News Articles" : "Blog Posts"}
              </h2>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => handleCreate(activeTab)}
                    className="bg-illuminious-blue text-white hover:bg-illuminious-navy"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create New
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {editingItem?.id ? "Edit" : "Create"}{" "}
                      {editingItem?.type === "news" ? "News Article" : "Blog Post"}
                    </DialogTitle>
                  </DialogHeader>
                  {editingItem && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title *</label>
                        <Input
                          value={editingItem.title}
                          onChange={(e) =>
                            setEditingItem({ ...editingItem, title: e.target.value })
                          }
                          placeholder="Enter title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <Input
                          value={editingItem.category}
                          onChange={(e) =>
                            setEditingItem({ ...editingItem, category: e.target.value })
                          }
                          placeholder="e.g., Company News, Technical"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Excerpt *</label>
                        <Textarea
                          value={editingItem.excerpt}
                          onChange={(e) =>
                            setEditingItem({ ...editingItem, excerpt: e.target.value })
                          }
                          placeholder="Brief summary of the article"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Content *</label>
                        <Textarea
                          value={editingItem.content}
                          onChange={(e) =>
                            setEditingItem({ ...editingItem, content: e.target.value })
                          }
                          placeholder="Full article content (HTML supported)"
                          rows={10}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Featured Image URL</label>
                        <div className="flex gap-2">
                          <Input
                            value={editingItem.image}
                            onChange={(e) =>
                              setEditingItem({ ...editingItem, image: e.target.value })
                            }
                            placeholder="/images/your-image.png"
                          />
                          <Button variant="outline" size="icon">
                            <ImageIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Status</label>
                        <Select
                          value={editingItem.status}
                          onValueChange={(value: "draft" | "published") =>
                            setEditingItem({ ...editingItem, status: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-end gap-2 pt-4">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsDialogOpen(false);
                            setEditingItem(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSave}
                          className="bg-illuminious-blue text-white hover:bg-illuminious-navy"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-illuminious-light overflow-hidden">
              <table className="w-full">
                <thead className="bg-illuminious-light/50">
                  <tr>
                    <th className="text-left p-4 font-medium text-illuminious-navy">Title</th>
                    <th className="text-left p-4 font-medium text-illuminious-navy">Category</th>
                    <th className="text-left p-4 font-medium text-illuminious-navy">Status</th>
                    <th className="text-left p-4 font-medium text-illuminious-navy">Date</th>
                    <th className="text-right p-4 font-medium text-illuminious-navy">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContent.map((item) => (
                    <tr key={item.id} className="border-t border-illuminious-light">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {item.image && (
                            <img
                              src={item.image}
                              alt=""
                              className="w-12 h-12 rounded object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium text-illuminious-navy line-clamp-1">
                              {item.title}
                            </p>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {item.excerpt}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{item.category}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{item.updatedAt}</td>
                      <td className="p-4">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(item)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredContent.length === 0 && (
                <div className="p-12 text-center text-muted-foreground">
                  No content found. Create your first{" "}
                  {activeTab === "news" ? "news article" : "blog post"}.
                </div>
              )}
            </div>
          </>
        )}

        {/* Recent Activity on Dashboard */}
        {activeTab === "dashboard" && (
          <div className="bg-white rounded-xl shadow-sm border border-illuminious-light p-6">
            <h3 className="text-lg font-semibold text-illuminious-navy mb-4">
              Recent Content
            </h3>
            <div className="space-y-4">
              {content.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-illuminious-light/30"
                >
                  <div className="flex items-center gap-3">
                    {item.type === "news" ? (
                      <Newspaper className="w-5 h-5 text-illuminious-blue" />
                    ) : (
                      <FileText className="w-5 h-5 text-purple-600" />
                    )}
                    <div>
                      <p className="font-medium text-illuminious-navy line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.type === "news" ? "News" : "Blog"} • {item.updatedAt}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
