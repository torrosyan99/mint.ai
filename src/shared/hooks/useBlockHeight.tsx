import { useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';

export const useBlockHeight = <T extends HTMLElement | null>(
  ref: RefObject<T>
) => {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    setHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  return { height };
};