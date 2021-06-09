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
          "arababet",   //SKINI
          "f3f9c18f5790ae30e9dac6448f156a8fdd723d9318622f650d81f678970d86eb1921d9d081d8042b"   // TOKENI
        );
      }
});


