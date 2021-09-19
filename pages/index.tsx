import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ImageDetails } from "../components/Interfaces";
import Head from "next/head";
import NavBar from "../components/NavBar";
import ImageList from "../components/ImageList";

const Home: NextPage = () => {
  const [items, setItems] = useState<ImageDetails[]>([]);
  const [fetchUrl, setFetchUrl] = useState(
    "https://images-api.nasa.gov/search?year_end=2021&year_start=2021&page=1&media_type=image"
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    if (!loading) {
      setLoading(true);
      fetch(fetchUrl)
        .then((res) => res.json())
        .then((res) => {
          setItems((items) => [...items, ...res.collection.items]);
          setFetchUrl(
            "https" + res.collection.links.at(-1)["href"].substring(4)
          );
        })
        .then(() => setLoading(false));
    }
  };

  if (items) {
    return (
      <div>
        <Head>
          <title>spacestagram</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavBar />
        <div className="bg-gray-800">
          <ImageList data={items} />
          {fetchUrl && (
            <div className="flex justify-center">
              <button
                className="mb-8 font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700"
                onClick={fetchData}
              >
                See more images
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
