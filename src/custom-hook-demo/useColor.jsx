import { useEffect } from "react";
import { useState } from "react";

export const useColor = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      if (color === "red") {
        setColor("yellow");
        return;
      }

      setColor("red");
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return color;
};
