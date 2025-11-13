'use client';

import { useEffect, useRef } from 'react';

export default function CenterModeProductivitySlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const track = containerRef.current.querySelector('#track') as HTMLElement;
    const wrap = track?.parentElement as HTMLElement;
    const cards = Array.from(track?.children || []) as HTMLElement[];
    const prev = containerRef.current.querySelector('#prev') as HTMLButtonElement;
    const next = containerRef.current.querySelector('#next') as HTMLButtonElement;
    const dotsBox = containerRef.current.querySelector('#dots') as HTMLElement;

    if (!track || !wrap || !prev || !next || !dotsBox) return;

    const isMobile = () => matchMedia("(max-width:767px)").matches;

    cards.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.onclick = () => activate(i, true);
      dotsBox.appendChild(dot);
    });
    const dots = Array.from(dotsBox.children);

    let current = 0;

    function center(i: number) {
      const card = cards[i];
      if (!card) return;
      const axis = isMobile() ? "top" : "left";
      const size = isMobile() ? "clientHeight" : "clientWidth";
      const start = isMobile() ? (card as any).offsetTop : (card as any).offsetLeft;
      wrap.scrollTo({
        [axis]: start - (wrap[size as keyof typeof wrap] / 2 - card[size as keyof typeof card] / 2),
        behavior: "smooth"
      } as ScrollToOptions);
    }

    function toggleUI(i: number) {
      cards.forEach((c, k) => c.toggleAttribute("active", k === i));
      dots.forEach((d, k) => (d as HTMLElement).classList.toggle("active", k === i));
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === cards.length - 1;
    }

    function activate(i: number, scroll: boolean) {
      if (i === current) return;
      current = i;
      toggleUI(i);
      if (scroll) center(i);
    }

    function go(step: number) {
      activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
    }

    prev.onclick = () => go(-1);
    next.onclick = () => go(1);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };

    addEventListener("keydown", handleKeyDown, { passive: true });

    cards.forEach((card, i) => {
      card.addEventListener(
        "mouseenter",
        () => matchMedia("(hover:hover)").matches && activate(i, true)
      );
      card.addEventListener("click", () => activate(i, true));
    });

    let sx = 0, sy = 0;
    track.addEventListener(
      "touchstart",
      (e: TouchEvent) => {
        sx = e.touches[0].clientX;
        sy = e.touches[0].clientY;
      },
      { passive: true }
    );

    track.addEventListener(
      "touchend",
      (e: TouchEvent) => {
        const dx = e.changedTouches[0].clientX - sx;
        const dy = e.changedTouches[0].clientY - sy;
        if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
          go((isMobile() ? dy : dx) > 0 ? -1 : 1);
      },
      { passive: true }
    );

    if (window.matchMedia("(max-width:767px)").matches) dotsBox.hidden = true;

    const handleResize = () => center(current);
    addEventListener("resize", handleResize);

    toggleUI(0);
    center(0);

    return () => {
      removeEventListener("keydown", handleKeyDown);
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        :global(:root) {
          --productivity-gap: 1.25rem;
          --productivity-speed: 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --productivity-closed: 5rem;
          --productivity-open: 30rem;
          --productivity-accent: #000000;
        }
        :global(.productivity-head) {
          max-width: 1400px;
          margin: auto;
          padding: 96px 80px 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }
        :global(.productivity-head h2) {
          font: 500 3.5rem/1.15 Inter, sans-serif;
          letter-spacing: -0.015em;
          color: #000000;
          margin: 0;
        }
        :global(.productivity-head p) {
          font: 400 1.25rem/1.6 Inter, sans-serif;
          color: #4a4a4a;
          margin: 0.5rem 0 0 0;
        }
        :global(.productivity-head-content) {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        @media (max-width: 1023px) {
          :global(.productivity-head) {
            padding: 96px 24px 40px;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          :global(.productivity-head h2) {
            font-size: 3.5rem;
          }
          :global(.productivity-head p) {
            font-size: 1.125rem;
          }
        }
        :global(.productivity-nav-btn) {
          width: 2.5rem;
          height: 2.5rem;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 50%;
          background: #ffffff;
          color: #000000;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
        }
        :global(.productivity-nav-btn:hover) {
          background: #000000;
          color: #fff;
          box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
        }
        :global(.productivity-nav-btn:disabled) {
          opacity: 0.3;
          cursor: default;
        }
        :global(.productivity-slider) {
          max-width: 1400px;
          margin: auto;
          overflow: hidden;
          padding: 0 80px;
        }
        @media (max-width: 1023px) {
          :global(.productivity-slider) {
            padding: 0 24px;
          }
        }
        :global(.productivity-controls) {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
        }
        :global(.productivity-track) {
          display: flex;
          gap: var(--productivity-gap);
          align-items: flex-start;
          justify-content: center;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          padding-bottom: 40px;
        }
        :global(.productivity-track::-webkit-scrollbar) {
          display: none;
        }
        :global(.productivity-project-card) {
          position: relative;
          flex: 0 0 var(--productivity-closed);
          height: 26rem;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: flex-basis var(--productivity-speed), transform var(--productivity-speed);
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #ffffff;
        }
        :global(.productivity-project-card[active]) {
          flex-basis: var(--productivity-open);
          transform: translateY(-6px);
          box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
        }
        :global(.productivity-project-card__bg) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75) saturate(75%);
          transition: filter 0.3s, transform var(--productivity-speed);
        }
        :global(.productivity-project-card:hover .productivity-project-card__bg) {
          filter: brightness(0.9) saturate(100%);
          transform: scale(1.06);
        }
        :global(.productivity-project-card__content) {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.7rem;
          padding: 0;
          background: linear-gradient(transparent 40%, rgba(245, 243, 239, 0.95) 100%);
          z-index: 2;
        }
        :global(.productivity-project-card__title) {
          display: none;
        }
        :global(.productivity-project-card__thumb),
        :global(.productivity-project-card__desc) {
          display: none;
        }
        :global(.productivity-project-card__btn) {
          display: none;
        }
        :global(.productivity-project-card[active] .productivity-project-card__content) {
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 1.2rem 2rem;
          gap: 1.1rem;
        }
        :global(.productivity-project-card[active] .productivity-project-card__btn) {
          display: block;
        }
        :global(.productivity-project-card__thumb) {
          width: 133px;
          height: 269px;
          border-radius: 0.45rem;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        :global(.productivity-project-card__desc) {
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 16rem;
        }
        :global(.productivity-project-card__btn) {
          padding: 0.55rem 1.3rem;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 9999px;
          background: #ffffff;
          color: #000000;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
        }
        :global(.productivity-project-card__btn:hover) {
          background: #000000;
          color: #fff;
          box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
        }
        :global(.productivity-dots) {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          padding: 20px 0;
        }
        :global(.productivity-dot) {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: 0.3s;
        }
        :global(.productivity-dot.active) {
          background: var(--productivity-accent);
          transform: scale(1.2);
        }
        @media (max-width: 767px) {
          :global(:root) {
            --productivity-closed: 100%;
            --productivity-open: 100%;
            --productivity-gap: 0.8rem;
          }
          :global(.productivity-head) {
            padding: 96px 24px 40px;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          :global(.productivity-head h2) {
            font-size: 3.5rem;
          }
          :global(.productivity-head p) {
            font-size: 1.125rem;
          }
          :global(.productivity-slider) {
            padding: 0 24px;
          }
          :global(.productivity-track) {
            flex-direction: column;
            scroll-snap-type: y mandatory;
            gap: 0.8rem;
            padding-bottom: 20px;
          }
          :global(.productivity-project-card) {
            height: auto;
            min-height: 80px;
            flex: 0 0 auto;
            width: 100%;
            scroll-snap-align: start;
          }
          :global(.productivity-project-card[active]) {
            min-height: 300px;
            transform: none;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }
          :global(.productivity-project-card__content) {
            flex-direction: row;
            justify-content: flex-start;
            padding: 1rem;
            align-items: center;
            gap: 1rem;
          }
          :global(.productivity-project-card__title),
          :global(.productivity-project-card__thumb),
          :global(.productivity-project-card__desc) {
            display: none;
          }
          :global(.productivity-project-card__btn) {
            display: none;
          }
          :global(.productivity-project-card[active] .productivity-project-card__content) {
            align-items: center;
            justify-content: flex-end;
            padding: 1.5rem;
          }
          :global(.productivity-project-card[active] .productivity-project-card__btn) {
            align-self: center;
            width: 100%;
            text-align: center;
            padding: 0.7rem;
          }
          :global(.productivity-dots) {
            display: none;
          }
        }
      `}</style>
      <section ref={containerRef} className="w-full bg-background-primary py-24 lg:py-32">
        <div className="productivity-head">
          <div className="productivity-head-content">
            <h2>Transform your business with innovative solutions</h2>
            <p>Discover our comprehensive suite of services designed to accelerate your digital transformation</p>
          </div>
          <div className="productivity-controls">
            <button id="prev" className="productivity-nav-btn" aria-label="Prev">‹</button>
            <button id="next" className="productivity-nav-btn" aria-label="Next">›</button>
          </div>
        </div>
        <div className="productivity-slider">
          <div className="productivity-track" id="track">
            <article className="productivity-project-card" active>
              <img className="productivity-project-card__bg" src="/Ai.png" alt="AI Services" />
              <div className="productivity-project-card__content">
                <button className="productivity-project-card__btn">Learn More</button>
              </div>
            </article>
            <article className="productivity-project-card">
              <img className="productivity-project-card__bg" src="/Cloud.png" alt="Cloud Services" />
              <div className="productivity-project-card__content">
                <button className="productivity-project-card__btn">Learn More</button>
              </div>
            </article>
            <article className="productivity-project-card">
              <img className="productivity-project-card__bg" src="/CustomServices.png" alt="Custom Services" />
              <div className="productivity-project-card__content">
                <button className="productivity-project-card__btn">Learn More</button>
              </div>
            </article>
            <article className="productivity-project-card">
              <img className="productivity-project-card__bg" src="/dataintelligence.png" alt="Data Intelligence" />
              <div className="productivity-project-card__content">
                <button className="productivity-project-card__btn">Learn More</button>
              </div>
            </article>
            <article className="productivity-project-card">
              <img className="productivity-project-card__bg" src="/digitalTransformation.png" alt="Digital Transformation" />
              <div className="productivity-project-card__content">
                <button className="productivity-project-card__btn">Learn More</button>
              </div>
            </article>
            <article className="productivity-project-card">
              <img className="productivity-project-card__bg" src="/UIUX.png" alt="UI/UX Design" />
              <div className="productivity-project-card__content">
                <button className="productivity-project-card__btn">Learn More</button>
              </div>
            </article>
          </div>
        </div>
        <div className="productivity-dots" id="dots"></div>
      </section>
    </>
  );
}

