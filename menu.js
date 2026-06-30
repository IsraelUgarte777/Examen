import inquirer from "inquirer";
import chalk from "chalk";

import Suma from "./operaciones/sumar.js";
import Resta from "./operaciones/restar.js";
import Multiplicacion from "./operaciones/multiplicar.js";
import Division from "./operaciones/dividir.js";

class Menu {
  async mostrar() {
    let continuar = true;

    while (continuar) {
      console.log(
        chalk.cyanBright("\n═══════════════════════════════")
      );
      console.log(
        chalk.cyanBright("     CALCULADORA BÁSICA")
      );
      console.log(
        chalk.cyanBright("═══════════════════════════════\n")
      );

      const { opcion } = await inquirer.prompt([
        {
          type: "select",
          name: "opcion",
          message: chalk.cyan("Selecciona una opción:"),
          choices: [
            { name: " Sumar", value: "sumar" },
            { name: " Restar", value: "restar" },
            { name: " Multiplicar", value: "multiplicar" },
            { name: " Dividir", value: "dividir" },
            { name: " Salir", value: "salir" }
          ]
        }
      ]);

      if (opcion === "salir") {
        console.log(
          chalk.redBright("\n Saliendo del programa...\n")
        );
        continuar = false;
        break;
      }

      const { num1, num2 } = await inquirer.prompt([
        {
          type: "number",
          name: "num1",
          message: chalk.white("Ingresa el primer número:")
        },
        {
          type: "number",
          name: "num2",
          message: chalk.white("Ingresa el segundo número:")
        }
      ]);

      let operacion;

      switch (opcion) {
        case "sumar":
          operacion = new Suma(num1, num2);
          console.log(
            chalk.greenBright(`\n Resultado: ${operacion.calcular()}\n`)
          );
          break;

        case "restar":
          operacion = new Resta(num1, num2);
          console.log(
            chalk.hex("#FF8C00")(`\n Resultado: ${operacion.calcular()}\n`)
          );
          break;

        case "multiplicar":
          operacion = new Multiplicacion(num1, num2);
          console.log(
            chalk.blueBright(`\n Resultado: ${operacion.calcular()}\n`)
          );
          break;

        case "dividir":
          operacion = new Division(num1, num2);
          console.log(
            chalk.magentaBright(`\n Resultado: ${operacion.calcular()}\n`)
          );
          break;
      }
    }
  }
}

export default Menu;