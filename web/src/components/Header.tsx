import { ArrowUpRightFromSquare } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-center px-8 py-4 border-b">
      <nav className="w-full max-w-[1920px] flex items-center justify-between">
        <h1 className="font-bold text-xl cursor-pointer flex items-center gap-2">
          Handyrector
          <ArrowUpRightFromSquare size={22} />
        </h1>
        <div>
          <a href="#" className="underline font-bold">Open Source</a>
        </div>
      </nav>
    </header>
  )
}