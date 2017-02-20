// Implement a queue with 2 stacks

function Queue () {
  this.input = [];
  this.output = [];
  this.top = null;
}

Queue.prototype.enqueue = function (items) {
  this.input.push(item);
};


Queue.prototype.dequeue = function () {
  if (this.isEmpty(this.output)) {
    if (!this.isEmpty(this.input)) {
      this.output = this.input.reverse();
      this.input = [];
    }
  }
  this.top = this.output.pop();
};

Queue.prototype.peek = function () {
  return this.top;
};

Queue.prototype.isEmpty = function (arr) {
  return arr.length === 0;
};
