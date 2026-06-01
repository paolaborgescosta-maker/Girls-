// Sprint 2: Lógica que gera relatório
// Sistema de Gerenciamento de Projetos

// Array para armazenar os projetos
let projetos = [];

// Função 1: Cadastrar projetos
function cadastrarProjeto(nome, nota, status) {
  const projeto = {
    id: projetos.length + 1,
    nome: nome,
    nota: nota,
    status: status // "em andamento" ou "finalizado"
  };
  projetos.push(projeto);
  console.log(`Projeto "${nome}" cadastrado com sucesso!`);
  return projeto;
}

// Função 2: Mostrar todos os projetos
function mostrarTodosProjetos() {
  console.log("\n=== TODOS OS PROJETOS ===");
  if (projetos.length === 0) {
    console.log("Nenhum projeto cadastrado.");
    return;
  }
  projetos.forEach(projeto => {
    console.log(`ID: ${projeto.id} | Nome: ${projeto.nome} | Nota: ${projeto.nota} | Status: ${projeto.status}`);
  });
}

// Função 3: Separar projetos em andamento e finalizados
function separarProjetos() {
  const emAndamento = projetos.filter(projeto => projeto.status === "em andamento");
  const finalizados = projetos.filter(projeto => projeto.status === "finalizado");
  
  console.log("\n=== PROJETOS EM ANDAMENTO ===");
  if (emAndamento.length === 0) {
    console.log("Nenhum projeto em andamento.");
  } else {
    emAndamento.forEach(projeto => {
      console.log(`${projeto.id}. ${projeto.nome} - Nota: ${projeto.nota}`);
    });
  }
  
  console.log("\n=== PROJETOS FINALIZADOS ===");
  if (finalizados.length === 0) {
    console.log("Nenhum projeto finalizado.");
  } else {
    finalizados.forEach(projeto => {
      console.log(`${projeto.id}. ${projeto.nome} - Nota: ${projeto.nota}`);
    });
  }
  
  return { emAndamento, finalizados };
}

// Função 4: Calcular média das notas
function calcularMedia() {
  if (projetos.length === 0) {
    console.log("Nenhum projeto para calcular média.");
    return 0;
  }
  
  let soma = 0;
  for (let projeto of projetos) {
    soma += projeto.nota;
  }
  
  const media = soma / projetos.length;
  console.log(`\nMédia das notas: ${media.toFixed(2)}`);
  return media;
}

// Função 5: Encontrar maior nota
function encontrarMaiorNota() {
  if (projetos.length === 0) {
    console.log("Nenhum projeto para encontrar a maior nota.");
    return null;
  }
  
  let maiorNota = projetos[0].nota;
  let projetoComMaiorNota = projetos[0];
  
  for (let projeto of projetos) {
    if (projeto.nota > maiorNota) {
      maiorNota = projeto.nota;
      projetoComMaiorNota = projeto;
    }
  }
  
  console.log(`\nMaior nota: ${maiorNota} - Projeto: "${projetoComMaiorNota.nome}"`);
  return projetoComMaiorNota;
}

// === EXEMPLOS DE USO ===
console.log("=== CADASTRANDO 5+ PROJETOS ===\n");

cadastrarProjeto("Aplicativo Mobile", 8.5, "em andamento");
cadastrarProjeto("Website Responsivo", 9.2, "finalizado");
cadastrarProjeto("API REST", 7.0, "em andamento");
cadastrarProjeto("Dashboard Analytics", 8.8, "finalizado");
cadastrarProjeto("Sistema de Login", 9.5, "finalizado");
cadastrarProjeto("Chat em Tempo Real", 8.0, "em andamento");

// Mostrar todos os projetos
mostrarTodosProjetos();

// Separar projetos
separarProjetos();

// Calcular média
calcularMedia();

// Encontrar maior nota
encontrarMaiorNota();
