import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from '../components/detail-page/detail-page.component';
import { ListPageComponent } from '../components/list-page/list-page.component';

const routes: Routes = [
    { path: '', component: ListPageComponent },
    { path: ':id', component: DetailPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule { }
