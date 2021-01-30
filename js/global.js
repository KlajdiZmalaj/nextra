//GLOBAL JS
$(document).ready(() => {
  const skinUrl = window.location.host.split(".")[0];
  console.log(
    `%cGLOBAL JS ACTIVATED SKIN: ${skinUrl.toUpperCase()}`,
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
      "font-size: 20px ;  text-decoration: underline ; " +
      "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
  );

  if (window.location.href.includes("/Sport/sport")) {
    var oldEnableScrollbar = enableScrollbar;
    enableScrollbar = function () {
      oldEnableScrollbar();
      $("#mCSB_3_container").mCustomScrollbar({
        scrollInertia: 200,
        mouseWheelPixels: 170,
        autoDraggerLength: false,
      });
    };
  }
  if (window.location.href.includes("/Sport/casino")) {
    var data = new URLSearchParams(window.location.search);
    var id = data.get("loadGame");
    var name = data.get("name");
    if (id && name) {
      // console.log("openGamePopup", window.openGamePopup);
      window.openGame(null, id, name);
    }
  }
  if (window.location.href.includes("/Sport/live")) {
    console.log("live log");

    // if ($(".event-viewer-tv-wrapper").find(".liveIframe")[0]) {
    //   $(".event-viewer-tv-wrapper").appendTo(".event-viewer-wrapper");
    // }

    // var oldstartLTM = startLTM;
    // startLTM = function (id) {
    //   oldstartLTM(id);
    //   console.log("ca ka ltm", oldstartLTM, id);

    //   setTimeout(() => {
    //     $(".event-viewer-tv-wrapper").appendTo(".event-viewer-wrapper");
    //   }, 1000);
    // };
    // var oldstartStream = startStream;
    // startStream = function (id) {
    //   oldstartStream(id);
    //   console.log("ca ka start stream", oldstartStream, id);
    //   setTimeout(() => {
    //     $(".event-viewer-tv-wrapper").appendTo(".event-viewer-wrapper");
    //   }, 1000);
    // };
  }
});

function addThemeContainerHeader() {
  $("html").attr("data-theme", "theme1");
  $(".top-bar > .grid").append(
    `<div class='themeContainer dark'>Dark Theme</div>`
  );
  $(".themeContainer").on("click", (e) => {
    //console.log($(e.target));
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
function sportsToTableHeader() {
  $("#mainHomePage>div:nth-child(2) .sports-filter").appendTo(
    "#mainHomePage>div:nth-child(2) .popular-bets"
  );
  $("#upcomingBets .sports-filter-upcoming").appendTo(
    "#upcomingBets .popular-bets"
  );
}
