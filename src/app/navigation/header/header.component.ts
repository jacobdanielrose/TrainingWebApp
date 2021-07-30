import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Observable} from "rxjs";
import * as fromRoot from '../../app.reducer';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onToggleSidenav() : void {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
