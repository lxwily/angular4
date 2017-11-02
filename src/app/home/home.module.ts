import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../common/nav/nav.component';
import { HeaderComponent } from '../common/header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HomeDetailComponent } from './homedetail.component';
import { GoodsComponent } from '../goods/goods.component';
import { MemberComponent } from '../member/member.component';
import { EditorComponent } from '../editor/editor.component';
@NgModule({
    imports : [HomeRoutingModule],
    exports : [RouterModule],
    declarations : [NavComponent,HeaderComponent,HomeComponent,HomeDetailComponent,GoodsComponent,MemberComponent,EditorComponent]
})
export  class HomeModule {
    
};
