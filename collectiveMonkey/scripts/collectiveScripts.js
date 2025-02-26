const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});
let projectId = params.project_id ? params.project_id : "3";
const projects = Array.from(document.querySelectorAll(".CMProject"));
const responsiveMenu = document.querySelector(".responsiveMenu");
const openResponsiveMenu = document.getElementById("openResponsiveMenu");
const closeResponsiveMenu = document.getElementById("closeResponsiveMenu");
const header = document.getElementById("header");
const headerBackground = new Image();
const videos = Array.from(document.querySelectorAll("iframe"));

closeResponsiveMenu.addEventListener("click", () => {
	responsiveMenu.style.display = "none";
});
openResponsiveMenu.addEventListener("click", () => {
	responsiveMenu.style.display = "flex";
});

const setProjectVisivility = () => {
	const projectVisible = projects.filter((project) => project.id === projectId);
	projectVisible[0].style.display = "flex";
};
setProjectVisivility();

headerBackground.src =
	"../assets/CMonkey_render/Cmonkey_Header_Llustration_v02.png";
["resize", "load"].forEach((event) => {
	window.addEventListener(event, () => {
		const imgRatio = headerBackground.width / headerBackground.height;
		const newHeight = (window.innerWidth - 200) / imgRatio;
		header.style.height = `${newHeight}px`;
		header.style.minHeight = `${newHeight}px`;
	});
});

videos.forEach((video) => {
	const videoWidth = getComputedStyle(video).width;
	video.style.height = `calc(${videoWidth} * 0.5625)`;
	window.addEventListener("resize", () => {
		video.style.height = `calc(${videoWidth} * 0.5625)`;
	});
});
