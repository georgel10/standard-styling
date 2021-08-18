import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    title: string;
    titleAlign: 'left' | 'center' | 'right';
    color: 'basic' | 'primary' | 'accent' | 'warn';
    expanded: boolean;
    constructor();
    ngOnInit(): void;
    toggle(): void;
    toggleNav(): void;
    onResize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "venue-header", never, { "title": "title"; "titleAlign": "title-align"; "color": "color"; }, {}, never, never>;
}
