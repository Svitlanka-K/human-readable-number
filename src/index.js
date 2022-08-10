module.exports = function toReadable (number) {
const zero = ['zero'];
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
let arr = [];
let str = '';
      
if ( number === 0 ) { 
    return zero[number]; 
} else {
    arr.push( number % 100 );
    x = parseInt( number / 100, 10 );   
    a = arr.shift();
        
    y = Math.floor( a / 10 ) % 10,
    z = a % 10;
            
    str = (( x > 0 ? ones[x] + ' hundred ' : '' ) + ( y >= 2 ? tens[y] + ' ' + ones[z] : ones[10*y + z] ));
    rez = str.trimEnd();
    
    return rez; 
    }
}
