circleMath={
pi:Math.PI,
calcCircumf:function(rad) {
var circum = rad * circleMath.pi;
alert (circum + “ inches”);
},
calcArea:function(rad) {
var area = (rad * circleMath.pi) * rad;
alert (area + “ square inches”);
},
calcVolume:function(rad) {
var volume = (4/3) * circleMath.pi * (rad * rad * rad)
alert (volume + “ cubic inches”);
}
}