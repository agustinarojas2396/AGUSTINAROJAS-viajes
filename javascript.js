function calcule (precio, cant, provincia) {
    let total = Math.trunc(precio / cant);
    document.getElementById("section").style.display = 'inline-block';
    switch(provincia){
        case "salta":
            document.getElementById("provincia").innerHTML = 'Salta';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total.toLocaleString('es-AR');
            break;
        case "scdbariloche":
            document.getElementById("provincia").innerHTML = 'San carlos de bariloche';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total.toLocaleString('es-AR');
            break;
        case "mendoza":
            document.getElementById("provincia").innerHTML = 'Mendoza';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total.toLocaleString('es-AR');
            break;
        default:
            break;
    }
}