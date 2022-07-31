const checkInViewIntersectionObserver = ({
  target,
  distanceFromEnd,
  callback,
}) => {
  const _funCallback = (
    entries,
    observer,
  ) => {
    entries.map((entry,) => {
      if (entry.isIntersecting) {
        // NEED CALLBACK To RETURN BOOLEAN ---- IF TRUE WE WILL UNOBSERVE AND FALSE IS NO
        const unobserve = callback();
        unobserve && observer.unobserve(entry.target);
      }
      return true;
    });
  };

  // _checkBrowserSupport-----
  if (typeof window.IntersectionObserver === "undefined") {
    console.error(
      "window.IntersectionObserver === undefined! => Your Browser is Not supported"
    );
    return;
  }
  const options = {
    root: null,
    rootMargin: `${distanceFromEnd}px 0px`,
    threshold: 0,
  };
  const observer = new IntersectionObserver(_funCallback, options);
  target && observer.observe(target);
};

export default checkInViewIntersectionObserver;