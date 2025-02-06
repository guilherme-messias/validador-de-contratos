export default function contract(workModality) {
    let contractCodes = "";
    if (workModality === "modality-hybrid") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)
    `;
    }
    if (workModality === "modality-home-office") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)
    `;
    }
    return contractCodes;
}
