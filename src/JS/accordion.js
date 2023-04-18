const itensPerguntaERespostas = document.querySelectorAll(".item");
const respostas = document.getElementsByClassName("resposta");

itensPerguntaERespostas.forEach(function (item) {
  item.addEventListener("click", function () {
    const itemMostrando = document.querySelector(".mostrar");

    if (itemMostrando) {
      itemMostrando.classList.remove("mostrar");
    }
    item.classList.add("mostrar");
  });
});

console.log(itensPerguntaERespostas);
