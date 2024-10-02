import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [
    JsonPipe,
    RouterLink
  ],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent implements OnDestroy{
  protected routeData: any = {};

  constructor(private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef) {
    this.activatedRoute.data.subscribe(data => {
      this.routeData = data;
      this.cd.markForCheck();
    });
    console.log('%cFoo Created', 'color: red; font-size:2em');
  }

  ngOnDestroy() {
    console.log('%cFoo Destroyed', 'color: red; font-size:2em');
  }
}
