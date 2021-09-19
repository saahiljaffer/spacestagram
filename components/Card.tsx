import { useState } from "react";
import { ImageDetails } from "./Interfaces";
import { format } from "date-fns";
import Image from "next/image";
import LikeButton from "./LikeButton";

export default function Card({
  item,
  playAudio,
}: {
  item: ImageDetails;
  playAudio: () => void;
}) {
  const [like, setLike] = useState(false);
  const date = new Date(item.data[0].date_created);

  return (
    <div className="group bg-gray-200 mb-8 mx-4">
      <Image
        src={item.links[0].href}
        alt={item.data[0].title}
        width="400"
        height="400"
        layout="responsive"
        className="object-center object-cover w-full"
      />
      <div className="pb-4 m-4 justify-between">
        <div className="flex justify-between">
          <h2 className="text-sm text-gray-700">{item.data[0].title}</h2>
          <LikeButton like={like} setLike={setLike} playAudio={playAudio} />
        </div>
        <p className="mt-1 text-sm text-gray-500">{item.data[0].location}</p>
        <p className="mt-1 text-sm text-gray-500">
          {format(date, "EEEE, LLLL do yyyy")}
        </p>
        <p
          className={
            `text-left mt-1 text-sm text-gray-500 group-hover:line-clamp-none line-clamp-` +
            (Math.floor(Math.random() * 6) + 1).toString()
          }
        >
          {item.data[0].description}
        </p>
      </div>
    </div>
  );
}
