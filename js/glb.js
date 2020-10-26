var swiper;
var swiper_most_played;
var site_info = {
  link: "",
  site_name: "",
  footer_link: "",
  language: "en",
  theUser: {
    role: 5,
  },
  bannerPages: {
    default: [],
    livecasino: [],
    casinogames: [],
  },
  catState: { clickedCat: "" },
};

var shouldRun = false;

$("html").removeAttr("lang");

function shouldRunFunc() {}

shouldRunFunc();

let changeToDesktop = false;
function update_check_desktop_version_arr() {}
update_check_desktop_version_arr();

site_info.link = window.location.href;
site_info.site_name = site_info.link.split("/")[2].split(".")[1];
site_info.footer_link = footerLink(site_info.link);
var sitesGraphAdm_token = {};
updateSkinName();

(function () {
  if (window.navigator.userAgent.toLowerCase().includes("mobile")) {
    if (localStorage.getItem("isWeb") === "true") {
      if (
        (window.location.pathname.toLowerCase().includes("mobile") ||
        window.location.href.includes("bsport10") || //done
        window.location.href.includes("fourbet") ||
        window.location.href.includes("jogar365") ||
        window.location.href.includes("sirplay") || //donee
          window.location.href.includes("naxbet365") ||
          window.location.href.includes("icesport") ||
          window.location.href.includes("betop")) &&
        (window.location.href !==
          "http://www." +
            sitesGraphAdm_token[site_info.site_name].footerLink +
            "/" +
            site_info.site_name +
            "#!/" ||
          window.location.href !==
            "http://m." +
              sitesGraphAdm_token[site_info.site_name].footerLink +
              "/" +
              site_info.site_name +
              "#!/" ||
          window.location.href !==
            "http://m." +
              sitesGraphAdm_token[site_info.site_name].footerLink +
              "/#!/")
      ) {
        window.location.href =
          "http://m." +
          sitesGraphAdm_token[site_info.site_name].footerLink +
          "/" +
          site_info.site_name +
          "#!/";
      }
      document.head.children.viewport.content =
        "width=device-width, initial-scale=0.3";
    } else if (
      localStorage.getItem("isWeb") === "false" ||
      localStorage.getItem("isWeb") === ""
    ) {
      if (
        !window.location.pathname.toLowerCase().includes("mobile") &&
        window.location.href !==
          "http://m." +
            sitesGraphAdm_token[site_info.site_name].footerLink +
            "/Mobile" +
            site_info.site_name +
            "#!/"
      ) {
        window.location.href =
          "http://m." +
          sitesGraphAdm_token[site_info.site_name].footerLink +
          "/Mobile" +
          site_info.site_name +
          "#!/";
      }
      document.head.children.viewport.content =
        "width=device-width, initial-scale=1";
    }
    document.addEventListener("siteSwitch", function (event) {
      localStorage.setItem("isWeb", event.detail);
    });
  }
})();

var Comm100API = Comm100API || new Object();
Comm100API.chat_buttons = Comm100API.chat_buttons || [];
var comm100_chatButton = new Object();
comm100_chatButton.code_plan = 243;
comm100_chatButton.div_id = "comm100-button-243";
Comm100API.chat_buttons.push(comm100_chatButton);
Comm100API.site_id = 217738;
Comm100API.main_code_plan = 243;

var comm100_lc = document.createElement("script");
comm100_lc.type = "text/javascript";
comm100_lc.async = true;
comm100_lc.src =
  "https://chatserver.comm100.com/livechat.ashx?siteId=" + Comm100API.site_id;
var comm100_s = document.getElementsByTagName("script")[0];
comm100_s.parentNode.insertBefore(comm100_lc, comm100_s);

var linkSwiperCss2 = document.createElement("link");
linkSwiperCss2.rel = "stylesheet";
linkSwiperCss2.href =
  "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css";

var sliderScrMin = document.createElement("script");
sliderScrMin.src =
  "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js";

document.getElementsByTagName("head")[0].append(linkSwiperCss2);
document.getElementsByTagName("body")[0].append(sliderScrMin);

function mainBannerSliderParam() {
  swiper = new Swiper(".bannerSwipe", {
    init: true,
    speed: 1200,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination_banner",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-banner",
      prevEl: ".swiper-button-prev-banner",
    },
    autoplay: {
      delay: 5000,
    },
  });
}

document.addEventListener("couponPrint", function (event) {
  console.log("event.detail", event.detail);
  var ticketInfo = event.detail.ticket;

  var ticketMatches = event.detail.matches.getSorted();

  const events = ticketMatches.map((ticketMatch) => {
    var matchInfo = ticketMatch.match;
    var matchMarkets = ticketMatch.markets.getSorted();
    const markets = matchMarkets.map(({ market, odds }) => {
      const matchOdds = odds.getSorted().map(({ position, odd }) => ({
        oddName: position.selectedTranslation[market.id].name,
        value: odd.displayValue,
      }));
      return {
        name: market.name,
        odds: matchOdds,
      };
    });

    return {
      date: matchInfo.date.dateTimeFull,
      fastcode: matchInfo.fastcode,
      eventName:
        matchInfo.homeTeams[0].name + "-" + matchInfo.awayTeams[0].name,
      markets,
    };
  });
  var currency = "";

  if (ticketInfo.idCurrency == 1) {
    currency = "eur";
  } else if (ticketInfo.idCurrency == 2) {
    currency = "usd";
  } else if (ticketInfo.idCurrency == 3) {
    currency = "lek";
  } else if (ticketInfo.idCurrency == 4) {
    currency = "gbp";
  } else if (ticketInfo.idCurrency == 5) {
    currency = "chf";
  }
  if (ticketInfo.idCurrency == 6) {
    currency = "brl";
  }

  const sendArray = {
    username: ticketInfo.makerUsername,
    events,
    stake: ticketInfo.displayStake,

    minOdds: ticketInfo.displayMinOdds,
    maxOdds: ticketInfo.displayMaxOdds,
    totalOdds: ticketInfo.displayTotalOdds,

    minBonus: ticketInfo.displayMinBonus,
    maxBonus: ticketInfo.displayMaxBonus,
    totalBonus: ticketInfo.displayTotalBonus,

    minReturn: ticketInfo.displayMinReturn,
    maxReturn: ticketInfo.displayMaxReturn,
    totalReturn: ticketInfo.displayTotalReturn,

    possibleReturn: ticketInfo.displayPossibleReturn,

    type: ticketInfo.typeStr.value,
    code: ticketInfo.code,

    currency: currency,
  };

  setTimeout(function () {
    postMessage(JSON.stringify(sendArray), "*");
  }, 200);

  for (var i = 0; i < ticketMatches.length; i++) {
    var ticketMatch = ticketMatches[i];
    var matchInfo = ticketMatch.match;
    var matchMarkets = ticketMatch.markets.getSorted();
    // console.log("Match", matchInfo, matchInfo.homeTeams[0].name);
    // console.log("matchMarkets", matchMarkets);

    for (var j = 0; j < matchMarkets.length; j++) {
      var matchMarket = matchMarkets[j];
      var marketInfo = matchMarket.market;
      // console.log("Market", marketInfo, marketInfo.name);
      var matchOdds = matchMarket.odds.getSorted();
      // console.log("matchOdds", matchOdds);
      for (var k = 0; k < matchOdds.length; k++) {
        var oddInfo = matchOdds[k];
        // console.log(
        //   "Position",
        //   oddInfo.position,
        //   oddInfo.position.selectedTranslation[marketInfo.id].name
        // );
        // console.log("Odd", oddInfo.odd, oddInfo.odd.displayValue);
      }
    }
  }
});

