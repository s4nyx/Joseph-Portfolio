import { memo, useMemo } from "react";

const ServicesVideo = ({ src, className, preload }) => {
  const videoProps = useMemo(
    () => ({
      src: src,
      className: className,
      preload: preload,
    }),
    []
  );
  return <video {...videoProps} autoPlay muted playsInline loop />;
};

export default memo(ServicesVideo);
