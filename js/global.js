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
    //console.log("ca ka old", oldEnableScrollbar);
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

function addThemeContainerHeader() {
  $("html").attr("data-theme", "theme1");
  $(".top-bar > .grid").append(
    `<div class='themeContainer dark'>Dark Theme</div>`
  );
  $(".themeContainer").on("click", (e) => {
    console.log($(e.target));
    if ($(e.target).hasClass("dark")) {
      $("html").attr("data-theme", "theme2");
      $(e.target).removeClass("dark");
      $(e.target).addClass("light");
      $(e.target).text("Light Theme");
    } else {
      $("html").attr("data-theme", "theme1");
      $(e.target).removeClass("light");
      $(e.target).addClass("dark");
      $(e.target).text("Dark Theme");
    }
  });
}
