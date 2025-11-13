# 3D Gallery Photography Component

A stunning 3D infinite gallery component built with Three.js, React Three Fiber, and custom shaders for cloth-like material effects.

## Features

- **3D Infinite Scrolling**: Smooth infinite gallery with depth-based positioning
- **Interactive Controls**: Mouse wheel, keyboard arrows, and touch support
- **Auto-play**: Automatic scrolling with pause on user interaction
- **Cloth-like Materials**: Custom shader materials with flag-waving effects on hover
- **Fade & Blur Effects**: Configurable fade-in/out and blur transitions
- **WebGL Fallback**: Graceful degradation for unsupported browsers
- **Responsive Design**: Adapts to different screen sizes and aspect ratios

## Usage

### Basic Usage

```tsx
import InfiniteGallery from "@/components/ui/3d-gallery-photography";

const images = [
  { src: "image1.jpg", alt: "Description 1" },
  { src: "image2.jpg", alt: "Description 2" },
  // ... more images
];

<InfiniteGallery images={images} className="h-screen w-full" />;
```

### Advanced Configuration

```tsx
<InfiniteGallery
  images={images}
  speed={1.2} // Scroll speed multiplier
  zSpacing={3} // Depth spacing between images
  visibleCount={12} // Number of visible images
  falloff={{ near: 0.8, far: 14 }} // Depth falloff settings
  fadeSettings={{
    fadeIn: { start: 0.05, end: 0.25 },
    fadeOut: { start: 0.4, end: 0.43 },
  }}
  blurSettings={{
    blurIn: { start: 0.0, end: 0.1 },
    blurOut: { start: 0.4, end: 0.43 },
    maxBlur: 8.0,
  }}
  className="h-screen w-full"
/>
```

## Props

| Prop           | Type                            | Default                  | Description                       |
| -------------- | ------------------------------- | ------------------------ | --------------------------------- |
| `images`       | `ImageItem[]`                   | Required                 | Array of image objects or strings |
| `speed`        | `number`                        | `1`                      | Scroll speed multiplier           |
| `zSpacing`     | `number`                        | `3`                      | Depth spacing between images      |
| `visibleCount` | `number`                        | `8`                      | Number of visible images          |
| `falloff`      | `{ near: number; far: number }` | `{ near: 0.8, far: 14 }` | Depth falloff settings            |
| `fadeSettings` | `FadeSettings`                  | See defaults             | Fade in/out configuration         |
| `blurSettings` | `BlurSettings`                  | See defaults             | Blur transition configuration     |
| `className`    | `string`                        | `'h-96 w-full'`          | CSS classes                       |
| `style`        | `React.CSSProperties`           | `{}`                     | Inline styles                     |

## Image Format

Images can be provided as:

- Strings: `'image.jpg'`
- Objects: `{ src: 'image.jpg', alt: 'Description' }`

## Dependencies

- `three` - Three.js 3D library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `@types/three` - TypeScript definitions

## Browser Support

- Modern browsers with WebGL support
- Graceful fallback for unsupported browsers
- Mobile touch support

## Performance

- Optimized material pooling
- Efficient texture management
- Smooth 60fps animations
- Memory-conscious image loading

## Examples

### Full Screen Gallery

```tsx
<InfiniteGallery
  images={images}
  className="h-screen w-full"
  visibleCount={12}
  speed={1.2}
/>
```

### Compact Gallery

```tsx
<InfiniteGallery
  images={images}
  className="h-96 w-full"
  visibleCount={6}
  speed={0.8}
/>
```

### Custom Transitions

```tsx
<InfiniteGallery
  images={images}
  fadeSettings={{
    fadeIn: { start: 0.1, end: 0.3 },
    fadeOut: { start: 0.7, end: 0.9 },
  }}
  blurSettings={{
    blurIn: { start: 0.0, end: 0.2 },
    blurOut: { start: 0.8, end: 1.0 },
    maxBlur: 4.0,
  }}
/>
```

## Integration

The component is already integrated into the homepage at `/` and has a dedicated demo page at `/gallery-demo`.

## Customization

The component uses custom shaders for cloth-like effects. You can modify the vertex and fragment shaders in the `createClothMaterial` function to achieve different visual effects.
