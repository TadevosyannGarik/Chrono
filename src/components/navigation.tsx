import { cn } from "@/lib/utils";
import { SettingsIcon, UserIcon, ListTodo, SquareCheckBig, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go";


const routes = [
    {
        label: "Home",
        href: "/",
        icon: LayoutGrid,
        activeIcon: LayoutGrid,
    },
    {
        label: "My Tasks",
        href: "/tasks",
        icon: ListTodo,
        activeIcon: ListTodo,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
    },
    {
        label: "Members",
        href: "/members",
        icon: UserIcon,
        activeIcon: UserIcon,
    },
];

export const Navigation = () => {
    return (
        <ul className="flex flex-col">
            {routes.map((item) => {
                const isActive = false;
                const Icon = isActive ? item.activeIcon : item.icon;

                return (
                    <Link key={item.href} href={item.href}>
                        <div className={cn("flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500", isActive && "bg-white hover:opacity-100 text-primary")}>
                            <Icon className="size-5 text-neutral-500" />
                            {item.label}
                        </div>
                    </Link>
                )
            })}
        </ul>
    );
};