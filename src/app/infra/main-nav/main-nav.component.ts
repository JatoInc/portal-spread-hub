import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SpreadHubService } from '../services/spread-hub-api.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  // opened: Boolean = false;
  isMenuOpen = true;
  contentMargin: Number = 240;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private Service: SpreadHubService) {}

  closeMenu() {
    console.log('entoru aqui');
    // this.opened = true;
  }

  async login() {
    const auth: any = await this.Service.getAuthToken('christianmouraa@gmail.com', 'teste@123');
    localStorage.setItem('auth_token', auth.token);
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen

    if (!this.isMenuOpen) {
      this.contentMargin = 70
    } else {
      this.contentMargin = 240;
    }
  }

}
