$(document).ready(() => {
  setInterval(() => {
    let containerFlip = $(".container-flip");
    let index = containerFlip.children().not(".d-none").index();
    if (index >= containerFlip.children().length - 1) {
      index = 0;
    } else {
      index++;
    }
    containerFlip.children().addClass("d-none");
    $(containerFlip.children()[index]).removeClass("d-none");
  }, 3000);
});
