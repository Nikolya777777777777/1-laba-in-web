function calculate() {
    // Отримуємо значення з форми
    let C9 = parseFloat(document.getElementById("C").value);
    let H9 = parseFloat(document.getElementById("H").value);
    let O9 = parseFloat(document.getElementById("O").value);
    let S9 = parseFloat(document.getElementById("S").value);
    let V9 = parseFloat(document.getElementById("V").value);
    let Qidaf = parseFloat(document.getElementById("Qidaf").value);
    let Wp = parseFloat(document.getElementById("W").value);
    let A9 = parseFloat(document.getElementById("A").value);

    // Формули розрахунку складу мазуту на робочу масу
    let C_p = C9 * ((100 - Wp - A9) / 100);
    let H_p = H9 * ((100 - Wp - A9) / 100);
    let O_p = O9 * ((100 - Wp - A9) / 100);
    let S_p = S9 * ((100 - Wp - A9) / 100);
    let V_p = V9 * ((100 - Wp) / 100);

    // Розрахунок нижчої теплоти згоряння на робочу масу
    let Qp = Qidaf * ((100 - Wp) / 100);

    // Вивід результатів
    document.getElementById("composition").innerHTML = `<strong>Склад робочої маси:</strong> Cₚ=${C_p.toFixed(2)}%, Hₚ=${H_p.toFixed(2)}%, Oₚ=${O_p.toFixed(2)}%, Sₚ=${S_p.toFixed(2)}%, Vₚ=${V_p.toFixed(2)} мг/кг`;

    document.getElementById("heatValue").innerHTML = `<strong>Нижча теплота згоряння (МДж/кг):</strong> ${Qp.toFixed(2)}`;
}
