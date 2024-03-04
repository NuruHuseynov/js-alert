let age = +prompt('Enter your age')

if (age < 18) {

    var underAge = 18 - age;
    alert(underAge + ' ' +'years left to turn 18')
}
else if(age >= 18){
    alert('You can drive')
}
else{
    alert('Please enter your age')
}