import { getDate } from "./utils/date.js/index.js"

class App {
  constructor() {
    this.render()
  }

  render() {
    document.getElementById("root").innerHTML = `
      data: ${getDate}
    `
  }
}

new App()