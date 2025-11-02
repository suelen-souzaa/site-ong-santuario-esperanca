
document.addEventListener("DOMContentLoaded", () => {

  // -- Formulário de Adoção -- \\
  const formAdocao = document.getElementById("form-adocao");
  if (formAdocao) {
    formAdocao.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = formAdocao.querySelector("#adocao-nome").value.trim();
      const email = formAdocao.querySelector("#adocao-email").value.trim();
      const telefone = formAdocao.querySelector("#adocao-telefone").value.trim();
      const animal = formAdocao.querySelector("#adocao-animal").value;
      const experiencia = formAdocao.querySelector("#adocao-experiencia").value.trim();
      const documento = formAdocao.querySelector("#adocao-documento").files[0];
      const mensagem = formAdocao.querySelector("#adocao-mensagem").value.trim();
      const concordo = formAdocao.querySelector("#adocao-concordo").checked;

      if (!nome || !email || !telefone || !animal || !experiencia || !mensagem || !concordo) {
        alert("Por favor, preencha todos os campos obrigatórios e aceite os termos!");
        return;
      }

      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValido.test(email)) {
        alert("Por favor, insira um e-mail válido!");
        return;
      }

      const telefoneNumeros = telefone.replace(/\D/g, "");
      if (telefoneNumeros.length < 10) {
        alert("Digite um número de telefone válido!");
        return;
      }

      alert(`Obrigado, ${nome}! 💚
Seu pré-cadastro de adoção foi enviado com sucesso.
Nossa equipe entrará em contato para agendar a visita de avaliação do seu lar.
Após a aprovação, iniciaremos o acompanhamento do animal por 1 ano.`);

      formAdocao.reset();
    });
  }

  // -- Formulário de Voluntariado -- \\
  const formVoluntariado = document.getElementById("form-voluntariado");
  if (formVoluntariado) {
    formVoluntariado.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = formVoluntariado.querySelector("#voluntariado-nome").value.trim();
      const email = formVoluntariado.querySelector("#voluntariado-email").value.trim();
      const telefone = formVoluntariado.querySelector("#voluntariado-telefone").value.trim();
      const mensagem = formVoluntariado.querySelector("#voluntariado-mensagem").value.trim();

      if (!nome || !email || !telefone || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
      }

      alert(`Obrigado, ${nome}! 💚
Seu cadastro foi enviado com sucesso.`);
      formVoluntariado.reset();
    });
  }

  // -- Formulário de Contato -- \\
  const formContato = document.getElementById("form-contato");
  if (formContato) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = formContato.querySelector("#contato-nome").value.trim();
      const email = formContato.querySelector("#contato-email").value.trim();
      const telefone = formContato.querySelector("#contato-telefone").value.trim();
      const mensagem = formContato.querySelector("#contato-mensagem").value.trim();

      if (!nome || !email || !telefone || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
      }

      alert(`Obrigado, ${nome}! 💚
Sua mensagem foi enviada com sucesso.`);
      formContato.reset();
    });
  }

});

// -- Função para abrir a seção de adoção -- \\
window.abrirAdocao = function () {
  const secaoAdocao = document.getElementById("secao-adocao");
  if (secaoAdocao) {
    secaoAdocao.style.display = "block";
    secaoAdocao.scrollIntoView({ behavior: "smooth" });
  }

  const secaoVoluntariado = document.getElementById("secao-voluntariado");
  if (secaoVoluntariado) {
    secaoVoluntariado.style.display = "none";
  }

  const secaoApadrinhamento = document.getElementById("secao-apadrinhamento");
  if (secaoApadrinhamento) {
    secaoApadrinhamento.style.display = "none";
  }
};