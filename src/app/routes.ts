import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Items } from './containers/index';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: Items
  }
])