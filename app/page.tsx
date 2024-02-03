"use client";
import React, { useState } from "react";
import ImageComponent from "./components/atoms/Image";
import Container from "./components/atoms/container/Container";
import { containerVariants } from "./components/atoms/container/container.type";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const page = () => {
  // const router = useRouter();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const imgExt = "png";

  const handleMouseEnter = () => {
    setIsOpened(true);
  };
  const handleMouseLeave = () => {
    setIsOpened(false);
  };

  // const handleRoute = () => {
  //   router.push("/myMessage");
  // };
  return (
    <Container variant={containerVariants.FLEXED} className="w-full h-screen">
      <AnimatePresence>
        {isOpened ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { duration: 2, type: "tween" } }}
            exit={{opacity:1}}
            className="transition-all cursor-pointer w-fit h-fit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // onClick={handleRoute}
          >
            <ImageComponent
              src="opened-envelope"
              imageExtention={imgExt}
              alt="envelope"
              width={350}
              height={350}
            />
          </motion.div>
        ) : (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, type: "tween" } }}
          exit={{opacity:0, transition: { duration: 2  }}}
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
