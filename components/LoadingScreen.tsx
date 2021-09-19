export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <div
      className={`z-50 h-screen w-screen flex justify-center items-center bg-gray-200 fixed top-0 left-0  ${
        visible ? "visible" : "invisible"
      }`}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
}
