import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { ControlStetmentComponent } from './components/control-stetment/control-stetment.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';

export const routes: Routes = [
    {path:'', redirectTo:'data-binding', pathMatch: 'full'},
    {path:'admin', component: AdminComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'ng-if', component: NgIfComponent},
    {path:'ng-for', component: NgForComponent},
    {path:'ng-class', component: NgClassComponent},
    {path:'ng-style', component: NgStyleComponent},
    {path:'control-flow', component: ControlStetmentComponent},
    {path: 'signal', component: SignalComponent},
    {path: 'linked-signal', component: LinkedSignalComponent},
    {path: 'template-form', component: TemplateFormComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'get-api', component: GetApiComponent},
    {path:'post-api', component: PostApiComponent}
];
