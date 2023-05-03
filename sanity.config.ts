import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  
  title: 'personal website',

  projectId: 'c8s4v1l3',
  dataset: 'production',
  apiVersion: "2023-03-05",
  basePath: "/admin",

  plugins: [deskTool()],

  
})