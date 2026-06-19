"use client";

import * as React from "react";
import { Engine, RenderClones, Walls, Circle } from "react-matter-js";

const MatterScene = () => {
  const [size, setSize] = React.useState({
    width: 0,
    height: 0,
  });

  const circleCount = 10;

  React.useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!size.width || !size.height) {
    return null;
  }

  const circleSize = size.height * 0.06;

  const renderCircles = () => {
    return Array.from({ length: circleCount }).map((_, index) => (
      <Circle
        key={index}
        clone
        x={160 + index * 70}
        y={100}
        radius={circleSize}
        options={{
          restitution: 0.8,
          friction: 0.05,
          frictionAir: 0.02,
          render: {
            fillStyle: "#ffffff",
            strokeStyle: "#ffffff",
            lineWidth: 1,
          },
        }}
      />
    ));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute left-0 top-0 z-10 p-8">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">
          Matter Physics
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          Drag The Circles
        </h2>
      </div>

      <Engine
        options={{
          gravity: {
            x: 0,
            y: 1,
          },
        }}
      >
        <RenderClones
          enableMouse
          options={{
            width: size.width,
            height: size.height,
            background: "transparent",
            wireframeBackground: "transparent",
            wireframes: false,
            pixelRatio: 2,
          }}
        >
          <Walls
            x={0}
            y={0}
            width={size.width}
            height={size.height}
            wallWidth={80}
          />

          {renderCircles()}
        </RenderClones>
      </Engine>
    </section>
  );
};

export default MatterScene;