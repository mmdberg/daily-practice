class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds
  }

  onEarth() {
    return parseFloat((this.seconds/31557600).toFixed(2))
  }

  onMercury() {
    let earthSeconds = this.onEarth(this.seconds)
    return parseFloat((earthSeconds / 0.2408467).toFixed(2))
  }

  onVenus() {
    let earthSeconds = this.onEarth(this.seconds)
    return parseFloat((earthSeconds / 0.61519726).toFixed(2))
  }

  onMars() {
    let earthSeconds = this.onEarth(this.seconds)
    return parseFloat((earthSeconds / 1.8808158).toFixed(2))
  }

  onJupiter() {
    let earthSeconds = this.onEarth(this.seconds)
    return parseFloat((earthSeconds / 11.862615).toFixed(2))
  }

  onSaturn() {
    let earthSeconds = this.onEarth(this.seconds)
    return parseFloat((earthSeconds / 29.447498).toFixed(2))
  }

  onUranus() {
    let earthSeconds = this.onEarth(this.seconds)
    return parseFloat((earthSeconds / 84.016846).toFixed(2))
  }

  onNeptune() {
    let earthSeconds = this.onEarth(this.seconds)
    return parseFloat((earthSeconds / 164.79132).toFixed(2))
  }
}

module.exports = SpaceAge