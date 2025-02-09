export default function termOfWork(careerLevel, workModality, contractType) {
    let contractCodes = "";
    let admissionKit = "";
    if (contractType !== "contract-inter") {
        if (careerLevel === "career-level-others") {
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
        contractCodes += `sis - AUTORIZAÇÃO PARA DESCONTO DE BENEFÍCIOS (31)
    `;
    }
    if (contractType === "contract-inter") {
        admissionKit += `Titulo: ESTAGIARIO\n`;
    }
    if (careerLevel === "career-level-coordinator" ||
        careerLevel === "career-level-manager" ||
        careerLevel === "career-level-director" ||
        careerLevel === "career-level-director-CLT") {
        contractCodes += `emp - 'POLÍTICA PARTES RELACIONADAS - TERMO DE RECEBIMENTO (30173)
    `;
    }
    if (careerLevel !== "career-level-coordinator" &&
        careerLevel !== "career-level-manager" &&
        careerLevel !== "career-level-director" &&
        careerLevel !== "career-level-director-CLT" &&
        contractType !== "contract-inter" &&
        contractType !== "contract-apprentice") {
        contractCodes += `emp - Termo de Recebimento e Aceite- Banco de Horas- Empresa 039 (36261)
    `;
    }
    contractCodes += `sis - OPÇÃO DE VALE TRANSPORTE (30)
      gru - DECLARACAO DE DEPENDENTES PARA IMPOSTO RENDA (30940)
      emp - 'POLÍTICA NEGOCIAÇÃO COM VALORES IMOBILIÁRIOS - TERMO ADESÃO (30179) 
      emp - 'POLÍTICA PRIVACIDADE COLABORADORES - TERMO DE RECEBIMENTO (30174) 
      emp - 'POLÍTICA SEGURANÇA DA INFORMAÇÃO - TERMO DE RECEBIMENTO (30176) 
      emp - 'POLÍTICA USO INFOS E DIVULGAÇÃO DE ATO/ FATO - TERMO ADESÃO (30177) 
      emp - 'TERMO CESSÃO DE NOME, IMAGEM E SOM DE VOZ (30170) 
      emp - 'TERMO DE CONFIDENCIALIDADE (30172) 
  `;
    return [contractCodes, admissionKit];
}
