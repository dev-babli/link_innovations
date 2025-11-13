import InfiniteGallery from "@/components/ui/3d-gallery-photography";

interface CompactGalleryProps {
    images: Array<{ src: string; alt?: string }>;
    className?: string;
}

export default function CompactGallery({ images, className = "h-96 w-full" }: CompactGalleryProps) {
    return (
        <div className={`relative ${className}`}>
            <InfiniteGallery
                images={images}
                speed={0.8}
                zSpacing={2}
                visibleCount={8}
                falloff={{ near: 0.6, far: 10 }}
                className="h-full w-full rounded-lg overflow-hidden"
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

            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>
        </div>
    );
}
