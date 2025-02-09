export default function termOfWork(
  careerLevel: string,
  workModality: string,
  contractType: string
): [string, string] {
  let contractCodes = "";
  let admissionKit = "";

  if (contractType !== "contract-inter") {
    if (careerLevel === "career-level-others" && contractType !== "contract-apprentice") {
      if (workModality === "modality-hybrid") {
        contractCodes += `TERMO DE TRABALHO HIBRIDO (30822)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO\n`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `TERMO DE TELETRABALHO HOME OFFICE (30824)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE\n`;
      }

      if (workModality === "modality-remote") {
        contractCodes += `TERMO DE TELETRABALHO INTEGRAL (36910)\n`;
        admissionKit += `Titulo: COLABORADOR | TELETRABALHO\n`;
      }
    }

    if (contractType === "contract-apprentice") {
      if (workModality === "modality-hybrid") {
        contractCodes += `TERMO DE TRABALHO HIBRIDO (30822)\n`;
        admissionKit += `Titulo: APRENDIZ | HIBRIDO\n`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `TERMO DE TELETRABALHO HOME OFFICE (30824)\n`;
        admissionKit += `Titulo: APRENDIZ | HOME-OFFICE\n`;
      }

      if (workModality === "modality-remote") {
        contractCodes += `TERMO DE TELETRABALHO INTEGRAL (36910)\n`;
        admissionKit += `Titulo: APRENDIZ | TELETRABALHO\n`;
      }
    }

    if (contractType !== "contract-apprentice" && careerLevel !== "career-level-others") {
      if (workModality === "modality-hybrid") {
        contractCodes += `TERMO DE TRABALHO HIBRIDO (30822)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | LIDER\n`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `TERMO DE TELETRABALHO HOME OFFICE (30824)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | LIDER\n`;
      }

      if (workModality === "modality-remote") {
        contractCodes += `TERMO DE TELETRABALHO INTEGRAL (36910)\n`;
        admissionKit += `Titulo: COLABORADOR | TELETRABALHO | LIDER\n`;
      }
    }

    contractCodes += `sis - AUTORIZAÇÃO PARA DESCONTO DE BENEFÍCIOS (31)\n`;
  }

  if (contractType === "contract-inter") {
    admissionKit += `Titulo: ESTAGIARIO\n`;
  }

  if (
    careerLevel === "career-level-coordinator" ||
    careerLevel === "career-level-manager" ||
    careerLevel === "career-level-director" ||
    careerLevel === "career-level-director-CLT"
  ) {
    contractCodes += `emp - 'POLÍTICA PARTES RELACIONADAS - TERMO DE RECEBIMENTO (30173)\n`;
  }

  if (
    careerLevel !== "career-level-coordinator" &&
    careerLevel !== "career-level-manager" &&
    careerLevel !== "career-level-director" &&
    careerLevel !== "career-level-director-CLT" &&
    contractType !== "contract-inter" &&
    contractType !== "contract-apprentice"
  ) {
    contractCodes += `emp - Termo de Recebimento e Aceite- Banco de Horas- Empresa 039 (36261)\n`;
  }

  contractCodes += `sis - OPÇÃO DE VALE TRANSPORTE (30)\ngru - DECLARACAO DE DEPENDENTES PARA IMPOSTO RENDA (30940)\nemp - 'POLÍTICA NEGOCIAÇÃO COM VALORES IMOBILIÁRIOS - TERMO ADESÃO (30179)\nemp - 'POLÍTICA PRIVACIDADE COLABORADORES - TERMO DE RECEBIMENTO (30174)\nemp - 'POLÍTICA SEGURANÇA DA INFORMAÇÃO - TERMO DE RECEBIMENTO (30176)\nemp - 'POLÍTICA USO INFOS E DIVULGAÇÃO DE ATO/ FATO - TERMO ADESÃO (30177)\nemp - 'TERMO CESSÃO DE NOME, IMAGEM E SOM DE VOZ (30170)\nemp - 'TERMO DE CONFIDENCIALIDADE (30172)\n`;

  return [contractCodes, admissionKit];
}
