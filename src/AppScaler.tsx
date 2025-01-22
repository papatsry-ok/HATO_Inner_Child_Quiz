import { useLayoutEffect, useState } from "react";

export function AppScaler(props: {
  children: React.ReactNode;
  width: number;
  height: number;
}) {
  const { width, height } = props;
  const [scale, setScale] = useState(3);
  useLayoutEffect(() => {
    const onResize = () => {
      const scale = Math.max(0.75, Math.min(window.innerWidth / width, 2));
      setScale(scale);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [width, height]);
  return (
    <div style={{ width, height }} className="mx-auto">
      <div
        className="origin-top scale-[--scale]"
        style={{ "--scale": scale } as React.CSSProperties}
      >
        {props.children}
      </div>
    </div>
  );
}
