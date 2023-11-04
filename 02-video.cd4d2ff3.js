!function(){var e=new Vimeo.Player("vimeo-player");e.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)})),window.addEventListener("load",(function(){var t=localStorage.getItem("videoplayer-current-time");t&&e.setCurrentTime(t)}))}();
//# sourceMappingURL=02-video.cd4d2ff3.js.map
