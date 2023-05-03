import { createClient, groq } from 'next-sanity'

export async function getProjects() {
       const client = createClient({

         projectId: 'c8s4v1l3',
         dataset: 'production',
         apiVersion: "2023-03-05"
})

return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content  
    }`
)

}