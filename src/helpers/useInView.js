import { useCallback, useRef, useState } from "react";

export function useInView() {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  const lastCommentRef = useCallback((comment) => {
    if (elementRef.current) elementRef.current.disconnect();

    elementRef.current = new IntersectionObserver(
      (comments) => {
        if (comments[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { rootMargin: "50px" }
    );

    if (comment) elementRef.current.observe(comment);
  }, []);

  return [inView, lastCommentRef];
}
