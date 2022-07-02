import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { firstValueFrom, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return firstValueFrom(of(PROMOTIONS).pipe(delay(2000)));
  }

  getPromotion(id: string): Promise<Promotion> {
    return firstValueFrom(of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)));
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return firstValueFrom(of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000)));
  }
}
