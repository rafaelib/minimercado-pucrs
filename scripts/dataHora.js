function atualizarDataHora() {
  const agora = new Date();
  const opcoes = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formatoLocal = agora.toLocaleString("pt-BR", opcoes);
  document.getElementById("data-hora").textContent =
    "Data e hora atual: " + formatoLocal;
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);
