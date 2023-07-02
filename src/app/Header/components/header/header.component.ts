import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHidden: boolean = false;

  isMenuOpened: boolean = false;
  activeSubMenu = 'menu1';

  setSubMenu = (menuId: string) => this.activeSubMenu = menuId;


  toggleMenu = () => this.isMenuOpened = !this.isMenuOpened;
}
