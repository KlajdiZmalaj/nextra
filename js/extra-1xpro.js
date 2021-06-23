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
          "1xpro",   //SKINI
          "0086b5f29cdba1a10de3544e84c9b166fcae3a10adde45406918c80024e217df4ab71f04c43a0c12"   // TOKENI
        );
      }
});


//code with javascript



