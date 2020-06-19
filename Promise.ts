enum PromiseStatus {
  PENDING,
  RESOLVED,
  REJECTED
}
function P(exector) {
  const self = this
  this.status = PromiseStatus.PENDING
  this.value = undefined
  this.reason = undefined

  function resolve(value) {
    self.value = value
    self.status = PromiseStatus.RESOLVED
  }

  function reject(reason) {
    self.reason = reason
    self.status = PromiseStatus.REJECTED
  }
}

P.prototype.then = function() {

}

P.prototype.catch = function() {
  
}

P.prototype.finally = function() {
  
}

P.all = function() {
  
}

P.allSettled = function() {

}

P.any = function() {

}

P.race = function() {
  
}

P.resolve = function() {
  
}

P.reject = function() {
  
}