document.addEventListener("statsOpen", function (event) {
  var idMatch = event.detail;
  openBRStats(idMatch);
});

function openBRStats(idMatch) {
  window.open(
    "https://s5.sir.sportradar.com/admiral/it/match/" + idMatch,
    "Stats",
    "width=1078,height=768"
  );
}

(function () {
  "use strict";

  window.angular
    .module("WebClient")
    .controller("DisplayController", [
      "$scope",
      "AnimationService",
      "ProfileService",
      "MarketService",
      "MainService",
      webClientController,
    ]);

  function webClientController(
    $scope,
    animationService,
    profileService,
    marketService,
    mainService
  ) {
    var vm = this,
      listeners = [],
      listener,
      user = profileService.get();
    site_info.theUser = profileService.get();
    var start = function () {
      vm.settings.isLogin = user.id > 0;
      vm.settings.isPunto = user.role === 4;
      vm.settings.isPlayer = user.role === 5;
      vm.settings.isCtdPlayer = user.isCtdPlayer;
      vm.isLogin = user.id > 0;
      vm.isPunto = user.role === 4;
      vm.isPlayer = user.role === 5;
      vm.isCtdPlayer = user.isCtdPlayer;
    };

    vm.marketNameModify = function (marketName, idSport) {
      return marketService.marketNameModify(marketName, idSport);
    };

    //Listen for user data load
    listener = $scope.$on("userLoad", function (event, scope) {
      mainService.digest(function () {
        user = scope.profile;
        start();
        userInfoClass();
      }, 0);
    });
    listeners.push(listener);

    //Listen for player logout.
    listener = $scope.$on("userLoginUpdate", function (event, scope) {
      mainService.digest(function () {
        user = scope.profile;
        start();
        userInfoClass();
      });
    });
    listeners.push(listener);

    vm.$onInit = function () {
      vm.settings = animationService.settingsGet();
      user = profileService.get();
      start();
      userInfoClass();
    };
  }
})();

function userInfoClass() {
  if (site_info.theUser.role == 4) {
    $("html").addClass("agent");
  } else if (site_info.theUser.role == 5) {
    $("html").addClass("user");
  }
  if (site_info.theUser.role != undefined) {
    if (!window.location.href.toLowerCase().includes("mobile")) {
      showProfileLinksonHeader();
      setTimeout(function () {
        $("#userAccess #logoutBtn")[0].addEventListener(
          "click",
          function () {
            localStorage.setItem("isWeb", "");
          },
          false
        );
      }, 1000);
    }
  }
}

function footerLink(a) {
  var footerLink = a.slice(a.indexOf(".") + 1);
  footerLink = (footerLink[0].toUpperCase() + footerLink.slice(1)).split("/");
  return footerLink[0];
}

function start_time_on_header() {
  var checkTime = function (i) {
    return i < 10 ? "0" + i : i;
  };

  var startTime = function () {
    var today = new Date(),
      h = checkTime(today.getHours()),
      m = checkTime(today.getMinutes()),
      s = checkTime(today.getSeconds());
    if (document.getElementById("time")) {
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    }
  };
  setInterval(startTime, 1000);
}

function move_depositWithdraw_to_header() {
  $(".iconsToH").append($("#depositWithdraw"));
  // addListener_saldo();
  $("#depositWithdraw")[0].addEventListener(
    "click",
    setClassOnSaldoDropdown,
    false
  );
}

function setClassOnSaldoDropdown() {
  setTimeout(function () {
    $(".transfer_money_dropdown")
      .parent()
      .parent()
      .parent()
      .removeAttr("style");
    $(".transfer_money_dropdown")
      .parent()
      .parent()
      .parent()
      .addClass("transfer_money_dropdown_wrapper");
  }, 0);
}

// function addListener_saldo() {
// $('#depositWithdraw')[0].addEventListener('click', find_saldo_modal, false);
// }

// function find_saldo_modal() {
//    $('#main > .width-animation').prepend($('.transfer_money_dropdown').parent().parent().parent());
// }

function move_balance_to_header() {
  $(".iconsToH").append($("#balance"));
}

function move_userAccess_to_header() {
  $(".iconsToH").append($("#userAccess"));
}

function move_documentation_to_header() {
  setTimeout(function () {
    $(".iconsToH").append($("#documentation"));
  }, 0);
}

function move_sizeChager_to_header() {
  $(".iconsToH").append($("#sizeChager"));
  $("#sizeChager")[0].addEventListener("click", change_screen_size_mode, false);
}

function change_screen_size_mode() {
  if (localStorage.getItem("fullscreen") === "true") {
    $("html").removeClass("respBody");
    if ($("html").attr("page") == "default") {
      swiper_most_played.params.slidesPerView = 3;
      swiper_most_played.update();
    }
  } else if ($("html").addClass("respBody")) {
    swiper_most_played.params.slidesPerView = 2;
    swiper_most_played.update();
  }
  add_banners_on_center();
  if ($("html").attr("page").includes("live")) {
    setTimeout(function () {
      reloadIframe();
    }, 0);
  }
}

