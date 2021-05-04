$(document).ready(() => {
  $("body").attr("data-url", window.location.href);
  const skinUrl = window.location.host.split(".")[0];
  console.log(
    `%cEXTRA JS ACTIVATED SKIN: ${skinUrl.toUpperCase()}`,
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
      "font-size: 20px ;  text-decoration: underline ; " +
      "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
  );

  if (window.location.href.includes("/Sport/sport")) {
    //   mainBannerClick = function () {
    //     window.location.href =
    //       window.location.origin +
    //       "/Sport/casino?loadGame=1215&name=Gonzo' Quest";
    //   };
    window.fetchSportBanners(
      "kobet24",
      "647a68b9b8c3a952a019d85681a67765df27158b09ab8b336b1bee6c06d1e7a4a25a2827701a5509"
    );
  }
});
