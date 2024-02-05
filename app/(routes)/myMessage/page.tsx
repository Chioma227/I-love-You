import React from "react";
import Container from "@/app/components/atoms/container/Container";
import { containerVariants } from "@/app/components/atoms/container/container.type";
import ImageComponent from "@/app/components/atoms/Image";
import Text from "@/app/components/atoms/text";
import { content } from "@/app/helpers/texts";

const Message = () => {
  return (
    <Container variant={containerVariants.FLEXED} className="h-screen">
      <Container variant={containerVariants.FIT} width={300}>
        <Text>{content}</Text>
      </Container>
    </Container>
  );
};

export default Message;