function move_resultAndGiude_link() {
  setTimeout(function () {
    $(".iconsToH").append($('li.md-nav-item[name="result"]'));
    $(".iconsToH").append($('li.md-nav-item[name="guide"]'));
  }, 0);
}

function casinoWithdrawDiv(e) {}

function move_textChanger_to_header() {
  setTimeout(function () {
    $("#last_div_on_downheader").append($("#textChanger"));
  }, 0);
}

function move_oddType_to_header() {
  setTimeout(function () {
    $("#last_div_on_downheader").append($(".oddType"));
  }, 0);
}

function find_language() {
  switch ($(".language-text").html()) {
    case "Italian":
      site_info.language = "it";
      showProfileLinksonHeader();
      break;
    case "English":
      site_info.language = "en";
      showProfileLinksonHeader();
      break;
    case "German":
      site_info.language = "de";
      showProfileLinksonHeader();
      break;
    case "Portuguese":
      site_info.language = "pt";
      showProfileLinksonHeader();
      break;
    case "Spanish":
      site_info.language = "es";
      showProfileLinksonHeader();
      break;
    case "Albanian":
      site_info.language = "sq";
      showProfileLinksonHeader();
      break;
    default:
      site_info.language = "en";
      break;
  }
}

function change_logo_src() {
  $("#logo").attr("ng-href", "/#!");
  $("#logo").attr("href", "/#!");
}

function general_func_on_header() {
  $(".languageDiv").parent().attr("id", "last_div_on_downheader");
  $("#depositWithdraw").wrap('<div class="iconsToH"></div>');
  $(".iconsToH").append($("#balance"));
  $(".iconsToH").append($("#userAccess"));
  toggleFooter(); //Event listener per footerin
  $("div#downHeader_wrapp").css({ height: "auto" });
  $("div#downHeader").css({ height: "auto" });
  $("#downHeader_wrapp").append('<div class="profile_links_on_header"></div>');

  $('li[name="prematch"]')[0].addEventListener(
    "click",
    responsive_on_prematchLink,
    false
  );
}

function responsive_on_prematchLink() {
  if (!$("html")[0].className.includes("respBody")) {
    $("html").addClass("respBody");
    site_info.catState.clickedCat = "";
    site_info.catState.lastClicked = false;
    if (swiper_most_played) {
      swiper_most_played.update();
    }
    if (swiper) {
      swiper.update();
    }
  }
}

// End of functions on Header
function toggleFooter() {
  $(".toggleF").on("click", function () {
    $(".footer").toggleClass("open");
  });
  $(".footerLinks").append('<div class="respHeader"><div>');
  $(".footerLinks > .respHeader").append($(".footerLinks").children());
  $(".subHeader").append('<div class="respHeader"><div>');
  $(".subHeader > .respHeader").append($(".subHeader").children());
}

function result_page_func() {
  $("html")[0].setAttribute("page", "result");
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
}

function poker_page_func(e) {
  $("html")[0].setAttribute("page", "default");
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
  if ($("#main > .width-animation .new_quick_bet")[0]) {
    $("#main > .width-animation .new_quick_bet").remove();
  }
  e.parentNode.children[0].children[1].remove();
}

function bank_roulete_func(e) {
  $("html")[0].setAttribute("page", "default");
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
}

function casino_function_games_tabs(e) {}

function casino_function_card_actions(e) {}

function casino_function_game_item(e) {}

function casino_function_gameIframeContent(e) {}

function casinoPoker_function(e) {}

function casinoPoker_function_games_tabs(e) {}

function casinoPoker_function_card_actions(e) {}

function casinoPoker_function_game_item(e) {}

function casinoPoker_function_gameIframeContent(e) {}

function liveCasino_page_func() {
  $("html")[0].setAttribute("page", "liveCasino");
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
  if ($("#main > .width-animation .new_quick_bet")[0]) {
    $("#main > .width-animation .new_quick_bet").remove();
  }
  if ($("html")[0].className.includes("respBody"))
    $("html").removeClass("respBody");

  var page = "page=" + $("html")[0].getAttribute("page");
  var skinName = sitesGraphAdm_token[site_info.site_name];
  var skinUrl = skinName.urlApi;
  var url = skinUrl[0] + page + skinUrl[1];

  var admRequest;

  if (window.XMLHttpRequest) {
    // modern browsers
    admRequest = new XMLHttpRequest();
  } else {
    // old IE browsers
    admRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  admRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(admRequest.responseText);
      site_info.bannerPages.livecasino = resp.success.banners;
      for (var i = 0; i < site_info.bannerPages.livecasino.length; i++) {
        if (
          site_info.bannerPages.livecasino[i].css_selector.name ==
            "mainBanner" ||
          site_info.bannerPages.livecasino[i].css_selector.name ==
            "mainbanner" ||
          site_info.bannerPages.livecasino[i].css_selector.name == "MAINBANNER"
        ) {
          $("#webClientView #mainliveCasino").css({
            // "background-image": "url(" + site_info.bannerPages.livecasino[i].image.path + ")",
            "background-position": "center",
            "background-size": "cover",
            "background-repeat": "no-repeat",
          });
          $("#webClientView #mainliveCasino").attr(
            "style",
            "background: url(" +
              site_info.bannerPages.livecasino[i].image.path +
              ") !important"
          );
        }
      }
      var imgCasino = [];
      for (var i = 0; i < site_info.bannerPages.livecasino.length; i++) {
        if (site_info.bannerPages.livecasino[i].css_selector.name == "center") {
          imgCasino.push(site_info.bannerPages.livecasino[i]);
        }
      }
      imgCasino.sort(function (a, b) {
        return a.order - b.order;
      });
      var imgToChangeSrc = $(".livecasinobanners .livecasino").find("img");
      for (var i = 0; i < imgCasino.length; i++) {
        if (imgToChangeSrc[i]) {
          imgToChangeSrc[i].setAttribute("src", imgCasino[i].image.path);
        }
      }
      $(".livecasinobanners .loading").remove();
    }
  };
  admRequest.open("GET", url, true);
  admRequest.send();
}
function scrollCasino() {
  window.addEventListener("wheel", function (e) {
    // console.log(e)
    let deltaY = e.deltaY;
    // console.log("DeltaY" + deltaY);
    $(
      ".newsite #kohanaCasinoMain  .md-virtual-repeat-container .md-virtual-repeat-scroller"
    ).scrollTop(
      $(
        ".newsite #kohanaCasinoMain  .md-virtual-repeat-container .md-virtual-repeat-scroller"
      ).scrollTop() + deltaY
    );
  });
}
// CASINO GAMES PAGE START

