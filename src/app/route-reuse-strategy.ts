import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from "@angular/router";
import {FooComponent} from "./foo/foo.component";

export class FooRouteReuseStrategy extends BaseRouteReuseStrategy {

  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    let futureChild = this.getChildDeep(future);
    let currentChild = this.getChildDeep(curr);


    if (futureChild.component === FooComponent && currentChild.component === FooComponent){
      console.log('shouldReuse: true');
      return true;
    }
    let reuse = super.shouldReuseRoute(future, curr);
    console.log('shouldReuse: ', reuse);
    return reuse;
  }

  private getChildDeep(route: ActivatedRouteSnapshot) {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
