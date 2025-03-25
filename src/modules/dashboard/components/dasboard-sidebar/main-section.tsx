"use client";

import { Separator } from "@/components/ui/separator";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  BarChartIcon,
  BookOpen,
  FileTextIcon,
  HomeIcon,
  Settings,
  User2Icon,
  UsersIcon,
  WalletIcon,
} from "lucide-react";

import Link from "next/link";

export const MainSection = () => {
  const sidebarItems = [
    {
      group: "Main",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: HomeIcon },
        { title: "ICP Requests", url: "/dashboard/icp-requests", icon: BookOpen },
        { title: "Reports", url: "/dashboard/reports", icon: FileTextIcon },
        { title: "Clients", url: "/dashboard/clients", icon: UsersIcon },
        { title: "Analysts", url: "/dashboard/analysts", icon: User2Icon },
        { title: "Billing", url: "/dashboard/billing", icon: WalletIcon },
      ],
    },
    {
      group: "Analytics",
      items: [{ title: "Statistics", url: "/statistics", icon: BarChartIcon }],
    },
    {
      group: "System",
      items: [{ title: "Settings", url: "/settings", icon: Settings }],
    },
  ];

  return (
    <>
      {sidebarItems.map((section) => (
        <SidebarGroup key={section.group} title={section.group}>
          <SidebarGroupLabel className="text-sm font-bold py-2">{section.group}</SidebarGroupLabel>
          <Separator />
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <Link href={item.url} className="flex items-center gap-4">
                      <item.icon className="size-4" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
};
