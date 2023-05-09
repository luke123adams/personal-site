import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import  Image from 'next/image'

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {
    const slug = params.project
    const project = await getProject(slug);
    
    return (
        <div>
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7x1 font-extrabold">{project.name}</h1>
                <a 
                href={project.url} 
                title="View Project" 
                target="blank" 
                rel="nooperner noreferrer"
                className="bg-gray-100 rounded-lg text-gray-500 font-bold py3 px4 whitespace-nowrap hover:bg-red-300 hover:text-white-100 transition drop-shadow-md"
                >View Project</a>
            </header>
            {/*content goes here */}
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content}/>
            </div>
            { /* image goes here */ }
            <Image
                 src = {project.image}
                 alt={project.name}
                 width={1920}
                 height={1080}
                 className="mt-10 border-2 border-gray-700 object-cover rounded-x1"/>
        </div>
    )
}