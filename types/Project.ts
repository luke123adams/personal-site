import { Image, PortableTextBlock } from "sanity";

export  type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: Image;
    url: string;
    content: PortableTextBlock[];
}