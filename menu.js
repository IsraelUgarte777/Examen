import inquirer from "inquirer";
import chalk from "chalk";
import Operacion from "./Operacion.js";

class Menu {
  async mostrar() {
    let continuar = true;

    while (continuar) {
      const { opcion } = await inquirer.prompt([
        {
          type: "select",
          name: "opcion",
          message: "Selecciona una opción:",
          choices: [
            { name: "Sumar", value: "sumar" },
            { name: "Restar", value: "restar" },
            { name: "Multiplicar", value: "multiplicar" },
            { name: "Dividir", value: "dividir" },
            { name: "Salir", value: "salir" }
          ]
        }
      ]);

      if (opcion === "salir") {
        console.log(chalk.red("Saliendo del programa..."));
        continuar = false;
        break;
      }

      const { num1, num2 } = await inquirer.prompt([
        { type: "number", name: "num1", message: "Ingresa tu primer número:" },
        { type: "number", name: "num2", message: "Ingresa tu segundo número:" }
      ]);

      const operacion = new Operacion(num1, num2);

      switch (opcion) {
        case "sumar": console.log(chalk.green(`Resultado: ${operacion.sumar()}`)); break;
        case "restar": console.log(chalk.yellow(`Resultado: ${operacion.restar()}`)); break;
        case "multiplicar": console.log(chalk.blue(`Resultado: ${operacion.multiplicar()}`)); break;
        case "dividir": console.log(chalk.magenta(`Resultado: ${operacion.dividir()}`)); break;
      }
    }
  }
}

export default Menu;