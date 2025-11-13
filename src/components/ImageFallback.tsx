"use client";

import Image from 'next/image';
import { useState } from 'react';

interface ImageFallbackProps {
    src: string;
    alt: string;
    fallback?: string;
    fill?: boolean;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    sizes?: string;
    onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
    src,
    alt,
    fallback = '/images/placeholder.jpg',
    fill = false,
    width,
    height,
    className = '',
    priority = false,
    sizes,
    onError,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (!hasError && fallback) {
            setHasError(true);
            setImgSrc(fallback);
        }
        onError?.(e);
    };

    if (fill) {
        return (
            <Image
                src={imgSrc}
                alt={alt}
                fill
                className={className}
                priority={priority}
                sizes={sizes}
                onError={handleError}
                unoptimized={false}
                {...props}
            />
        );
    }

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority={priority}
            sizes={sizes}
            onError={handleError}
            unoptimized={false}
            {...props}
        />
    );
};
