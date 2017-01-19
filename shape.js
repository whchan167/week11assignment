//use strict mode to ensure the error shown without disrupting the file
"use strict"

//create a Shape constructor as a parent object
function Shape(type) {
	if(!(this instanceof Shape)){
		return new Shape (type);
	}
	this.type = type;
	};

//adding property function to get type in Shape prototype 
//and link between Shape and the child inherited from Shape.
Shape.prototype.get_type = function (){
		console.log("you are calling '"  + this.type + "' shape")};

//-----------------------------------------------------------------------//
//create a Triangle constructor with three properties for each sides
function Triangle(side1, side2, side3) {
	if(!(this instanceof Triangle)){
		return new Triangle(side1, side2, side3);
	}
	this.type = "Triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
};

//Triangle is instance object of Shape and inherit property of Shape prototype
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

//----------------------------------------------------------------------//
//create a Square constructor with property for each equal side
function Square(side) {
	if(!(this instanceof Square)){
		return new Square(side);
	}
	this.type = "Square";
	this.side=side
};

//Square is instance object of Shape and inherit property of Shape prototype
Square.prototype =  new Shape();
Square.prototype.constructor = Square;

//---------------------------------------------------------------------//
//create a Pentagon constructor with property for five different sides
function Pentagon(side1, side2, side3, side4, side5) {
	if(!(this instanceof Pentagon)){
		return new Pentagon(side1, side2, side3, side4, side5);
	}
	this.type = "Pentagon";
	Triangle.call(this, side1, side2, side3);
	this.side4 = side4;
	this.side5 = side5;
};

//Square is instance object of Shape and inherit property of Shape prototype
Pentagon.prototype =  new Shape();
Pentagon.prototype.constructor = Pentagon;

//---------------------------------------------------------------------//
//creating new child objects for each Triangle, Sqaure and Pentagon constructors
var triangle1 = new Triangle(2,5,6);
var square1 = new Square(6);
var pentagon1 = new Pentagon(3,3,4,4,4);

//console log to ensure each child object inherited get_type property from Shape prototype
console.log(triangle1.get_type());
console.log(square1.get_type());
console.log(pentagon1.get_type());

// Ensuring instanceof works as expected.
console.log(triangle1 instanceof Triangle);
console.log(triangle1 instanceof Shape);
console.log(square1 instanceof Square);
console.log(square1 instanceof Shape);
console.log(pentagon1 instanceof Pentagon);
console.log(pentagon1 instanceof Shape);