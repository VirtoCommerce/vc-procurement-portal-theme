import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { IToggleable } from '../models/itoggleable';

@Injectable({
  providedIn: 'root'
})
export class MobileViewService {
  private renderer: Renderer2;

  openSidebar(component: IToggleable) {
    const overlayElement = this.renderer.createElement('div');
    this.renderer.addClass(overlayElement, 'overlay');
    this.renderer.appendChild(document.body, overlayElement);
    component.toggle();
    this.renderer.listen(overlayElement, 'click', () => {
      this.renderer.removeChild(document.body, overlayElement);
      component.toggle();
    });
  }

  closeSidebar(component: IToggleable) {
    component.toggle();
    const overlayElement = document.querySelector('.overlay');
    this.renderer.removeChild(document.body, overlayElement);
  }

  openMobileSearch() {
    const searchElement = document.querySelector('.mobile-navbar .search');
    this.renderer.addClass(searchElement, 'opened');
  }

  closeMobileSearch() {
    const searchElement = document.querySelector('.mobile-navbar .search');
    this.renderer.removeClass(searchElement, 'opened');
  }

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

}
