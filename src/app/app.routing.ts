import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/guard.service';

//建立路由
const routes : Routes = [
    {
        path : '',redirectTo : 'login',pathMatch : "full"
    },
    {
        path : 'login',component : LoginComponent
    },
    {
        path : 'home',loadChildren : 'app/home/home.module#HomeModule',canActivate: [AuthGuard],
    }
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule],
    providers : [AuthGuard]
})

export class AppRoutingModule {}