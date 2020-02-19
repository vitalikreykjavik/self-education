//my 
function distinct(arr) {
  return arr.filter((a, b) => arr.indexOf(a) === b)
};

//best from codewars

function distinct(a) {
  return [...new Set(a)];
}


function removeDuplicates(array) {
  let x = {};
  array.forEach(function(i) {
    if(!x[i]) {
      x[i] = true
    }
  })
  return Object.keys(x)
};

function removeDuplicates(array) {
  let a = []
  array.map(x => 
    if(!a.includes(x) {
      a.push(x)
    })
  return a
};
