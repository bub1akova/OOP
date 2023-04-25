//- usd -> eur = 0.7
//- eur -> usd = 1.2

// BEGIN
function Money(value, currency) {
    this.value = value
    this.currency = currency || 'usd'
  }
  
  Money.prototype.getValue = function() {
    return this.value
  }
  
  Money.prototype.getCurrency = function() {
    return this.currency
  }
  
  Money.prototype.exchangeTo = function(cur) {
    if (this.currency === cur) return new Money(this.value, this.currency)
  
    if (cur === 'eur') return new Money(this.value * 0.7, cur)
  
    if (cur === 'usd') return new Money(this.value * 1.2, cur)
  }
  
  Money.prototype.add = function(money) {
    const convertedMoney = money.exchangeTo(this.currency)
    return new Money(this.value + convertedMoney.getValue(), this.currency)
  }
  
  Money.prototype.format = function() {
    return this.value.toLocaleString('en-US', { style: 'currency', currency: this.currency })
  }
  
  export default Money
// END
