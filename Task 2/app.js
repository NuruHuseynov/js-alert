var myAge = 24;
var userAge = +prompt('Enter your age');

if (myAge > userAge) {
    var opAge = myAge - userAge;
    alert('I am older than you by ' + opAge + ' years');
} else if (myAge < userAge) {
    var opAge = userAge - myAge;
    alert('You are older than me by ' + opAge + ' years');
} else {
    alert('Re-enter your age');
}
