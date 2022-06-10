import Neuron from './neuron'

class Layer {
  neurons: Neuron[]

  constructor(numberOfNeurons: number) {
    const neurons: Neuron[] = []
    for (var j = 0; j < numberOfNeurons; j++) {
      // const value = Math.random()
      const neuron = new Neuron()

      // Neurons in other than initial layer have a bias value

      neurons.push(neuron)
    }

    this.neurons = neurons
  }

  toJSON() {
    return this.neurons.map((n) => {
      return n.toJSON()
    })
  }
}

export default Layer
