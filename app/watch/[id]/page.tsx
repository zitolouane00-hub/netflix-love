import Link from "next/link";

const ITEMS_DATA = {
  "0-0": { id: "0-0", title: "Nos débuts", image: "/IMG_0320.JPG", video: "https://www.w3schools.com/html/mov_bbb.mp4", description: "Le début de notre histoire ❤️", fullDescription: "Le premier jour..." },
  "0-1": { id: "0-1", title: "Nos vacances", image: "/IMG_2019.JPG", video: "/CUHI6563.mp4", description: "Les meilleurs moments ensemble ✨", fullDescription: "Nos plus beaux moments..." },
  "0-2": { id: "0-2", title: "Nos délires", image: "/IMG_8410.JPG", video: "/CTJS4054.mp4", description: "Les moments les plus drôles 😂", fullDescription: "Les moments les plus fous..." },
  "1-0": { id: "1-0", title: "Nous en Teufs", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200", video: "https://www.w3schools.com/html/movie.mp4", description: "Nos meilleures soirées 🎉", fullDescription: "Les meilleures soirées..." },
  "1-1": { id: "1-1", title: "Anniversaire", image: "/FIWO5850.JPG", video: "/Anniv.mp4", description: "Une journée incroyable 🎂", fullDescription: "Notre journée spéciale..." }
};

export default function Page({ params }: { params: { id: string } }) {
  const item = ITEMS_DATA[params.id as keyof typeof ITEMS_DATA];
  if (!item) return <div className="min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">Vidéo non trouvée</h1><Link href="/" className="absolute top-6 left-6 text-red-600">← Retour</Link></div>;
  return <div className="min-h-screen bg-black text-white"><div className="relative w-full h-screen"><video src={item.video} controls autoPlay className="w-full h-full object-contain"/><Link href="/" className="absolute top-6 left-6 bg-black/70 px-4 py-2 rounded">← Retour</Link></div><div className="bg-zinc-950 p-12"><h1 className="text-5xl font-bold mb-4">{item.title}</h1></div></div>;
}
