"use client"; // Mengindikasikan bahwa ini adalah komponen klien

import { useEffect, useState } from "react";
import axios from "axios";

type MusicQueueItem = {
  id: string;
  title: string;
};

export default function Home() {
  const [musicQueue, setMusicQueue] = useState<MusicQueueItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MusicQueueItem[]>("/api/createMusic");
        setMusicQueue(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddButton = async () => {
    try {
      const response = await axios.post<MusicQueueItem[]>("/api/createMusic");
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <main className="bg-slate-900 text-white">
      <ul>
        {musicQueue.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
      <button onClick={handleAddButton}>hello</button>
    </main>
  );
}
