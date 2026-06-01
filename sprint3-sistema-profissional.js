// Sprint 3: Dados Reais com Objetos
// PROGRAMAÇÃO BACK END AND DESENVOLVIMENTO DE SISTEMAS
// Upgrade profissional: de strings soltas para objetos estruturados

// ===== ESTRUTURA DE DADOS PROFISSIONAL =====
// Cada projeto agora é uma ficha completa com todos os dados

const projetos = [
  {
    id: 1,
    nome: "Cantina",
    descricao: "Sistema de gerenciamento de cardápio e vendas",
    status: "em andamento",
    nota: 8.0,
    dataInicio: "2026-05-01",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    responsavel: "Paola",
    progresso: 60
  },
  {
    id: 2,
    nome: "Equipamentos",
    descricao: "Controle de patrimônio escolar",
    status: "finalizado",
    nota: 9.0,
    dataInicio: "2026-04-15",
    dataFim: "2026-05-25",
    tecnologias: ["JavaScript", "Node.js", "MongoDB"],
    responsavel: "Paola",
    progresso: 100
  },
  {
    id: 3,
    nome: "Biblioteca Digital",
    descricao: "Plataforma para empréstimo de livros",
    status: "em andamento",
    nota: 8.5,
    dataInicio: "2026-05-10",
    tecnologias: ["JavaScript", "React", "Firebase"],
    responsavel: "Paola",
    progresso: 75
  },
  {
    id: 4,
    nome: "Portal de Notas",
    descricao: "Visualização de notas e boletins",
    status: "finalizado",
    nota: 9.2,
    dataInicio: "2026-04-01",
    dataFim: "2026-05-20",
    tecnologias: ["JavaScript", "Vue.js", "SQL"],
    responsavel: "Paola",
    progresso: 100
  },
  {
    id: 5,
    nome: "Agendamento de Aulas",
    descricao: "Sistema de reserva de salas e horários",
    status: "em andamento",
    nota: 8.3,
    dataInicio: "2026-05-15",
    tecnologias: ["JavaScript", "Express", "PostgreSQL"],
    responsavel: "Paola",
    progresso: 45
  },
  {
    id: 6,
    nome: "Comunicação Escola-Família",
    descricao: "Chat e notificações para pais e professores",
    status: "finalizado",
    nota: 8.8,
    dataInicio: "2026-04-20",
    dataFim: "2026-05-28",
    tecnologias: ["JavaScript", "WebSocket", "Node.js"],
    responsavel: "Paola",
    progresso: 100
  }
];

// ===== FUNÇÕES COM DADOS ESTRUTURADOS =====

// 1. RELATÓRIO PROFISSIONAL - Lista todos os projetos em formato estruturado
function gerarRelatorioCompleto() {
  console.log("\n" + "=".repeat(80));
  console.log("📊 RELATÓRIO PROFISSIONAL - TODOS OS PROJETOS");
  console.log("=".repeat(80) + "\n");

  projetos.forEach((projeto, index) => {
    console.log(`${index + 1}. ${projeto.nome.toUpperCase()}`);
    console.log(`   📝 Descrição: ${projeto.descricao}`);
    console.log(`   🎯 Status: ${projeto.status}`);
    console.log(`   ⭐ Nota: ${projeto.nota}`);
    console.log(`   📅 Data Início: ${projeto.dataInicio}`);
    if (projeto.dataFim) {
      console.log(`   ✅ Data Fim: ${projeto.dataFim}`);
    }
    console.log(`   👤 Responsável: ${projeto.responsavel}`);
    console.log(`   📈 Progresso: ${projeto.progresso}%`);
    console.log(`   🛠️  Tecnologias: ${projeto.tecnologias.join(", ")}`);
    console.log("-".repeat(80));
  });
}

// 2. FILTRAR PROJETOS FINALIZADOS - Upgrade de console.log simples
function listarFinalizados() {
  console.log("\n" + "=".repeat(80));
  console.log("✅ PROJETOS FINALIZADOS");
  console.log("=".repeat(80) + "\n");

  const finalizados = projetos.filter(p => p.status === "finalizado");

  if (finalizados.length === 0) {
    console.log("Nenhum projeto finalizado no momento.");
    return finalizados;
  }

  finalizados.forEach((projeto, index) => {
    console.log(`${index + 1}. ${projeto.nome} - Nota: ${projeto.nota} ⭐`);
    console.log(`   Finalizado em: ${projeto.dataFim}`);
    console.log(`   Tecnologias: ${projeto.tecnologias.join(", ")}`);
  });

  return finalizados;
}

// 3. FILTRAR PROJETOS EM ANDAMENTO
function listarEmAndamento() {
  console.log("\n" + "=".repeat(80));
  console.log("🚀 PROJETOS EM ANDAMENTO");
  console.log("=".repeat(80) + "\n");

  const emAndamento = projetos.filter(p => p.status === "em andamento");

  if (emAndamento.length === 0) {
    console.log("Nenhum projeto em andamento.");
    return emAndamento;
  }

  emAndamento.forEach((projeto, index) => {
    console.log(`${index + 1}. ${projeto.nome} - Nota: ${projeto.nota} ⭐`);
    console.log(`   Progresso: ${projeto.progresso}% ${'█'.repeat(Math.floor(projeto.progresso / 10))}${'░'.repeat(10 - Math.floor(projeto.progresso / 10))}`);
    console.log(`   Tecnologias: ${projeto.tecnologias.join(", ")}`);
  });

  return emAndamento;
}

