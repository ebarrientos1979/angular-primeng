import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [MenuMainComponent, FooterMainComponent],
  imports: [CommonModule, MegaMenuModule, TagModule, ImageModule],
  exports: [MenuMainComponent],
})
export class GeneralModule {}
