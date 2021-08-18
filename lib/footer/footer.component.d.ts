import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { FooterService } from './footer.service';
import * as i0 from "@angular/core";
export declare class FooterComponent implements AfterViewInit {
    private footerService;
    private elementRef;
    private renderer;
    constructor(footerService: FooterService, elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    private addScript;
    private footerCallback;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterComponent, "venue-footer", never, {}, {}, never, never>;
}
