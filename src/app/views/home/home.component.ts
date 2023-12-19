import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { images } from 'src/app/fakeImages/fakeImages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faBars = faBars;
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
}
