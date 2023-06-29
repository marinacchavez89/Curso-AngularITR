import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TableComponent } from "./components/table/table.component";
import { CardComponent } from "./components/card/card.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { StatusComponent } from "./components/status/status.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NavbarComponent,
        SidebarComponent,
        TableComponent,
        CardComponent,
        ProfileComponent,
        StatusComponent
    ]
})
export class AppModule { }
