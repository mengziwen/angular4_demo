import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* 组件引入 */
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

const routers: Routes = [
    {
        path: 'parent', component: ParentComponent,
        children: [
            { path: 'child', component: ChildComponent }
        ]
    },
    { path: '', redirectTo: '/parent', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routers,
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule { }