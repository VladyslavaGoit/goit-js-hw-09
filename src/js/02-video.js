import Player from '@vimeo/player';
const seconds = localStorage.getItem("videoplayer-current-time") || 0;
 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    const throttle = require('lodash.throttle');
    player.on('timeupdate', throttle(onPlay,1000));
    function onPlay(event) {
    console.log(event)
    const currentTime = event.seconds
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
}
    player.setCurrentTime(seconds)
  