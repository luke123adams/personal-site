import { getProjects } from "@/sanity/sanity-utils"
import { Project } from "@/types/Project";
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {

  const projects: Project[] = await getProjects();
  
  return ( 
  <div className="max-w-5x1 mx-auto">
    <h1 className="text-7x1 font-extrabold">Hello, I&apos;m <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Luke!</span></h1>
    <p className="mt-3 text-x1 text-gray-600">Check out my projects!</p>
    <h2 className="mt-24 font-bold text-gray-700">My Projects</h2>
    <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project)=>(
      <Link
      href={`/projects/${project.slug}`}
      
      key={project._id}
      className="rounded-lg p-1 hover:scale-105">
        {project.image && (
          <Image
          src={project.image}
          alt={project.name}
          width={750}
          height={300}
          className="object-cover rounded-lg border border-gray-500"/>
        )}
      <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div>
      
      </Link>
    ))}
    </div>
  </div>);  
  
}
