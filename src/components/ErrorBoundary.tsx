'use client'

import React from 'react'

class ErrorBoundary extends React.Component<
    { children: React.ReactNode; fallback?: React.ReactNode },
    { hasError: boolean; error?: Error }
> {
    constructor(props: any) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="p-8 text-center">
                    <h2 className="text-xl font-bold text-red-500">Something went wrong</h2>
                    <p className="text-white/70 mt-2">{this.state.error?.message}</p>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
