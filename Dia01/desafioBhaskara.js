let a = 1;
let b = 1;
let c = -6;

let delta = b * b -4 * a * c;

console.log(delta);

if(delta < 0){
    console.log("A equação não possui raízes reais.");
}

x1 = (-b + Math.sqrt(delta)) / (2 * a);
x2 = (-b - Math.sqrt(delta)) / (2 ** a);

console.log("As raízes desta equação são o sseguites valores x1="+ x1+" e x2="+ x2);



