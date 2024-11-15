$(document).ready(() => {
  setInterval(() => {
    let containerFlip = $(".container-flip");
    let index = containerFlip.children().not(".hidden").index();
    if (index >= containerFlip.children().length - 1) {
      index = 0;
    } else {
      index++;
    }
    containerFlip.children().addClass("hidden");
    $(containerFlip.children()[index]).removeClass("hidden");
  }, 3000);

  $("footer#footer p").html(function(_, html) {
    const date = new Date();
    return html.replace("{{YearNow}}", date.getFullYear());
  });

  $("section#about .container-text p:first-child").html(function(_, html) {
    const date = new Date();
    const yearsWorking = date.getFullYear() - 2021;
    return html.replace("{{YearsWorking}}", yearsWorking);
  });
});

function copyText() {
  const text = $("#textToCopy").html();

  // Usa la Clipboard API para copiar el texto al portapapeles
  navigator.clipboard.writeText(text)
    .then(() => {
      const $iconCopy = $("#iconCopy i");
      $iconCopy.removeClass("fa-file-circle-plus");
      $iconCopy.addClass("fa-file-circle-check");

      setTimeout(() => {
        $iconCopy.removeClass("fa-file-circle-check");
        $iconCopy.addClass("fa-file-circle-plus");
      }, 2000);
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}
