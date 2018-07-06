( function() {
     const rutaFolderImagen = "./imgCarrusel/";
     const contenido = [ rutaFolderImagen + "01.jpg" , rutaFolderImagen + "02.jpg" , rutaFolderImagen + "03.jpg" , rutaFolderImagen + "04.jpg" ];
     const imgTag = document.querySelector("#imgContenido");
     const btnSiguiente = document.querySelector("#btnSiguiente");
     const btnAnterior = document.querySelector("#btnAnterior");
     const sizeArray = contenido.length-1;
     let contador = 0;
     let contadorback = 0;
     imgTag.src = contenido[0];

     btnSiguiente.addEventListener( "click", function() {
         contador ++;
         if(contador > sizeArray){
             contador = 0;
             imgTag.src = contenido[contador];
         }
         else{
             imgTag.src = contenido[contador];
             contadorback = contador;
         }
     });

     btnAnterior.addEventListener( "click", function() {
         contadorback --;
         if(contadorback < 0){
             contadorback = sizeArray;
             imgTag.src = contenido[contadorback];
         }
         else{
             contador = contadorback;
             imgTag.src = contenido[contadorback];
         }
     });
 })();
