import type { NextPage } from "next";
import Card from "../components/Card";
import { useEffect, useRef, useState, useCallback } from "react";
import { ImageDetails } from "../components/Interfaces";
import Masonry from "react-masonry-css";
import Cursor from "../components/Cursor";

function ImageList({ data }: { data: ImageDetails[] }) {
  return (
    <div className="bg-gray-800 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <Masonry
        breakpointCols={{ default: 4, 1400: 3, 800: 2, 600: 1 }}
        className="my-masonry-grid bg-gray-800"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.map((item) => <Card key={item.data[0].nasa_id} item={item} />)}
      </Masonry>
    </div>
  );
}

const Home: NextPage = () => {
  const [items, setItems] = useState<ImageDetails[]>([]);
  const [fetchUrl, setFetchUrl] = useState(
    "https://images-api.nasa.gov/search?year_end=2021&year_start=2021&page=1"
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log(fetchUrl);
    if (!loading) {
      setLoading(true);
      fetch(fetchUrl)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
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
      <div className="bg-gray-800">
        <Cursor top={0} left={0} />
        <ImageList data={items} />
        <div className="flex justify-center">
          <button
            className="mb-8 font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700"
            onClick={fetchData}
          >
            See more images
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
