'use client';

import Link from 'next/link';

export default function NetflixLoveSite() {
  const sections = [
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
          controls: true,
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

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="relative h-[80vh] bg-cover bg-center overflow-hidden">
        <video
          src="/XROT6247.mp4"
          autoPlay
          loop
          controls
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
            <button className="bg-white text-black px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition">
              ▶ Lecture
            </button>
            <button className="bg-gray-700/80 px-8 py-3 rounded-xl text-lg hover:bg-gray-600 transition">
              ℹ Plus d'infos
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-16 pt-10">
        <h2 className="text-2xl font-bold mb-6">Qui regarde ?</h2>

        <div className="flex gap-6 flex-wrap mb-14">
          {[
            {
              name: "Sarah ❤️",
              img: "/IMG_5865.JPG",
            },
            {
              name: "Louane 😎",
              img: "/IMG_7302.JPG",
            },
            {
              name: "Nous ✨",
              img: "/IMG_8725.JPG",
            },
          ].map((profile, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-110 transition text-center"
            >
              <img
                src={profile.img}
                alt={profile.name}
                className="w-28 h-28 rounded-2xl mb-3 bg-gray-800"
              />
              <p className="text-gray-300">{profile.name}</p>
            </div>
          ))}
        </div>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="px-8 md:px-16 mb-14">
          <h2 className="text-2xl font-bold mb-5">{section.title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl"
              >
                <div className="relative group">
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

                  <Link
                    href={`/theme/${item.id}`}
                    className="block w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-xl font-semibold text-center"
                  >
                    ▶ Regarder
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Merci pour tous ces souvenirs ❤️
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Et ce n'est que le début de notre série.
        </p>
      </div>

      <div className="bg-zinc-950 border-t border-zinc-800 p-8 md:p-12 text-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-white">
          COMMENT MODIFIER LE SITE
        </h2>

        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            1. Remplace les liens d'images dans <b>image:</b> par tes photos.
          </p>

          <p>
            2. Remplace les liens dans <b>video:</b> par tes vidéos.
          </p>

          <p>
            3. Change les titres comme "Notre rencontre".
          </p>

          <p>
            4. Tu peux dupliquer des blocs pour ajouter d'autres souvenirs.
          </p>

          <p>
            5. Publie gratuitement sur Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}
