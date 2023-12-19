import { Component } from '@angular/core';
import { images } from 'src/app/fakeImages/fakeImages';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
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
