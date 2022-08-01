import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import checkInViewIntersectionObserver from "../../utils/isInViewPortIntersectionObserver";

const placeholderLarge = "/placeholder-large.png";
const placeholderLargeH = "/placeholder-large-h.png";

const LoadableMedia = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  prevImageHorizontal = true,
  className = "object-cover w-full h-full",
  ...args
}) => {
  let isMounted = false;
  const _containerRef = useRef(null);
  let _imageEl = null;
  const placeholderImage = prevImageHorizontal
    ? placeholderLargeH
    : placeholderLarge;

  const [__src, set__src] = useState(placeholderImage);
  const [imageLoaded, setImageLoaded] = useState(false);

  const _initActions = async () => {
    set__src(placeholderImage);
    _checkInViewPort();
  };

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current,
      distanceFromEnd: 0,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      _handleImageLoaded();
      return true;
    }
    _imageEl = new Image();
    if (_imageEl) {
      _imageEl.src = src;
      _imageEl.addEventListener("load", _handleImageLoaded);
    }
    return true;
  };

  const _handleImageLoaded = () => {
    if (!isMounted) return;
    setImageLoaded(true);
    set__src(src);
  };

  useEffect(() => {
    isMounted = true;
    _initActions();
    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <div
      className={`nc-NcImage ${containerClassName}`}
      data-nc-id="NcImage"
      ref={_containerRef}
    >
      {__src ? (
        <img src={__src} className={className} alt={alt} {...args} />
      ) : (
        <div
          className={`${className} bg-neutral-200`}
        ></div>
      )}
    </div>
  );
};

export default LoadableMedia;