import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appClickableButton]"
})
export class ClickableButtonDirective {

  public isClicked: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseenter") onMouseEnter(): void {
    this.changeCursor("pointer");
  }

  @HostListener("mouseleave") onMouseLeave(): void {
    this.changeCursor("default");
  }

  @HostListener("mouseup") onMouseUp(): void {
    this.highlightButton("white");
  }

  @HostListener("mousedown") onMouseDown(): void {
    this.highlightButton("rgb(2, 182, 253)");
  }

  private highlightButton(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", color);
  }

  private changeCursor(cursor: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", cursor);
  }
}
