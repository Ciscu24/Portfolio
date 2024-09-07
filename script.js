// Puedes añadir interactividad aquí si lo necesitas.
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Gracias por tu mensaje. ¡Te responderé pronto!");
  });

$(document).ready(() => {
  setInterval(() => {
    let containerFlip = $(".container-flip");
    let index = containerFlip.children().not(".d-none").index();
    console.log(index);
    if (index >= containerFlip.children().length - 1) {
      index = 0;
    } else {
      index++;
    }
    containerFlip.children().addClass("d-none");
    $(containerFlip.children()[index]).removeClass("d-none");
    console.log($(containerFlip.children()[index]));
  }, 3000);
});
