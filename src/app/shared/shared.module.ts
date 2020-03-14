import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AdminComponent } from './admin.component';
import { ErrorComponent } from './error.component';
import { ComposeMessageComponent } from './compose-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AdminComponent,
    ErrorComponent,
    ComposeMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
