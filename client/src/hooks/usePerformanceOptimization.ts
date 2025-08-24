import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload the hero video
      const videoLink = document.createElement('link');
      videoLink.rel = 'preload';
      videoLink.as = 'video';
      videoLink.type = 'video/mp4';
      
      // Preload critical images (first few floor plans)
      const criticalImages = [
        // Add paths to the most important images
      ];
      
      criticalImages.forEach(src => {
        const imageLink = document.createElement('link');
        imageLink.rel = 'preload';
        imageLink.as = 'image';
        imageLink.href = src;
        document.head.appendChild(imageLink);
      });
    };

    // Enable service worker for caching (if available)
    const enableServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          // In a real implementation, you would register a service worker
          // navigator.serviceWorker.register('/sw.js');
        } catch (error) {
          console.log('Service Worker registration failed');
        }
      }
    };

    // Optimize font loading
    const optimizeFonts = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Reduce memory usage by cleaning up unused images
    const cleanupResources = () => {
      // Force garbage collection for removed images
      const images = document.querySelectorAll('img[data-cleanup="true"]');
      images.forEach(img => {
        (img as HTMLImageElement).src = '';
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    enableServiceWorker();
    optimizeFonts();

    // Cleanup on unmount
    return () => {
      cleanupResources();
    };
  }, []);

  // Performance monitoring
  const logPerformanceMetrics = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Log Core Web Vitals
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        console.log('Performance Metrics:', {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart
        });
      }, 1000);
    }
  };

  return { logPerformanceMetrics };
};

export default usePerformanceOptimization;