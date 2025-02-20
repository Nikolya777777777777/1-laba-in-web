function calculate() {
    // Отримуємо значення з форми
    let HP = parseFloat(document.getElementById("HP").value);
    let CP = parseFloat(document.getElementById("CP").value);
    let SP = parseFloat(document.getElementById("SP").value);
    let NP = parseFloat(document.getElementById("NP").value);
    let OP = parseFloat(document.getElementById("OP").value);
    let WP = parseFloat(document.getElementById("WP").value);
    let AP = parseFloat(document.getElementById("AP").value);

    // Формули розрахунку
    let KRS = 100 / (100 - WP);
    let KRG = 100 / (100 - WP - AP);

    let HS = HP * KRS;
    let CS = CP * KRS;
    let SS = SP * KRS;
    let NS = NP * KRS;
    let OS = OP * KRS;
    let AS = AP * KRS;

    let HG = HP * KRG;
    let CG = CP * KRG;
    let SG = SP * KRG;
    let NG = NP * KRG;
    let OG = OP * KRG;

    let QRN = (339 * CP) + (1030 * HP) - (108.8 * (OP - SP)) - (25 * WP);

    // Вивід результатів
    document.getElementById("dryMass").innerHTML = `<strong>Склад сухої маси:</strong> HС=${HS.toFixed(2)}%, CС=${CS.toFixed(2)}%, SС=${SS.toFixed(2)}%, NС=${NS.toFixed(2)}%, OС=${OS.toFixed(2)}%, AС=${AS.toFixed(2)}%`;

    document.getElementById("combustibleMass").innerHTML = `<strong>Склад горючої маси:</strong> HГ=${HG.toFixed(2)}%, CГ=${CG.toFixed(2)}%, SГ=${SG.toFixed(2)}%, NГ=${NG.toFixed(2)}%, OГ=${OG.toFixed(2)}%`;

    document.getElementById("heatValue").innerHTML = `<strong>Нижча теплота згорання (МДж/кг):</strong> ${QRN.toFixed(2)}`;
}
