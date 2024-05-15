import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyStore} from "../myStore.store";
import {MatDialog} from "@angular/material/dialog";
import {MyDialogComponent} from "./my-dialog/my-dialog.component";
import {ChildComponentComponent} from "./child-component/child-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngrxStoreTest';

  readonly myStore = inject(MyStore);

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    // this.myStore.
  }

  incrementCounter() {
    this.myStore.incrementCounter();
  }

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
      },
      height: '95vh',
      width: '100vh'
    });
  }

}
