import { NgModule } from "@angular/core";
import { CountertComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [
    CountertComponent
  ],
  exports: [
    CountertComponent
  ]
})
export class CounterModule{}
