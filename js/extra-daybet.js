//EXTRA JS
$(document).ready(() => {
  const skinUrl = window.location.host.split(".")[0];
  console.log(
    `%cEXTRA JS ACTIVATED SKIN: ${skinUrl.toUpperCase()}`,
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
      "font-size: 20px ;  text-decoration: underline ; " +
      "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
  );
  $('<i class="fas fa-eye"></i>').appendTo(".primary-menu");
});

//ben te mundur hide dhe show ikonen e syrit
$(document).ready(function () {
  $(".top-header .fas.fa-eye").click(function () {
    $(".header-buttons").toggleClass("hide");
  });
});



//kur jemi te loguar e shfaqim ikone e syrit ,
// kur bejme log-out nk e shaq ikonen e syrit
$(document).ready(function () {
  $(".fas.fa-eye").css({ display: "none" });

  if ($(".logout-button").length === 1) {
    $(".fas.fa-eye").css({ display: "flex" });
  } else {
    $(".fas.fa-eye").css({ display: "none" });
  }
});

