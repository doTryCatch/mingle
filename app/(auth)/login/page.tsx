"use client";
import Image from "next/image";
import logo from "@/public/logo/give-love.png";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
async function checkAuth() {
  // Check for auth token from cookies or localStorage
  const res = await fetch("/api/check-auth");
  const data = await res.json();
  return data.authenticated;
}
async function LoginPage() {
  // ths page will be having all those ui and logic to ensure the functioning of reposive logging page
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  useEffect(() => {
    const verifyAuth = async () => {
      const authenticated = await checkAuth();

      if (authenticated) {
        route.push("/Main");
      }
    };

    verifyAuth();
  }, [route]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      console.log(res);

      route.push("/Main");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Image src={logo} alt="page logo" width={200} height={200}></Image>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="text-black">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="text-white">
          Login
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
