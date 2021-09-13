// aniview configuration
(function() {
  var config = {
    adConfig : {
      publisherId : "60afcbc58cfdb065440d2426",
      channelId : "60b354389c7adb506d0bd9a4",
      ref1 : "",
      width : 100,
      height : 0,
      autoPlay : true,
      soundButton : true,
      pauseButton : true,
      closebutton : false,
      errorlimit : 100,
      vastRetry : 0,
      loop : true,
      position : ""
    },
    autoPlay : false,
    position : "theplayer",
    width : 100,
    height : 0,
    showBigPlay : true,
    showBigPlayOnPause : true,
    showBigPrevNextOnPause : true,
    soundButtonPosition : "right",
    showPauseButton : true,
    showPrevButton : false,
    showNextButton : false,
    showBigPrevNext : true,
    showSoundButton : true,
    showVolumeControl : true,
    volumeControlVertical : true,
    showErrorScreen : true,
    durationPosition : "right",
    playlistAutoSkipOnError : true,
    showUiOnPause : true,
    showTimelineReplay : true,
    viewPercentageRequired : 1,
    showFullScreen : false,
    showDuration : true,
    hideGuiOnMouseout : true,
    hideGuiTimeout : 1,
    timelineMode : "default",
    spinner : "default",
    theme : "solid",
    themeColor : "#ff0000",
    playOnView : true,
    logo : {
      url : "./preview.png",
      text : false,
      size : [
        90,
        42
      ],
      position : "left"
    },
    startVolume : 1,
    syncVolume : true,
    // autoLoop : true,
    autoContinue : true,
    showReplay : true,
    mobile : {
      "showBigPlay" : true,
      "showBigPlayOnPause" : true,
      "showBigPrevNext" : true,
      "showUiOnPause" : false,
      "showPauseButton" : true,
      "showPrevButton" : false,
      "showNextButton" : false,
      "showFullScreen" : false,
      "hideGuiTimeout" : 2
    },
    replayText : "Replay",
    content : {
      "order" : 1,
      "randomFrom" : 1,
      "slotTimeout" : 5,
      "breakingAds" : true,
      "breakingAdsMode" : "op",
      "contents" : [
        {
          "id" : "ID1",
          "url" : "./world-video.mp4",
          "fallbackUrl" : "./video.mp4",
          // "clickThroughUrl" : "https://odysee.com",
          "type" : "video",
          slots: [{
            firstPrerollSlot: {
              "time": 0,            //Slot time, 0 is preroll
              "nextAdTimeout": 6,   //If more than one ads in the slot, the timeout for the second ad
              "preloadAdTime": 10,  //Timeout for the first ad in the slot
              "maxAds": 2           //Maximum number of ads in the slot
            },
          }]
          // "slots" : [{
          //   "type" : "ad",
          //   "time" : 0 }]

        },
        // {
        //   "id" : "ID2",
        //   "url" : "./world-video.mp4",
        //   "fallbackUrl" : "./world-video.mp4",
        //   "clickThroughUrl" : "CLICKTHROUGH_URL",
        //   "type" : "video",
        //   "slots" : [{
        //     "type" : "ad",
        //     "time" : 0 }]
        // }
      ]
    }
  };

  function downloadScript() {
    var scp = document.createElement('script');
    scp.src = "./avcplayer.js";
    scp.onload = function () {
      var AniviewContentPlayer = com.aniview.player.AniviewContentPlayer;
      var player = new AniviewContentPlayer(config);

      player.nextContent();


      // document.getElementById('myVideo').addEventListener('ended',myHandler,false);
      // function myHandler(e) {
      //   document.getElementsByTagName('video')[0].onended = function(){console.log('done!!')}
      //   // What you want to do after the event
      // }

    }
    document.getElementsByTagName('head')[0].appendChild(scp);
    console.log('all done');
  };

  downloadScript();



})();
