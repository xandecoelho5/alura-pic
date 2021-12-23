import {Directive, ElementRef, OnInit} from '@angular/core';
import {PlatformDetectorService} from '../../../core/platform-detector/platform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(private element: ElementRef,
              private platformDetector: PlatformDetectorService) {
  }

  ngOnInit(): void {
    this.platformDetector.isPlatformBrowser() && this.element.nativeElement.click();
  }
}
