import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App, routes } from './app/index';
import { Items } from './app/containers/index';
import { ItemCreator, CommentCreator } from './app/ui/index';

@NgModule({
  declarations: [
    App,
    Items,
    ItemCreator,
    CommentCreator,
  ],
  imports: [BrowserModule, FormsModule, routes],
  bootstrap: [App]
})
export class AppModule {};

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);