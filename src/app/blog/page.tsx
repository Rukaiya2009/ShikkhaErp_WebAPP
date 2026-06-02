import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blog'

export const metadata = { title: 'Blog – ShikkhaERP' }

export default function BlogPage() {
  return (
    <div className="pt-8 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">Blog</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary">Insights & updates</h1>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">Stories, tips, and news from the ShikkhaERP team.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2"><span>{post.date}</span><span>•</span><span>{post.author}</span></div>
                <h3 className="text-xl font-heading font-semibold text-secondary group-hover:text-primary transition line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">{post.excerpt}</p>
                <span className="mt-4 inline-block text-primary font-medium text-sm group-hover:underline">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}