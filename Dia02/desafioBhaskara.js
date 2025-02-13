let a = 2;
let b = -3;
let c = -5;

if (a == 0) {
    console.log("A equação não pode ser realizada pois A é zero");
} else {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log("Não existem raízes reais nesta equação!");
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        if (x1 === x2) {
            console.log("A equação possui apenas uma raiz real: " + x1);
        } else {
            console.log("As raízes da equação são: X1 =", x1, "e X2 =", x2);
        }
    }
}