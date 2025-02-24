"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  ChevronUp,
  FlameIcon,
  HomeIcon,
  PlaySquareIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
    children: [
      {
        title: "All Videos",
        url: "/feed/subscriptions/videos",
        icon: VideoIcon,
      },
      {
        title: "All Videos 2",
        url: "/feed/subscriptions/video",
        icon: VideoIcon,
      },
    ],
  },
  {
    title: "Subscriptions",
    url: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    url: "/feed/trending",
    icon: FlameIcon,
  },
];

export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [isOpen, setIsOpen] = useState(false);
            return (
              <SidebarMenuItem key={item.title}>
                {item.children && item.children?.length > 0 ? (
                  <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                        {isOpen ? (
                          <ChevronUp className="ml-auto size-4" />
                        ) : (
                          <ChevronDown className="ml-auto size-4" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.children.map((child) => (
                          <SidebarMenuSubItem key={child.title}>
                            <SidebarMenuSubButton asChild>
                              <Link
                                href={child.url}
                                className="flex items-center gap-4"
                              >
                                <child.icon className="size-4" />
                                <span>{child.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                    isActive={false}
                  >
                    <Link href={item.url} className="flex items-center gap-4">
                      <item.icon />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
