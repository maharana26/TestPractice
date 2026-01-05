//Addition
function addition(a,b){
    console.log("Addition:", a+b);
}
addition(6,8);

//Substraction
function substraction(c,d) {
    console.log("Substraction:", c-d);
}
substraction(8,6);

//Multiplication
function multiplication(e,f) {
    console.log ("Multiplication:", e*f);
}
multiplication(4,5);

//Division
function division(g,h){
    console.log("Division:", g/h);
}
division(10,5);

//Area of a Circle
function circle(radius) {
    const A = (3.14*radius*radius);
    console.log("Area of a circle is:", A);
}
circle(5);

//Area of a rectangle
function rectangle(h,w) {
    const area = (h*w);
    console.log("Area of a rectangle is:", area);
}
rectangle(2,6);

//Area of a cylinder
function cylinder(r,h){
    const a = (2*3.14*r*h);
    console.log("Area of a cylinder is:", a);
}
cylinder(2,5);

//Arrow function
//Addition
const add = (a,b) => console.log("add:", a+b);
add(2,6);

//Substraction
const sub = (c,d) => console.log("sub:", c-d);
sub(6,2);

//Multiplication
const multi = (e,f) => console.log("multi:", e*f);
multi(2,5);

//Division
const div = (g,h) => console.log("div:", g/h);
div(10,2);

//Area of a circle
const Acircle = (r) => console.log("AreaofCircle:", 3.14*r*r);
Acircle(10);

//Area of a rectangle
const Arectangle = (h,w) => console.log("AreaofRectangle:", h*w);
Arectangle(10,5);

//Area of a cylinder
const Acylinder = (r,h) => console.log("AreaofCylinder:", 2*3.14*r*h);
Acylinder(10,5);
