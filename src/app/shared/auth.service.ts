export class AuthService {

  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }
  logOut() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }
  isloggedin(): boolean {
    if (window.localStorage.getItem('user')) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }
}
