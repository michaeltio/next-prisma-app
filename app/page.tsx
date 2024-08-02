import db from "@/services/db";

type MusicQueueItem = {
  id: string;
  title: string;
};

export default async function Home() {
  const musicQueue: MusicQueueItem[] = await db.musicQueue.findMany();
  return (
    <main className="bg-slate-900 text-white">
      <ul>
        {musicQueue.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </main>
  );
}
