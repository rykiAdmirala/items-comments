import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="app">

      <aside class="sidebar">
        <div class="sidebar__title">Main</div>
        <nav class="sidebar__nav nav">
          <ul>
            <li><a [routerLink]="['']" routerLinkActive="active">Overview</a>
          </ul>
        </nav>
      </aside>

      <main class="content">
        <router-outlet></router-outlet>
      </main>

    </div>
  `
})

export class App {}
