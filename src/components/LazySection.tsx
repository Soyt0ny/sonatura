import { useEffect, useRef, useState, ReactNode, memo } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  minHeight?: string;
}

const LazySection = memo(({ 
  children, 
  className = "", 
  rootMargin = "200px", 
  threshold = 0,
  minHeight = "12rem"
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin, threshold, hasLoaded]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ minHeight: !hasLoaded ? minHeight : undefined }}
    >
      {isVisible ? (
        <div className="animate-fade-in">
          {children}
        </div>
      ) : (
        <div 
          className="w-full bg-gradient-to-r from-muted/10 via-muted/20 to-muted/10 rounded-lg animate-pulse"
          style={{ height: minHeight }}
        />
      )}
    </div>
  );
});

LazySection.displayName = "LazySection";

export default LazySection;