function casino_function(e) {
  addElementsOnCasino();
  moveElemntsOnCasino();
  $("html")[0].setAttribute("page", "casinogames");
  if ($("html")[0].className.includes("respBody"))
    $("html").removeClass("respBody");
  if ($("#main > .width-animation .new_quick_bet")[0]) {
    $("#main > .width-animation .new_quick_bet").remove();
  }

  var page = "page=" + $("html")[0].getAttribute("page");
  var skinName = sitesGraphAdm_token[site_info.site_name];
  var skinUrl = skinName.urlApi;
  var url = skinUrl[0] + page + skinUrl[1];

  var admRequest;

  if (window.XMLHttpRequest) {
    // modern browsers
    admRequest = new XMLHttpRequest();
  } else {
    // old IE browsers
    admRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  admRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(admRequest.responseText);
      site_info.bannerPages.casinogames = resp.success.banners;
      var parallaxImgArr = [];
      for (var i = 0; i < site_info.bannerPages.casinogames.length; i++) {
        if (
          site_info.bannerPages.casinogames[i].css_selector.name ==
            "mainBanner" ||
          site_info.bannerPages.casinogames[i].css_selector.name ==
            "mainbanner" ||
          site_info.bannerPages.casinogames[i].css_selector.name == "MAINBANNER"
        ) {
          $("#webClientView #kohanaCasinoMain").css({
            "background-position": "center",
            "background-size": "cover",
            "background-repeat": "no-repeat",
          });
          $("#webClientView #kohanaCasinoMain").attr(
            "style",
            "background-image: url(" +
              site_info.bannerPages.casinogames[i].image.path +
              ") !important"
          );
        } else if (
          site_info.bannerPages.casinogames[i].css_selector.name ==
            "parallax3" ||
          site_info.bannerPages.casinogames[i].css_selector.name ==
            "parallax4" ||
          site_info.bannerPages.casinogames[i].css_selector.name ==
            "parallax5" ||
          site_info.bannerPages.casinogames[i].css_selector.name == "parallax6"
        ) {
          var parallaxImg =
            '<div class="parallax ' +
            site_info.bannerPages.casinogames[i].css_selector.name +
            '" style="left: 0px; top: 0px;"><img src="' +
            site_info.bannerPages.casinogames[i].image.path +
            '" /></div>';
          parallaxImgArr.push(parallaxImg);
        }

        if (parallaxImgArr && parallaxImgArr.length > 0) {
          $(".parallax-container.characters").html(parallaxImgArr.join(""));
        }
      }
    }
  };
  admRequest.open("GET", url, true);
  admRequest.send();
  scrollCasino();
}

function addElementsOnCasino() {
  $(
    `<div class="parallax-container characters" data-jkit="[parallax:strength=0.1;axis=both]"></div>`
  ).insertBefore($("#main #webClientView md-content#kohanaCasinoMain > div"));
}

function moveElemntsOnCasino() {
  $("#kohanaCasinoMain").mousemove(function (e) {
    $(".parallax3").css("left", e.pageX / 80 + "px ");
    // $(".parallax3").css("top", e.pageY / 80 + "px ");

    $(".parallax4").css("left", e.pageX / 30 + "px ");
    // $(".parallax4").css("top", e.pageY / 50 + "px ");

    $(".parallax5").css("left", e.pageX / 30 + "px ");
    // $(".parallax5").css("top", e.pageY / 60 + "px ");

    $(".parallax6").css("left", e.pageX / 80 + "px ");
    // $(".parallax6").css("top", e.pageY / 80 + "px ");
  });
}

// function addElementsOnVirtual() {
//   $(
//     `
// <div class="parallax-container characters" data-jkit="[parallax:strength=0.1;axis=both]">
//     <div class="parallax parallax3" style="left: 0px; top: 0px; z-index:3;"><img src="http://static.pcluster.info/skins/` +
//     sitePathName +
//     `/img/virtual/vdogbike.png"></div>
//     <div class="parallax parallax4" style="left: 0px; top: 0px;z-index:3;"><img src="http://static.pcluster.info/skins/` +
//     sitePathName +
//     `/img/virtual/vhorsemotor.png"></div>
//     <div class="parallax parallax5" style="left: 0px; top: 0px;z-index:1;"><img src="http://static.pcluster.info/skins/` +
//     sitePathName +
//     `/img/virtual/virtualbubbles.png"></div>
// </div>
// `
//   ).prependTo($("#main #webClientView .virtualSport"));
// }

// function moveElemntsOnVirtual() {
//   $("#body #main").mousemove(function (e) {
//     $(".parallax3").css("left", e.pageX / 80 + "px ");
//     $(".parallax3").css("top", e.pageY / 80 + "px ");

//     $(".parallax4").css("left", e.pageX / 30 + "px ");
//     $(".parallax4").css("top", e.pageY / 50 + "px ");

//     $(".parallax5").css("left", e.pageX / 30 + "px ");
//     $(".parallax5").css("top", e.pageY / 60 + "px ");

//     $(".parallax6").css("left", e.pageX / 80 + "px ");
//     $(".parallax6").css("top", e.pageY / 80 + "px ");
//   });
// }

// CASINO GAMES PAGE ENDS

function reloadIframe() {
  setTimeout(function () {
    $("iframe#liveCenter")[0].src += "";
    console.log("liveCenter Iframe u relodad");
  }, 0);
}

function live_page_func() {
  $("html")[0].setAttribute("page", "live");
  if ($("html")[0].className.includes("respBody"))
    $("html").removeClass("respBody");

  if ($("#main > .width-animation .new_quick_bet")[0]) {
    $("#main > .width-animation .new_quick_bet").remove();
  }
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
  reloadIframe();
  $('button[ng-click="liveVm.liveExpandToggle()"]')[0].addEventListener(
    "click",
    reloadIframe,
    false
  );
}

function live_eventView_page_func() {
  $("html")[0].setAttribute("page", "live-eventView");
}

