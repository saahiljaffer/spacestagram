import { createRef, useEffect, useRef } from "react";

export default function Cursor({ top, left }: { top: number; left: number }) {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current) {
      document.body.addEventListener("mousemove", (e) => {
        if (element.current) {
          console.log(`${e.pageX}px`);
          console.log(`${e.pageY}px`);
          element.current.style.left = `${e.pageX}px`;
          element.current.style.top = `${e.pageY}px`;
        }
      });
      document.body.addEventListener("mouseleave", (e) => {
        if (element.current) {
          element.current.style.display = "none";
        }
      });
      document.body.addEventListener("mouseenter", (e) => {
        if (element.current) {
          element.current.style.display = "";
        }
      });
    }
  }, [element]);

  return (
    <div
      ref={element}
      style={{ top: 0, left: 0 }}
      className="cursor flex justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="#ffffff"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
  );
}
