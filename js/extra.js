//EXTRA JS (SKYLIVE)

function bannersCasino() {
  $(".right-side-bar .banner-block").append(
    '<a href="/Sport/casino?loadGame=229&name=BerryBurst"><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerLeft1.png"/></a> <a href="/Sport/casino?loadGame=86&name=Arcane:%Reel%Chaos"><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerLeft2.png"/></a> <a href="/Sport/casino?loadGame=110&name=Aloha!%Cluster%Pays"><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerLeft3.png"/></a>'
  );
  $(".right-side-bar .single-block.antepost").append(
    '<a href="/Sport/casino?loadGame=635&name=Dark Queen"><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerRight1.png"/></a> <a href="/Sport/casino?loadGame=198&name=Twin Spin"><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerRight2.png"/></a> '
  );
}

$(document).ready(() => {
  $("body").attr("data-url", window.location.href);
  const skinUrl = window.location.host.split(".")[0];
  console.log(
    `%cEXTRA JS ACTIVATED SKIN: ${skinUrl.toUpperCase()}`,
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
      "font-size: 20px ;  text-decoration: underline ; " +
      "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
  );
  //all pages Funx
  addThemeContainerHeader();
  //sport page Funx
  if (window.location.href.includes("/Sport/sport")) {
    sportsToTableHeader();
    bannersCasino();
    var teamHome = $("#dailyBets .team-home"),
      teamAway = $("#dailyBets .team-away");
    teamHome.prepend(
      `<img src="https://gradm-api.pcluster.info/storage/logos/${teamHome
        .text()
        .toLowerCase()}.png" alt=""/>`
    );
    teamAway.prepend(
      `<img src="https://gradm-api.pcluster.info/storage/logos/${teamAway
        .text()
        .toLowerCase()}.png" alt=""/>`
    );
  }
  //live pages Funx
  if (window.location.href.includes("/Sport/live")) {
    bannersCasino();
  }
});
