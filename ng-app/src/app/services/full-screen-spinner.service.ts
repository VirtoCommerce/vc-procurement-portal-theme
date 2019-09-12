import { Injectable } from '@angular/core';
import { BlockUIService } from 'ng-block-ui';

export const FullScreenSpinnerName = 'general-spinner';


@Injectable({
  providedIn: 'root'
})
export class FullScreenSpinnerService {

  private isSuspended = false;

  constructor(private blockUiService: BlockUIService) {  }

  start(): void {
    if (!this.isSuspended) {
      this.blockUiService.start(FullScreenSpinnerName);
    }
  }
  stop(): void {
    this.blockUiService.stop(FullScreenSpinnerName);
  }
  reset(): void {
    this.blockUiService.reset(FullScreenSpinnerName);
  }
  unsubscribe(): void {
    this.blockUiService.unsubscribe(FullScreenSpinnerName);
  }
  isActive(): boolean {
    return this.blockUiService.isActive(FullScreenSpinnerName);
  }

  suspend(): void {
    this.isSuspended = true;
  }

  proceed(): void {
    this.isSuspended = false;
  }

}
