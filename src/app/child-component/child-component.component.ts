import {Component, inject} from '@angular/core';
import {MyStore} from "../../myStore.store";

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {

  readonly myStore = inject(MyStore);


}
