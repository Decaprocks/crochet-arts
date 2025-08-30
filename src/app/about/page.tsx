'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Simple heading */}
      <header className="px-4 sm:px-6 lg:px-8 pt-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Crochet Arts</h1>
        </div>
      </header>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Crochet Journey</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Crafting warmth, joy, and stories&mdash;one stitch at a time.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-full h-80 rounded-2xl overflow-hidden relative mb-8">
                <Image
                  src="/images/artist.jpg"
                  alt="Artist portrait"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet the Artist</h3>
              <p className="text-gray-700 leading-7 mb-4">
                I learned to crochet from my mother then started leaning from youtube, have experience of few years. have experience in amigurumi
              </p>
              <div className="flex gap-3">
                <Link href="/#gallery" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all">View Gallery</Link>
                <Link href="/#contact" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">Get in Touch</Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-purple-700">Craftsmanship:</span> Meticulous attention to detail in every stitch.
                </li>
                <li>
                  <span className="font-semibold text-purple-700">Sustainability:</span> Quality materials for pieces made to last.
                </li>
                <li>
                  <span className="font-semibold text-purple-700">Originality:</span> Unique designs you won&apos;t find anywhere else.
                </li>
              </ul>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50">
                  <h4 className="font-semibold text-gray-900 mb-2">Techniques</h4>
                  <p className="text-gray-700 text-sm">From amigurumi to lacework, exploring patterns and textures.</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <h4 className="font-semibold text-gray-900 mb-2">Care</h4>
                  <p className="text-gray-700 text-sm">Care instructions accompany every piece to keep it beautiful.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact</h3>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
            <p className="text-gray-700 mb-4 text-center">
              For inquiries or collaborations, feel free to reach out.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <a href="mailto:minicro.co.in@gmail.com" className="text-purple-700 hover:underline">minicro.co.in@gmail.com</a>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">Instagram</p>
                <a href="https://www.instagram.com/minicro.co.in/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">@minicro.co.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Crochet Arts. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
