import React from "react";
import ImageComponent from "@/app/components/atoms/Image";

const Message = () => {
  const imgExt = "jpg";
  return (
    <div>
      <ImageComponent
        src="Me2You"
        imageExtention={imgExt}
        alt="message"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Message;
