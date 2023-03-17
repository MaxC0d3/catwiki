import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./@views/Home_/home-module.module').then((m) => m.HomeModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./@views/Detail_/detail-module.module').then(
        (m) => m.DetailModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./@views/Login_/login-module.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
