import type Neuron from './neuron'

class Connection {
  weight: number
  change: number

  constructor(public from: Neuron, public to: Neuron) {
    this.from = from
    this.to = to
    this.weight = Math.random()
    this.change = 0
  }

  toJSON() {
    return {
      change: this.change,
      weight: this.weight,
      from: this.from.id,
      to: this.to.id
    }
  }

  setWeight(w: number) {
    this.weight = w
  }

  setChange(val: number) {
    this.change = val
  }
}

export default Connection
