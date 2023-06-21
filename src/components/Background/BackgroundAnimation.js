import React, { useEffect } from "react";
import { TweenLite, Circ } from "gsap";

function BackgroundAnimation() {
  useEffect(() => {
    let width, height;
    const canvas = document.getElementById("myCanvas");
    let ctx;
    let points = [];

    const getDistance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      points = generatePoints();

      animate();
      for (let i of points) {
        move(i);
      }
    };

    const generatePoints = () => {
      let a = width / 200;
      if (a < 3) {
        a = 3;
      }
      let p = [];

      for (let x = 0 - 100; x < width + 100; x += width / a) {
        for (let y = 0 - 100; y < height + 100; y += height / a) {
          let px =
            x +
            (Math.random() * width) / a -
            (Math.random() * width) / (a * 2);
          let py =
            y +
            (Math.random() * height) / a -
            (Math.random() * height) / (a * 2);
          let pt = { x: px, originX: px, y: py, originY: py, id: `${x}.${y}` };
          p.push(pt);
        }
      }

      p.forEach((p1, index1) => {
        let closest = [];
        let distances = [];

        p.forEach((p2, index2) => {
          if (p2 !== p1) {
            let d = { id: p2.id, distance: getDistance(p1, p2) };
            distances.push(d);
          }
        });

        distances.sort((a, b) => {
          if (a.distance < b.distance) return -1;
          if (a.distance > b.distance) return 1;
          return 0;
        });

        for (let i = 0; i < 6; i++) {
          closest[i] = p.find((obj) => {
            return obj.id === distances[i].id;
          });
        }

        p1.closest = closest;

        let bw = Math.round(Math.random() + 0.25) * 255;
        p1.fillStyle = `rgba(${bw},${bw},${bw},${0.08 * Math.random() + bw / (255 * 20)})`;
      });

      return p;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of points) {
        ctx.beginPath();
        for (let c of p.closest) {
          ctx.lineTo(c.x, c.y);
        }
        ctx.fillStyle = p.fillStyle;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.stroke();
      }
    };

    const animate = () => {
      render();
      requestAnimationFrame(animate);
    };

    const move = (p) => {
      TweenLite.to(p, 5 + 0.25 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => {
          move(p);
        },
      });
    };

    const resize = () => {
      init();
    };

    init();
    window.addEventListener("resize", resize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas id="myCanvas" />
      <header>
        Your content here
      </header>
    </>
  );
}

export default BackgroundAnimation;
