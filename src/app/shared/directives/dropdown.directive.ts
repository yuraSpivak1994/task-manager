import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdpwn]'
})
export class DropdownDirective {
  @HostBinding('class.openDropdown') isOpen = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    console.log(this);
  }
}
