$(function() {
  var vid = document.getElementById("bgvid");
  //var pauseButton = document.querySelector("#pause");
  var pauseButton = $("#pause");

  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    $("#pause").hide();
    $("#play").show();
  }

  function vidFade() {
    vid.classList.add("stopfade");
  }

  vid.addEventListener('ended', function()
  {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
  });

  $("#play").click(function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      $("#play").hide();
      $("#pause").show();
    }
  });


  $("#pause").click(function() {
    vid.classList.toggle("stopfade");
    if (!vid.paused) {
      vid.pause();
      $("#pause").hide();
      $("#play").show();
    }
  });
});

