import {User} from "./user.model";
import {AuthData} from "./auth-data.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private user: User = <User>{};

  constructor(private router: Router) {}

  registerUser(authData: AuthData) : void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) : void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  logout(): void {
    this.user = <User>{};
    this.authChange.next(false);
    this.router.navigate(['/login']).then();
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuth(): boolean {
    // TODO: FIX THIS FUCKING ISAUTH FUNCTION
    // this isAuth() DOES NOT WORK
    return this.user != <User>{};
  }

  private authSuccessfully(): void{
    this.authChange.next(true);
    this.router.navigate(['/training']).then();
  };
}
