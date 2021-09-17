import type { NextPage } from "next";
import Card from "../components/card";
import { useEffect, useRef, useState } from "react";
import { ImageDetails } from "../components/Interfaces";
import Masonry from "react-masonry-css";

function ImageList({ data }: { data: ImageDetails[] }) {
  return (
    <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <Masonry
        breakpointCols={{ default: 4, 1400: 3, 800: 2, 600: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.map((item) => <Card key={item.data[0].nasa_id} item={item} />)}
      </Masonry>
    </div>
  );
}

const Home: NextPage = () => {
  const [data, setData] = useState<{ collection: { items: ImageDetails[] } }>();
  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?year_end=2021&year_start=2021")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data) {
    // return <h1>Loading...</h1>;
    // return <pre>{JSON.stringify(data.collection.items)}</pre>;
    return <ImageList data={data.collection.items} />;
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
