
(function () {
    
    var cambioHora = 0;
   
    var botonRusia =document.getElementById("rusia")
    botonRusia.addEventListener("click", function () {
        cambioHora = 6 ;
    })

    var botonEeuu =document.getElementById ("eeuu")
    botonEeuu.addEventListener("click" , function () {
        cambioHora = -1;
    })

    var botonArg = document.getElementById("arg")
    botonArg.addEventListener("click" , function () {
        cambioHora = 0;
    })

    var botonJapon = document.getElementById("japon")
    botonJapon.addEventListener("click" , function () {
        cambioHora = 12;
    })

    var actualizarHora =function () {
        
        var fecha = new Date ()
        fecha.setHours(fecha.getHours() + cambioHora) //set nos permite cambiar el horario
    var  horas= fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year =fecha.getFullYear()
       
        var pHoras =  document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes =document.getElementById('mes'),
            pYear = document.getElementById('year');

        var semana = ['Domingo','Lunes','Martes','Miercoles', 'Jueves','Viernes','Sabado'];
    
        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto' ,'Septiembre' , 'Octubre', 'Noviembre' , 'Diciembre'];
        
        console.log(horas)
        if (horas >12 ) {
            horas = horas - 12;
            ampm = 'PM';
            
        } else {
            ampm = "AM" 
        } 

        if (horas == 0 ) {
            horas=12;
        }
        
        if (minutos <10 ) { 
            minutos = '0' + minutos
        };

        if (segundos <10) { 
            segundos = '0' + segundos 
        };
        
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        pDia.textContent = dia;
        pYear.textContent = year
        pDiaSemana.textContent = semana[diaSemana];
        pMes.textContent = meses[mes];
    };
    
    actualizarHora();
    setInterval(actualizarHora, 1000);
    
}())
 

function fondoru() {
let fondo = document.getElementById("body")
fondo.style.backgroundImage="url('rusia.jpg')";
}

function fondoEeuu() {
    let fondoEeuu = document.getElementById("body")
    fondoEeuu.style.backgroundImage="url('eeuu.jpg')";
}

function fondoJapon() {
    let fondoJapon = document.getElementById("body")
    fondoJapon.style.backgroundImage="url('japon.jpg')";
}
function fondoArg() {
    let fondoArg = document.getElementById("body")
    fondoArg.style.backgroundImage="url('argentina.jpg')";
}