const fs = require("fs"); 
fs.readFile("ventas.txt", "utf8", (error, datos) => {
  if (error) {
    console.error("Se ha generado un error al leer el archivo");
  } else {
    const compradores = datos.split("\n"); 
    let total = 0;
    compradores.forEach((comprador) => {
      const compra = comprador.split(","); 
      const producto = compra[1];
      const cantidad = parseInt(compra[2]);
      const precio = parseFloat(compra[3]);  
      const subtotal = cantidad * precio;
      console.log(`${producto} x ${cantidad} = $${subtotal.toFixed(2)}`);
      total += subtotal;
    });  
    console.log(`VENTA TOTAL  $${total.toFixed(2)}`);   
  }
});

