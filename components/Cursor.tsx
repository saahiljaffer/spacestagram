import { createRef, useEffect, useRef } from "react";

export default function Cursor({ top, left }: { top: number; left: number }) {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current) {
      document.body.addEventListener("mousemove", (e) => {
        if (element.current) {
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
      <img width="40px" height="40px" src="/cursor.png" />
    </div>
  );
}
