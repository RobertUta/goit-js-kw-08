const e=new Vimeo.Player("vimeo-player");e.on("timeupdate",(e=>{const t=e.seconds;localStorage.setItem("videoplayer-current-time",t)})),window.addEventListener("load",(()=>{const t=localStorage.getItem("videoplayer-current-time");t&&e.setCurrentTime(t)}));
//# sourceMappingURL=02-video.c509598b.js.map
