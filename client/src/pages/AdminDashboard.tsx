import { useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import {
  LayoutDashboard,
  FileText,
  Users,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Newspaper,
  BookOpen,
  Loader2,
} from "lucide-react";

// Temporary: Skip login verification for testing
const SKIP_AUTH = true;

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"all" | "news" | "blog" | "drafts">("all");
  const [deletePostId, setDeletePostId] = useState<number | null>(null);

  // Mock admin data for testing
  const admin = SKIP_AUTH ? {
    id: 1,
    username: "superadmin",
    name: "Super Admin",
    isSuperAdmin: true,
  } : null;

  // Fetch all posts (including drafts)
  const { data: allPosts, isLoading: isLoadingPosts, refetch: refetchPosts } = trpc.posts.list.useQuery({
    publishedOnly: false,
  });

  // Delete mutation
  const deleteMutation = trpc.posts.delete.useMutation({
    onSuccess: () => {
      refetchPosts();
      setDeletePostId(null);
    },
  });

  // Handle logout
  const handleLogout = () => {
    window.location.href = "/";
  };

  // Filter posts based on active tab
  const filteredPosts = allPosts?.filter(post => {
    if (activeTab === "all") return true;
    if (activeTab === "drafts") return post.status === "draft";
    if (activeTab === "news") return post.type === "news" && post.status === "published";
    if (activeTab === "blog") return post.type === "blog" && post.status === "published";
    return true;
  }) || [];

  // Stats
  const stats = {
    total: allPosts?.length || 0,
    published: allPosts?.filter(p => p.status === "published").length || 0,
    drafts: allPosts?.filter(p => p.status === "draft").length || 0,
    news: allPosts?.filter(p => p.type === "news").length || 0,
    blog: allPosts?.filter(p => p.type === "blog").length || 0,
  };

  // Format date
  const formatDate = (date: Date | string | null) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
          <p className="text-sm text-gray-500 mt-1">Illuminious CMS</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("all")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "all"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="font-medium">所有文章</span>
                <Badge variant="secondary" className="ml-auto">{stats.total}</Badge>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("drafts")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "drafts"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">草稿</span>
                <Badge variant="secondary" className="ml-auto">{stats.drafts}</Badge>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("news")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "news"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Newspaper className="w-5 h-5" />
                <span className="font-medium">新闻</span>
                <Badge variant="secondary" className="ml-auto">{stats.news}</Badge>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("blog")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "blog"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">博客</span>
                <Badge variant="secondary" className="ml-auto">{stats.blog}</Badge>
              </button>
            </li>
          </ul>
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{admin?.name || admin?.username}</p>
              <p className="text-xs text-gray-500">
                {admin?.isSuperAdmin ? "Super Admin" : "Admin"}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            退出登录
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {activeTab === "all" && "所有文章"}
              {activeTab === "drafts" && "草稿"}
              {activeTab === "news" && "新闻"}
              {activeTab === "blog" && "博客"}
            </h2>
            <p className="text-gray-500 mt-1">
              管理您的网站内容
            </p>
          </div>
          <Button
            size="lg"
            onClick={() => setLocation("/admin/posts/new")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            新建文章
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">总文章数</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">已发布</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">{stats.published}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">草稿</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600">{stats.drafts}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">新闻 / 博客</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">{stats.news} / {stats.blog}</p>
            </CardContent>
          </Card>
        </div>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>文章列表</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingPosts ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">暂无文章</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setLocation("/admin/posts/new")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  创建第一篇文章
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">标题</TableHead>
                    <TableHead>类型</TableHead>
                    <TableHead>状态</TableHead>
                    <TableHead>创建时间</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          {post.featuredImage && (
                            <img
                              src={post.featuredImage}
                              alt=""
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                          <div>
                            <p className="font-medium text-gray-900 line-clamp-1">{post.title}</p>
                            {post.excerpt && (
                              <p className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</p>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={post.type === "news" ? "default" : "secondary"}>
                          {post.type === "news" ? "新闻" : "博客"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={post.status === "published" ? "default" : "outline"} className={post.status === "published" ? "bg-green-100 text-green-700" : ""}>
                          {post.status === "published" ? "已发布" : "草稿"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-500">
                        {formatDate(post.createdAt)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          {post.status === "published" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => window.open(`/${post.type}/${post.slug}`, "_blank")}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setLocation(`/admin/posts/${post.id}`)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => setDeletePostId(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deletePostId !== null} onOpenChange={() => setDeletePostId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除</AlertDialogTitle>
            <AlertDialogDescription>
              确定要删除这篇文章吗？此操作不可撤销。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                if (deletePostId) {
                  deleteMutation.mutate({ id: deletePostId });
                }
              }}
            >
              {deleteMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "删除"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
