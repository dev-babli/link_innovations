// Register all GSAP plugins
gsap.registerPlugin(Flip, ScrollTrigger, SplitText);

// ===================================
// PRELOADER ANIMATION (FLIP)
// ===================================
let layouts = ["final", "plain", "columns", "grid"];
let container = document.querySelector("#preloader");
let curLayout = 0;

function nextState() {
  const state = Flip.getState(".letter, .for, .gsap", {props: "color,backgroundColor", simple: true});
  
  container.classList.remove(layouts[curLayout]);
  curLayout = (curLayout + 1) % layouts.length;
  container.classList.add(layouts[curLayout]);

  Flip.from(state, {
    absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    spin: curLayout === 0,
    simple: true,
    onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
    onLeave: elements => gsap.to(elements, {opacity: 0})
  });

  if (curLayout === 0) {
    // After final animation, hide preloader and show main content
    gsap.delayedCall(3.5, () => {
      gsap.to("#preloader", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.querySelector("#preloader").style.display = "none";
          document.querySelector(".page-content").style.display = "block";
          initMainContent();
        }
      });
    });
  } else {
    gsap.delayedCall(1.5, nextState);
  }
}

// Start preloader animation
gsap.delayedCall(1, nextState);

// ===================================
// MAIN CONTENT INITIALIZATION
// ===================================
function initMainContent() {
  console.log("Initializing main content...");
  
  // Initialize hero zoom and navigation
  initHeroZoom();
  initNavigation();
}

// ===================================
// HERO ZOOM ANIMATION
// ===================================
function initHeroZoom() {
  console.log("Initializing Hero Zoom...");
  
  // Small delay to ensure DOM is ready
  gsap.delayedCall(0.1, () => {
    const heroTrigger = document.querySelector(".wrapper-hero");
    const heroImg = document.querySelector(".image-container img");
    
    console.log("Hero trigger element:", heroTrigger);
    console.log("Hero image element:", heroImg);
    
    if (!heroTrigger || !heroImg) {
      console.error("Hero elements not found!");
      return;
    }
    
    ScrollTrigger.refresh(); // Refresh ScrollTrigger calculations
    
    const heroTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper-hero",
          start: "top top",
          end: "+=150%",
          pin: true,
          pinSpacing: true,
          scrub: true,
          markers: false,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })
      .to(".image-container img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut"
        },
        "<"
      );
      
    console.log("Hero zoom animation created:", heroTimeline);
  });
}

// ===================================
// NAVIGATION MENU
// ===================================
function initNavigation() {
  const items = document.querySelectorAll(".menu-overlay__main ul li");
  const bgImgs = document.querySelectorAll(".menu-overlay__bg-img img");
  const menuOverlay = document.querySelector(".menu-overlay");
  const pageContent = document.querySelector(".page-content");
  const toggleButton = document.querySelector("#menu-toggle");

  // Show first image by default
  gsap.set(bgImgs[0], { opacity: 1 });

  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(bgImgs, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });

      gsap.to(bgImgs[index + 1], {
        opacity: 1,
        scale: 1.18,
        duration: 0.5,
        ease: "power3.inOut"
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(bgImgs, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scale: 1
      });
      gsap.to(bgImgs[0], {
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut"
      });
    });
  });

  let menuTimeline = gsap.timeline({ paused: true });

  menuTimeline
    .to(
      menuOverlay,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)",
        duration: 0.8,
        ease: "power3.inOut",
        onStart: () => {
          menuOverlay.style.pointerEvents = "none";
        },
        onComplete: () => {
          menuOverlay.style.clipPath = "none";
          menuOverlay.style.pointerEvents = "auto";
        }
      },
      0
    )
    .to(
      pageContent,
      {
        yPercent: 20,
        rotation: 18,
        scale: 1.3,
        transformOrigin: "left top",
        duration: 0.8,
        ease: "power3.inOut"
      },
      0
    )
    .to(
      ".menu-overlay__bg-img img",
      {
        scale: 1.1,
        duration: 1,
        ease: "power3.inOut"
      },
      0
    )
    .add(() => {
      const linkTexts = document.querySelectorAll("[data-text-anim]");

      linkTexts.forEach((el) => {
        gsap.set(el, { visibility: "visible" });

        const split = SplitText.create(el, {
          type: "chars",
          smartWrap: true,
          mask: "chars"
        });

        menuTimeline.fromTo(
          split.chars,
          { yPercent: -200 },
          { yPercent: 0, ease: "power2.inOut", duration: 0.5, stagger: 0.01 },
          0.2
        );
      });
    }, 0)
    .to(
      ".toggle-line-top",
      {
        transformOrigin: "center",
        y: 4,
        scaleX: 0.8,
        rotation: 45,
        duration: 0.4,
        ease: "back.out(1.5)"
      },
      0.2
    )
    .to(
      ".toggle-line-bottom",
      {
        transformOrigin: "center",
        y: -4,
        scaleX: 0.8,
        rotation: -45,
        duration: 0.4,
        ease: "back.out(1.5)"
      },
      0.2
    );

  toggleButton.addEventListener("click", () => {
    if (menuTimeline.progress() === 1) {
      menuTimeline.reverse();
      menuTimeline.eventCallback("onReverseComplete", () => {
        menuOverlay.style.pointerEvents = "none";
      });
    } else {
      menuTimeline.play();
    }
  });
}
