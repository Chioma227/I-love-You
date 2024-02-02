import React from "react";
import ImageComponent from "./components/atoms/Image";
import Container from "./components/atoms/container/Container";
import { containerVariants } from "./components/atoms/container/container.type";

const page = () => {
  const imgExt = "jpg";
  return (
    <Container variant={containerVariants.FLEXED} className="w-full h-screen">
      <ImageComponent
        src="envelope"
        imageExtention={imgExt}
        alt="envelope"
        width={300}
        height={300}
      />
    </Container>
  );
};

export default page;
