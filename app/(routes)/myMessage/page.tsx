import React from "react";
import Container from "@/app/components/atoms/container/Container";
import { containerVariants } from "@/app/components/atoms/container/container.type";
import ImageComponent from "@/app/components/atoms/Image";

const Message = () => {
  const imgExt = "png";
  return (
    <Container variant={containerVariants.RELATIVE}>
      <Container variant={containerVariants.ABSOLUTE}>
        <ImageComponent
          src="single-rose"
          imageExtention={imgExt}
          alt="message"
          width={300}
          height={300}
        />
      </Container>
    </Container>
  );
};

export default Message;
