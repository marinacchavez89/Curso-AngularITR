import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeChildComponent } from './components/employee-child/employee-child.component';
import { GoalEmployeeComponent } from './components/goal-employee/goal-employee.component';
import { EmployeeService } from './services/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeModalComponent } from './employee-modal/employee-modal.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes=[

    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'quienes-somos', component:QuienesSomosComponent},    
    {path:'resources', component:ResourcesComponent},
    {path: 'form-employee', component: FormEmployeeComponent},
    {path:'contact', component: ContactComponent}, 
    {path: '**', component: ErrorComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        EmployeeChildComponent,
        GoalEmployeeComponent,
        EmployeeModalComponent,
        HomeComponent,
        QuienesSomosComponent,
        ResourcesComponent,
        ContactComponent,
        FormEmployeeComponent
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        NavbarComponent, 
        RouterModule.forRoot(appRoutes),
        ErrorComponent
    ]
})
export class AppModule { }
