'use client';

import Link from 'next/link';
import styles from './ServiceLayout.module.css';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  category: 'simple' | 'medium' | 'advanced' | 'special';
  componentName: string;
  nextComponent?: {
    name: string;
    href: string;
  };
  prevComponent?: {
    name: string;
    href: string;
  };
}

export default function ServiceLayout({ 
  children, 
  title, 
  description, 
  category, 
  componentName,
  nextComponent,
  prevComponent 
}: ServiceLayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.separator}>›</span>
          <Link href="/gsap-showcase" className={styles.breadcrumbLink}>GSAP Showcase</Link>
          <span className={styles.separator}>›</span>
          <span className={styles.current}>{title}</span>
        </div>
        
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <span className={`${styles.category} ${styles[category]}`}>
              {category.toUpperCase()}
            </span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
          
          <div className={styles.actions}>
            <Link href="/gsap-showcase" className={styles.backBtn}>
              ← Back to Gallery
            </Link>
            <button 
              className={styles.codeBtn}
              onClick={() => {
                // Copy component import code to clipboard
                const code = `import ${componentName} from '@/components/gsap/${componentName}';`;
                navigator.clipboard.writeText(code);
                alert('Import code copied to clipboard!');
              }}
            >
              📋 Copy Import
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.demoContainer}>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.navigation}>
          {prevComponent && (
            <Link href={prevComponent.href} className={styles.navLink}>
              ← {prevComponent.name}
            </Link>
          )}
          
          <div className={styles.spacer}></div>
          
          {nextComponent && (
            <Link href={nextComponent.href} className={styles.navLink}>
              {nextComponent.name} →
            </Link>
          )}
        </div>
        
        <div className={styles.footerContent}>
          <div className={styles.info}>
            <h3>Component Details</h3>
            <ul>
              <li><strong>Category:</strong> {category.charAt(0).toUpperCase() + category.slice(1)}</li>
              <li><strong>Component:</strong> {componentName}</li>
              <li><strong>GSAP Plugins:</strong> ScrollTrigger, Timeline</li>
            </ul>
          </div>
          
          <div className={styles.links}>
            <h3>Resources</h3>
            <ul>
              <li><a href="https://greensock.com/scrolltrigger/" target="_blank" rel="noopener noreferrer">ScrollTrigger Docs</a></li>
              <li><a href="https://greensock.com/docs/" target="_blank" rel="noopener noreferrer">GSAP Documentation</a></li>
              <li><a href="https://codepen.io/collection/gsap-scrolltrigger" target="_blank" rel="noopener noreferrer">More Demos</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
