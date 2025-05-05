"use client";
import { useRouter } from "next/navigation";

interface BackButtonProps {
    route: string;
    buttonName: string;
}
export default function BackButton({ route, buttonName }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push((route))}
      className="text-sm text-zinc-900 hover:text-zinc-200 hover:bg-zinc-800 underline bg-zinc-300 rounded-lg p-2"
    >
      {buttonName}
    </button>
  );
}
