import { Routes } from '@angular/router';
import { Dashboard } from './left-part/dashboard/dashboard';
import { Logout } from './left-part/logout/logout';
import { Mytasks } from './left-part/mytasks/mytasks';
import { Settings } from './left-part/settings/settings';
import { Notifications } from './left-part/notifications/notifications';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login',component:Login},

    {path:'dashboard',component:Dashboard},
    {path:'logout',component:Logout},

    {path:'mytasks',component:Mytasks},
    {path:'notifications',component:Notifications},
    {path:'settings',component:Settings},
    {path:'**', redirectTo: 'login', pathMatch: 'full' }
];
