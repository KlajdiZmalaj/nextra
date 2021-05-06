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
      "r7bet",
      "35da61c29d9c1fdc0debfdaa8e9294d678b4d2f8c2e7c8a9b26bb4589698031733aaef8cb5c253ab"
    );
    // jQuery(".header .bottom-header .bottom-header-content").append(
    //   '<a href="/Sport/bo2_newUser" alt=""><i class="fa fa-plus" aria-hidden="true"></i> Novo Usuário</a>'
    // );
    jQuery("#quickTransferOperation option:nth-child(2)").text("Depositar");
    jQuery("#quickTransferOperation option:nth-child(3)").text("Levantar");
    jQuery("#quickTransferOperation option:nth-child(4)").text(
      "Depositar Crédito"
    );
    jQuery("#quickTransferOperation option:nth-child(5)").text(
      "Levantar Crédito"
    );
  }
});
