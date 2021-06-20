document.addEventListener("DOMContentLoaded", function () {
  var relsa = new Relsa({
    container: '.dots',
    render: 5,
    startIndex: 3,
    isResponsive: true,
  })
  console.log(relsa);

  document.querySelector(".button.prev").onclick = relsa.setPrev;
  document.querySelector(".button.next").onclick = relsa.setNext;
});
