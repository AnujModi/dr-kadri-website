/**
 * OptimizedImage Component
 *
 * Example component demonstrating how to use vite-imagetools for automatic
 * image optimization. This component shows best practices for responsive,
 * optimized images.
 *
 * Usage:
 * import OptimizedImage from './components/OptimizedImage';
 *
 * <OptimizedImage
 *   src="./path/to/image.jpg"
 *   alt="Description"
 *   className="w-full h-auto"
 * />
 *
 * Note: This is an example component. The current implementation uses images
 * from the /public directory which are NOT optimized by vite-imagetools.
 * To enable optimization, images must be imported from the src directory.
 */

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      decoding="async"
    />
  );
}

/**
 * Example: How to use imported images with automatic optimization
 *
 * // Move your image to src/assets/images/
 * import heroWebp from '../assets/images/hero.jpg?format=webp&quality=80';
 *
 * // Use in component
 * <img src={heroWebp} alt="Hero" />
 *
 * // For responsive images with multiple sizes:
 * import heroSizes from '../assets/images/hero.jpg?w=400;800;1200&format=webp';
 *
 * <img
 *   srcSet={heroSizes.map(img => `${img.src} ${img.w}w`).join(', ')}
 *   sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
 *   src={heroSizes[0].src}
 *   alt="Hero"
 * />
 */
