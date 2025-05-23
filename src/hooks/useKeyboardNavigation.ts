import { useEffect, RefObject } from 'react';

// Hook to handle keyboard accessibility for custom interactive components
export function useKeyboardNavigation<T extends HTMLElement>(
  ref: RefObject<T>,
  onEnter?: () => void,
  onSpace?: () => void,
  onEscape?: () => void
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          if (onEnter) {
            event.preventDefault();
            onEnter();
          }
          break;
        case ' ':
          if (onSpace) {
            event.preventDefault();
            onSpace();
          }
          break;
        case 'Escape':
          if (onEscape) {
            event.preventDefault();
            onEscape();
          }
          break;
        default:
          break;
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, onEnter, onSpace, onEscape]);
}

export default useKeyboardNavigation;
