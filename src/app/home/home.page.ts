import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

interface Food {
  id: number;
  nombre: string;
  tipo: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  foods: Food[] = [
    {
      id: 1,
      nombre: 'Manzanas',
      tipo: 'fruta',
    },
    {
      id: 2,
      nombre: 'Zanahorias',
      tipo: 'vegetal',
    },
    {
      id: 3,
      nombre: 'Pastel',
      tipo: 'postre',
    },
  ];

  compareWith(o1: Food, o2: Food): boolean {
    return o1.id === o2.id;
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  };
  alertButtons = ['Cerrar'];
  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
