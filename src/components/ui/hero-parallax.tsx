"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-background dark:bg-obsidian"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="font-display tracking-tight leading-[0.9] sm:leading-[0.95] mb-4 sm:mb-6 lg:mb-8">
        <span className="block text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 sm:mb-2 lg:mb-3 drop-shadow-sm">
          This is{' '}
        </span>
        <span className="block relative">
          <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm">
            what we do.
          </span>
          <span className="absolute -inset-1 bg-gradient-to-r from-accent/15 to-accent/30 rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-20 animate-pulse block" />
        </span>
      </h1>
      <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 relative">
        <p className="text-lg sm:text-xl md:text-2xl leading-[1.5] text-foreground/80 font-light max-w-2xl">
          Banking platforms that{' '}
          <span className="relative inline-block">
            <span className="text-foreground font-medium">serve millions</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
          </span>
          . AI systems that{' '}
          <span className="relative inline-block">
            <span className="text-foreground font-medium">transform businesses</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/25 to-accent/50 block" />
          </span>
          . Brands that{' '}
          <span className="relative inline-block">
            <span className="text-foreground font-medium">connect with people</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-accent/25 block" />
          </span>
          . This is our track record.
        </p>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product w-[30rem] aspect-video relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-bone font-medium text-lg sm:text-xl">
        {product.title}
      </h2>
    </motion.div>
  );
}; 