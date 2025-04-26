import { Settings2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getCurrent } from "@/features/auth/queries";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import TaskViewSwitcher from "@/features/tasks/components/task-view-switcher";
import { ProjectIdClient } from "./client";


const ProjectIdPage = async () => {
    const user = await getCurrent();

    if (!user) redirect("/sign-in");

    return <ProjectIdClient />
};

export default ProjectIdPage;