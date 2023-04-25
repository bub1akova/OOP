// BEGIN
function sum(...args) {
    const summa = args.reduce((acc, i) => acc + i, 0)
    const addNextValues = (...nextArgs) => sum(summa, ...nextArgs)
    addNextValues.valueOf = () => summa
    return addNextValues
  }
  export default sum
// END
