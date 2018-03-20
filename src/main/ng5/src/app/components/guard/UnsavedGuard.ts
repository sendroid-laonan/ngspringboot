import {CanDeactivate} from '@angular/router';
import {CarouselComponent} from '../carousel/carousel.component';

export class UnsavedGuard implements  CanDeactivate<CarouselComponent> {
  canDeactivate(component: CarouselComponent) {
    return window.confirm('你还没有保存，确定离开吗？');
  }

}
