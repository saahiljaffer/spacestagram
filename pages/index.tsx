import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card, { ImageDetails } from "../components/card";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function ImageList({ data }: { data: ImageDetails[] }) {
  return (
    <div className="bg-white ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data && data.map((item) => <Card key={item.title} item={item} />)}
        </div>
      </div>
    </div>
  );
}

const Home: NextPage = () => {
  const [data, setData] = useState<ImageDetails[]>();

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=eQSSQHPvBH8xnRy5gbEcsX3PDIl72ObELacsge9A&count=15&thumbs=true"
    )
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data) {
    return <ImageList data={data} />;
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
