// state - data to be managed in app

class App {
  constructor() {
    this.state = {
      isAuth: false,
      error: ""
    }
    this.render();
    this.$userMessage = document.getElementById("user-message");
    this.checkAuth();
  }

  checkAuth() {
    if (user) {
      this.$userMessage.textContent = "Welcome back!";
    } else {
      this.$userMessage.textContent = "You must sign in!";
      this.$userMessage.style.color = "red";
    }
  }

  render() {
    document.getElementById("root").innerHTML = `
      <div>
        <span id="user-message"></span>
      </div>
    `;
  }
}

new App();