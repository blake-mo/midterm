//This is the function to square a number. 
function squareNumber(num) {
    var sn = num * num;
    document.getElementById("squared").innerHTML = sn; 
    console.log(num + ' squared is ' + sn);
};        

//This is the function to divide a number in half. 
function halfNumber(num){
    var h = num / 2; 
    document.getElementById("half").innerHTML = h; 
    console.log('Half of ' + num + ' is ' + h);
};

//This is the function to find what percent a number is of another number. 
function percentOf(num1, num2) {
    var p = (num1/num2) * 100;
    //console.log(num1 ' is ' + p + '% of ' + num2);
    document.getElementById("percent").innerHTML = p;
    return p;
};

//This function finds the area of a circle. 
function areaOfCircle(radius) {
    var area = Math.PI * (radius * radius);
    var a = area.toFixed(2); 
    console.log('The area of circle with radius ' + radius + ' is ' + a); 
    document.getElementById("area").innerHTML = a;
    return a;
};

//This function combines all function to perform one operation. 
function finalOperation(num) {
    //var half = halfNumber(num);
    //var square = squareNumber(half);
    //var area = areaOfCircle(square);
    //var result = percentOf(square, area); 
};

squareNumber(3); 

halfNumber(5);

percentOf(2,4);

areaOfCircle(2);

finalOperation(5);
