var victor = {
    mass: 120,
    height: 1.85,
    get calculateBMI(){
        return (this.mass / (this.height * this.height));
    }
};

var john = {
    mass: 85,
    height: 1.8,
    get calculateBMI(){
        return (this.mass / (this.height * this.height));
    }
};

var v = victor.calculateBMI;
var j = john.calculateBMI;

function a(v, j){
    if(v > j){
        console.log("Victor has a higher BMI")
    } else if(v < j){
        console.log("John has a higher BMI")
    } else if(v == j){
        console.log("They have the same BMI")
    }
}

console.log(a(v, j));