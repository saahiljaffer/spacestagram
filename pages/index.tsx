import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ImageDetails } from "../components/Interfaces";
import Head from "next/head";
import NavBar from "../components/NavBar";
import ImageList from "../components/ImageList";
import LoadingScreen from "../components/LoadingScreen";
import FetchButton from "../components/FetchButton";

const Home: NextPage = () => {
  const [items, setItems] = useState<ImageDetails[]>([]);
  const [fetchUrl, setFetchUrl] = useState(
    "https://images-api.nasa.gov/search?year_end=2021&year_start=2021&page=1&media_type=image"
  );
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

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
        .then(() => setLoading(false))
        .then(() => setInitialLoading(false));
    }
  };

  if (items) {
    return (
      <section>
        <Head>
          <title>spacestagram</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <LoadingScreen visible={initialLoading} />
        <NavBar />
        <section className="bg-gray-800">
          <ImageList data={items} />
          <FetchButton
            fetchData={fetchData}
            loading={loading}
            disabled={!fetchUrl}
          />
        </section>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Home;
