/* Stack Min: How would you design a stack which, in addition to push
and pop, has a function min which returns the minimum element? Push, pop,
and min should all operate in O(1) time.
*/


class Stack {

  constructor () {
    this.mins = [];
    this.input = [];
  }

  isEmpty () {
    return this.input.length === 0;
  }

  push (item) {
    this.input.push(item);
    var len = this.input.length;

    if ( this.mins.length >= 1 && item < this.mins[this.mins.length - 1] || this.mins.length === 0 ) {
      this.mins.push(item);
    }
  }

  pop () {
    var len = this.input.length;
    var popped = this.input.pop();
    if (popped == this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }

    return popped;
  }

  peek () {
    return this.input.length > 0 ? this.input[this.input.length - 1] : undefined;
  }

  getMin () {
    return this.mins.length > 0 ? this.mins[this.mins.length - 1] : undefined;
  }

  printStack () {
    return this.input;
  }
}
