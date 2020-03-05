import { getDate, year as currentYear } from "./utils/date.js"

class App {
  constructor() {
    this.render()  
  }  
  
  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: ${getDate()} and ${currentYear}</div>
    `
  }
}

new App()