function liveOverview_page_func() {
  $("html")[0].setAttribute("page", "live-overView");
}

function liveSchedule_page_func() {
  $("html")[0].setAttribute("page", "live-schedule");
}

function guide_page_func() {
  $("html")[0].setAttribute("page", "guide");
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
}

function virtual_page_func(e) {
  $("html")[0].setAttribute("page", "virtual");
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
  if ($("#main > .width-animation .new_quick_bet")[0]) {
    $("#main > .width-animation .new_quick_bet").remove();
  }
  e.parentNode.children[0].children[1].remove();
}

function casino_page_func() {
  $("html")[0].setAttribute("page", "casino");
  $(".casinoWithdrawDiv").css({ visibility: "show" });
}

function liveCasinoBetConstruct(e) {}

function liveCasinoBetConstruct_displayVm(e) {}

function user_page_func() {
  $("html")[0].setAttribute("page", "user-page");
  $("html").addClass("respBody");
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });

  if ($("#main > .width-animation .new_quick_bet")[0]) {
    $("#main > .width-animation .new_quick_bet").remove();
  }
  console.log("user_page_func");
}

//function to execute on HOME PAGE
function default_page_func() {
  $("html")[0].setAttribute("page", "default");
  get_default_page_banners();
  matchCount = 0;
  $(".casinoWithdrawDiv").css({ visibility: "hidden" });
  if (
    !localStorage.selTourn ||
    (localStorage.selTourn && localStorage.selTourn.length == 0) ||
    (localStorage.selTourn && localStorage.selTourn.length == 2)
  ) {
    $("html").addClass("respBody");
  }

  if (!$("#main > .width-animation .new_quick_bet")[0]) {
    $("#main > .width-animation ").prepend(
      '<div class="new_quick_bet"> <div class="left"></div> <div class="middle"></div> <div class="right"></div> </div>'
    );
    setTimeout(function () {
      $("#fastCodeTabs md-tab-item:first-child").addClass("searchTab");
      $("#fastCodeTabs md-tab-content:first-child").addClass("searchContent");
      $("#fastCodeTabs .searchTab").appendTo(".new_quick_bet .middle");
      $("#fastCodeTabs .searchContent").appendTo(".new_quick_bet .middle");
      $(".new_quick_bet .searchButton").html("Quick Bet");
      $(".new_quick_bet .searchButton").removeAttr("style");
    }, 500);
  }
  $("#main > .width-animation").prepend(
    $("#main > .width-animation md-menu-content")
  );
  mostplayedLoaded = false;
}

var links_language = {
  en: {
    //Anglisht
    profile: "Profile",
    saldo: "Statement",
    network: "Network",
    createUser: "Create User",
    listaScomese: "Tickets",
    cerca: "Search",
    sport: "Sport Report",
    casino: "Casino Provider",
    terzeParti: "Third Parties",
    commissions: "Commissions",
    estrato_conto: "Balance",
    estrato_conto_rete: "Network Statement",
    sommario: "Summary",
    prelievo: "Withdraw",
  },
  de: {
    //Gjermanisht
    profile: "Profil",
    saldo: "Balance",
    network: "Network",
    createUser: "Spieler Erstellen",
    listaScomese: "Fahrkarte Ruse",
    cerca: "Suche",
    sport: "Report Sport",
    casino: "Casino Provider",
    terzeParti: "Terze Parti",
    commissions: "Provisionen",
    estrato_conto: "Kontoauszug",
    estrato_conto_rete: "Netzwerkanweisung",
    sommario: "Zusammenfassung",
    prelievo: "Rückzug",
  },
  pt: {
    //Portugalisht
    profile: "Perfil",
    saldo: "Saldos",
    network: "Minha Rede",
    createUser: "Criar Jogador",
    listaScomese: "Lista de Apostas",
    cerca: "Procurar",
    sport: "Esporte",
    casino: "Cassino",
    terzeParti: "Terceiros",
    commissions: "Comissões",
    estrato_conto: "Extrato de Conta",
    estrato_conto_rete: "Declaração de Rede",
    sommario: "Resumo",
    prelievo: "Retirada",
  },
  it: {
    //Italisht
    profile: "Account",
    saldo: "Saldo / Trasferimenti",
    network: "Lista Utenti",
    createUser: "Crea Utente",
    listaScomese: "Lista Scommesse",
    cerca: "Cerca",
    sport: "Rep. Sport",
    casino: "Casino",
    terzeParti: "Rep. Terze Parti",
    commissions: "Rep. Commissioni",
    estrato_conto: "Lista Movimenti",
    estrato_conto_rete: "Estratto Conto Rete",
    sommario: "Sommario",
    prelievo: "Giroconto",
  },
  es: {
    //Spanjisht
    profile: "Perfil",
    saldo: "Ventas",
    network: "Red",
    createUser: "crear usuario",
    listaScomese: "Lista de apuestas",
    cerca: "búsqueda",
    sport: "deporte",
    casino: "casino",
    terzeParti: "terceros",
    commissions: "comisiones",
    estrato_conto: "cueto estratto",
    estrato_conto_rete: "cuenta de red extraída",
    sommario: "resumen",
    prelievo: "retirada",
  },
};

var profileLinksObj = {
  listaScomese: {
    uisref: "user.tickethistory()",
    href: "#!/user/tickethistory",
  },
  estrato_conto: {
    uisref: "user.statementReport()",
    href: "#!/user/statementReport",
  },
  network: {
    uisref: "user.mynetwork()",
    href: "#!/user/mynetwork",
  },
  profile: {
    uisref: "user.profile()",
    href: "#!/user/profile",
  },
  sport: {
    uisref: "user.sportReport()",
    href: "#!/user/sportReport",
  },
  terzeParti: {
    uisref: "user.casinoBetReport()",
    href: "#!/user/casinoBetReport",
  },
  commissions: {
    uisref: "user.commissionReport()",
    href: "#!/user/commissionReport",
  },
  saldo: {
    uisref: "user.balance()",
    href: "#!/user/balance",
  },
  createUser: {
    uisref: "",
    href: "#!/user/createplayer/",
  },
  cerca: {
    uisref: "user.ticketsearch()",
    href: "#!/user/ticketsearch",
  },
};

