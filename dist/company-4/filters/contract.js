export default function contract(contractType, workModality, department, careerLevel) {
    let contractCodes = "";
    let admissionKit = "";
    if ((careerLevel === 'career-level-others' || careerLevel === 'career-level-director-CLT') && (contractType !== 'contract-apprentice' && contractType !== 'contract-inter')) {
        // puxar cargos normais e diretor clt
        if (department === 'department-other') {
            if (workModality === "modality-hybrid") {
                contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)
        `;
            }
            if (workModality === "modality-home-office") {
                contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)
        `;
            }
        }
    }
    // aprendiz e estagiario e diretor
    return [contractCodes, admissionKit];
}
