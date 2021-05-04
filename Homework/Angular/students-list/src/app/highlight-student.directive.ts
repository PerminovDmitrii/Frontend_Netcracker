import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHighlightStudent]"
})
export class HighlightStudentDirective {

  private oldBackgroundColor: string = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseenter") onMouseEnter(): void {
    this.highlightLine("rgb(112, 112, 252)");
  }

  @HostListener("mouseleave") onMouseLeave(): void {
    this.highlightLine("black");
  }


  private highlightLine(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
  }
}
