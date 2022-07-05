import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!: Dish[];
  errMess!: string;

  constructor(private dishService: DishService,
    @Inject('baseURL') public baseURL: string) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe({
        next: (dishes) => this.dishes = dishes,
        error: errMess => this.errMess = errMess
        });
  }

}
