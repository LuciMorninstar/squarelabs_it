"use client";

import WidthWrapper from "../components/WidthWrapper";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";


import { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";

const GREEN_A = "rgb(15,157,69)";
const GREEN_B = "rgb(140,198,63)";

interface CubeDatum {
  mesh: THREE.Mesh;
  i: number;
  j: number;
  k: number;
  target: { x: number; y: number; z: number };
  restZ: number;
  liftZ: number;
  phase: number;
}

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [showCoord, setShowCoord] = useState<boolean>(false);

  // ---------- GSAP load-in (text) ----------
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
      )
        .fromTo(
          heading1Ref.current,
          { y: 70, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.25",
        )
        .fromTo(
          heading2Ref.current,
          { y: 70, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.65",
        )
        .fromTo(
          descriptionRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.35",
        )
        .fromTo(
          buttonsRef.current ? buttonsRef.current.children : [],
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // ---------- cursor-follow ambient spotlight ----------
  useEffect(() => {
    const el = heroRef.current;
    const spot = spotlightRef.current;
    if (!el || !spot) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      spot.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      spot.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  // ---------- Three.js cube lattice ----------
  useEffect(() => {
    const mount = canvasWrapRef.current;
    if (!mount) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = mount.clientWidth;
    let height = mount.clientHeight;
    const isMobile = width < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 13 : 11);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
    );
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x8cc63f, 0.55));
    const key = new THREE.PointLight(0x0f9d45, 3, 30);
    key.position.set(4, 4, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0x8cc63f, 1.3, 30);
    rim.position.set(-5, -3, 5);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    // ---- deterministic lattice ----
    const cols = isMobile ? 3 : 4;
    const rows = isMobile ? 2 : 3;
    const layers = isMobile ? 1 : 2;
    const spacing = 1.9;
    const sizeBase = isMobile ? 0.62 : 0.72;

    const colorA = new THREE.Color(GREEN_A);
    const colorB = new THREE.Color(GREEN_B);

    const cells: { i: number; j: number; k: number }[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        for (let k = 0; k < layers; k++) {
          // deterministic omission pattern -> "under assembly" look, not random clutter
          if ((i + j + k) % 3 === 0) continue;
          cells.push({ i, j, k });
        }
      }
    }

    const center = {
      x: (cols - 1) / 2,
      y: (rows - 1) / 2,
      z: (layers - 1) / 2,
    };

    const cubeData: CubeDatum[] = cells.map(({ i, j, k }) => {
      const tx = (i - center.x) * spacing;
      const ty = (j - center.y) * spacing * 0.95;
      const tz = (k - center.z) * spacing - 0.5;

      const size = sizeBase * (0.85 + Math.random() * 0.3);
      const geo = new THREE.BoxGeometry(size, size, size);
      const mat = new THREE.MeshStandardMaterial({
        color: colorA.clone().lerp(colorB, (i + j) / (cols + rows)),
        metalness: 0.25,
        roughness: 0.3,
        transparent: true,
        opacity: 0.14,
        emissive: colorB,
        emissiveIntensity: 0.12,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({
          color: colorB,
          transparent: true,
          opacity: 0.8,
        }),
      );
      mesh.add(wire);
      mesh.position.set(tx, ty - 4, tz); // start low, build upward
      mesh.scale.setScalar(0.001);
      group.add(mesh);

      return {
        mesh,
        i,
        j,
        k,
        target: { x: tx, y: ty, z: tz },
        restZ: tz,
        liftZ: 0,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // orthogonal neighbor links only -> lattice/circuit feel
    const linkMat = new THREE.LineBasicMaterial({
      color: colorA,
      transparent: true,
      opacity: 0.16,
    });
    const findCell = (i: number, j: number, k: number) =>
      cubeData.find((c) => c.i === i && c.j === j && c.k === k);
    cubeData.forEach((c) => {
      [
        findCell(c.i + 1, c.j, c.k),
        findCell(c.i, c.j + 1, c.k),
        findCell(c.i, c.j, c.k + 1),
      ].forEach((neighbor) => {
        if (!neighbor) return;
        const geo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(c.target.x, c.target.y, c.target.z),
          new THREE.Vector3(
            neighbor.target.x,
            neighbor.target.y,
            neighbor.target.z,
          ),
        ]);
        group.add(new THREE.Line(geo, linkMat));
      });
    });

    // ---- build-in animation, staggered by distance from center ----
    const sorted = [...cubeData].sort((a, b) => {
      const da = Math.hypot(a.target.x, a.target.y, a.target.z);
      const db = Math.hypot(b.target.x, b.target.y, b.target.z);
      return da - db;
    });
    sorted.forEach((c, idx) => {
      gsap.to(c.mesh.position, {
        x: c.target.x,
        y: c.target.y,
        z: c.target.z,
        duration: 1.1,
        delay: 0.15 + idx * 0.045,
        ease: "power3.out",
      });
      gsap.to(c.mesh.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.9,
        delay: 0.15 + idx * 0.045,
        ease: "back.out(1.6)",
      });
    });

    // ---- raycast plane for pin-art cursor interaction ----
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2(10, 10); // off-screen by default
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0.5);
    const hit = new THREE.Vector3();
    let hasHit = false;

    const handlePointer = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      ndc.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      setShowCoord(true);
      if (coordRef.current) {
        coordRef.current.textContent = `X:${ndc.x.toFixed(2)}  Y:${ndc.y.toFixed(2)}`;
      }
    };
    const handleLeave = () => {
      ndc.set(10, 10);
      setShowCoord(false);
    };

    if (!isTouch && !prefersReducedMotion) {
      mount.addEventListener("mousemove", handlePointer);
      mount.addEventListener("mouseleave", handleLeave);
    }

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      const t = clock.getElapsedTime();

      if (!isTouch && !prefersReducedMotion) {
        raycaster.setFromCamera(ndc, camera);
        hasHit = !!raycaster.ray.intersectPlane(plane, hit);
      }

      cubeData.forEach((c) => {
        let liftTarget = 0;
        if (hasHit) {
          const d = Math.hypot(c.target.x - hit.x, c.target.y - hit.y);
          liftTarget = Math.max(0, 1 - d / 2.2) * 1.1;
        } else if (prefersReducedMotion) {
          liftTarget = 0;
        } else {
          // gentle autonomous idle when no cursor target (touch / mouse outside)
          liftTarget = Math.sin(t * 0.6 + c.phase) * 0.08;
        }
        c.liftZ += (liftTarget - c.liftZ) * 0.08;
        c.mesh.position.z = c.restZ + c.liftZ;
        c.mesh.rotation.y += 0.0018;
        c.mesh.rotation.x += 0.001;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const ro = new ResizeObserver((entries) => {
      const { width: w, height: h } = entries[0].contentRect;
      if (w === 0 || h === 0) return;
      width = w;
      height = h;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      mount.removeEventListener("mousemove", handlePointer);
      mount.removeEventListener("mouseleave", handleLeave);
      cubeData.forEach((c) => {
        c.mesh.geometry.dispose();
        (c.mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="hero-section relative w-full  overflow-hidden flex items-center justify-center bg-[#071510]"
      >
        {/* base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(15,157,69,0.18) 0%, rgba(7,21,16,0) 55%), linear-gradient(180deg, #081B13 0%, #071510 60%, #050F0B 100%)",
          }}
        />
        {/* cursor-follow spotlight */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(140,198,63,0.13), transparent 70%)",
          }}
        />
        {/* blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,243,236,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(234,243,236,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
        {/* HUD corner brackets */}
        {[
          "top-3 left-3 border-t-2 border-l-2",
          "top-3 right-3 border-t-2 border-r-2",
          "bottom-3 left-3 border-b-2 border-l-2",
          "bottom-3 right-3 border-b-2 border-r-2",
        ].map((cls, idx) => (
          <div
            key={idx}
            className={`pointer-events-none absolute z-[2] w-5 h-5 lg:w-7 lg:h-7 border-[#8CC63F]/40 ${cls}`}
          />
        ))}
        {/* live coordinate readout */}
        <div
          className={`pointer-events-none absolute z-[2] left-5 bottom-5 font-mono text-[10px] lg:text-xs tracking-wider text-[#8CC63F]/70 transition-opacity duration-300 ${showCoord ? "opacity-100" : "opacity-0"}`}
        >
          <span ref={coordRef}>X:0.00 Y:0.00</span>
        </div>
        {/* rotated edge tab */}
        <div className="pointer-events-none absolute z-[2] right-3 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden lg:block">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#8CC63F]/50 whitespace-nowrap">
            SQUARELABS / STACK_01
          </span>
        </div>
        {/* three.js cube lattice */}
        <div ref={canvasWrapRef} className="absolute inset-0 z-[1]" />
        {/* content */}
        <div className="max-sm:mt-16 relative z-10 w-full flex flex-col gap-4 lg:gap-7 items-center justify-center text-center px-4 pointer-events-none">
          <span
            ref={eyebrowRef}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#8CC63F]/30 bg-[#0F9D45]/10 px-4 py-1.5 text-xs lg:text-sm font-outfit tracking-wide text-[#C8E8B9]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] animate-pulse" />
            SquareLabs — Product Engineering Studio
          </span>

          <div className="flex flex-col gap-1 lg:gap-3 text-center pointer-events-none">
            <h1
              ref={heading1Ref}
              className="font-sora text-[#EAF3EC] text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight"
            >
              We Engineer{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(120deg, ${GREEN_B}, ${GREEN_A})`,
                }}
              >
                Square Products
              </span>
            </h1>
            <h1
              ref={heading2Ref}
              className="font-sora text-[#EAF3EC] text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight"
            >
              From First Block to Full Scale.
            </h1>
          </div>

          <p
            ref={descriptionRef}
            className="pointer-events-auto max-w-xl text-[#9FB3A8] text-sm lg:text-base xl:text-lg font-outfit"
          >
            SquareLabs designs and ships production-grade web platforms,
            <br className="hidden sm:block" /> stacked with precision — one
            solid block at a time.
          </p>

          <div
            ref={buttonsRef}
            className="pointer-events-auto w-full flex flex-row max-sm:gap-2 items-center sm:flex-row gap-2 sm:gap-6 lg:gap-6 xl:gap-8 justify-center px-3 mt-2"
          >
            <Link href="/start-a-project" className="group button-style">
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Start a Project
              </span>
              <IoArrowForward className="text-xl text-default-color sm:text-2xl group-hover:translate-x-2 duration-200 transition-transform ease-in-out" />
            </Link>

            <Link
              href="/our-work"
              className="w-max flex flex-row gap-2 lg:gap-4 items-center justify-center rounded-4xl border-2 border-default-color px-3 py-4 sm:py-4 lg:px-6 lg:py-4 hover:border-text-primary-color transition-all duration-200 ease-in-out"
            >
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Explore Our Work
              </span>
              <RiExternalLinkLine className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default HeroSection;