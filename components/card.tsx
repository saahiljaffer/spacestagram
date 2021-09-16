import { useState } from "react";

export interface ImageDetails {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export default function Card({ item }: { item: ImageDetails }) {
  const [lines, setLines] = useState(true);
  const [like, setLike] = useState(false);
  return (
    <div>
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-80 lg:aspect-none">
        <img
          src={item.hdurl}
          alt={item.title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 justify-between">
        <div className="flex justify-between">
          <h3 className="text-sm text-gray-700">{item.title}</h3>
          <button
            onClick={() => {
              setLike(!like);
            }}
            className="flex text-sm font-medium text-gray-900"
          >
            {like ? "Unlike" : "Like"}
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">{item.copyright}</p>
        <p className="mt-1 text-sm text-gray-500">{item.date}</p>
        <button
          onClick={() => {
            setLines(!lines);
          }}
        >
          <p
            className={`text-left mt-1 text-sm text-gray-500 ${
              lines ? "line-clamp-3" : ""
            }`}
          >
            {item.explanation}
          </p>
        </button>
      </div>
    </div>
  );
}
