export default function contract(workModality) {
    let result = "";
    if (workModality === "modality-hybrid") {
        result += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)
    `;
    }
    if (workModality === "modality-home-office") {
        result += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)
    `;
    }
    return result;
}
