import { useState, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  DialogFooter,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Save,
  Send,
  Image as ImageIcon,
  Video,
  Upload,
  Link as LinkIcon,
  Loader2,
  Trash2,
} from "lucide-react";

export default function AdminPostEditor() {
  const [, setLocation] = useLocation();
  const [matchNew] = useRoute("/admin/posts/new");
  const [matchEdit, params] = useRoute("/admin/posts/:id");
  
  const isNew = matchNew;
  const postId = params?.id ? parseInt(params.id) : null;

  // Form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [type, setType] = useState<"news" | "blog">("news");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [featuredImage, setFeaturedImage] = useState("");
  
  // UI state
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const featuredImageInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // Fetch existing post if editing
  const { data: existingPost, isLoading: isLoadingPost } = trpc.posts.getById.useQuery(
    { id: postId! },
    { enabled: !!postId }
  );

  // Mutations
  const createMutation = trpc.posts.create.useMutation();
  const updateMutation = trpc.posts.update.useMutation();
  const deleteMutation = trpc.posts.delete.useMutation();
  const uploadImageMutation = trpc.posts.uploadImage.useMutation();

  // Load existing post data
  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setContent(existingPost.content);
      setExcerpt(existingPost.excerpt || "");
      setType(existingPost.type as "news" | "blog");
      setStatus(existingPost.status as "draft" | "published");
      setFeaturedImage(existingPost.featuredImage || "");
    }
  }, [existingPost]);

  // Handle save as draft
  const handleSaveDraft = async () => {
    if (!title.trim()) {
      alert("请输入标题");
      return;
    }
    
    setIsSaving(true);
    try {
      if (isNew) {
        await createMutation.mutateAsync({
          title,
          content,
          excerpt,
          type,
          status: "draft",
          featuredImage,
        });
      } else if (postId) {
        await updateMutation.mutateAsync({
          id: postId,
          title,
          content,
          excerpt,
          status: "draft",
          featuredImage,
        });
      }
      alert("草稿已保存");
      setLocation("/admin/dashboard");
    } catch (error) {
      console.error("Save error:", error);
      alert("保存失败，请重试");
    } finally {
      setIsSaving(false);
    }
  };

  // Handle publish
  const handlePublish = async () => {
    if (!title.trim()) {
      alert("请输入标题");
      return;
    }
    if (!content.trim()) {
      alert("请输入内容");
      return;
    }
    
    setIsPublishing(true);
    try {
      if (isNew) {
        await createMutation.mutateAsync({
          title,
          content,
          excerpt,
          type,
          status: "published",
          featuredImage,
        });
      } else if (postId) {
        await updateMutation.mutateAsync({
          id: postId,
          title,
          content,
          excerpt,
          status: "published",
          featuredImage,
        });
      }
      alert("文章已发布");
      setLocation("/admin/dashboard");
    } catch (error) {
      console.error("Publish error:", error);
      alert("发布失败，请重试");
    } finally {
      setIsPublishing(false);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!postId) return;
    if (!confirm("确定要删除这篇文章吗？此操作不可撤销。")) return;
    
    try {
      await deleteMutation.mutateAsync({ id: postId });
      alert("文章已删除");
      setLocation("/admin/dashboard");
    } catch (error) {
      console.error("Delete error:", error);
      alert("删除失败，请重试");
    }
  };

  // Handle image upload
  const handleImageUpload = async (file: File, isFeatured: boolean = false) => {
    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        // Remove data URL prefix to get pure base64
        const base64Data = base64.split(',')[1] || base64;
        const result = await uploadImageMutation.mutateAsync({
          filename: file.name,
          base64Data,
          contentType: file.type,
        });
        
        if (isFeatured) {
          setFeaturedImage(result.url);
        } else {
          setImageUrl(result.url);
          setImagePreview(result.url);
        }
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Upload error:", error);
      alert("上传失败，请重试");
      setIsUploading(false);
    }
  };

  // Insert image into content
  const insertImage = () => {
    if (!imageUrl) return;
    const imageMarkdown = `\n![Image](${imageUrl})\n`;
    const textarea = contentRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newContent = content.substring(0, start) + imageMarkdown + content.substring(end);
      setContent(newContent);
    } else {
      setContent(content + imageMarkdown);
    }
    setShowImageDialog(false);
    setImageUrl("");
    setImagePreview("");
  };

  // Insert video into content
  const insertVideo = () => {
    if (!videoUrl) return;
    // Extract YouTube video ID
    const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    const videoId = youtubeMatch ? youtubeMatch[1] : videoUrl;
    const videoEmbed = `\n<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>\n`;
    const textarea = contentRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newContent = content.substring(0, start) + videoEmbed + content.substring(end);
      setContent(newContent);
    } else {
      setContent(content + videoEmbed);
    }
    setShowVideoDialog(false);
    setVideoUrl("");
  };

  // Get YouTube video ID for preview
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : null;
  };

  if (isLoadingPost && !isNew) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/admin/dashboard")}
              className="text-gray-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">
              {isNew ? "新建文章" : "编辑文章"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {!isNew && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleDelete}
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                删除
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleSaveDraft}
              disabled={isSaving}
            >
              {isSaving ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              保存草稿
            </Button>
            <Button
              size="sm"
              onClick={handlePublish}
              disabled={isPublishing}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isPublishing ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              发布
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <Label htmlFor="title" className="text-base font-medium text-gray-900">
                标题
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="输入文章标题..."
                className="mt-2 text-lg h-12"
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <Label htmlFor="content" className="text-base font-medium text-gray-900">
                  内容
                </Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowImageDialog(true)}
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    插入图片
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowVideoDialog(true)}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    插入视频
                  </Button>
                </div>
              </div>
              <Textarea
                ref={contentRef}
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="输入文章内容（支持Markdown格式）..."
                className="min-h-[500px] font-mono text-sm"
              />
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <Label htmlFor="excerpt" className="text-base font-medium text-gray-900">
                摘要
              </Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="输入文章摘要（可选，用于列表页显示）..."
                className="mt-2 min-h-[100px]"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Post Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-medium text-gray-900 mb-4">文章设置</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="type" className="text-sm text-gray-600">
                    类型
                  </Label>
                  <Select value={type} onValueChange={(v) => setType(v as "news" | "blog")}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="news">News 新闻</SelectItem>
                      <SelectItem value="blog">Blog 博客</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status" className="text-sm text-gray-600">
                    状态
                  </Label>
                  <Select value={status} onValueChange={(v) => setStatus(v as "draft" | "published")}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">草稿</SelectItem>
                      <SelectItem value="published">已发布</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-medium text-gray-900 mb-4">特色图片</h3>
              
              {featuredImage ? (
                <div className="space-y-3">
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFeaturedImage("")}
                    className="w-full"
                  >
                    移除图片
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
                    onClick={() => featuredImageInputRef.current?.click()}
                  >
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">点击上传图片</p>
                  </div>
                  <input
                    ref={featuredImageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file, true);
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="或输入图片URL"
                      value={featuredImage}
                      onChange={(e) => setFeaturedImage(e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Image Dialog */}
      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>插入图片</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>上传图片</Label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {isUploading ? (
                  <Loader2 className="w-6 h-6 mx-auto animate-spin text-blue-600" />
                ) : (
                  <>
                    <Upload className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">点击上传图片</p>
                  </>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload(file, false);
                }}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">或</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="space-y-2">
              <Label>图片URL</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                    setImagePreview(e.target.value);
                  }}
                />
                <Button variant="outline" size="icon">
                  <LinkIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {imagePreview && (
              <div className="mt-4">
                <Label className="text-sm text-gray-600">预览</Label>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-full h-40 object-cover rounded-lg border"
                  onError={() => setImagePreview("")}
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowImageDialog(false)}>
              取消
            </Button>
            <Button onClick={insertImage} disabled={!imageUrl}>
              插入
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Video Dialog */}
      <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>插入视频</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>YouTube视频URL</Label>
              <Input
                placeholder="https://www.youtube.com/watch?v=..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>

            {videoUrl && getYouTubeId(videoUrl) && (
              <div className="mt-4">
                <Label className="text-sm text-gray-600">预览</Label>
                <div className="mt-2 aspect-video rounded-lg overflow-hidden border">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowVideoDialog(false)}>
              取消
            </Button>
            <Button onClick={insertVideo} disabled={!videoUrl}>
              插入
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
