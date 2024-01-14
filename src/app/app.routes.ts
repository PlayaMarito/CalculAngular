import { Routes } from '@angular/router'; // Cambio aquí: 'Route' a 'Routes'
import { CalculaapComponent } from './calculaap/calculaap.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [ // Cambio aquí: 'Route' a 'Routes'
    {
        path: '',
        component: CalculaapComponent, 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}