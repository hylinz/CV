import { ModeToggle } from "@/components/ui/mode-toggle";
export default function TopNav() {
  return (
      <header className="flex w-full justify-end items-center px-5 py-5 fixed top-0 bg-transparent z-20">
        <div className="w-full flex-1 flex font-mono font-bold text-xl md:text-2xl uppercase tracking-widest">
          Hylins
        </div>
        <div className="w-full flex-1 flex justify-end">
          <ModeToggle />
        </div>
      </header>
  );
}
