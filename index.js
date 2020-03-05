import { getDate, year } from "./utils/date.js"

class App {
  constructor() {
    this.render()  
  }  
  
  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: ${getDate()} and ${year}</div>
    `
  }
}

new App()