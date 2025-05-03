"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <span>&nbsp;&nbsp;</span>
      <Link href={"/"} onNavigate={() => router.back()}>
        Back
      </Link>
    </nav>
  );
}
