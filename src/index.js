module.exports = function solveEquation(equation) {
  
  // your implementation
  
  var parseStr = strToNumbers( equation );
  return _solveEquation( ...parseStr );
};

function _solveEquation( a, b, c ){

  b = b / a;
  c = c / a;
  a = a / a;

  var D = b ** 2 - 4 * a * c;

  var x1 = ( -b + Math.sqrt( D ) ) / 2;
  var x2 = ( -b - Math.sqrt( D ) ) / 2;

  return [x1, x2].sort( ( a, b ) => a - b );
}

function strToNumbers( str ){

  var resultArr = [];

  resultArr[0] = +str.slice( 0, str.indexOf( '*' ) );
  resultArr[1] = +str.slice( str.indexOf( '*' ) + 7, str.indexOf( '*', str.indexOf( '*' ) + 1 ) ) *
      (str.substr( str.indexOf( '^' ) + 3, 1 ) + '1');
  resultArr[2] = +str.slice( str.indexOf( '*', str.indexOf( '*' ) + 1) + 5) *
      (str.substr( str.indexOf( '*', str.indexOf( '*' ) + 1) + 4, 1 ) + '1');

  return resultArr;
}