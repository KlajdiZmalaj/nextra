//GLOBAL JS
function changeElTxt(el, txt) {
  //console.log("txtfix", el, txt);
  var cache = $(el).children();
  $(el).text(txt).append(cache);
}

var languageObj = {
  English: {
    addFav: "add favorites",
    proceed: "proceed",
    select_30_events: "Select first 30 events",
    filters: "filters",
    filter_trn: "Filter Tournaments",
  },
  Italiano: {
    addFav: "aggiungi a preferiti",
    proceed: "procedi",
    select_30_events: "Seleziona i primi 30 eventi",
    filters: "Filtri",
    filter_trn: "Filtra Manifestazione",
  },
  French: {},
};
function languageFixOnSport() {
  var lang = window.language;
  $(
    ".sports-book-page .filters-holder .buttons-holder .single-button:first-child"
  ).text(languageObj?.[lang]?.addFav);
  $(
    ".sports-book-page .filters-holder .buttons-holder .single-button:last-child"
  ).text(languageObj?.[lang]?.proceed);
  changeElTxt(
    ".sports-book-page .title .select-events",
    languageObj?.[lang]?.select_30_events
  );
  changeElTxt(
    ".sports-book-page .filters-holder span",
    languageObj?.[lang]?.filters
  );
  $("#isSearch").attr("placeholder", languageObj?.[lang]?.filter_trn);
}
function removeDraggableTables() {
  $("#tablets > .tabletsOdds").each((ind, el) => {
    $(el).attr("draggable", false);
  });
}
function casinoPlayGame() {
  var data = new URLSearchParams(window.location.search);
  var id = data.get("loadGame");
  var name = data.get("name");
  if (id && name) {
    // console.log("openGamePopup", window.openGamePopup);
    window.openGame(null, id, name);
  }
}
$(document).ready(() => {
  const skinUrl = window.location.host.split(".")[0];
  console.log(
    `%cGLOBAL JS ACTIVATED SKIN: ${skinUrl.toUpperCase()}`,
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
      "font-size: 20px ;  text-decoration: underline ; " +
      "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
  );
  //merr alt language nga imazhi selektuar ne header
  window.language = $("#lang-top .lang-flag").attr("alt");
  if (window.location.href.includes("/Sport/sport")) {
    //
    var oldshowSportbook = showSportbook;
    showSportbook = function (sport) {
      oldshowSportbook(sport);
      languageFixOnSport();
    };

    //
    var oldEnableScrollbar = enableScrollbar;
    enableScrollbar = function () {
      oldEnableScrollbar();
      $("#mCSB_3_container").mCustomScrollbar({
        scrollInertia: 200,
        mouseWheelPixels: 170,
        autoDraggerLength: false,
      });
    };
    // draggable after request of dataTables /START
    var oldaddChamTablets = addChamTablets;
    addChamTablets = function (a, b) {
      oldaddChamTablets(a, b);
      removeDraggableTables();
    };
    var oldAddTablet = AddTablet;
    AddTablet = function (a, b, c, d = 0) {
      oldAddTablet(a, b, c, (d = 0));
      removeDraggableTables();
    };
    var oldaddTabletAntepost = addTabletAntepost;
    addTabletAntepost = function (a, b) {
      oldaddTabletAntepost(a, b);
      removeDraggableTables();
    };
    //draggable after request of dataTables /END
  }
  if (window.location.href.includes("/Sport/casino")) {
    casinoPlayGame();
  }
  if (window.location.href.includes("/Sport/live")) {
    console.log("live log");
  }
});

function addThemeContainerHeader() {
  $("html").attr("data-theme", "theme1");
  $(".top-bar > .grid").append(
    `<div class='themeContainer dark'>Dark Theme</div>`
  );
  $(".themeContainer").on("click", (e) => {
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
