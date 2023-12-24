import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { images } from 'src/app/fakeImages/fakeImages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faBars = faBars;
  faEnvelope = faEnvelope;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  images: string[] = images;
  selectedIndex: number = 0;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    setInterval(() => {
      this.selectedIndex = this.selectedIndex + 1;
      if (this.selectedIndex === this.images.length) {
        this.selectedIndex = 0;
      }
    }, 4000);
  }

  scrollTo(id: string): void {
    const divAnchor = document.getElementById(id);
    divAnchor?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectImage(i: number) {
    this.selectedIndex = i;
  }
}
