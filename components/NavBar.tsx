import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="z-50 bg-gray-700 text-white text-xl mx-auto px-8 sm:px-10 lg:px-12 sticky top-0 flex items-center h-16">
      <div className="flex">
        <Image src="/space.png" width="32" height="32" />
        <h1 className="ml-3">spacestagram</h1>
      </div>
    </nav>
  );
}
