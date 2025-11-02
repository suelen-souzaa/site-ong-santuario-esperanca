// -- Botão para voltar ao topo da página -- \\
const btnTopo = document.getElementById("btn-topo");

// quando rolar a página
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

// ao clicar, volta pro topo
btnTopo.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// -- Botão "Doe Agora" (Destacar) -- \\
function destacarPix() {
  const pixItem = document.getElementById("pix-doacao");
  if (pixItem) {
    pixItem.scrollIntoView({ behavior: "smooth", block: "center" });

    // Aplica destaque visual temporário
    pixItem.style.backgroundColor = "#fff3cd"; 
    pixItem.style.borderColor = "#ffc107";

    setTimeout(() => {
      pixItem.style.backgroundColor = "";
      pixItem.style.borderColor = "";
    }, 3000); // remove destaque após 3 segundos
  }
}