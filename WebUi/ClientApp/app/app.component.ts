import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation, RendererFactory2, PLATFORM_ID, Injector } from '@angular/core';
 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  public title:string;

   constructor() {
    
    }

    ngOnInit() {
      this.title = "Wellcome to leumi card stater kit";
    }

    ngOnDestroy() {
    }
}

