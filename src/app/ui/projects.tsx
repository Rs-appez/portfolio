"use client";
import { use } from "react";
import { Project } from "@/app/lib/definitions";

export default function Projects({
    projects,
}: {
    projects: Promise<Project[]>;
}) {
    const resolvedProjects = use(projects);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {resolvedProjects.map((project) => (
                <div
                    key={project.id}
                    className="bg-foreground rounded-lg shadow-md p-6 flex flex-col"
                >
                    <h2 className="text-2xl font-bold mb-2 text-background">
                        {project.name}
                    </h2>
                    <p className="text-background mb-4 flex-grow whitespace-pre-line">
                        {project.description}
                    </p>
                    <div className="mt-auto">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
