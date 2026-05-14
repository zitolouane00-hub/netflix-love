'use client';

import { useState } from 'react';

interface VideoItem {
  id: string;
  title: string;
  image: string;
  video: string;
  description: string;
}

interface Section {
  title: string;
  items: VideoItem[];
}

const SECTIONS: Section[] = [
  {
    title: "Continuer à regarder",
    items: [
      {
        id: "0-0",
        title: "Nos débuts",
        image: "/IMG_0320.JPG",
        video: "/HWUK6692.MP4",
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
    ],
  },
  {
    title: "Nos souvenirs préférés",
    items: [
      {
        id: "1-0",
        title: "Nous en Teufs",
        image: "/WRUU7136.JPG",
        video: "/IMG_7384.mp4",
        description: "Nos meilleures soirées ensemble 🎉",
      },
      {
        id: "1-1",
        title: "Anniversaire",
        image: "/FIWO5850.JPG",
        video: "/Anniv.mp4",
        description: "Une journée incroyable 🎂",
      },
      {
        id: "1-2",
        title: "Le ski",
        image: "/Capture d'écran 2026-05-14 130734.png",
        video: "/Enregistrement de l'écran 2026-05-14 130951.mp4",
        description: "Une journée au ski inoubliable 🎿",
      },
    ],
  },
];

export default function NetflixLoveSite() {
  const [showAllThemes, setShowAllThemes] = useState<boolean>(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const allVideos = SECTIONS.flatMap((s) => s.items);
  const playingItem: VideoItem | undefined = playingVideo
    ? allVideos.find((v) => v.id === playingVideo)
    : undefined;

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <div className="relative h-[80vh] overflow-hidden">
        <video
          src="/XROT6247.mp4"
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 p-8 md:p-16 max-w-2xl pt-40">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Notre Histoire
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Une collection de tous nos meilleurs souvenirs ❤️
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
              ▶ Lecture
            </button>
            <button className="bg-gray-700/80 px-8 py-3 rounded-xl hover:bg-gray-600 transition">
              ℹ Plus d'infos
            </button>
          </div>
        </div>
      </div>

      {/* PROFILS */}
      <div className="px-8 md:px-16 pt-10">
        <h2 className="text-2xl font-bold mb-6">Qui regarde ?</h2>

        <div className="flex gap-6 flex-wrap mb-14">
          {[
            { name: "Sarah ❤️", img: "/IMG_5865.JPG" },
            { name: "Louane 😎", img: "/IMG_7302.JPG" },
            { name: "Nous ✨", img: "/IMG_8725.JPG" },
          ].map((profile, i) => (
            <div key={i} className="text-center cursor-pointer hover:scale-110 transition">
              <img
                src={profile.img}
                className="w-28 h-28 rounded-2xl mb-3 object-cover"
              />
              <p className="text-gray-300">{profile.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTIONS */}
      {SECTIONS.map((section, i) => (
        <div key={i} className="px-8 md:px-16 mb-14">
          <h2 className="text-2xl font-bold mb-5">{section.title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item: VideoItem) => (
              <div
                key={item.id}
                className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition shadow-2xl"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    className="w-full h-56 object-cover"
                  />

                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <button
                    onClick={() => setPlayingVideo(item.id)}
                    className="w-full bg-red-600 hover:bg-red-500 py-3 rounded-xl font-semibold"
                  >
                    ▶ Regarder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* MODAL VIDEO */}
{playingItem && (
  <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">

    <button
      onClick={() => setPlayingVideo(null)}
      className="fixed top-6 right-6 z-[9999] bg-red-600 hover:bg-red-500 px-5 py-3 rounded-xl text-2xl font-bold transition"
    >
      ✕
    </button>

    <div className="flex-1 flex items-center justify-center p-8 w-full h-full">
      <video
        src={playingItem.video}
        controls
        autoPlay
        playsInline
        onLoadedData={(e) => {
          e.currentTarget.muted = false;
          e.currentTarget.volume = 1;
          e.currentTarget.play();
        }}
        className="max-w-full max-h-full rounded-xl"
      />
    </div>

  </div>
)}  
      {/* FIN */}
      <div className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Merci pour tous ces souvenirs ❤️
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Et ce n’est que le début de notre série.
        </p>
      </div>

    </div>
  );
}