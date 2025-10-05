import { API_URL, API_TOKEN } from "@/app/lib/config";
import { Project } from "@/app/lib/definitions";
import Projects from "@/app/ui/projects";
import { Suspense } from "react";

function getProjects(): Promise<Project[]> {
    return fetch(API_URL + "projects/api/projects", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${API_TOKEN}`,
        },
    })
        .then((res) => res.json())
        .then((data) => data.results);
}

export default async function ProjectsPage() {
    const projects: Promise<Project[]> = getProjects();
    return (
        <main className="flex flex-col items-center p-20 pb-0 ">
            <h1 className="text-7xl font-bold p-5">Projects</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Projects projects={projects} />
            </Suspense>
        </main>
    );
}
