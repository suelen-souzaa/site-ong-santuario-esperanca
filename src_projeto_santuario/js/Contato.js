// -- Validção do formulário de contato -- \\
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato"); //nome do formulário igual ao HTML

  if (!form) return; //impede erros caso o formulário não exista

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone")?.value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // -- Verifica se todos os campos obrigatórios foram preenchidos -- \\
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // -- Validação do e-mail -- \\
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }

    // -- Validação simples de telefone (apenas números e tamanho) -- \\
    if (telefone && telefone.replace(/\D/g, "").length < 10) {
      alert("Digite um número de telefone válido!");
      return;
    }

    // -- Mensagem de sucesso -- \\
    alert(`Mensagem enviada com sucesso! 💚 
Obrigado por entrar em contato, ${nome}! Em breve retornaremos.`);

    form.reset(); // limpa o formulário após o envio
  });
});