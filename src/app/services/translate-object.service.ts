import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class TranslateObjectService {

  constructor(private translate: TranslateService) { }

  getTranslatedObject<T = any>(value: string): Observable<T> {
    return this.translate.get(value).pipe(map((res: T) => {
      return res;
    }))
  }

}
