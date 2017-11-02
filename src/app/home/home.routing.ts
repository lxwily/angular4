import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './homedetail.component';
import { GoodsComponent } from '../goods/goods.component';
import { MemberComponent } from '../member/member.component';
import { EditorComponent } from '../editor/editor.component';
const HomeCenterRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path : '',component : HomeDetailComponent
      },
      {
        path: 'detail',component : HomeDetailComponent
      },
      {
        path: 'goods',component : GoodsComponent
      },
      {
        path: 'member',component : MemberComponent
      },
      {
        path: 'editor',component : EditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(HomeCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class HomeRoutingModule { }