import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent {
  latitude!: number;
  longitude!: number;

  constructor(private geolocationService: GeolocationService) {
    this.geolocationService
      .getLocation()
      .then((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      })
      .catch((error) => {
        console.error('Error getting location:', error);
      });
  }

  openApple15(): void {
    // URL to open in the popup window
    const popupURL =
      'https://mediafiles.botpress.cloud/7fec5900-1fc2-4e42-8011-f9119e68953a/webchat/bot.html'; // Replace with your URL

    // Specify the dimensions and properties of the popup window
    const popupWidth = 430;
    const popupHeight = 932;
    const popupOptions = `width=${popupWidth},height=${popupHeight}`;

    // Open the popup window
    const popup = window.open(popupURL, 'MyPopup', popupOptions);

    // Focus on the popup (optional)
    if (popup) {
      popup.focus();
    }
  }

  openPopup2(): void {
    // URL to open in the popup window
    const popup1URL =
      'https://mediafiles.botpress.cloud/7fec5900-1fc2-4e42-8011-f9119e68953a/webchat/bot.html'; // Replace with your URL

    // Specify the dimensions and properties of the popup window
    const popupWidth = 430;
    const popupHeight = 932;
    const popupOptions = `width=${popupWidth},height=${popupHeight}`;

    // Open the popup window
    const popup = window.open(popup1URL, 'MyPopup', popupOptions);

    // Focus on the popup (optional)
    if (popup) {
      popup.focus();
    }
  }

  openPopup3(): void {
    // URL to open in the popup window
    const popup1URL =
      'https://mediafiles.botpress.cloud/7fec5900-1fc2-4e42-8011-f9119e68953a/webchat/bot.html'; // Replace with your URL

    // Specify the dimensions and properties of the popup window
    const popupWidth = 430;
    const popupHeight = 932;
    const popupOptions = `width=${popupWidth},height=${popupHeight}`;

    // Open the popup window
    const popup = window.open(popup1URL, 'MyPopup', popupOptions);

    // Focus on the popup (optional)
    if (popup) {
      popup.focus();
    }
  }

  openPopup4(): void {
    // URL to open in the popup window
    const popup1URL =
      'https://mediafiles.botpress.cloud/7fec5900-1fc2-4e42-8011-f9119e68953a/webchat/bot.html'; // Replace with your URL

    // Specify the dimensions and properties of the popup window
    const popupWidth = 430;
    const popupHeight = 932;
    const popupOptions = `width=${popupWidth},height=${popupHeight}`;

    // Open the popup window
    const popup = window.open(popup1URL, 'MyPopup', popupOptions);

    // Focus on the popup (optional)
    if (popup) {
      popup.focus();
    }
  }
}
