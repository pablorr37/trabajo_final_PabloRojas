

//Función para que la edad se actualice con los años//

//IMPORTANTE: No tiene en cuenta los meses ni los días, sólo los años.
//Pero como cumplo años el 9 de enero, esta función es inexacta sólo por 9 días.


function edad() {
    let x = new Date();
    //A la variable nacimiento la declaro sólo para hacer entendible la función
    //Bien podría haber restado a x.getFullYear() el entero 1989.
    const nacimiento = 1989;
    return x.getFullYear() - nacimiento;
}
document.getElementById('cabecera').innerHTML = "Pablo Elías Rojas Macías, " + edad() + " años, soltero, argentino";


//Función para plegar o desplegar cuadro de contacto
//Importante: si bien la función cumple su cometido, no estoy conforme 
//con la forma en la que la escribí. No parece elegante ni una buena
//práctica, pero confío en poder mejorar mi código conforme aprenda.

var y=0;
function mostrar_ocultar(){
  if (y==0){
    document.getElementById("contacto").style.display = "inline";
    document.getElementById("boton_1").innerHTML = "Ocultar";
    y=1;
  }else{
    document.getElementById("contacto").style.display = "none";
    document.getElementById("boton_1").innerHTML = "Contactar";
    y=0;
  }
}

const boton_mostrar = document.getElementById("boton_1");
boton_mostrar.addEventListener("click",mostrar_ocultar);

//Para cuando se haga click en "Contactar" en la barra de navecación

const icono_contactar = document.getElementById("icono_contactar");
icono_contactar.addEventListener("click",mostrar_ocultar);



//Para desplegar información cuando el mouse se posa sobre la imagen de perfil
const perfil = document.getElementById("perfil");
perfil.addEventListener("mouseover",texto_);

function texto_(){
  perfil.setAttribute("title", "Pablo Rojas, "+edad()+" años, escritor, corrector, estudiante de Desarrollo Frontend.");
}