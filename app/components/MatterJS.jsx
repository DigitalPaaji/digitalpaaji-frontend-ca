"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const tools = [
  "js.webp",
  "node.webp",
  "react.webp",
  "php.webp",
  "laravel.webp",
  "sql.webp",
  "vscode.webp",
  "html.webp",
  "tailwind.webp",
];

const MatterJS = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false, 
        background: "transparent",
      },
    });

    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, wallOptions);
    const leftWall = Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, wallOptions);
    const rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, wallOptions);

    const circleSize = window.innerHeight * 0.1;
    
    const bodies = tools.map((tool, index) => {
      return Matter.Bodies.circle(
        window.innerWidth / 2 + (Math.random() * 100 - 50), 
        -50 - (index * 100), 
        circleSize,
        {
          restitution: 0.6, 
          render: {
            // Apply the image here
            sprite: { 
              texture: `/tools/${tool}`, 
              // If your images look too big or too small, adjust these scale values:
              xScale: 0.1, 
              yScale: 0.1 
            }
          }
        }
      );
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Matter.World.add(engine.world, [ground, leftWall, rightWall, mouseConstraint, ...bodies]);
    
    render.mouse = mouse; 

    Matter.Runner.run(engine);
    Matter.Render.run(render);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight });
      Matter.Body.setPosition(rightWall, { x: window.innerWidth, y: window.innerHeight / 2 });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, []);

  return <div ref={sceneRef} style={{ width: "98vw", height: "100vh", overflow: "hidden" }} />;
};

export default MatterJS;