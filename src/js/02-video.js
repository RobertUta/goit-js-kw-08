const vimeoPlayer = new Vimeo.Player('vimeo-player');
vimeoPlayer.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    vimeoPlayer.setCurrentTime(savedTime);
  }
});
