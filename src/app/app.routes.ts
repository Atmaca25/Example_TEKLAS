import { Routes } from '@angular/router';
import { LocationListComponent } from './logistics/location/location-list/location-list.component';
import { LocationAddComponent } from './logistics/location/location-add/location-add.component';
import { LocationDeleteComponent } from './logistics/location/location-delete/location-delete.component';

export const routes: Routes = [
    {
        path:"logistic/location/list",
        component:LocationListComponent,
        pathMatch:'full'
    },
    {
        path:"logistic/location/add",
        component:LocationAddComponent,
        pathMatch:'full'
    },
    {
        path:"logistic/location/delete/:id",
        component:LocationDeleteComponent,
        pathMatch:'full'
    }
];
