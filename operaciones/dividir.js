export default class Division {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    calcular() {
        if (this.b === 0) {
            throw new Error("No se puede dividir entre cero");
        }

        return this.a / this.b;
    }
}