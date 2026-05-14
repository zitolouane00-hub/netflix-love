'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ITEMS_DATA = {
  '0-0': {
    id: '0-0',
    title: 'Nos débuts',
    image: '/IMG_0320.JPG',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Le début de notre histoire ❤️',
    fullDescription: 'Le premier jour où tout a commencé... Un moment inoubliable qui a changé nos vies ❤️',
  },
  '0-1': {
    id: '0-1',
    title: 'Nos vacances',
    image: '/IMG_2019.JPG',
    video: '/CUHI6563.mp4',
    description: 'Les meilleurs moments ensemble ✨',
    fullDescription: 'Nos plus beaux moments de vacances, remplis de rires et de souvenirs ✨',
  },
  '0-2': {
    id: '0-2',
    title: 'Nos délires',
    image: '/IMG_8410.JPG',
    video: '/CTJS4054.mp4',
    description: 'Les moments les plus drôles 😂',
    fullDescription: 'Les moments les plus fous et drôles qu\'on a vécus ensemble 😂',
  },
  '1-0': {
    id: '1-0',
    title: 'Nous en Teufs',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    video: 'https://www.w3schools.com/html/movie.mp4',
    description: 'Nos meilleures soirées ensemble 🎉',
    fullDescription: 'Les meilleures soirées en bonne compagnie 🎉',
  },
  '1-1': {
    id: '1-1',
    title: 'Anniversaire',
    image: '/FIWO5850.JPG',
    video: '/Anniv.mp4',
    description: 'Une journée incroyable 🎂',
    fullDescription: 'Notre journée spéciale, remplie d\'amour et de surprises 🎂',
  },
};

const ALL_ITEMS = Object.values(ITEMS_DATA);

export default function ThemePage({ params }: { params: { slug: string[] } }) {
  const pathname = usePathname();
  const id = params.slug?.[0] || '';
  const item = ITEMS_DATA[id as keyof typeof ITEMS_DATA];

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Vidéo non trouvée</h1>
        <Link href="/" className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl transition">
          ← Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* VIDEO PLEIN ÉCRAN */}
      <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
        <video
          src={item.video}
          controls
          autoPlay
          className="w-full h-full object-contain"
        />

        {/* BOUTON RETOUR */}
        <Link
          href="/"
          className="absolute top-6 left-6 z-50 bg-black/70 hover:bg-black transition px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
        >
          ← Retour
        </Link>
      </div>

      {/* INFORMATIONS */}
      <div className="bg-zinc-950 p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">{item.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{item.fullDescription}</p>
          <p className="text-gray-400">{item.description}</p>
        </div>
      </div>

      {/* SUGGESTIONS AUTRES VIDÉOS */}
      <div className="px-8 md:px-16 py-12">
        <h2 className="text-3xl font-bold mb-6">À regarder aussi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_ITEMS.filter((i) => i.id !== id)
            .slice(0, 3)
            .map((suggestedItem) => (
              <Link
                key={suggestedItem.id}
                href={`/theme/${suggestedItem.id}`}
                className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl"
              >
                <div className="relative group">
                  <img
                    src={suggestedItem.image}
                    alt={suggestedItem.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-5xl">▶</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{suggestedItem.title}</h3>
                  <p className="text-gray-400">{suggestedItem.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