var reportLinks = {
  sport: {
    uisref: "user.sportReport()",
    href: "#!/user/sportReport",
  },
  casino: {
    uisref: "user.casinoReport()",
    href: "#!/user/casinoReport",
  },
  terzeParti: {
    uisref: "user.casinoBetReport()",
    href: "#!/user/casinoBetReport",
  },
};

var estratoContoLinks = {
  estrato_conto: {
    uisref: "user.statementReport()",
    href: "#!/user/statementReport",
  },
  estrato_conto_rete: {
    uisref: "user.statementChildReport()",
    href: "#!/user/statementChildReport",
  },
  prelievo: {
    uisref: "user.extractRefillReport()",
    href: "#!/user/extractRefillReport",
  },
  sommario: {
    uisref: "user.summaryReport()",
    href: "#!/user/summaryReport",
  },
};

function statement_report_func(e) {
  linksOnEstratoContoArr = [];
  setTimeout(function () {
    for (var i in estratoContoLinks) {
      if (site_info.theUser.role == 5) {
        if (i != "estrato_conto_rete" && i != "prelievo") {
          linksOnEstratoContoArr.push(
            '<a name="' +
              i +
              '" onClick="showActiveLinkonProfileHeaderLinks(this)" class="profile_links_onHeader" ui-sref="' +
              estratoContoLinks[i].uisref +
              '" href="' +
              estratoContoLinks[i].href +
              '">' +
              links_language[site_info.language][i] +
              "</a>"
          );
        }
      } else {
        linksOnEstratoContoArr.push(
          '<a name="' +
            i +
            '" onClick="showActiveLinkonProfileHeaderLinks(this)" class="profile_links_onHeader" ui-sref="' +
            estratoContoLinks[i].uisref +
            '" href="' +
            estratoContoLinks[i].href +
            '">' +
            links_language[site_info.language][i] +
            "</a>"
        );
      }
    }
    e.parentNode.parentNode.lastElementChild.innerHTML = linksOnEstratoContoArr.join(
      ""
    );
  }, 0);
}

function user_sport_func(e) {
  linksOnSportReport = [];
  setTimeout(function () {
    for (var i in reportLinks) {
      if (site_info.theUser.role == 5) {
        if (i != "estrato_conto_rete" && i != "prelievo") {
          linksOnSportReport.push(
            '<a name="' +
              i +
              '" onClick="showActiveLinkonProfileHeaderLinks(this)" class="profile_links_onHeader" ui-sref="' +
              reportLinks[i].uisref +
              '" href="' +
              reportLinks[i].href +
              '">' +
              links_language[site_info.language][i] +
              "</a>"
          );
        }
      } else {
        linksOnSportReport.push(
          '<a name="' +
            i +
            '" onClick="showActiveLinkonProfileHeaderLinks(this)" class="profile_links_onHeader" ui-sref="' +
            reportLinks[i].uisref +
            '" href="' +
            reportLinks[i].href +
            '">' +
            links_language[site_info.language][i] +
            "</a>"
        );
      }
    }
    e.parentNode.parentNode.children[1].innerHTML = linksOnSportReport.join("");
  }, 0);
}

var linksOnHeaderArr = [];
var linksOnEstratoContoArr = [];

function showProfileLinksonHeader() {
  linksOnHeaderArr = [];
  for (var i in profileLinksObj) {
    if (site_info.theUser.role == 5) {
      if (
        i != "network" &&
        i != "createUser" &&
        i != "commissions" &&
        i != "terzeParti" &&
        i != "estrato_conto_rete" &&
        i != "prelievo"
      ) {
        linksOnHeaderArr.push(
          '<a name="' +
            i +
            '" onClick="showActiveLinkonProfileHeaderLinks(this)" class="profile_links_onHeader" ui-sref="' +
            profileLinksObj[i].uisref +
            '" href="' +
            profileLinksObj[i].href +
            '">' +
            links_language[site_info.language][i] +
            "</a>"
        );
      }
    } else {
      linksOnHeaderArr.push(
        '<a name="' +
          i +
          '" onClick="showActiveLinkonProfileHeaderLinks(this)" class="profile_links_onHeader" ui-sref="' +
          profileLinksObj[i].uisref +
          '" href="' +
          profileLinksObj[i].href +
          '">' +
          links_language[site_info.language][i] +
          "</a>"
      );
    }
  }
  $(".profile_links_on_header").html(
    '<div class="respHeader">' + linksOnHeaderArr.join("") + "</div>"
  );
}

function showActiveLinkonProfileHeaderLinks(e) {
  var links = document.querySelectorAll(".profile_links_onHeader");
  for (var i of links) {
    i.classList.contains("active") && i.classList.remove("active");
  }
  e.classList.add("active");
}

function left_menu_func() {
  setTimeout(function () {
    $(".leftMenuSports md-virtual-repeat-container")[0].addEventListener(
      "click",
      function (e) {
        catState_func(e);
      },
      false
    );
  }, 0);
}

function catState_func(e) {
  if (e.target.className.includes("sport-name")) {
    document.getElementsByTagName("html")[0].classList.remove("respBody");
    if (
      e.target.textContent == site_info.catState.clickedCat &&
      !site_info.catState.lastClicked
    ) {
      document.getElementsByTagName("html")[0].classList.add("respBody");
      site_info.catState.clickedCat = e.target.textContent;
      site_info.catState.lastClicked = true;
      if (swiper_most_played) {
        swiper_most_played.params.slidesPerView = 2;
        swiper_most_played.update();
      }
      if (swiper) {
        swiper.update();
      }
      return;
    }
    site_info.catState.lastClicked = false;
    site_info.catState.clickedCat = e.target.textContent;
    return;
  }
}

var matchCount = 0;

function most_played_slide(e) {
  matchCount += 1;
  if (matchCount == 11) {
    slider();
    addFlagsmob();
    matchCount = 0;
  }
}

function imgError(image) {
  image.onerror = "";
  image.src =
    "http://static.pcluster.info/skins/jeksport/img/teamFlags/default.png";
  return true;
}

