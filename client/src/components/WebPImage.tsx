import { useState, useRef, useEffect } from 'react';

interface WebPImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  loading?: 'eager' | 'lazy';
}

export const WebPImage: React.FC<WebPImageProps> = ({
  src,
  alt,
  className = '',
  onClick,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Convert image path to WebP path (supports PNG, JPG, JPEG)
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp').replace('/attached_assets/', '/attached_assets/webp/');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const shouldLoad = loading === 'eager' || isInView;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      ref={imgRef}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 image-placeholder" />
      )}
      
      {/* Actual image with WebP support */}
      {shouldLoad && (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            className={`w-full h-auto transition-opacity duration-300 gallery-image ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            loading={loading}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};

export default WebPImage;