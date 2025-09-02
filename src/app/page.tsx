import Link from 'next/link'
import BannerSlider, { type BannerSlide } from '@/components/BannerSlider'
import Image from 'next/image'

export default function Home() {
  const galleryWorks = [
    {
      id: 'cute-ghost',
      title: 'Cute Ghost',
      description: 'Adorable crochet ghost perfect for cozy decor.',
    },
    {
      id: 'dolphins',
      title: 'Dolphins',
      description: 'Playful pair of crocheted dolphins.',
    },
    {
      id: 'octopus',
      title: 'Octopus',
      description: 'Curly-tentacle octopus amigurumi.',
    },
    {
      id: 'butterflies-set',
      title: 'Butterflies',
      description: 'Set of colorful crochet butterflies.',
    },
    {
      id: 'small-teddy',
      title: 'Small Teddy',
      description: 'Pocket-sized teddy with embroidered details.',
    },
    {
      id: 'turtle',
      title: 'Turtle',
      description: 'Charming amigurumi turtle with textured shell.',
    },
  ]

  const slides: BannerSlide[] = [
    {
      id: 1,
      title: 'Crochet Arts',
      subtitle: 'A gallery of handcrafted crochet creations by the artist.',
      ctaLabel: 'Explore Gallery',
      ctaHref: '#gallery',
      bgFrom: 'from-pink-100',
      bgTo: 'to-purple-100',
    },
    {
      id: 2,
      title: 'Meet the Artist',
      subtitle: 'Tradition and creativity woven into every stitch.',
      ctaLabel: 'About',
      ctaHref: '/about',
      bgFrom: 'from-purple-100',
      bgTo: 'to-blue-100',
    },
    {
      id: 3,
      title: 'Get in Touch',
      subtitle: 'Questions or collaboration ideas? Say hello.',
      ctaLabel: 'Contact',
      ctaHref: '#contact',
      bgFrom: 'from-rose-100',
      bgTo: 'to-pink-100',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Heading only (no header/nav) */}
      <header className="px-4 sm:px-6 lg:px-8 pt-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
            Crochet Arts
          </h1>
        </div>
      </header>

      {/* Hero Section with Banner Slider */}
      <section className="relative py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BannerSlider slides={slides} autoPlayMs={4500} />
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Gallery
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative h-64 rounded-t-xl overflow-hidden">
                  <Image
                    src={`/crochet-arts/images/${work.id}.jpg`}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{work.title}</h3>
                  <p className="text-gray-600 text-sm">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About the Artist
              </h2>
              <p className="text-gray-600 mb-6">
                I learned to crochet from my mother then started leaning from youtube, have experience of few years. have experience in amigurumi
              </p>
              <div className="flex gap-3">
                <Link href="/about" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
                  Learn More
                </Link>
                <Link href="#contact" className="inline-block border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/crochet-arts/images/artist.jpg"
                  alt="Artist portrait"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Contact
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
            <p className="text-gray-700 mb-4 text-center">
              For inquiries, collaborations, or feedback, feel free to reach out.
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
