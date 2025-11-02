// -- Função para abrir formulário de Apadrinhamento -- \\
function abrirApadrinhamento() {
  
  if (document.getElementById("popup-apadrinhamento")) return;

  const formHTML = `
    <div id="popup-apadrinhamento" class="popup">
      <div class="popup-content">
        <h3>Apadrinhe um Amigo 💚</h3>
        <form id="form-Apadrinhamento">
          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" placeholder="Digite seu nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" placeholder="fulano@exemplo.com" required>

          <label for="valor">Valor mensal (R$):</label>
          <select id="valor" required>
            <option value="">Selecione um valor</option>
            <option value="20">R$ 20</option>
            <option value="50">R$ 50</option>
            <option value="100">R$ 100</option>
            <option value="200">R$ 200</option>
          </select>

          <div class="botoes-form">
            <button type="submit">Confirmar</button>
            <button type="button" onclick="fecharApadrinhamento()">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", formHTML);
}

// -- Fechar formulário -- \\
function fecharApadrinhamento() {
  const popup = document.getElementById("popup-apadrinhamento");
  if (popup) popup.remove();
}

// -- Validação do Formulário -- \\
document.addEventListener("submit", (e) => {
  if (e.target.id === "form-Apadrinhamento") {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const valor = document.getElementById("valor").value;

    if (!nome || !email || !valor) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const emailValido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailValido.test(email)) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }

    alert(`💚 Obrigado, ${nome}! Você escolheu apadrinhar com uma doação mensal de R$${valor}.`);
    fecharApadrinhamento();
  }
});