import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    checkered?: boolean;
}

export function Section({ children, className, checkered, ...props }: SectionProps) {
    const baseClasses = "py-16 md:py-24 px-4 md:px-8 w-full max-w-7xl mx-auto";
    // Checkered pattern could be added here if needed, keeping it simple for now

    return (
        <section className={`w-full ${className || ''}`} {...props}>
            <div className={baseClasses}>
                {children}
            </div>
        </section>
    );
}
