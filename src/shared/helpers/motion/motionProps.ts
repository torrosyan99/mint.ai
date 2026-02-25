import type {MotionProps, Variants} from "framer-motion";

export function motionCompactOptions(variants: Variants, isCompact: boolean, options?:MotionProps) {
  return {
    variants,
    animate: isCompact ? 'compact' : 'expanded',
    initial: false,
    ...options
  }
}

export function motionHiddenOptions(variants: Variants, isCompact: boolean, options?:MotionProps) {
  return {
    variants,
    animate: isCompact ? 'hidden' : 'visible',
    initial: false,
    ...options
  }
}