// 4. CALCULAR ESTATÍSTICAS
function calcularEstatisticas() {
  console.log("\n" + "=".repeat(80));
  console.log("📈 ESTATÍSTICAS GERAIS");
  console.log("=".repeat(80) + "\n");

  const totalProjetos = projetos.length;
  const finalizados = projetos.filter(p => p.status === "finalizado").length;
  const emAndamento = projetos.filter(p => p.status === "em andamento").length;

  let somaNota = 0;
  projetos.forEach(p => {
    somaNota += p.nota;
  });
  const media = (somaNota / totalProjetos).toFixed(2);

  const maiorNota = Math.max(...projetos.map(p => p.nota));
  const menorNota = Math.min(...projetos.map(p => p.nota));

  const projetoMaiorNota = projetos.find(p => p.nota === maiorNota);
  const projetoMenorNota = projetos.find(p => p.nota === menorNota);

  console.log(`📊 Total de Projetos: ${totalProjetos}`);
  console.log(`✅ Finalizados: ${finalizados} (${((finalizados / totalProjetos) * 100).toFixed(1)}%)`);
  console.log(`🚀 Em Andamento: ${emAndamento} (${((emAndamento / totalProjetos) * 100).toFixed(1)}%)`);
  console.log(`\n⭐ Média de Notas: ${media}`);
  console.log(`🏆 Maior Nota: ${maiorNota} - Projeto: ${projetoMaiorNota.nome}`);
  console.log(`📉 Menor Nota: ${menorNota} - Projeto: ${projetoMenorNota.nome}`);

  return {
    totalProjetos,
    finalizados,
    emAndamento,
    media,
    maiorNota,
    menorNota
  };
}

// 5. BUSCAR PROJETO POR ID
function buscarProjetoPorId(id) {
  const projeto = projetos.find(p => p.id === id);
  
  if (!projeto) {
    console.log(`❌ Projeto com ID ${id} não encontrado.`);
    return null;
  }

  console.log("\n" + "=".repeat(80));
  console.log(`📋 DETALHES DO PROJETO: ${projeto.nome}`);
  console.log("=".repeat(80) + "\n");
  console.log(`ID: ${projeto.id}`);
  console.log(`Nome: ${projeto.nome}`);
  console.log(`Descrição: ${projeto.descricao}`);
  console.log(`Status: ${projeto.status}`);
  console.log(`Nota: ${projeto.nota}`);
  console.log(`Data Início: ${projeto.dataInicio}`);
  if (projeto.dataFim) console.log(`Data Fim: ${projeto.dataFim}`);
  console.log(`Responsável: ${projeto.responsavel}`);
  console.log(`Progresso: ${projeto.progresso}%`);
  console.log(`Tecnologias: ${projeto.tecnologias.join(", ")}`);

  return projeto;
}

// 6. RELATÓRIO POR TECNOLOGIA
function relatorioPortecnologia() {
  console.log("\n" + "=".repeat(80));
  console.log("🛠️  PROJETOS POR TECNOLOGIA");
  console.log("=".repeat(80) + "\n");

  const tecnologias = {};

  projetos.forEach(projeto => {
    projeto.tecnologias.forEach(tech => {
      if (!tecnologias[tech]) {
        tecnologias[tech] = [];
      }
      tecnologias[tech].push(projeto.nome);
    });
  });

  Object.keys(tecnologias).sort().forEach(tech => {
    console.log(`${tech}:`);
    tecnologias[tech].forEach(nome => {
      console.log(`  • ${nome}`);
    });
  });
}

// ===== MINI-SISTEMA EXECUTÁVEL =====
console.log("\n");
console.log("╔" + "═".repeat(78) + "╗");
console.log("║" + " ".repeat(20) + "🎓 MINI-SISTEMA DE GERENCIAMENTO DE PROJETOS 🎓" + " ".repeat(12) + "║");
console.log("║" + " ".repeat(18) + "Sprint 3: Dados Reais com Objetos - Backend & Sistemas" + " ".repeat(6) + "║");
console.log("╚" + "═".repeat(78) + "╝");

// Executar todas as funções
gerarRelatorioCompleto();
listarFinalizados();
listarEmAndamento();
calcularEstatisticas();
relatorioPortecnologia();

// Exemplo de busca específica
buscarProjetoPorId(2);

console.log("\n" + "=".repeat(80));
console.log("✨ Relatório gerado com sucesso! ✨");
console.log("=".repeat(80) + "\n");

// Export para uso em outros arquivos (Node.js)
module.exports = {
  projetos,
  gerarRelatorioCompleto,
  listarFinalizados,
  listarEmAndamento,
  calcularEstatisticas,
  buscarProjetoPorId,
  relatorioPortecnologia
};
