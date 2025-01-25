export function kinghostContractValidation() {
  document.getElementById("submit").addEventListener("click", () => {
    const workModality = document.getElementById("workModality").value;
    const contractType = document.getElementById("contractType").value;
    const careerLevel = document.getElementById("careerLevel").value;

    const contractCodes = kinghostContractFilters(workModality, careerLevel, contractType);
    document.getElementById("result").innerText = contractCodes;
  });

  function kinghostContractFilters(workModality, careerLevel, contractType) {
    let contractCodes = "";
    if (contractType !== "apprentice" && contractType !== "inter") {
      contractCodes += "emp - Contrato de Trabalho_Empresa 039 (36255)" + "\n";
    }

    if (contractType !== "inter") {
      if (workModality === "hybrid") {
        contractCodes += "gru - *TERMO DE TRABALHO HIBRIDO (30822)" + "\n";
      } else if (workModality === "homeOffice") {
        contractCodes += "gru - *TERMO DE TELETRABALHO HOME OFFICE (30824)" + "\n";
      } else {
        contractCodes += "gru - *TERMO DE TELETRABALHO INTEGRAL (36910)" + "\n";
      }

      contractCodes += "sis - AUTORIZAÇÃO PARA DESCONTO DE BENEFÍCIOS (31)" + "\n";

      if (
        careerLevel === "coordinator" ||
        careerLevel === "manager" ||
        careerLevel === "director"
      ) {
        contractCodes +=
          "emp - 'POLÍTICA PARTES RELACIONADAS - TERMO DE RECEBIMENTO (30173)" + "\n";
      }

      if (
        careerLevel !== "coordinator" &&
        careerLevel !== "manager" &&
        careerLevel !== "director" &&
        contractType !== "apprentice"
      ) {
        contractCodes +=
          "emp - Termo de Recebimento e Aceite- Banco de Horas- Empresa 039 (36261)" + "\n";
      }
    }
    contractCodes +=
      "sis - OPÇÃO DE VALE TRANSPORTE (30)" +
      "\n" +
      "gru - DECLARACAO DE DEPENDENTES PARA IMPOSTO RENDA (30940)" +
      "\n" +
      "emp - 'POLÍTICA NEGOCIAÇÃO COM VALORES IMOBILIÁRIOS - TERMO ADESÃO (30179)" +
      "\n" +
      "emp - 'POLÍTICA PRIVACIDADE COLABORADORES - TERMO DE RECEBIMENTO (30174)" +
      "\n" +
      "emp - 'POLÍTICA SEGURANÇA DA INFORMAÇÃO - TERMO DE RECEBIMENTO (30176)" +
      "\n" +
      "emp - 'POLÍTICA USO INFOS E DIVULGAÇÃO DE ATO/ FATO - TERMO ADESÃO (30177)" +
      "\n" +
      " emp - 'TERMO CESSÃO DE NOME, IMAGEM E SOM DE VOZ (30170)" +
      "\n" +
      "emp - 'TERMO DE CONFIDENCIALIDADE (30172)" +
      "\n";

    return contractCodes;
  }
}
