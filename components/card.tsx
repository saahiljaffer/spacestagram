import { useState } from "react";
import { ImageDetails } from "./Interfaces";
import { format } from "date-fns";

export default function Card({ item }: { item: ImageDetails }) {
  const [lines, setLines] = useState(true);
  const [like, setLike] = useState(false);
  const date = new Date(item.data[0].date_created);
  return (
    <div className="group bg-gray-200 hover:bg-gray-600 mb-8 mx-4">
      <div className="bg-gray-200 rounded-md w-full">
        <img
          src={item.links[0].href}
          alt={item.data[0].title}
          className="object-center object-cover w-full group-hover:opacity-50"
        />
      </div>
      <div className="pb-4 m-4 justify-between">
        <div className="flex justify-between">
          <h3 className="text-sm text-gray-700 group-hover:text-white">
            {item.data[0].title}
          </h3>
          <button
            onClick={() => {
              setLike(!like);
            }}
            className="flex text-sm font-medium text-gray-900 group-hover:text-white"
          >
            {like ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500 group-hover:text-white">
          {item.data[0].location}
        </p>
        <p className="mt-1 text-sm text-gray-500 group-hover:text-white">
          {format(date, "EEEE, LLLL do yyyy")}
        </p>
        {/* <button
          onClick={() => {
            setLines(!lines);
          }}
        >
          <p
            className={`text-left mt-1 text-sm text-gray-500 ${
              lines ? "line-clamp-3" : ""
            }`}
          >
            {item.data[0].description}
          </p>
        </button> */}
      </div>
    </div>
  );
}
