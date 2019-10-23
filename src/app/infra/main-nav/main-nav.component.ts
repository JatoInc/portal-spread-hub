import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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

  constructor(private breakpointObserver: BreakpointObserver) {}

  closeMenu() {
    console.log('entoru aqui');
    // this.opened = true;
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
