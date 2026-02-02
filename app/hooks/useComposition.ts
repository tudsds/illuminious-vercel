import * as React from "react";

interface UseCompositionOptions<T extends HTMLElement> {
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
  onCompositionStart?: (e: React.CompositionEvent<T>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<T>) => void;
}

interface UseCompositionReturn<T extends HTMLElement> {
  onKeyDown: (e: React.KeyboardEvent<T>) => void;
  onCompositionStart: (e: React.CompositionEvent<T>) => void;
  onCompositionEnd: (e: React.CompositionEvent<T>) => void;
}

export function useComposition<T extends HTMLElement>(
  options: UseCompositionOptions<T> = {}
): UseCompositionReturn<T> {
  const { onKeyDown, onCompositionStart, onCompositionEnd } = options;

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<T>) => {
      onKeyDown?.(e);
    },
    [onKeyDown]
  );

  const handleCompositionStart = React.useCallback(
    (e: React.CompositionEvent<T>) => {
      onCompositionStart?.(e);
    },
    [onCompositionStart]
  );

  const handleCompositionEnd = React.useCallback(
    (e: React.CompositionEvent<T>) => {
      onCompositionEnd?.(e);
    },
    [onCompositionEnd]
  );

  return {
    onKeyDown: handleKeyDown,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
  };
}
