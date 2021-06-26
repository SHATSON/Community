import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { ForumsModule } from './forums/forums.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: ChatListComponent, outlet: 'chat', canActivate: [AuthGuardService] },
    { path: 'users/:username', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuardService]},
    { path: 'blogs', loadChildren: 'app/blogs/blogs.module#BlogsModule' },
    { path: '', redirectTo: '/forums', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
  ];
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    ChatListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule,
    ForumsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuardService,
    UserService
  ]
})
export class AppModule { }
