export default function termOfWork(contractType, careerLevel, position, isAdvocate) {
    let contractCodes = "";
    let admissionKit = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        contractCodes += `VR: emp - *AUTORIZAÇÃO DE DESCONTO VALE REFEIÇÃO (30518)<br>`;
    }
    if (careerLevel === "career-level-director-CLT" || careerLevel === "career-level-director") {
        contractCodes += `DIRETORES - emp - TERMO DE SOLICITAÇÃO DE VEÍCULO CORPORATIVO - LWSA (36797)<br>`;
        admissionKit += `Incluir no kit de admissão: TERMO DE SOLICITAÇÃO DE VEÍCULO CORPORATIVO - LWSA<br>`;
    }
    if (position.includes("CONSULTOR DE VENDAS ONLINE")) {
        contractCodes += `ADITIVO AO CONTRATO DE TRABALHO_Consultor de Vendas Inside Sales - 36755<br>`;
        admissionKit += `Incluir no kit de admissão: ADITIVO AO CONTRATO DE TRABALHO_Consultor de Vendas Inside Sales - 36755<br>`;
    }
    if (position.includes("EXECUTIVO DE VENDAS ONLINE I")) {
        contractCodes += `ADITIVO AO CONTRATO DE TRABALHO_Executivo de Vendas Inside Sales - 36756<br>`;
        admissionKit += `Incluir no kit de admissão: ADITIVO AO CONTRATO DE TRABALHO_Executivo de Vendas Inside Sales - 36756<br>`;
    }
    if (position.includes("COORDENADOR DE VENDAS ONLINE II")) {
        contractCodes += `ADITIVO AO CONTRATO DE TRABALHO_Coordenadores Inside Sales - 36757<br>`;
        admissionKit += `Incluir no kit de admissão: ADITIVO AO CONTRATO DE TRABALHO_Coordenadores Inside Sales - 36757<br>`;
    }
    if (position.includes("CONSULTOR DE RETENCAO") ||
        position.includes("EXECUTIVO DE RETENCAO") ||
        position.includes("COORDENADOR DE RETENCAO")) {
        contractCodes += `ADITIVO NOVOS CONTRATADOS - COSTUMER CARE  2023 + POLÍTICA - 36758<br>`;
        admissionKit += `Incluir no kit de admissão: ADITIVO NOVOS CONTRATADOS - COSTUMER CARE  2023 + POLÍTICA - 36758<br>`;
    }
    if (position.includes("COMERCIAL") || position.includes("VENDAS")) {
        contractCodes += `ADITIVO COMERCIAL NEXTIOS + POLÍTICA COMERCIAL NEXTIOS - 36760<br>`;
        admissionKit += `Incluir no kit de admissão: ADITIVO COMERCIAL NEXTIOS + POLÍTICA COMERCIAL NEXTIOS - 36760<br>`;
    }
    if (position.includes("PRE VENDAS")) {
        contractCodes += `ADITIVO LOCAWEB RV TSP + POLÍTICA TSP - 36759<br>`;
        admissionKit += `Incluir no kit de admissão: ADITIVO LOCAWEB RV TSP + POLÍTICA TSP - 36759<br>`;
    }
    if (isAdvocate === "advocate-yes") {
        admissionKit += `Incluir no kit de admissão: OAB<br>`;
    }
    contractCodes += `emp - TERMOS COLABORADORES - LWSA (36833)<br>`;
    return [contractCodes, admissionKit];
}
