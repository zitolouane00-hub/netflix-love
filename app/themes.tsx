'use client';

import Link from 'next/link';
import { useState } from 'react';

const THEMES = [
  {
    id: "0-0",
    title: "Nos débuts",
    image: "/IMG_0320.JPG",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Le début de notre histoire ❤️",
  },
  {
    id: "0-1",
    title: "Nos vacances",
    image: "/IMG_2019.JPG",
    video: "/CUHI6563.mp4",
    description: "Les meilleurs moments ensemble ✨",
  },
  {
    id: "0-2",
    title: "Nos délires",
    image: "/IMG_8410.JPG",
    video: "/CTJS4054.mp4",
    description: "Les moments les plus drôles 😂",
  },
  {
    id: "1-0",
    title: "Nous en Teufs",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/movie.mp4",
    description: "Nos meilleures soirées ensemble 🎉",
  },
  {
    id: "1-1",
    title: "Anniversaire",
    image: "/FIWO5850.JPG",
    video: "/Anniv.mp4",
    description: "Une journée incroyable 🎂",
  },
];

export default function ThemesPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const playingItem = playingVideo ? THEMES.find(t => t.id === playingVideo) : null;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER */}
      <div className="px-8 md:px-16 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tous nos souvenirs</h1>
        <Link href="/" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition">
          ← Retour
        </Link>
      </div>

      {/* GRILLE DE VIDÉOS */}
      <div className="px-8 md:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {THEMES.map((theme) => (
            <div
              key={theme.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl"
            >
              <div className="relative group">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <video
                    src={theme.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                <p className="text-gray-400 mb-4">{theme.description}</p>

                <button
                  onClick={() => setPlayingVideo(theme.id)}
                  className="w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-xl font-semibold"
                >
                  ▶ Regarder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LECTEUR VIDEO EN MODAL */}
      {playingVideo && playingItem && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-6 right-6 z-50 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg font-bold transition text-xl"
          >
            ✕
          </button>

          {/* VIDEO FULLSCREEN */}
          <div className="flex-1 flex items-center justify-center">
            <video
              src={playingItem.video}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>

          {/* INFO BELOW VIDEO */}
          <div className="bg-zinc-950 p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-extrabold mb-2">{playingItem.title}</h1>
              <p className="text-gray-400">{playingItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