function addFlagsmob() {
  // $('div[ng-bind-html="matchesMostPlayedVm.matchInfoHtml(virtualMatch.match)"] .marginBottom4').prepend('<div class="imgFlag"></div>');
  var gjithsejNAMES = $(".most_played_section .md-truncate.fontSize16").size();
  var i;
  for (i = 0; i < gjithsejNAMES; i++) {
    var name = $(".most_played_section .md-truncate.fontSize16").get(i)
      .innerText;
    var nameLowercase = name.toLowerCase().replace(/ /g, "");
    var element = $(".most_played_section .md-truncate.fontSize16").eq(i);
    var source =
      "https://gradm-api.pcluster.info/storage/logos/" + nameLowercase + ".png";

    //numron sa child ka divi dhe nqs ka +2 return! nqs ka 1, dmth vtm emri i skuadres shton img
    var QerratEDivit = $(
      'div[ng-bind-html="matchesMostPlayedVm.matchInfoHtml(virtualMatch.match)"] .marginBottom4'
    )
      .eq(i)
      .children()
      .size();
    if (QerratEDivit >= 2) {
      return;
    } else {
      $(
        "<div class='imgFlag'><img src=" +
          source +
          " onerror='imgError(this);' alt='flag' /></div>"
      ).insertBefore(element[0]);
    }
  }
}

function slider() {
  $(".matchesMostPlayedSection").attr("class", "most_played_section");
  $(".most_played_section .clearfix").append(
    '<div class="swiper-container swiper2"></div>'
  );
  $(".most_played_section .left").removeAttr("style");
  $(".most_played_section .left").attr("class", "swiper-slide");
  $(".most_played_section .swiper-slide").wrapAll(
    '<div class="swiper-wrapper"></div>'
  );
  $(" .most_played_section .swiper2").append(
    $(".most_played_section .swiper-wrapper")
  );
  $(".most_played_section .swiper2").append(
    "<div class='swiper-pagination swiper-pagination-2'></div><div class='swiper-button-next swiper-button-next-2'></div><div class='swiper-button-prev swiper-button-prev-2'></div></div>"
  );
  $(".most_played_section .swiper2 .swiper-slide .md-whiteframe-8dp")
    .parent()
    .removeAttr("class");
  $(
    ".most_played_section .swiper2 .swiper-slide .md-whiteframe-8dp"
  ).removeAttr("class");
  $(".most_played_section .swiper2 .swiper-slide .paddingLeft16").attr(
    "class",
    "match"
  );
  $(".most_played_section .swiper2 .swiper-slide .match .timeOnTitle")
    .parent()
    .parent()
    .removeAttr("class");
  $(".most_played_section .swiper2 .swiper-slide .match .timeOnTitle")
    .parent()
    .attr("class", "match_header");
  $(
    ".most_played_section .swiper2 .swiper-slide .match .match_header span:first-child"
  ).removeAttr("style");
  $(".most_played_section .swiper2 .swiper-slide .match > div:last-child").attr(
    "class",
    "match_box"
  );
  $(
    ".most_played_section .swiper2 .swiper-slide .match .match_box > div:first-child"
  ).attr("class", "match_teams");
  $(".most_played_section .swiper2").css({
    background:
      'url("http://static.pcluster.info/skins/' +
      site_info.site_name +
      '/img/banners/mostPlayedSlider.jpg")',
    "background-size": "cover",
    "background-position": "center",
    "background-repeat": "no-repeat",
  });
  give_mp_slider_param();
}

function give_mp_slider_param() {
  swiper_most_played = new Swiper(".swiper2", {
    init: true,
    speed: 2000,
    loop: true,
    slidesPerView: 2,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
    autoplay: {
      delay: 3000,
    },
  });
}

function addBodyBanner() {
  var banners = site_info.bannerPages.default;
  for (var i = 0; i < banners.length; i++) {
    if (
      banners[i].css_selector.name === "body" ||
      banners[i].css_selector.name === "BODY"
    ) {
      $("#body")[0].setAttribute(
        "style",
        "background-image: url(" +
          banners[i].image.path +
          ") !important;  background-repeat: no-repeat !important; background-position-y: 0px;  background-position-x: center !important; background-size: auto;  background-color: " +
          banners[i].subtitle +
          "!important;"
      );
    }
  }
}

function add_banners_on_center() {
  var banners = site_info.bannerPages.default;
  var listImage = [];
  for (var i = 0; i < banners.length; i++) {
    if (banners[i].css_selector.name.toLowerCase() === "mainbanner") {
      listImage.push(
        '<div class="imagesB swiper-slide"><img src="' +
          banners[i].image.path +
          '"/></div>'
      );
    }
  }

  var bannerToDisplay;

  if (listImage.length === 1) {
    bannerToDisplay = '<div class="item">' + listImage.join("") + "</div>";
  } else {
    bannerToDisplay =
      ' <div class="swiper-container bannerSwipe"><div class="swiper-wrapper">' +
      listImage.join("") +
      "</div><div class='swiper-pagination swiper-pagination_banner'></div><div class='swiper-button-next swiper-button-next-banner'></div><div class='swiper-button-prev swiper-button-prev-banner'></div></div>";
    setTimeout(mainBannerSliderParam, 0);
  }
  $(".centerBanner").html(bannerToDisplay);
}

function add_banners_on_right() {
  var banners = site_info.bannerPages.default;
  var listImage = [];
  for (var i = 0; i < banners.length; i++) {
    if (banners[i].css_selector.name.toLowerCase() === "right") {
      listImage.push(
        '<a href="' +
          (banners[i].link || "") +
          '">' +
          '<div class="cbanners"><img src="' +
          banners[i].image.path +
          '"/></div>' +
          "</a>"
      );
    }
  }
  $("md-content#rightContent").children().last().html(listImage.join(""));
}

function get_default_page_banners() {
  var page = "page=" + $("html")[0].getAttribute("page");
  var skinName = sitesGraphAdm_token[site_info.site_name];
  var skinUrl = skinName.urlApi;
  var url = skinUrl[0] + page + skinUrl[1];

  var admRequest;

  if (window.XMLHttpRequest) {
    // modern browsers
    admRequest = new XMLHttpRequest();
  } else {
    // old IE browsers
    admRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  admRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(admRequest.responseText);
      site_info.bannerPages.default = resp.success.banners;
      addBodyBanner();
      add_banners_on_center();
      add_banners_on_right();
    }
  };
  admRequest.open("GET", url, true);
  admRequest.send();
}

// MOBILE FUNCTIONS
function m_left_menu_sports(e) {}

function m_left_menu_sports_item(e) {}

