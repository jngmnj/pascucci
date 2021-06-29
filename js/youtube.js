var YouTubeIframeLoader = require('youtube-iframe');
 
YouTubeIframeLoader.load(function(YT) {
    new YT.Player('player', {
      videoId: 'A2clOFkrJdI', //url에 ID값 있음
      // host: 'https://www.youtube.com',
      host: `${window.location.protocol}//www.youtube.com`,
      playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'A2clOFkrJdI' //반복재생할 유튜브 영상ID
      },
      events: {
        onReady: function(event){        
          //events부분에 ready가되면 음소거하겠다
          event.target.mute() //음소거
        }
      }
    });
});
