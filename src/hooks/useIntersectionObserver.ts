import { useCallback, useRef } from 'react';

export function useIntersectionObserver(
  onIntersect: () => void,
  isLoading: boolean
): { ref: (node: Element | null) => void } {
  const observer = useRef<IntersectionObserver>();
  const lastUserElementRef = useCallback(
    (node: Element | null) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [onIntersect, isLoading]
  );

  return { ref: lastUserElementRef };
}
