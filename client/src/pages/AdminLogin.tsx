import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Loader2 className="w-8 h-8 animate-spin text-white" />
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
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-illuminious-navy to-illuminious-blue p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md">
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
