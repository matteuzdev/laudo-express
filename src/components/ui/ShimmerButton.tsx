import React from "react";

export function ShimmerButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-black text-white transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] ${className}`}
    >
      {children}
    </button>
  );
}
