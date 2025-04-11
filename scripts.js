const profileImgContainer = document.querySelector('.profileImgContainer');
const navBar = document.getElementById('navBar');
const responsiveMenu = document.querySelector('.responsiveMenu');
const openResponsiveMenu = document.getElementById('openResponsiveMenu');
const closeResponsiveMenu = document.getElementById('closeResponsiveMenu');
const videos = Array.from(document.querySelectorAll('iframe'));
const faces = document.querySelectorAll('.face');
const mainVideo = document.getElementById('mainVideo');
const loader = document.getElementById('loader');
const paths = {
  illustration: faces[0],
  animation: faces[1],
  branding: faces[2],
  contact: faces[3],
};
const currentPath =
  paths[window.location.pathname.split('/')[window.location.pathname.split('/').length-2]];
closeResponsiveMenu.addEventListener('click', () => {
  responsiveMenu.style.display = 'none';
});
openResponsiveMenu.addEventListener('click', () => {
  responsiveMenu.style.display = 'flex';
});

videos?.forEach(video => {
  const videoWidth = getComputedStyle(video).width;
  video.style.height = `calc(${videoWidth} * 0.5625)`;
  window.addEventListener('resize', () => {
    video.style.height = `calc(${videoWidth} * 0.5625)`;
  });
});

mainVideo?.addEventListener('canplaythrough', () => {
  mainVideo.play();
  setTimeout(() => {
    loader.style.display = 'none';
  }, 100);
});

mainVideo?.addEventListener('loadedmetadata', () => {
  mainVideo.currentTime = 7; // Start at the 7-second mark
});
const hoverAnimation = (element, gap, imgHeight, img) => {
  element.addEventListener('mouseover', () => {
    img.style.bottom = `calc(${gap} - 3px)`;
  });
  element.addEventListener('mouseout', () => {
    img.style.bottom = `calc( -${gap} - ${imgHeight} )`;
  });
};
const getFaceStyles = face => {
  const imgHeight = window.getComputedStyle(face)['height'];
  const buttonTag = face.nextElementSibling;
  const gap = window.getComputedStyle(buttonTag)['height'];
  return { imgHeight, gap, buttonTag };
};
const defaultFace = () => {
  if (currentPath) {
    const { gap, imgHeight } = getFaceStyles(currentPath);
    currentPath.style.visibility = 'unset';
    currentPath.style.bottom = `calc( -${gap} - ${imgHeight} )`;
    currentPath.style.bottom = `calc(${gap} - 3px)`;
  }
};
window.addEventListener('load', () => {
  defaultFace();
  faces.forEach(face => {
    if (face.id != currentPath?.id) {
      const { gap, imgHeight, buttonTag } = getFaceStyles(face);
      face.style.visibility = 'unset';
      face.style.bottom = `calc( -${gap} - ${imgHeight} )`;
      hoverAnimation(face, gap, imgHeight, face);
      hoverAnimation(buttonTag, gap, imgHeight, face);
    }
  });
});
