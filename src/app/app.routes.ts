import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { ControlStetmentComponent } from './components/control-stetment/control-stetment.component';

export const routes: Routes = [
    {path:'', redirectTo:'data-binding', pathMatch: 'full'},
    {path:'admin', component: AdminComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'ng-if', component: NgIfComponent},
    {path:'ng-for', component: NgForComponent},
    {path:'ng-class', component: NgClassComponent},
    {path:'ng-style', component: NgStyleComponent},
    {path:'control-flow', component: ControlStetmentComponent}

];
