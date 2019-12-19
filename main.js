function calcular() {

    var anio = new Date();
    var fechaNavidad = new Date(anio.getFullYear(), 11, 25).getTime();
    var fechaActual = new Date().getTime();

    //Con este if/else abarcamos también los días finales del año

    if (fechaActual <= fechaNavidad) {
        var diferenciaDiasMs = fechaNavidad - fechaActual; //Me da la diferencia de días en milisegundos

        var diferenciaDiasDias = (diferenciaDiasMs / (1000 * 60 * 60 * 24));
        // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días
        // con esto transformo la diferencia de días de milisegundos a días

        var diferenciaDiasDiasredondeado = Math.round(diferenciaDiasDias);

        console.log("Quedan " + diferenciaDiasDiasredondeado + " días para Navidad");

    } else {

        var fechaNavidadAnioQueViene=new Date (anio.getFullYear()+1, 11, 25).getTime();
        var diferenciaDiasMs = fechaNavidadAnioQueViene - fechaActual; //Me da la diferencia de días en milisegundos
        var diferenciaDiasDias = (diferenciaDiasMs / (1000 * 60 * 60 * 24));
        // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días
        // con esto transformo la diferencia de días de milisegundos a días

        var diferenciaDiasDiasredondeado = Math.round(diferenciaDiasDias);

        console.log("Quedan " + diferenciaDiasDiasredondeado + " días para Navidad");

    }

}
