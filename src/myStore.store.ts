import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed, inject} from "@angular/core";


type myState = {
  counter: number;
};

const initialState: myState = {
  counter: 1,
};

export const MyStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withComputed(({counter}) => ({
    counterValue: computed(() => counter()),
  })),
  withMethods((store) => ({
    incrementCounter(): void {
      patchState(store, (state) => ({counter: state.counter + 1 }));
    },
  })),
);

