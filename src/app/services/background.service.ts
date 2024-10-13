import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private currentVideoElement: HTMLVideoElement | null = null
  private currentVideo: Backgrounds = Backgrounds.Flowers;

  /*
  * Set the background video for a back
  */
  setBackground(videoUrl: Backgrounds): void {
    if (this.currentVideo !== videoUrl) {
      this.currentVideoElement?.remove()
    }

    const videoElement = document.createElement('video');
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.style.position = 'absolute';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.width = '100%';
    videoElement.style.height = '100vh';
    videoElement.style.zIndex = '-100';

    const sourceElement = document.createElement('source');
    sourceElement.src = videoUrl;
    videoElement.appendChild(sourceElement);

    document.body.appendChild(videoElement);
    this.currentVideo = videoUrl;
    this.currentVideoElement = videoElement;
  }
}

export enum Backgrounds {
  None = '',
  Flowers = 'videos/Flowers.mp4',
  Flowers2 = 'videos/Flowers2.mp4',
  Waves = ''
}
