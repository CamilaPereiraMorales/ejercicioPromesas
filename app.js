//con esto sube 
function animateElement(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.left  = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;//posicion en donde quedo luego de hacer el primer movimiento
            element.style.left = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }else if(start > end && currentPosition <= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }                       
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
}
function animateElementTop(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.top  = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;//posicion en donde quedo luego de hacer el primer movimiento
            element.style.top = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }else if(start > end && currentPosition <= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }                       
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
}

const allImg = document.getElementsByTagName("img");

Promise.all([
    animateElement(allImg[0], 0, 600, 3000),
    animateElement(allImg[1], 0, 600, 6000)
]).then(()=>{
    console.log("Terminaron AMBAS animaciones");
    return Promise.all([ //Retornar promesa que se ejecutará en el próximo then
        animateElementTop(allImg[0],0, 600, 3000),
        animateElementTop(allImg[1],0, 600, 6000)
    ]);
}).then(()=>{
    animateElement(allImg[0], 600, 0, 3000),
    animateElement(allImg[1], 600, 0, 6000)

}).then(()=>{
    animateElementTop(allImg[0],600, 0, 3000),
    animateElementTop(allImg[1],600, 0, 6000)

}).then(()=>{
   
    console.log("Doge y cate se devolvieron");
}).catch(()=>{

});