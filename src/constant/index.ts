import { House,ArrowDownRight ,UsersRound,UserPen ,FolderOpenDot ,CalendarCheck, LucideIcon   } from "lucide-react";

interface sideBarProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: any;
  }

export const siderBareLinks:sideBarProps[] = [
    {
      href:"/",
      icon:House,
      label:"Home",
      isCollapsed:false
    },
    {
        href:"/rooms",
        icon:ArrowDownRight ,
        label:"Rooms",
        isCollapsed:false
      },
      {
        href:"/professors",
        icon:UserPen ,
        label:"Professors",
        isCollapsed:false
      },
      {
        href:"/students",
        icon:UsersRound ,
        label:"Students",
        isCollapsed:false
      },
      {
        href:"/projects",
        icon:FolderOpenDot ,
        label:"Projects",
        isCollapsed:false
      },
      {
        href:"/schedule",
        icon:CalendarCheck ,
        label:"Schedule",
        isCollapsed:false
      },
]