//EXTRA JS (SKYLIVE)

function bannersSportRight() {
  $(".right-side-bar .banner-block").append(
    '<a href="/Sport/casino""><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerLeft1.png"/></a> <a href="/Sport/casino""><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerLeft2.png"/></a> <a href="/Sport/casino""><img src="//nextra.pcluster.info/skylive/images/sportPage/bannerLeft3.png"/></a>'
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
  addThemeContainerHeader();
  sportsToTableHeader();
  bannersSportRight();
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
});
