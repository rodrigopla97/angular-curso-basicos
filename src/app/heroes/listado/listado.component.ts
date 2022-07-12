import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Ant-Man'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...')
    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado)
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
