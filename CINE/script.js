function Genero(peliculas){
   let respuesta = document.getElementById("resp");
    let edad = document.getElementById("edad").value;
    
    switch (peliculas){
        case "Drama":
            if(edad < 13){
                respuesta.textContent = "Los caminos de la vida";
            
            } else{if(edad < 16){
                respuesta.textContent = "Desgarrado";
    
            }else{
                respuesta.textContent = "Taxi driver";
    
            } 
        
        } break;

        case "Comedia":
        if(edad < 13){
            respuesta.textContent = "Los 3 Chiflados";
        
        } else{if(edad < 16){
            respuesta.textContent = "No Manches Frida";

        }else{
            respuesta.textContent = "La Mascara";

        } 
    
    } break;

    case "Musical":
        if(edad < 13){
            respuesta.textContent = "Encantados";
        
        } else{if(edad < 16){
            respuesta.textContent = "hihg school";

        }else{
            respuesta.textContent = "Canserbero";

        } 
    
    } break;

    case "Crimen":
        if(edad < 13){
            respuesta.textContent = "2 Policias en accion";
        
        } else{if(edad < 16){
            respuesta.textContent = "Batman";

        }else{
            respuesta.textContent = "Bad Boys";

        } 
    
    } break;
}
}