import type { NextPage } from "next";
import Card from "../components/Card";
import { useEffect, useRef, useState, useCallback } from "react";
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
  const [items, setItems] = useState<ImageDetails[]>([]);

  const [data, setData] = useState<{
    collection: { items: ImageDetails[]; links: { href: string }[] };
  }>();
  const [page, setPage] = useState(2);
  // const [fetchUrl, setFetchUrl] = useState(

  // );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://images-api.nasa.gov/search?year_end=2021&year_start=2021&page=1"
    )
      .then((res) => res.json())
      .then((res) => setItems(res.collection.items));
  }, []);

  const fetchData = () => {
    if (!loading) {
      setLoading(true);
      fetch(
        "https://images-api.nasa.gov/search?year_end=2021&year_start=2021&page=" +
          page
      )
        .then((res) => res.json())
        .then((res) => setItems((items) => [...items, ...res.collection.items]))
        .then(() => setPage(page + 1))
        .then(() => setLoading(false));
    }
  };

  if (items) {
    return (
      <>
        <ImageList data={items} />
        <div className="flex justify-center">
          <button
            className="mb-8 font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700"
            onClick={fetchData}
          >
            See more images
          </button>
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
