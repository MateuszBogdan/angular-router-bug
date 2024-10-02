import {Routes} from '@angular/router';
import {FooComponent} from "./foo/foo.component";
import {AbcComponent} from "./abc/abc.component";

export const routes: Routes = [
  {
    path: 'Foo', data: {path: '/Foo - root'}, children:
      [
        {path: '', pathMatch: "full", component: FooComponent, data: {path: '/Foo - empty'}},
        {path: 'Bar', data: {path: '/Foo/Bar - root'}, children: [
            {path: '', pathMatch: "full", component: FooComponent, data: {path: '/Foo/Bar - empty'}},
            {path: 'Baz', component: FooComponent, data: {path: '/Foo/Bar/Baz'}},
          ]},
      ],
  },
  {path: 'Abc', component: AbcComponent},
  {path: '**', redirectTo: '/Foo'}
];
