import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {Config} from './shared/config'

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AngularFireModule.initializeApp(Config.firebase),
    AngularFireAuthModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
