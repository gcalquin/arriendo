alert("inicio script Arriendo")

let opcion = 0;

function main(){
    menu();
    capturarCarrito();
}


let Carrito = [];


//-- En esta función capturamos los datos del carrito de compras--
function capturarCarrito(){



    function Carrito(nombre, cantidad, dias, valor){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.dias=dias;
        this.valor=valor;
    }



    let nombreCapturado = Productos[0].nombre;
    let cantidadCapturada = parseInt(prompt("Cuantas unidades quiere arrendar:"));
    let diasCapturados = parseInt(prompt("Cuantos días quiere arrendar:"));
    let valorCapturado = Productos[0].valor * cantidadCapturada * diasCapturados


    nuevoCarrito = new Carrito(nombreCapturado, cantidadCapturada, diasCapturados, valorCapturado)
    console.log(nuevoCarrito)
    agregarArrayCarrito();
}




//--Agregamos los datos capturados a arreglo Productos --
function agregarArrayCarrito(){
    Carrito.push(nuevoCarrito)
    //console.log(Productos)
}


//-- En esta función capturamos los datos --
function capturar(){
    function Producto(nombre, categoria, descripcion, foto, stock, valor){
        this.nombre=nombre;
        this.categoria=categoria;
        this.descripcion=descripcion;
        this.foto=foto;
        this.stock=stock;
        this.valor=valor;
    }

    let nombreCapturado = prompt("Ingrese nombre del Producto: ")
    let categoriaCapturada = prompt("Ingrese categoría del Producto: ")
    let descripcionCapturada = prompt("Ingrese descripcion del Producto: ")
    let fotocapturada = prompt("Ingrese foto del Producto: ")
    let stockCapturado = parseInt(prompt("Ingrese stock de "+ nombreCapturado + ":"));
    let valorCapturado = parseFloat(prompt("Ingrese valor diario de "+ nombreCapturado + ":"));

    nuevoProducto = new Producto(nombreCapturado, categoriaCapturada,  descripcionCapturada, fotocapturada, stockCapturado, valorCapturado)
    console.log(nuevoProducto)
    agregarArray();
}

//let Productos = [];

//--Agregamos los datos capturados a arreglo Productos --
function agregarArray(){
    Productos.push(nuevoProducto)
    //console.log(Productos)
}

// --Mostramos el arreglo completo en consola --
function mostrar(){
    console.log("-La cantidad de productos ingresados son: " + Productos.length)
    Productos.forEach(i => console.log(i))  
}

// --Otra forma de mostrar el arreglo --
function mostrar2(){
    console.log("-----")
    for(let i=0; i < Productos.length; i++){
        console.log("Indice: " + i + ": " + Productos[i].nombre)
    }
    console.log("-----")
}

// -- Menu de opciones --
function menu(){
    while (opcion <= 5) {
        // Menu //
        console.log("Menu");
        console.log("----");
        console.log("1. Ingresar productos");
        console.log("2. Mostrar productos ingresados");
        console.log("3. Agregar al arriendo");
        console.log("4. Mostrar solo categoria silla")
        console.log("5. Salir");
        opcion = parseInt(prompt("Ingrese Opción: "));
        console.log("Usted ingreso la opcion " + opcion +"...")  
    
        if (opcion == 1){
          capturar();
          console.clear;
        }
    
        if (opcion == 2){
            mostrar2();
            console.clear;
        }
    
          
         if (opcion == 3){
          capturarCarrito();
        }

        if (opcion == 4){
            let elementosEncontrados = Productos.filter(
                (elemento) => elemento.categoria == "Sillas"
            )

            console.log("Los Elementos en categoria Sillas son:" + elementosEncontrados)
          }

          if (opcion == 5){
            break
          }
    
        if (opcion < 1 || opcion > 5){
          alert("Ingrese opción correcta (1..5)...");
    
       } 
    
      }
}

main();