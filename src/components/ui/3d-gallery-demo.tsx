import InfiniteGallery from "@/components/ui/3d-gallery-photography";

export default function GalleryDemo() {
    const sampleImages = [
        { src: 'https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', alt: 'Modern Architecture' },
        { src: 'https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Tech Innovation' },
        { src: 'https://images.unsplash.com/photo-1758640920659-0bb864175983?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D', alt: 'Digital Solutions' },
        { src: 'https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D', alt: 'Creative Design' },
        { src: 'https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D', alt: 'Business Growth' },
        { src: 'https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D', alt: 'Team Collaboration' },
        { src: 'https://images.unsplash.com/photo-1725878746053-407492aa4034?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D', alt: 'Innovation Hub' },
        { src: 'https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D', alt: 'Future Technology' },
        { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D', alt: 'Data Analytics' },
        { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D', alt: 'Team Meeting' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D', alt: 'Collaboration' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D', alt: 'Professional Team' },
    ];

    return (
        <div className="relative min-h-screen w-full">
            <InfiniteGallery
                images={sampleImages}
                speed={1.2}
                zSpacing={3}
                visibleCount={12}
                falloff={{ near: 0.8, far: 14 }}
                className="h-screen w-full rounded-lg overflow-hidden"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-serif text-4xl md:text-7xl tracking-tight mb-6">
                        <span className="italic">Link Innovations</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        Experience the future of digital transformation through our immersive 3D gallery
                    </p>
                </div>
            </div>

            {/* Instructions */}
            <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold text-white/70">
                <p>Use mouse wheel, arrow keys, or touch to navigate</p>
                <p className="opacity-60">
                    Auto-play resumes after 3 seconds of inactivity
                </p>
            </div>
        </div>
    );
}
