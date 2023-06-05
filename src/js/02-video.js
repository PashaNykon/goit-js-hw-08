import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayTime, 1000));

function onPlayTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
   }

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime)
    .then(function (seconds) { })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
          
            break;

        default:
            
            break;
    }
});