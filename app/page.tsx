"use client";
import React, { useState } from "react";
import ImageComponent from "./components/atoms/Image";
import Container from "./components/atoms/container/Container";
import { containerVariants } from "./components/atoms/container/container.type";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const page = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const imgExt = "png";

  const handleMouseEnter = () => {
    setIsOpened(true);
  };
  const handleMouseLeave = () => {
    setIsOpened(false);
  };

  return (
    <Container variant={containerVariants.FLEXED} className="w-full h-screen">
      <AnimatePresence>
        {isOpened ? (
        <Link href="/myMessage">
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, transition: { duration: 2, type: "tween" } }}
            exit={{opacity:0.5}}
            className="transition-all cursor-pointer w-fit h-fit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageComponent
              src="opened-envelope"
              imageExtention={imgExt}
              alt="envelope"
              width={350}
              height={350}
            />
          </motion.div>
         </Link>
        ) : (
          <motion.div
          initial={{ opacity: 0.5, scale:1 }}
          animate={{ opacity: 1, transition: { duration: 2, type: "tween" } }}
          exit={{opacity:0.5, transition: { duration: 2  }}}
            className="transition-all cursor-pointer w-fit h-fit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // onClick={handleRoute}
          >
            <ImageComponent
              src="closed-envelope"
              imageExtention={imgExt}
              alt="envelope"
              width={350}
              height={350}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default page;
