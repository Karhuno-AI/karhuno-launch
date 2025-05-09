"use client";

import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { MainSection } from "./main-section";
import Link from "next/link";
import Image from "next/image";

export const HomeSidebar = () => {
  const { state } = useSidebar();
  return (
    <Sidebar className="z-40 border-none" collapsible="icon">
      <Link href="/">
        <div className="p-4 flex relative items-center gap-1 bg-surface">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          {state === "expanded" ? (
            <p className="text-xl text-primary pl-2 font-semibold tracking-tight font-[family-name:var(--font-roboto-sans)]">
              Karhuno AI
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </Link>
      <SidebarContent className="bg-surface">
        <MainSection />
      </SidebarContent>
    </Sidebar>
  );
};