function mob_settings() {
  $("#settings")[0].addEventListener(
    "click",
    function (e) {
      if (
        e.target.parentNode.getAttribute("ng-click") &&
        e.target.parentNode.getAttribute("ng-click") === "chatVm.showChat()"
      ) {
        Comm100API.open_chat_window();
      }
    },
    false
  );
}

function find_language_mob(e) {}

function default_func_mob(e) {
  matchCount = 0;
  if (shouldRun) {
    addApkBanners();
  }
}

function mobMPslide() {
  $("#centerContent section")[1].className = "most-played-section";
  $("#centerContent .most-played-section").append(
    '<div class="swiper-container swiper2"></div>'
  );
  $(".most-played-section .left").removeAttr("style");
  $(".most-played-section .left").attr("class", "swiper-slide");
  $(".most-played-section .swiper-slide").wrapAll(
    '<div class="swiper-wrapper"></div>'
  );
  $(".most-played-section .swiper2").append(
    $(".most-played-section .swiper-wrapper")
  );
  $(".most-played-section .swiper2").append(
    "<div class='swiper-pagination swiper-pagination-2'></div><div class='swiper-button-next swiper-button-next-2'></div><div class='swiper-button-prev swiper-button-prev-2'></div></div>"
  );
}

function give_mp_slider_param_mobile() {
  swiper_most_played = new Swiper(".swiper2", {
    init: true,
    speed: 2000,
    loop: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
    autoplay: {
      delay: 3000,
    },
  });
}

function simplerClassesOn_MP_mobile() {
  $(".most-played-section .swiper-slide > div > div").attr("class", "match");
  $(
    ".most-played-section .swiper-slide > div > div.match .paddingLeft16"
  ).removeAttr("class");
  $(
    ".most-played-section .swiper-slide > div > div.match > div > div:last-child"
  ).css({ display: "flex", "flex-direction": "column" });
  $(
    ".most-played-section .swiper-slide > div > div.match > div > div:last-child > div"
  ).css({ width: "100%" });
  $(
    '.most-played-section .swiper-slide > div > div.match > div > div:last-child > div > div [ng-bind-html="matchesMostPlayedVm.matchInfoHtml(virtualMatch.match)"] > div'
  ).css({ width: "50%" });

  $(
    ".most-played-section .swiper-slide > div > div.match > div > div > div:last-child"
  ).css({ width: "100%" });
  $(
    '.most-played-section .match [ng-bind-html="matchesMostPlayedVm.matchInfoHtml(virtualMatch.match)"] .marginBottom4'
  ).css({ "text-align": "center" });
  $(
    ".most-played-section .swiper-slide > div > div.match > div > div > div:last-child > div"
  ).css({ width: "33%", "text-align": "center" });
}

function matchesMostPlayedVm_mob(e) {
  matchCount += 1;
  if (matchCount == 10) {
    setTimeout(function () {
      mobMPslide();
      addFlagsmob();
      give_mp_slider_param_mobile();
      simplerClassesOn_MP_mobile();
      matchCount = 0;
    }, 0);
  }
}

function m_acc_links_mob(e) {}

function poker_page_func_mob(e) {}

function casino_function_showProviders_mob(e) {}

function casino_function_current_mob(e) {}

function casino_function_md_content_mob(e) {}

function casino_function_md_card_mob(e) {}

function live_casino_game_opened_mob(e) {}

function live_casino_mdContent_mob(e) {}

function live_casino_liveCasinoVm_games_mob(e) {
  $("html")[0].setAttribute("page", "liveCasino");
  var page = "page=liveCasino";
  var skinName = sitesGraphAdm_token[site_info.site_name];
  var skinUrl = skinName.urlApi;
  var url = skinUrl[0] + page + skinUrl[1];

  var admRequest;

  if (window.XMLHttpRequest) {
    // modern browsers
    admRequest = new XMLHttpRequest();
  } else {
    // old IE browsers
    admRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  admRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(admRequest.responseText);
      site_info.bannerPages.livecasino = resp.success.banners;
      var imgCasino = [];
      for (var i = 0; i < site_info.bannerPages.livecasino.length; i++) {
        if (
          site_info.bannerPages.livecasino[i].css_selector.name == "center" ||
          site_info.bannerPages.livecasino[i].css_selector.name == "CENTER"
        ) {
          imgCasino.push(site_info.bannerPages.livecasino[i]);
        }
      }
      imgCasino.sort(function (a, b) {
        return a.order - b.order;
      });
      $(".asiaLive.livecasino").append(
        '<img src="' + imgCasino[0].image.path + '" />'
      );
      $(".mLive.livecasino").append(
        '<img src="' + imgCasino[1].image.path + '" />'
      );
      $(".vivoGaming.livecasino").append(
        '<img src="' + imgCasino[2].image.path + '" />'
      );
      $(".EzugiCasino.livecasino").append(
        '<img src="' + imgCasino[3].image.path + '" />'
      );
    }
  };
  admRequest.open("GET", url, true);
  admRequest.send();
}

function header_mob(e) {}

function changeToWeb(e) {
  e.name === "web"
    ? localStorage.setItem("isWeb", "true")
    : localStorage.setItem("isWeb", "false");
  $(".switchUI").html(
    "<h3>" +
      site_info.site_name +
      " will be switched to " +
      e.name +
      " version after login</h3>"
  );
}

function displayModal() {
  setTimeout(function () {
    $("#userArea").prepend(
      '<div  class="switchUI">' +
        '<div class="head">' +
        "<h2>Cambia sito?</h2>" +
        "</div>" +
        '<button name="web" onclick="changeToWeb(this)">' +
        "Desktop" +
        "</button>" +
        '<button name="mobile" onclick="changeToWeb(this)">' +
        "Mobile" +
        "</button>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
  }, 100);
}

function header_mob_toolbar(e) {
  setTimeout(function () {
    var loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.addEventListener("click", displayModal, false);
    }
  }, 500);
}

$(document).ready(function () {
  setTimeout(casinoBack, 1000);
});
$(window).on("hashchange", casinoBack);
function casinoBack() {
  $("#kohanaCasinoMain").click(function () {
    setTimeout(function () {
      if ($("#gameIframeContent").length > 0) {
        $("body").addClass("isOpenedGame");
      } else {
        $("body").removeClass("isOpenedGame");
      }
    }, 1000);
  });
}
