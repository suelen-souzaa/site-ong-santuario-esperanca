document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  // -- Aplicar máscaras de input -- \\
  Inputmask("999.999.999-99").mask("#cpf");
  Inputmask("(99) 99999-9999").mask("#telefone");
  Inputmask("99999-999").mask("#cep");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // -- Captura dos valores dos campos -- \\
    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const cpf = document.getElementById("cpf")?.value.trim();
    const telefone = document.getElementById("telefone")?.value.trim();
    const nascimento = document.getElementById("nascimento")?.value;
    const endereco = document.getElementById("endereco")?.value.trim();
    const cep = document.getElementById("cep")?.value.trim();
    const cidade = document.getElementById("cidade")?.value.trim();
    const estado = document.getElementById("estado")?.value;
    const mensagem = document.getElementById("mensagem")?.value.trim();

    // -- Validação de campos obrigatórios -- \\
    if (!nome || !email || !cpf || !telefone || !nascimento || !endereco || !cep || !cidade || !estado || !mensagem) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // -- Validação de e-mail -- \\
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }

    // -- Validação simples de CPF (apenas formato) -- \\
    if (cpf.replace(/\D/g, "").length !== 11) {
      alert("CPF inválido. Verifique se digitou corretamente.");
      return;
    }

    // -- Validação simples de telefone -- \\
    if (telefone.replace(/\D/g, "").length < 10) {
      alert("Telefone inválido. Verifique o número informado.");
      return;
    }

    // -- Validação simples de CEP -- \\
    if (cep.replace(/\D/g, "").length !== 8) {
      alert("CEP inválido. Deve conter 8 dígitos.");
      return;
    }

    // -- Mensagem finalização -- \\
    alert(`Cadastro enviado com sucesso! 💚 Obrigado por se conectar conosco, ${nome}.`);
    form.reset();
  });
});