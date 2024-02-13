import{formatCurrency} from '../scripts/utils/money.js'

console.log('Test Suite : FormatCurrency')

if(formatCurrency(2095) === '20.95'){
console.log('passed - converts cents into dollars');
}else{
  console.log('failed - to convert cents into dollars')
};

if(formatCurrency(0 === '0.00')){
  console.log('passed - works with 0')
}else{
  console.log('failed - to work with 0')
}; 

if(formatCurrency(2000.5)==="20.01"){
console.log('passed - rounds up to the nearest cents')
}else{
  console.log('failed - to round up to the nearest cents')
};


if(formatCurrency(2000.4)=== '20.00'){
console.log('passed - rounds down to nearest cents');
}else{
  console.log('failed - to round down to nearest cents')
};