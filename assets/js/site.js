"use strict";

// Do not intercept wheel, touch, or ordinary page scrolling.
document.querySelectorAll("a[href]").forEach((link) => {
  const url = new URL(link.getAttribute("href"), window.location.href);
  const externalSite = (url.protocol === "https:" || url.protocol === "http:")
    && url.origin !== window.location.origin;
  const contactLink = url.protocol === "mailto:" || url.protocol === "tel:";
  if (externalSite || contactLink) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.removeAttribute("target");
  }
});

// Load each player only when the visitor chooses to watch it.
document.querySelectorAll(".video-frame[data-video-id]").forEach((frame) => {
  const button = frame.querySelector(".video-play");
  if (!button) return;
  button.addEventListener("click", () => {
    const videoId = frame.dataset.videoId;
    if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return;
    const player = document.createElement("iframe");
    player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    player.title = frame.dataset.videoTitle || "Project video";
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    player.referrerPolicy = "strict-origin-when-cross-origin";
    player.allowFullscreen = true;
    frame.replaceChildren(player);
    player.focus();
  }, { once: true });
});
