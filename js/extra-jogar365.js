$(document).ready(() => {
    $("body").attr("data-url", window.location.href);
    const skinUrl = window.location.host.split(".")[0];
    console.log(
      `%cEXTRA JS ACTIVATED SKIN: ${skinUrl.toUpperCase()}`,
      "background-color: fuchsia ; color: white ; font-weight: bold ; " +
        "font-size: 20px ;  text-decoration: underline ; " +
        "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
    );


    //CAROUSEL  PER BANNER-in
    if (window.location.href.includes("/Sport/sport")) {  
        //   mainBannerClick = function () {
        //     window.location.href =
        //       window.location.origin +
        //       "/Sport/casino?loadGame=1215&name=Gonzo' Quest";
        //   };
        window.fetchSportBanners(
          "jogarnextra",   //SKINI
          "4b2e506b75aa3a22e677fd19fee5b010af6009b3e75809e1c13b116ce3dc7e3a026a852554e2225f"   // TOKENI
        );
      }
});



