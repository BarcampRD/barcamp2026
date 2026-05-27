"use client";

import { useEffect, useRef, ElementType, ComponentPropsWithRef } from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  delay?: number;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithRef<T>, "as" | "delay" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  children,
  className = "",
  ...rest
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
