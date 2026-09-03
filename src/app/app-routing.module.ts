import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { EducationComponent } from './pages/education/education.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'education', component: EducationComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
