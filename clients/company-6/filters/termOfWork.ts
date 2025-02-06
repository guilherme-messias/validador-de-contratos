export default function termOfWork(
  careerLevel: string,
  workModality: string,
  contractType: string
): string {
  let result = "";

  if (contractType !== "contract-inter") {
    if (workModality === "modality-hybrid") {
      result += `TERMO DE TRABALHO HIBRIDO (30822)
      `;
    }

    if (workModality === "modality-home-office") {
      result += `TERMO DE TELETRABALHO HOME OFFICE (30824)
      `;
    }

    if (workModality === "modality-remote") {
      result += `TERMO DE TELETRABALHO INTEGRAL (36910)
      `;
    }

    result += `sis - AUTORIZAÇÃO PARA DESCONTO DE BENEFÍCIOS (31)
    `;
  }

  if (
    careerLevel === "career-level-coordinator" ||
    careerLevel === "career-level-manager" ||
    careerLevel === "career-level-director" ||
    careerLevel === "career-level-director-CLT"
  ) {
    result += `emp - 'POLÍTICA PARTES RELACIONADAS - TERMO DE RECEBIMENTO (30173)
    `;
  }

  if (
    careerLevel !== "career-level-coordinator" &&
    careerLevel !== "career-level-manager" &&
    careerLevel !== "career-level-director" &&
    careerLevel !== "career-level-director-CLT" &&
    contractType !== "contract-inter" &&
    contractType !== "contract-apprentice"
  ) {
    result += `emp - Termo de Recebimento e Aceite- Banco de Horas- Empresa 039 (36261)
    `;
  }

  result += `sis - OPÇÃO DE VALE TRANSPORTE (30)
      gru - DECLARACAO DE DEPENDENTES PARA IMPOSTO RENDA (30940)
      emp - 'POLÍTICA NEGOCIAÇÃO COM VALORES IMOBILIÁRIOS - TERMO ADESÃO (30179) 
      emp - 'POLÍTICA PRIVACIDADE COLABORADORES - TERMO DE RECEBIMENTO (30174) 
      emp - 'POLÍTICA SEGURANÇA DA INFORMAÇÃO - TERMO DE RECEBIMENTO (30176) 
      emp - 'POLÍTICA USO INFOS E DIVULGAÇÃO DE ATO/ FATO - TERMO ADESÃO (30177) 
      emp - 'TERMO CESSÃO DE NOME, IMAGEM E SOM DE VOZ (30170) 
      emp - 'TERMO DE CONFIDENCIALIDADE (30172) 
  `;

  return result;
}
