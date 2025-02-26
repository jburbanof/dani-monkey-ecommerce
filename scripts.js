const profileImgContainer = document.querySelector(".profileImgContainer");
const navBar = document.getElementById("navBar");
const responsiveMenu = document.querySelector(".responsiveMenu");
const openResponsiveMenu = document.getElementById("openResponsiveMenu");
const closeResponsiveMenu = document.getElementById("closeResponsiveMenu");
const videos = Array.from(document.querySelectorAll("iframe"));
const faces = document.querySelectorAll(".face");
/* const buttonTags = document.querySelectorAll(".buttonTag"); */
closeResponsiveMenu.addEventListener("click", () => {
	responsiveMenu.style.display = "none";
});
openResponsiveMenu.addEventListener("click", () => {
	responsiveMenu.style.display = "flex";
});

videos.forEach((video) => {
	const videoWidth = getComputedStyle(video).width;
	video.style.height = `calc(${videoWidth} * 0.5625)`;
	window.addEventListener("resize", () => {
		video.style.height = `calc(${videoWidth} * 0.5625)`;
	});
});

const hoverAnimation = (element, gap, imgHeight, img) => {
	element.addEventListener("mouseover", () => {
		img.style.bottom = `calc(${gap} - 2px)`;
	});
	element.addEventListener("mouseout", () => {
		img.style.bottom = `calc( -${gap} - ${imgHeight} )`;
	});
};
window.addEventListener("load", () => {
	faces.forEach((face) => {
		const imgHeight = window.getComputedStyle(face)["height"];
		const buttonTag = face.nextElementSibling;
		const gap = window.getComputedStyle(buttonTag)["height"];
		face.style.visibility = "unset";
		face.style.bottom = `calc( -${gap} - ${imgHeight} )`;
		hoverAnimation(face, gap, imgHeight, face);
		hoverAnimation(buttonTag, gap, imgHeight, face);
	});
	 
});
