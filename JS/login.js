// Contenido de login.js

var credenciales = {
    "Antonio": "Antonio", "Maria": "Maria", "Juan": "Juan", "Ana": "Ana",
    "Carlos": "Carlos", "Laura": "Laura", "Pedro": "Pedro", "Sofia": "Sofia",
    "Miguel": "Miguel", "Lucia": "Lucia", "usuario": "usuario", "admin": "admin",
    "Alba": "Alba", "Rodrigo": "Rodrigo", "Pepe": "Pepe"
};

function validarCredenciales() {
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    if (credenciales.hasOwnProperty(correo) && credenciales[correo] === contrasena) {
        localStorage.setItem('nombreUsuario', correo);
        window.location.href = 'cliente.html'; 
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}

function guardarNombre() {
    var nombre = document.getElementById('nombreInput').value;
    localStorage.setItem('nombreUsuario', nombre);
    alert('Nombre guardado correctamente.');
    mostrarNombre();
}

function mostrarNombre() {
    var nombre = localStorage.getItem('nombreUsuario');
    var nombreSpans = document.getElementsByClassName('nombreSpan');

    if (nombre) {
        for (var i = 0; i < nombreSpans.length; i++) {
            nombreSpans[i].textContent = nombre;
        }
    } else {
        for (var i = 0; i < nombreSpans.length; i++) {
            nombreSpans[i].textContent = 'Hola, usuario!';
        }
    }
}


window.onload = function() {
    mostrarNombre();
    
    // Mostrar la fecha actual
    var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var today = new Date();
    var dayOfMonth = today.getDate();
    var monthName = months[today.getMonth()];
    var formattedDate = dayOfMonth + " de " + monthName;
    document.getElementById("date").textContent = formattedDate;

    // Calcular y mostrar el día más cercano al 17 del mes actual y del siguiente mes
    function obtenerMesAnteriorSiAntesDe17() {
        var today = new Date();
        var currentDay = today.getDate();
        var currentMonth = today.getMonth() + 1;
        var currentYear = today.getFullYear();
    
        // Calculamos el día más cercano al 17 del mes actual
        var currentMonthDate = new Date(currentYear, currentMonth - 1, 17);
        var formattedCurrentMonth = currentMonthDate.toLocaleDateString('es-ES', { day: '2-digit', month: 'long' });
    
        // Calculamos el día más cercano al 17 del mes anterior
        var previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        var previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
        var previousMonthDate = new Date(previousYear, previousMonth - 1, 17);
        var formattedPreviousMonth = previousMonthDate.toLocaleDateString('es-ES', { day: '2-digit', month: 'long' });
    
        // Si hoy es antes del día 17, mostramos el día más cercano al 17 del mes anterior y del mes actual
        if (currentDay < 17) {
            document.getElementById("1").innerHTML = formattedPreviousMonth;
        } else {
            document.getElementById("1").innerHTML = formattedCurrentMonth;
        }
    }
    
    function obtenerMesActual() {
        var today = new Date();
        var currentMonth = today.getMonth() + 1;
    
        // Calculamos el día más cercano al 17 del mes actual
        var currentYear = today.getFullYear();
        var currentMonthDate = new Date(currentYear, currentMonth - 1, 17);
        var formattedCurrentMonth = currentMonthDate.toLocaleDateString('es-ES', { day: '2-digit', month: 'long' });
    
        document.getElementById("2").innerHTML = formattedCurrentMonth;
    }
    
    // Llamadas a las funciones
    obtenerMesAnteriorSiAntesDe17();
    obtenerMesActual();
    

    
    function createLineChart(labels, data) {
        const datasets = [{
            label: 'Consumo (kWh)',
            borderWidth: 2, 
            pointRadius: 4,
            backgroundColor: 'rgb(72,136,64)',
            borderColor: 'rgb(157,204,151)',
            data: data,
            tension: 0.1
        }];
    
        // Añadir color rojo a los puntos que superen 295 kWh
        datasets[0].pointBackgroundColor = data.map(value => value > 230 ? 'red' : 'rgb(72,136,64)');
        datasets[0].borderColor = data.map(value => value > 230 ? 'red' : 'rgb(72,136,64)');
    
        const config = {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            color: 'black',
                            font: {
                                size: 15
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'black',
                            font: {
                                size: 15
                            }
                        }
                    }
                }
            }
        };
    
        var myChart = new Chart(
            document.getElementById('lineChart'),
            config
        );
    }
    
    const labels = ['Ene 2023', 'Feb 2023', 'Mar 2023', 'Abr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Ago 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dic 2023', 'Ene 2024', 'Feb 2024'];
    const data = [184, 126, 148, 166, 147, 245, 223, 231, 178, 147, 164, 199, 203, 181];
    
    createLineChart(labels, data);
};

document.addEventListener("DOMContentLoaded", function() {
    var consumoElement = document.querySelector('.consumo');
    var consumoValue = parseInt(consumoElement.textContent);
    
    if (consumoValue >= 295) {
        consumoElement.classList.add('text-red');

        var tarjetasElement = document.getElementById('verde');
        if (tarjetasElement) {
            tarjetasElement.classList.add('text-red');
        }
    }

    var estadoElement = document.getElementById('estadoPago');
    if (estadoElement.innerHTML === 'PAGADA') {
        estadoElement.style.color = 'blue';
    } else if (estadoElement.innerHTML === 'NO PAGADA') {
        estadoElement.style.color = '#d40000';
    }

    var estadoElements = document.getElementsByClassName('estadoDePago');

    for (var i = 0; i < estadoElements.length; i++) {
    var estadoElement = estadoElements[i];
    if (estadoElement.innerHTML === 'PAGADA') {
        estadoElement.style.color = '#2c9e42';
    } else if (estadoElement.innerHTML === 'NO PAGADA') {
        estadoElement.style.color = '#d40000';
    }
}
});



  
