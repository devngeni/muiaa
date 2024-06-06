import React, { useEffect, useState } from "react";
import { Fade as OriginalFade } from "react-awesome-reveal";

const Fade = ({ children, ...props }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    children
  ) : (
    <OriginalFade {...props}>{children}</OriginalFade>
  );
};

export default Fade;
