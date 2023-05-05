import { getProject } from "@/sanity/sanity-utils";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {
    const slug = params.project
    const project = await getProject(slug);
    
    return (
        <div className="max-w-3x1 mx-auto py-20">
            <header className="flex items-center justify-between">
                <h1 className="text-transparent text-7x1 font-extrabold">{project.name}</h1>
                <a 
                href={project.url} 
                title="View Project" 
                target="blank" 
                rel="nooperner noreferrer"
                className="bg-gray-100 rounded-lg text-gray-500 font-bold py3 px4 whitespace-nowrap hover:bg-red-300 hover:text-white-100 transition drop-shadow-md"
                >View Project</a>
            </header>
        </div>
    )
}