function calcular(){

anio=new Date();
fechaNavidad=new Date (anio.getFullYear(), 11, 25).getTime(); 
fechaActual=new Date().getTime(); 

var diferenciaDiasMs = fechaNavidad - fechaActual; //Me da la diferencia de días en milisegundos

var diferenciaDiasDias=(diferenciaDiasMs/(1000*60*60*24));
                 // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días
                 // con esto transformo la diferencia de días de milisegundos a días

var diferenciaDiasDiasredondeado=Math.round(diferenciaDiasDias); 

console.log ("Quedan " + diferenciaDiasDiasredondeado + " días para Navidad"); 
}