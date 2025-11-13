document.addEventListener("DOMContentLoaded", () => {
	const items = document.querySelectorAll(".menu-overlay__main ul li");
	const bgImgs = document.querySelectorAll(".menu-overlay__bg-img img");
	const menuOverlay = document.querySelector(".menu-overlay");
	const pageContent = document.querySelector(".page-content");
	const toggleButton = document.querySelector("#menu-toggle");

	// 	====menu overlay background animation====

	// Show first image by default
	gsap.set(bgImgs[0], { opacity: 1 });

	items.forEach((item, index) => {
		item.addEventListener("mouseenter", () => {
			// Fade out all images
			gsap.to(bgImgs, {
				opacity: 0,
				duration: 0.5,
				ease: "power2.inOut"
			});

			// Fade in corresponding image
			gsap.to(bgImgs[index + 1], {
				opacity: 1,
				scale: 1.18,
				duration: 0.5,
				ease: "power3.inOut"
			});
		});

		item.addEventListener("mouseleave", () => {
			// Reset to default (first image)
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

	// 	====menu overlay oepning/closing animation====
	let menuTimeline = gsap.timeline({ paused: true });

	// === OPEN ANIMATION ===
	menuTimeline
		// Animate menu overlay clip-path open
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

		// Animate page content
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
		// 	Animate background zoom
		.to(
			".menu-overlay__bg-img img",
			{
				scale: 1.1,
				duration: 1,
				ease: "power3.inOut"
			},
			0
		)
		// Animate menu links in
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
		// Animate toggle button
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

	// === CLOSE ANIMATION (just reverse the timeline) ===

	toggleButton.addEventListener("click", () => {
		if (menuTimeline.progress() === 1) {
			// Menu is open, close it
			menuTimeline.reverse();
			menuTimeline.eventCallback("onReverseComplete", () => {
				menuOverlay.style.pointerEvents = "none";
			});
		} else {
			// Menu is closed, open it
			menuTimeline.play();
		}
	});
});
