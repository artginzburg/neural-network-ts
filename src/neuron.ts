import type Connection from './connection'

import uid from './uid'
class Neuron {
  inputConnections: Connection[]
  outputConnections: Connection[]
  bias: number
  delta: number
  output: number
  error: number
  id: string

  constructor() {
    this.inputConnections = []
    this.outputConnections = []
    this.bias = 0
    // delta is used to store a percentage of change in the weight
    this.delta = 0
    this.output = 0
    this.error = 0
    this.id = uid()
  }

  toJSON() {
    return {
      id: this.id,
      delta: this.delta,
      output: this.output,
      error: this.error,
      bias: this.bias,
      inputConnections: this.inputConnections.map(i => i.toJSON()),
      outputConnections: this.outputConnections.map(i => i.toJSON())
    }
  }

  getRandomBias() {
    const min = -3;
    const max = 3
    return Math.floor(Math.random() * (+max - +min)) +min;
  }

  addInputConnection(connection: Connection) {
    this.inputConnections.push(connection)
  }

  addOutputConnection(connection: Connection) {
    this.outputConnections.push(connection)
  }

  setBias(val: number) {
    this.bias = val
  }

  setOutput(val: number) {
    this.output = val
  }

  setDelta(val: number) {
    this.delta = val
  }

  setError(val: number) {
    this.error = val
  }
}

export default Neuron
