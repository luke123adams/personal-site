import { getPages } from '@/sanity/sanity-utils';
import '../globals.css'
import Link from 'next/link'


export const metadata = {
  title: `Luke's personal site`,
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // get all pages

  const pages = await getPages();
  return (
    <html lang="en">
      <body className="bg-gray-200 max-w-3x1 mx-auto py-10">
        <header className="flex items center justify-between">
          <Link href="/"
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
          Luke
          </Link>

          <div className="flex-items-center gap-3">
            {pages.map((page)=>(
            <Link key={page._id} href={`/${page.slug}`} className="hover: text-sky-100">
              {page.title}
            </Link>
            ))}
            <br></br>
          </div>
        </header>
        <main className="py-20">{children}</main>
        </body>
    </html>
  )
}