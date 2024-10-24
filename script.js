function calculateVoltage() {
    const intensity = parseFloat(document.getElementById('intensity').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const voltage = intensity * resistance;

    document.getElementById('result').innerText = `Voltaggio (V) = ${voltage}`;
}

function calculateIntensity() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistanceInt').value);
    const intensity = voltage / resistance;

    document.getElementById('result').innerText = `Intensità (I) = ${intensity}`;
}

function calculateResistance() {
    const voltage = parseFloat(document.getElementById('voltageR').value);
    const intensity = parseFloat(document.getElementById('intensityR').value);
    const resistance = voltage / intensity;

    document.getElementById('result').innerText = `Resistenza (R) = ${resistance}`;
}

// Event listeners per il tasto "Invio"
document.getElementById('intensity').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateVoltage();
    }
});

document.getElementById('resistance').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateVoltage();
    }
});

document.getElementById('voltage').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateIntensity();
    }
});

document.getElementById('resistanceInt').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateIntensity();
    }
});

document.getElementById('voltageR').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateResistance();
    }
});

document.getElementById('intensityR').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateResistance();
    }
});
