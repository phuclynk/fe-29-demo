import { useColor } from "./useColor";

export function Square() {
  const color = useColor();

  return (
    <div style={{ backgroundColor: color }} className="square">
      This Is Square
    </div>
  );
}

export function Circle() {
  const color = useColor();

  return (
    <div style={{ backgroundColor: color }} className="circle">
      This Is Circle
    </div>
  );
}

export function Rectangle() {
  const color = useColor();

  return (
    <div style={{ backgroundColor: color }} className="rectangle">
      This Is Rectangle
    </div>
  );
}

export function Star() {
  const color = useColor();

  return (
    <div style={{ backgroundColor: color }} className="star">
      This Is Star
    </div>
  );
}
