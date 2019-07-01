import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IfaceComponent} from './components/iface/iface.component';

const routes: Routes = [
  {
    path: 'iface',
    component: IfaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
