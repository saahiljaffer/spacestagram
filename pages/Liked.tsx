import { useState } from "react";

export default function Liked({ liked }: { liked: string[] }) {
  const [images, setImages] = useState<{}[]>([]);

  for (let i = 0; i < liked.length; i++) {}
}
