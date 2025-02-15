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
        contractCodes += `TERMO DE TRABALHO HIBRIDO (30822)<br>`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO<br>`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `TERMO DE TELETRABALHO HOME OFFICE (30824)<br>`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE<br>`;
      }

      if (workModality === "modality-remote") {
        contractCodes += `TERMO DE TELETRABALHO INTEGRAL (36910)<br>`;
        admissionKit += `Titulo: COLABORADOR | TELETRABALHO<br>`;
      }
    }

    if (contractType === "contract-apprentice") {
      if (workModality === "modality-hybrid") {
        contractCodes += `TERMO DE TRABALHO HIBRIDO (30822)<br>`;
        admissionKit += `Titulo: APRENDIZ | HIBRIDO<br>`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `TERMO DE TELETRABALHO HOME OFFICE (30824)<br>`;
        admissionKit += `Titulo: APRENDIZ | HOME-OFFICE<br>`;
      }

      if (workModality === "modality-remote") {
        contractCodes += `TERMO DE TELETRABALHO INTEGRAL (36910)<br>`;
        admissionKit += `Titulo: APRENDIZ | TELETRABALHO<br>`;
      }
    }

    if (contractType !== "contract-apprentice" && careerLevel !== "career-level-others") {
      if (workModality === "modality-hybrid") {
        contractCodes += `TERMO DE TRABALHO HIBRIDO (30822)<br>`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | LIDER<br>`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `TERMO DE TELETRABALHO HOME OFFICE (30824)<br>`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | LIDER<br>`;
      }

      if (workModality === "modality-remote") {
        contractCodes += `TERMO DE TELETRABALHO INTEGRAL (36910)<br>`;
        admissionKit += `Titulo: COLABORADOR | TELETRABALHO | LIDER<br>`;
      }
    }

    contractCodes += `sis - AUTORIZAÇÃO PARA DESCONTO DE BENEFÍCIOS (31)<br>`;
  }

  if (contractType === "contract-inter") {
    admissionKit += `Titulo: ESTAGIARIO<br>`;
  }

  if (
    careerLevel === "career-level-coordinator" ||
    careerLevel === "career-level-manager" ||
    careerLevel === "career-level-director" ||
    careerLevel === "career-level-director-CLT"
  ) {
    contractCodes += `emp - 'POLÍTICA PARTES RELACIONADAS - TERMO DE RECEBIMENTO (30173)<br>`;
  }

  if (
    careerLevel !== "career-level-coordinator" &&
    careerLevel !== "career-level-manager" &&
    careerLevel !== "career-level-director" &&
    careerLevel !== "career-level-director-CLT" &&
    contractType !== "contract-inter" &&
    contractType !== "contract-apprentice"
  ) {
    contractCodes += `emp - Termo de Recebimento e Aceite- Banco de Horas- Empresa 039 (36261)<br>`;
  }

  contractCodes += `sis - OPÇÃO DE VALE TRANSPORTE (30)<br>gru - DECLARACAO DE DEPENDENTES PARA IMPOSTO RENDA (30940)<br>emp - 'POLÍTICA NEGOCIAÇÃO COM VALORES IMOBILIÁRIOS - TERMO ADESÃO (30179)<br>emp - 'POLÍTICA PRIVACIDADE COLABORADORES - TERMO DE RECEBIMENTO (30174)<br>emp - 'POLÍTICA SEGURANÇA DA INFORMAÇÃO - TERMO DE RECEBIMENTO (30176)<br>emp - 'POLÍTICA USO INFOS E DIVULGAÇÃO DE ATO/ FATO - TERMO ADESÃO (30177)<br>emp - 'TERMO CESSÃO DE NOME, IMAGEM E SOM DE VOZ (30170)<br>emp - 'TERMO DE CONFIDENCIALIDADE (30172)<br>`;

  return [contractCodes, admissionKit];
}
