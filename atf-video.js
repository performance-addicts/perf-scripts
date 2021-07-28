function isVideoAboveTheFold() {
  let flag = false;
  const videos = document.querySelectorAll("video");
  if (videos.length) {
    videos.forEach((video) => {
      const position = parseInt(video.getBoundingClientRect().top);
      if (position < window.innerHeight) {
        flag = true;
      }
    });
  }

  return flag;
}

isVideoAboveTheFold();

function getATFVideoDetails() {
  const videos = document.querySelectorAll("video");
  const details = [];
  if (videos.length) {
    videos.forEach((video) => {
      const position = parseInt(video.getBoundingClientRect().top);
      if (position < window.innerHeight) {
        const src =
          video.getAttribute("src") || video.children[0].getAttribute("src");
        details.push(src);
      }
    });
  }

  return details;
}

console.table(getATFVideoDetails());
