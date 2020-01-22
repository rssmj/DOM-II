//main
let docPage = document.querySelector("html");
docPage.addEventListener("click", () => {
	docPage.style.opacity = "1";
});
docPage.addEventListener("dblclick", () => {
	docPage.style.opacity = ".5";
});
docPage.addEventListener("click", () => {
	docPage.animate(
		{
			opacity: ["(.5, .7)"],
			backgroundColor: ["#17A2B8", "#ffffff"],
			easing: ["ease-in-out"]
		},
		4000
	);
});

docPage.addEventListener("dblclick", () => {
	docPage.animate(
		[{ transform: "translateX(0rem)" }, { transform: "translateY(8rem)" }],
		{
			duration: 4000
		}
	);
});

let mainHeader = document.querySelector(".main-navigation");
mainHeader.addEventListener("dblclick", () => {
	mainHeader.animate(
		[
			{ transform: "scale(.9)" },
			{ transform: "scale(1.1)" },
			{ transform: "scale(1)" }
		],
		{
			duration: 2000,
			iterations: 1
		}
	);
});

//nav
let mainNav = document.querySelector(".nav");
mainNav.addEventListener("mousemove", () => {
	mainNav.style.transform = "scale(1.3)";
	mainNav.style.transition = "1s";
});

let funBus = document.querySelectorAll(".logo-heading").forEach(item => {
	item.addEventListener("mouseover", () => {
		item.style.textTransform = "lowercase";
		item.style.color = "#fcb856";
		item.style.transition = ".6s";
	});
	item.addEventListener("mouseleave", () => {
		item.style.textTransform = "initial";
		item.style.color = "#17a2b8";
		item.style.transition = ".6s";
	});
	item.addEventListener("mousemove", () => {
		gsap.to(".logo-heading", {
			rotation: 360,
			x: 175,
			duration: 3,
			ease: "elastic"
		});
	});

	let navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach(item => {
		item.addEventListener("mouseover", () => {
			item.animate(
				{
					opacity: ["(.5, .7)"],
					color: ["#ffebcd", "#17a2b8", "#ffffff", "#fcb856"]
				},
				3500
			);
		});
		item.addEventListener("mouseenter", () => {
			item.animate(
				[
					{ transform: "scale(1.8)" },
					{ transform: "scale(.9)" },
					{ transform: "scale(1.4)" },
					{ transform: "scale(1)" }
				],
				{
					duration: 4000,
					iterations: 1
				}
			);
			item.addEventListener("click", () => {
				item.animate(
					[
						{ transform: "scale(1.8)" },
						{ transform: "scale(1.1)" },
						{ transform: "scale(1)" },
						{ transform: "translateY(2.5em)" },
						{ transform: "translateX(2.5em)" },
						{ transform: "scale(.7)" },
						{ transform: "scale(1.09)" },
						{ transform: "scale(1)" }
					],
					{
						duration: 4000,
						iterations: 1
					}
				);
			});
			navLinks.forEach(item => {
				item.addEventListener("click", event => {
					event.preventDefault();
					event.stopPropagation();
				});
			});
		});
	});

	//text
	let pText = document.querySelectorAll("p");
	pText.forEach(p => {
		p.addEventListener("mouseup", () => {
			p.animate(
				[
					{ transform: "scale(1.5)" },
					{ transform: "scale(.8)" },
					{ transform: "scale(1.2)" },
					{ transform: "scale(1)" }
				],
				{
					duration: 1500,
					iterations: 1
				}
			);
		});
		let hText = document.querySelectorAll("h2, h4");
		hText.forEach(h => {
			h.addEventListener("mousedown", () => {
				h.animate(
					[
						{ transform: "scale(1.5)" },
						{ transform: "scale(.8)" },
						{ transform: "scale(1.2)" },
						{ transform: "scale(1)" }
					],
					{
						duration: 1500,
						iterations: 1
					}
				);
			});
		});

		//img
		let busImg = document.querySelector(".intro img");
		busImg.addEventListener("click", () => {
			gsap.fromTo(
				".intro img",
				{ scale: 0.1 },
				{ scale: 1.1, duration: 1, ease: "expoScale(1, 1.3)", repeat: 2 }
			);
		});

		let imgAll = document.querySelectorAll("img");
		imgAll.forEach(item => {
			item.addEventListener("mouseover", () => {
				item.style.transform = "scale(1.125)";
				item.style.transition = ".6s";
			});

			imgAll.forEach(item => {
				item.addEventListener("mouseout", () => {
					item.style.transform = "scale(1)";
					item.style.transition = "1.2s";
				});
			});

			//btn
			let btnAll = document.querySelectorAll(".btn");
			btnAll.forEach(item => {
				item.addEventListener("mouseover", () => {
					item.animate(
						{
							opacity: ["(0.2, .5)"],
							backgroundColor: ["#ffebcd", "#17a2b8", "#ffffff", "#fcb856"],
							color: ["#000000", "#ffffff", "#000000", "#ffffff"]
						},
						2500
					);
				});

				item.addEventListener("click", () => {
					item.animate(
						[
							{ transform: "scale(.8)" },
							{ transform: "scale(1.1)" },
							{ transform: "scale(1)" },
							{ transform: "translateY(1.5em)" },
							{ transform: "scale(.7)" },
							{ transform: "scale(1.09)" },
							{ transform: "scale(1)" }
						],
						{
							duration: 2700,
							iterations: 1
						}
					);
				});
			});
		});
	});
});
