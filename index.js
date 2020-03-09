// state - data to be managed in app

class App {
  constructor() {
    this.state = {
      isAuth: false,
      error: ""
    }
    this.checkAuth();
    this.render();
  }

  checkAuth() {
    if (user) {
      this.state = {...this.state, isAuth: true}
    } else {
      this.state = { ...this.state, error: "You must sign in!" }
    }
  }

  render() {
    const {isAuth, error} = this.state 
    document.getElementById("root").innerHTML = `
      <div>
        { isAuth ? "welcome back" : error}
      </div>
    `;
  }
}

new App();