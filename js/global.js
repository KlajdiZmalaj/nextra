//GLOBAL JS
$(document).ready(() => {
  const skinUrl = window.location.host.split(".")[0];
  console.log(
    `%cGLOBAL JS ACTIVATED SKIN: ${skinUrl.toUpperCase()}`,
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
      "font-size: 20px ;  text-decoration: underline ; " +
      "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
  );

  var oldEnableScrollbar = enableScrollbar;
  enableScrollbar = function () {
    oldEnableScrollbar();
    $("#mCSB_3_container").mCustomScrollbar({
      scrollInertia: 200,
      mouseWheelPixels: 170,
      autoDraggerLength: false,
    });
  };

  // setTimeout(function () {
  //   $("#mCSB_3_container").mCustomScrollbar({
  //     scrollInertia: 200,
  //     mouseWheelPixels: 170,
  //     autoDraggerLength: false,
  //   });
  // }, 2000);
});
