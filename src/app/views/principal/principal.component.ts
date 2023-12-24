import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { images } from 'src/app/fakeImages/fakeImages';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  faBars = faBars;
  faEnvelope = faEnvelope;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  images: string[] = images;
  selectedIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.selectedIndex = this.selectedIndex + 1;
      if (this.selectedIndex === this.images.length) {
        this.selectedIndex = 0;
      }
    }, 4000);
  }

  selectImage(i: number) {
    this.selectedIndex = i;
  }

  scrollTo(id: string): void {
    const divAnchor = document.getElementById(id);
    divAnchor?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
