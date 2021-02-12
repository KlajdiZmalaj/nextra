//GLOBAL JS
function changeElTxt(el, txt) {
  //console.log("txtfix", el, txt);
  var cache = $(el).children();
  $(el).text(txt).append(cache);
}
function mainBannerClick() {}
function cpnPopUp() {
  var cpnNr = $(".match-count.selectionss").text();
  $("body").prepend(
    `<button id="cpnToggler"><i class="fal fa-receipt"></i> <span>${cpnNr}</span> </button>`
  );
  $("body").prepend(
    '<div id="couponPopUp" class="side-bar right-side-bar hidden"></div>'
  );
  $(".single-block.betslip-holder.active").appendTo("#couponPopUp");
  $("#cpnToggler").on("click", () => {
    $("#couponPopUp").toggleClass("hidden");
  });
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
  var provider = data.get("provider");
  if (id && name) {
    // console.log("openGamePopup", window.openGamePopup);
    window.openGame(null, id, name);
  }
  if (provider) {
    getByProvider(provider);
    document.getElementById(`p${provider}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

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
//GLOBAL CALLS
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
      $(".side-bar").mCustomScrollbar = $(".side-bar").mCustomScrollbar({
        scrollInertia: 100,
        mouseWheelPixels: 70,
        autoDraggerLength: false,
      });
      oldEnableScrollbar();
      //console.log("ca ka mCustomScrollbar", mCustomScrollbar);
      if (mCustomScrollbar && $(".enable-scroll.center-content")[0]) {
        $(".enable-scroll.center-content").mCustomScrollbar("destroy");
        $(".enable-scroll.center-content").mCustomScrollbar({
          scrollInertia: 100,
          mouseWheelPixels: 70,
          autoDraggerLength: false,
        });
      }
    };
    var oldAddTabletLight = AddTabletLight;
    AddTabletLight = function (a, b, c, d) {
      oldAddTabletLight(a, b, c, d);
      $(".left-side-bar.enable-scroll").mCustomScrollbar("destroy");
      $(".left-side-bar.enable-scroll").mCustomScrollbar({
        scrollInertia: 100,
        mouseWheelPixels: 70,
        autoDraggerLength: false,
      });
    };
    //main Banner replace slider
    $(".main-slider").html(
      `<img onclick="mainBannerClick();" src="${$(
        '.main-slider .slick-track img[src*="main-banner.jpg"]'
      ).attr("src")}">`
    );
  }
  if (window.showCombination && window.showMultiple && window.showSingle) {
    //ku ka kupon ->
    var oldbuildCoupon = buildCoupon;
    buildCoupon = function (a, b, c) {
      oldbuildCoupon(a, b, c);
      console.log("cpn json", a);
      if ($("#cpnToggler > span").length > 0) {
        $("#cpnToggler > span").text(a.eventi_totali);
      }
    };
    var oldshowCombination = showCombination;
    showCombination = function () {
      oldshowCombination();
      if ($("#cupInfo").length > 0) {
      } else {
        $("#coupon .totals-section").append(
          '<div id="cupInfo"><i class="fad fa-info-circle"></i>La vincita potenziale di tutte le combinazioni può essere ottenuta solo se le selezioni pronosticate non sono in conflitto tra loro.</div>'
        );
      }
    };
    var oldshowMultiple = showMultiple;
    showMultiple = function () {
      oldshowMultiple();
      $("#cupInfo").remove();
    };
    var oldshowSplit = showSplit;
    showSplit = function () {
      oldshowSplit();
      if ($("#cupInfo").length > 0) {
      } else {
        $("#coupon .totals-section").append(
          '<div id="cupInfo"><i class="fad fa-info-circle"></i>La vincita potenziale di tutte le combinazioni può essere ottenuta solo se le selezioni pronosticate non sono in conflitto tra loro.</div>'
        );
      }
    };
    var oldshowSingle = showSingle;
    showSingle = function () {
      oldshowSingle();
      $("#cupInfo").remove();
    };
  }
  if (window.location.href.match(/Sport\/casino/g)) {
    casinoPlayGame();
  }
  if (window.location.href.includes("/Sport/live")) {
    console.log("live log");
  }
});
