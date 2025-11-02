// -- Função para abrir a seção de Voluntariado/Doação -- \\
function abrirVoluntariado(tipoEscolhido) {
  const secao = document.getElementById("secao-voluntariado");
  if (!secao) return;

  // -- Mostra a seção -- \\
  secao.style.display = "block";
  secao.scrollIntoView({ behavior: "smooth" });

  // -- Define título e tipo -- \\
  const titulo = document.getElementById("titulo-cadastro");
  const select = document.getElementById("tipo");

  if (tipoEscolhido === "voluntario") {
    titulo.textContent = "Cadastro de Voluntariado 🐾";
    select.value = "voluntario";
  } else if (tipoEscolhido === "doacao") {
    titulo.textContent = "Cadastro para Doações 💖";
    select.value = "doacao";
  }
}

// -- Validação do formulário -- \\
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-voluntariado");
  if (!form) return; // evita erro se o form não existir

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !telefone || !mensagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      alert("E-mail inválido!");
      return;
    }

    alert("Cadastro enviado com sucesso! 💚 Entraremos em contato em breve.");
    form.reset();
  });
});