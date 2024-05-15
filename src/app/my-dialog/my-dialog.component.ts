import {Component, inject} from '@angular/core';
import {MyStore} from "../../myStore.store";

@Component({
  selector: 'app-my-dialog',
  standalone: true,
  imports: [],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.css'
})
export class MyDialogComponent {
  readonly myStore = inject(MyStore);

}
