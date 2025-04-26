"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <h2>Yikes, misplaced topic!</h2>
      <p>This page does not exist.</p>
      <Link href="/">Home</Link>
      <span>&nbsp;&nbsp;</span>
      <Link href={"/"} onNavigate={handleBack}>
        Back
      </Link>
    </div>
  );
}
