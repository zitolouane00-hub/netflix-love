'use client';

import Link from 'next/link';

const SECTIONS = [
  {
    title: "Continuer à regarder",
    items: [
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
    ],
  },
  {
    title: "Nos souvenirs préférés",
    items: [
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
    ],
  },
];

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER */}
      <div className="px-8 md:px-16 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Nos Souvenirs</h1>
        <Link href="/" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition">
          ← Retour
        </Link>
      </div>

      {/* SECTIONS */}
      {SECTIONS.map((section, sectionIndex) => (
        <div key={sectionIndex} className="px-8 md:px-16 mb-16">
          <h2 className="text-2xl font-bold mb-6">{section.title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <video
                      src={item.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <button 
                    onClick={() => {
                      const video = document.createElement('video');
                      video.src = item.video;
                      video.controls = true;
                      video.autoplay = true;
                      video.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;';
                      document.body.appendChild(video);
                      
                      const closeBtn = document.createElement('button');
                      closeBtn.textContent = '✕';
                      closeBtn.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;bg-red-600;color:white;border:none;padding:10px 15px;border-radius:8px;cursor:pointer;font-size:20px;';
                      closeBtn.onclick = () => {
                        video.remove();
                        closeBtn.remove();
                      };
                      document.body.appendChild(closeBtn);
                    }}
                    className="w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-xl font-semibold"
                  >
                    ▶ Regarder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
