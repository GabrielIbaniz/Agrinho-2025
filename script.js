function mostrarMensagem() {
  const nome = prompt("Digite seu nome para participar:");
  if (nome && nome.trim() !== "") {
    alert(`🌿 Obrigado, ${nome}! Sua atitude conta para um mundo melhor!`);
  } else {
    alert("Por favor, preencha seu nome corretamente.");
  }
}
