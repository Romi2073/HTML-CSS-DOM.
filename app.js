
const perfumes = {
    Aqua: 200,
    Emocion: 180,
    Alegria: 160,
    Frescura: 150,
  };

const vendedores = {
    Juana: { ventas: { Aqua: 0, Emocion: 0, Alegria: 0, Frescura: 0 }, total: 0 },
    Pedro: { ventas: { Aqua: 0, Emocion: 0, Alegria: 0, Frescura: 0 }, total: 0 },
}

// Función para realizar una venta
function realizarVenta(vendedor, perfume, cantidad) {
    const precio = perfumes[perfume];
    const ventaTotal = precio * cantidad;

    vendedores[vendedor].ventas[perfume] += cantidad;
    vendedores[vendedor].total += ventaTotal;
}

// Realizar algunas ventas de ejemplo
  realizarVenta("Juana", "Aqua", 58); 
  realizarVenta("Juana", "Emocion", 70); 
  realizarVenta("Pedro", "Aqua", 45); 
  realizarVenta("Juana", "Alegria", 110); 
  realizarVenta("Juana", "Frescura", 200); 
  realizarVenta("Pedro", "Emocion", 74); 
  realizarVenta("Pedro", "Alegria", 120);
  realizarVenta("Pedro", "Frescura", 180);


// Función empleado del mes
function empleadoDelMes() {
    let empleadoDelMes = "Ninguno";
    let VentaMayor = 0;

    for (const vendedor in vendedores) {
        const totalVenta = vendedores[vendedor].total;

        if (totalVenta > VentaMayor) {
            VentaMayor = totalVenta;
            empleadoDelMes = vendedor;
        } else if (totalVenta === VentaMayor) {
            empleadoDelMes = "Empate";
        }
    }

    return empleadoDelMes;
}


// Función para mostrar resultados
function mostrarResultados() {
    console.log("Ventas por vendedor:");
    for (const vendedor in vendedores) {
        console.log(`${vendedor}:`, vendedores[vendedor].ventas);
    }

    console.log("\nTotal de dinero recolectado por vendedor:");
    for (const vendedor in vendedores) {
        console.log(`${vendedor}: $${vendedores[vendedor].total}`);
    }

    console.log("\nEmpleado del mes:", empleadoDelMes());
}

// Mostrar resultados
mostrarResultados();




