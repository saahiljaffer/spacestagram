import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Card from "../components/Card";
import { ImageDetails } from "../components/Interfaces";

export default function ImageList({ data }: { data: ImageDetails[] }) {
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    setAudio(new Audio("/effect.mp3"));
  }, []);

  const playAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="bg-gray-800 mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <Masonry
        breakpointCols={{ default: 4, 1400: 3, 1000: 2, 700: 1 }}
        className="my-masonry-grid bg-gray-800"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.map((item) => (
            <Card
              key={item.data[0].nasa_id}
              item={item}
              playAudio={playAudio}
            />
          ))}
      </Masonry>
    </div>
  );
}
