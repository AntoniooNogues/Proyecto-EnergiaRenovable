window.onload = function() {
    // Mostrar la fecha actual
    var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var today = new Date();
    var dayOfMonth = today.getDate();
    var monthName = months[today.getMonth()];
    var formattedDate = dayOfMonth + " de " + monthName;
    document.getElementById("date").textContent = formattedDate;

    // Calcular y mostrar el día más cercano al 17 del mes actual y del siguiente mes
    function obtenerDiaCercano17() {
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
    
        // Calculamos el día más cercano al 17 del mes siguiente
        var nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
        var nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;
        var nextMonthDate = new Date(nextYear, nextMonth - 1, 17);
        var formattedNextMonth = nextMonthDate.toLocaleDateString('es-ES', { day: '2-digit', month: 'long' });
    
        // Si hoy es antes del día 17, mostramos el día más cercano al 17 del mes anterior y del mes actual
        if (currentDay < 17) {
            document.getElementById("output").innerHTML = formattedPreviousMonth + " " + formattedCurrentMonth;
        } else {
            document.getElementById("output").innerHTML = formattedNextMonth + " " + formattedCurrentMonth;
        }
        
    }
    obtenerDiaCercano17();
    function createLineChart(labels, data) {
        const config = {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Consumo (kWh)',
                    borderWidth: 2, 
                    pointRadius: 4,
                    backgroundColor: 'rgb(72,136,64)',
                    borderColor: 'rgb(157,204,151)',
                    data: data,
                    tension: 0.1
                }]
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
    
    const labels = ['Ene 2023', 'Feb 2023', 'Mar 2023', 'Abr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Ago 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dic 2023', 'Ene 2024'];
    const data = [253, 226, 248, 266, 172, 320, 293, 278, 224, 238, 218, 194, 223];
    
    createLineChart(labels, data);
}    





