import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './components/Menu/Menu'; // Nosso componente Menu Standalone

@NgModule({
  declarations: [
    App // O App continua aqui porque ele não é standalone
    // TIREI O MENU DAQUI!
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    Menu // <-- O MENU ENTRA AQUI AGORA! Como ele é standalone, ele funciona como um módulo independente
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
