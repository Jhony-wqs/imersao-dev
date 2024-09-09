function buscar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  campoPesquisa = campoPesquisa.toLowerCase();
  console.log(campoPesquisa);

  let resultados = "";
  let titulo = "";
  let descricao = ";"

  if (!campoPesquisa) {
    return (section.innerHTML = `<p> Item não encontrado.</p>`);
  }
  for (let dado of bancoDeDados) {
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    if (
           titulo.includes(campoPesquisa) ||
           descricao.includes(campoPesquisa)
    ) {
      resultados += `
              <div class="item-resultado">
          
                  <h2>${dado.titulo}</h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href= ${dado.link} target="_blank">Saiba mais.</a>
      
              </div>                 
          `;
    }
  }

  if (!resultados) {
     resultados =  `<p> Item não encontrado.</p>`
  }

  section.innerHTML = resultados;
}
