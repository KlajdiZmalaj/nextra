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
        "goldSport",
        "f53125dabecf8dc2bcced0768d47203448621c9099da7bcd327b6f12afdb7295db58a2e8f8647423"
      );
    }
  });
  