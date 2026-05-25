"use client";

import Button from "@/components/button/page";
import Input from "@/components/input/page";
import { authService } from "@/services/auth.service";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function LoginPage() {
  const router = useRouter();
  const { loginSuccess } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await authService.login({ email, password });
      loginSuccess(response.data.user);
      router.push("/dashboard");
    } catch {
      setError("Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        autoComplete="current-password"
      />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <Button
        type="submit"
        disabled={isSubmitting}
        label={isSubmitting ? "Logging in..." : "Login"}
        className="w-full"
      />
    </form>
  );
}
export default LoginPage;