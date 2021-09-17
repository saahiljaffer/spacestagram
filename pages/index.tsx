import type { NextPage } from "next";
import Card from "../components/card";
import { useEffect, useState } from "react";
import { ImageDetails } from "../components/Interfaces";

function ImageList({ data }: { data: ImageDetails[] }) {
  return (
    <div className="mx-auto max-w-md py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      {data && data.map((item) => <Card key={item.title} item={item} />)}
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
