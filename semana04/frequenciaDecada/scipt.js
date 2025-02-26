let chart;

async function loadGraphic() {
    const name = document.getElementById("name").value;
    if (!name) {
        alert("!! Você Precisa Digitar Um Nome !!");
        return;
    }

    const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name.toUpperCase()}`
    );
    const dados = await response.json();

    const registro = dados[0].res;
    const arrayDecadas = registro.map((item, index) => {
        const newValue = item.periodo.replace(/[^0-9]/g, "");
        return index === 0
            ? newValue.substring(0, 4)
            : newValue.substring(4, 9);
    });
    const arrayValores = registro.map((item) => item.frequencia);

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById("graphic");
    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: arrayDecadas,
            datasets: [
                {
                    label: `Frequência do nome ${name}`,
                    data: arrayValores,
                },
            ],
        },
    });
}
