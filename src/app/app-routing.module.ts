import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {'path': '', component:HomeComponent},
  {'path': 'auth', component:AuthComponent},
  {'path': '', redirectTo: 'tutorials', pathMatch: 'full' },
  {'path' : 'users', component:UsersListComponent},
  {'path' : 'users/:id', component:UserDetailsComponent},
  {'path' : 'add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
