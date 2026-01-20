import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const loginMutation = trpc.admin.login.useMutation();
  const { data: admin, isLoading } = trpc.admin.me.useQuery();

  // If already logged in, redirect to dashboard
  if (!isLoading && admin) {
    window.location.href = '/admin/dashboard';
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-illuminious-navy to-illuminious-blue">
        <Loader2 className="w-12 h-12 animate-spin text-white" />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync({ username, password });
      setIsLoggingIn(true);
      toast.success("Login successful! Redirecting...");
      // Use hard redirect to ensure cookie is properly set
      setTimeout(() => {
        window.location.href = '/admin/dashboard';
      }, 500);
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-illuminious-navy to-illuminious-blue">
        <Loader2 className="w-12 h-12 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-illuminious-navy to-illuminious-blue p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <Card className="shadow-2xl">
          <CardHeader className="text-center space-y-4 pb-8 pt-10">
            <img
              src="/images/illuminious-logo-blue.png"
              alt="Illuminious"
              className="w-24 h-24 mx-auto"
            />
            <div>
              <CardTitle className="text-3xl font-bold text-illuminious-navy">Admin Portal</CardTitle>
              <CardDescription className="text-lg mt-2">Sign in to manage your content</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-10 pb-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="text-lg py-6 px-4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-lg py-6 px-4"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-illuminious-blue hover:bg-illuminious-navy text-lg py-6 mt-4"
                disabled={loginMutation.isPending || isLoggingIn}
              >
                {(loginMutation.isPending || isLoggingIn) ? (
                  <Loader2 className="w-6 h-6 animate-spin mr-3" />
                ) : (
                  <LogIn className="w-6 h-6 mr-3" />
                )}
                {isLoggingIn ? "Redirecting to Dashboard..." : "Sign In"}
              </Button>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-center text-gray-500">
                Default credentials for testing:
              </p>
              <p className="text-sm text-center text-gray-600 font-mono mt-1">
                illuminious / Djpcs17529#
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
