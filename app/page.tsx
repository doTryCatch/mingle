"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Logo from "../public/logo/logo.png";
import Image from "next/image";
var person;
export default function Home() {
  const Login = true;
  const router = useRouter();
  useEffect(() => {
    if (!Login) router.push("/login");
  }, [router, Login]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={Logo} alt="logo image" width={200} height={200} />
      <h1>This is the main page after login</h1>
    </main>
  );
}
