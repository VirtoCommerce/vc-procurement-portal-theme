import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocationStrategy } from '@angular/common';

@Pipe({
  name: 'adjustAssetPath'
})
export class AdjustAssetPathPipe implements PipeTransform {

  constructor(private location: LocationStrategy) {}
  transform(imageUrl: string, ...args: any[]): string {
    if (imageUrl == null) {
      return '';
    }
    let result = imageUrl;
    if (environment.production) {
      result = `/themes/assets/static/bundle${imageUrl}`;
    }
    result = this.location.prepareExternalUrl(result);
    return result;
  }

}
