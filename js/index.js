//main
let docPage = document.querySelector("html");
docPage.addEventListener("click", () => {
	docPage.style.opacity = "1";
});
docPage.addEventListener("dblclick", () => {
	docPage.style.opacity = ".4";
});
docPage.addEventListener("transitionstart", () => {
	docPage.style.backgroundColor = "#17a2b8";
	docPage.style.transform = "translateY(5rem)";
	docPage.style.transition = "1s";
});

let mainHeader = document.querySelector(".main-navigation");
mainHeader.addEventListener("transitionstart", () => {
	mainHeader.style.transform = "scale(.9)";
	mainHeader.style.transition = "3s";
	mainHeader.style.backgroundColor = "fdfdfd";
});

//nav
let mainNav = document.querySelector(".nav");
mainNav.addEventListener("transitionstart", () => {
	mainNav.style.transform = "scale(1.3)";
	mainNav.style.transition = "1s";
});

let funBus = document.querySelectorAll(".logo-heading").forEach(item => {
	item.addEventListener("mouseover", () => {
		item.style.transform = "scale(2.5)";
		item.style.textTransform = "lowercase";
		item.style.color = "#fcb856";
		item.style.transition = ".6s";
	});
	item.addEventListener("mouseleave", () => {
		item.style.transform = "scale(1.5)";
		item.style.textTransform = "initial";
		item.style.color = "#17a2b8";
		item.style.transition = ".6s";
	});
	item.addEventListener("transitionstart", () => {
		// item.style.color = "#17a2b8";
	});

	let navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach(item => {
		item.addEventListener("click", () => {
			item.style.color = "#fcb856";
			item.style.transform = "translateX(3rem)";
			item.style.transition = ".8s";
		});
		navLinks.forEach(item => {
			item.addEventListener("mouseenter", () => {
				item.style.color = "#17a2b8";
				item.style.transform = "translateY(2.75rem)";
				item.style.transition = ".8s";
			});
			navLinks.forEach(item => {
				item.addEventListener("transitionstart", () => {});
				navLinks.forEach(navLinks => {
					navLinks.addEventListener("click", event => {
						event.preventDefault();
						event.stopPropagation();
					});
				});
			});
		});
	});

	//img

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

			//btn

			let btnAll = document.querySelectorAll(".btn");
			btnAll.forEach(item => {
				item.addEventListener("click", () => {
					item.style.transform = "rotate(360deg)";
					item.style.transition = "1.5s";
				});
				item.addEventListener("mouseover", () => {
					item.animate(
						[
							{ transform: "translateX(0rem)" },
							{ transform: "translateY(4rem)" }
						],
						{
							duration: 1000,
							iterations: 1
						}
					);
				});
			});
		});
	});
});
