export default function FetchButton({
  disabled,
  loading,
  fetchData,
}: {
  disabled: boolean;
  loading: boolean;
  fetchData: () => void;
}) {
  if (!disabled && !loading) {
    return (
      <div className="flex justify-center">
        <button
          className="mb-8 font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700"
          onClick={fetchData}
        >
          See more images
        </button>
      </div>
    );
  } else if (!disabled && loading) {
    return (
      <div className="flex justify-center">
        <button
          className="mb-8 font-sans font-medium py-2 px-4 border rounded bg-indigo-700 text-white border-indigo-500 cursor-not-allowed"
          onClick={fetchData}
          disabled
        >
          Loading...
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <button
          className="mb-8 font-sans font-medium py-2 px-4 border rounded bg-indigo-700 text-white border-indigo-500 cursor-not-allowed"
          onClick={fetchData}
          disabled
        >
          No more images
        </button>
      </div>
    );
  }
}
