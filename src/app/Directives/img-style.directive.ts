import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
  standalone: true,
})
export class ImgStyleDirective implements OnChanges, OnInit {
  // document.getElem.......
  // property decorator
  // @Input() color1: string = 'blue';
  // @Input('ImgStyle') color1: string = 'blue';
  // @Input() color2: string = 'black';


  @Input('ImgStyle') radius1: string = '40px';
  @Input() radius2: string = '30px';
  constructor(private elementRef: ElementRef) {
    // console.log("constructor");//1
  }

  ngOnChanges(): void {
    // console.log("changeeeeees");//2

    // this.elementRef.nativeElement.style.border = `2px solid ${this.color2}`;
    this.elementRef.nativeElement.style.borderRadius = `${this.radius2}`;
  }
  ngOnInit(): void {
    // console.log("hello init");//3
  }

  //  method decorator
  @HostListener('mouseover') func1() {
    // this.elementRef.nativeElement.style.border = `5px dashed ${this.color1}`;
    this.elementRef.nativeElement.style.borderRadius = `${this.radius1}`;
    this.elementRef.nativeElement.style.opacity = .8;
  }
  @HostListener('mouseout') func2() {
    // this.elementRef.nativeElement.style.border = `2px solid ${this.color2}`;
    this.elementRef.nativeElement.style.borderRadius = ` ${this.radius2}`;
    this.elementRef.nativeElement.style.opacity =1;

  }
}
