import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { FooterMainComponent } from './components/footer-main/footer-main.component';

@NgModule({
  declarations: [MenuMainComponent, FooterMainComponent],
  imports: [CommonModule, MegaMenuModule],
  exports: [MenuMainComponent],
})
export class GeneralModule {}
