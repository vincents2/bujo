import { Scope } from './common/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'webapp';
  scope = Scope.Default;
  spanId: string;

  changeScope(scope: Scope) {
    this.scope = scope;
  }

  changeSpanId(spanId: string) {
    this.spanId = spanId;
  }
}
