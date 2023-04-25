// BEGIN
function each (collection, callback) {
    collection.forEach(function(i) {
      callback.call(i)
    })
  }
  export default each
// END
