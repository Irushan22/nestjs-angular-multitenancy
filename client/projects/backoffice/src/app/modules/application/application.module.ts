import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './pages/application/application.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgIconsModule } from '@ng-icons/core';

import { 
  HeroCalendar,
  HeroCalendarSolid,
  HeroChartBar, 
  HeroChevronDown,
  HeroBell,
  HeroBellSolid,
  HeroFolder,
  HeroUser,
  HeroUserGroup,
  HeroMail,
  HeroMailSolid,
  HeroOfficeBuilding,
  HeroLogout,
  HeroMenu,
  HeroSearch,
  HeroFolderOpen,
  HeroCurrencyDollar,
  HeroCollection
} from '@ng-icons/heroicons';

@NgModule({
  declarations: [
    ApplicationComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NgIconsModule.withIcons({
      HeroCalendar,
      HeroChevronDown,
      HeroChartBar,
      HeroBell,
      HeroFolder,
      HeroUser,
      HeroUserGroup,
      HeroMail,
      HeroOfficeBuilding,
      HeroLogout,
      HeroBellSolid,
      HeroCalendarSolid,
      HeroMailSolid,
      HeroMenu,
      HeroSearch,
      HeroFolderOpen,
      HeroCurrencyDollar,
      HeroCollection
    })
  ]
})
export class ApplicationModule { }
