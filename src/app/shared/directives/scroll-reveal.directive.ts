import { Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';

type RevealOrigin = 'up' | 'left' | 'right' | 'scale';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  @Input() appScrollRevealDelay = 0;
  @Input() appScrollRevealOrigin: RevealOrigin = 'up';

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'reveal');
    this.renderer.addClass(element, `reveal--${this.appScrollRevealOrigin}`);
    this.renderer.setStyle(element, '--reveal-delay', `${this.appScrollRevealDelay}ms`);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          this.renderer.addClass(element, 'is-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(element);
  }
}
