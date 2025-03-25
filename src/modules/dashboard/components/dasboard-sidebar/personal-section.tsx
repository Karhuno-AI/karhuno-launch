// "use client";

// import {
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import {HistoryIcon, ListVideoIcon, ThumbsUp } from "lucide-react";
// import Link from "next/link";

// const items = [
//   {
//     title: "History",
//     url: "/playlists/history",
//     icon: HistoryIcon,
//     auth: true
//   },
//   {
//     title: "Subscriptions",
//     url: "/playlists/liked",
//     icon: ThumbsUp,
//     auth: true,
//   },
//   {
//     title: "All playlists",
//     url: "/feed/trending",
//     icon: ListVideoIcon,
//   },
// ];

// export const PersonalSection = () => {
//   return (
//     <SidebarGroup>
//         <SidebarGroupLabel>You</SidebarGroupLabel>
//       <SidebarGroupContent>
//         <SidebarMenu>
//           {items.map((item) => {
//             return (
//               <SidebarMenuItem key={item.title}>
//                 <SidebarMenuButton
//                   tooltip={item.title}
//                   asChild
//                   isActive={false}
//                 >
//                   <Link href={item.url} className="flex items-center gap-4">
//                     <item.icon />
//                     <span className="text-sm">{item.title}</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             );
//           })}
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//   );
// };
