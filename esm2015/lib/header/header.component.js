import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
export class HeaderComponent {
    constructor() {
        this.title = '';
        this.titleAlign = 'left';
        this.color = 'basic';
        this.expanded = false;
    }
    ngOnInit() { }
    toggle() {
        this.expanded = !this.expanded;
    }
    toggleNav() {
        var nav = document.getElementsByTagName('nav')[0];
        if (nav.clientHeight) {
            nav.style.height = '0';
        }
        else {
            // Round to the nearest $grid-unit, because sometimes browsers
            // add extra pixels to this.
            nav.style.height = Math.round(nav.scrollHeight / 20) * 20 + 'px';
        }
    }
    onResize() {
        var nav = document.getElementsByTagName('nav')[0];
        nav.style.height = '0';
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: HeaderComponent, selector: "venue-header", inputs: { title: "title", titleAlign: ["title-align", "titleAlign"], color: "color" }, ngImport: i0, template: "<!-- <div>\n  <mat-toolbar [color]=\"color\">\n    <button mat-icon-button (click)=\"toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>{{ title }}</span>\n  </mat-toolbar>\n  <mat-expansion-panel [expanded]=\"expanded\">\n    <ng-template matExpansionPanelContent>\n      <ng-content></ng-content>\n    </ng-template>\n  </mat-expansion-panel>\n</div>\n -->\n\n<header>\n  <mat-icon aria-hidden=\"false\" aria-label=\"Menu\" (click)=\"toggleNav()\"\n    >menu</mat-icon\n  >\n  <svg\n    aria-labelledby=\"logo-title-svg\"\n    role=\"img\"\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    x=\"0px\"\n    y=\"0px\"\n    viewBox=\"0 0 919.5 290.7\"\n    style=\"enable-background: new 0 0 919.5 290.7\"\n    xml:space=\"preserve\"\n  >\n    <title id=\"logo-title-svg\">Hakkasan Group Store</title>\n    <path\n      d=\"M349,213.8c-2.9,0.8-6.1,1.3-9.1,1.3c-10.6,0-16.9-8.3-16.9-22.3c0-13.6,7-22.3,17.9-22.3\n  c7.4,0,11.2,2.1,13.7,3.9l1.1,0.8v-4.7l-0.3-0.2c-2.6-1.4-6.8-3.2-14.4-3.2c-15.9,0-27.4,10.8-27.4,25.7c0,15.4,10.5,25.7,26.1,25.7\n  c7.5,0,15.1-2.2,17.9-4.2l0.3-0.2v-18.8H349V213.8z\"\n    ></path>\n    <path\n      d=\"M415,208.6c-0.7-1-1.6-2.5-2.7-4.2c-1.9-3-4.1-6.4-5.5-8.4c-0.5-0.7-1.4-1.6-2.3-2.2\n  c6.6-1.4,11-6.3,11-12.4c0-4.1-1.1-7.4-3.4-9.7c-2.7-2.7-6.8-4.1-12.3-4.1h-19.3v50.1h9.2v-23.2h6.6l14,23.2H421\n  c0,0-2.6-3.8-4.1-6.2C416.3,210.7,415.7,209.7,415,208.6z M396.8,191.2h-7v-20.1h7.3c7.2,0,9.4,2.4,9.4,10.2\n  C406.4,188.1,403.4,191.2,396.8,191.2z\"\n    ></path>\n    <path\n      d=\"M461.2,167c-14.9,0-25.3,10.6-25.3,25.7c0,15.2,10.4,25.7,25.3,25.7\n  c14.9,0,25.3-10.6,25.3-25.7C486.5,177.6,476.1,167,461.2,167z M461.2,215.1c-13.7,0-15.7-14-15.7-22.3c0-14.8,5.3-22.3,15.7-22.3\n  c7.2,0,15.8,3.9,15.8,22.3C477,203,474.2,215.1,461.2,215.1z\"\n    ></path>\n    <path\n      d=\"M543.7,201.4c0,10.9-7.6,13.2-14,13.2c-8.7,0-13.1-4.3-13.1-12.9v-34h-9.2v33.8c0,10.7,7.6,17,20.4,17\n  c12.4,0,19.9-6.4,19.9-17v-33.8h-4V201.4z\"\n    ></path>\n    <path\n      d=\"M589,167.7h-19v50.1h9.3v-21.4h9.6c10.7,0,17.1-5.4,17.1-14.4\n  C606,173.2,599.5,167.7,589,167.7z M586.8,193.1h-7.5v-21.9h7.5c7.4,0,10.3,3.1,10.3,11C597,189.7,593.9,193.1,586.8,193.1z\"\n    ></path>\n    <path\n      d=\"M648.8,44.4c-14.5-5.6-20.9-10-20.9-21.4c0-10.1,8.2-16.6,21-16.6c9.9,0,17.4,2.2,25.1,7.3l1.5,1V13V6.6V6\n  l-0.5-0.3c-6.5-3.9-15-5.8-26.2-5.8c-20.9,0-36.1,12.9-36.1,30.6c0,20.3,12.5,26.7,30.1,33.7c20.2,7.9,24,14.2,24,23.2\n  c0,11.6-8.8,18-24.7,18c-10.1,0-20.4-3.4-28.4-9.3l-1.5-1.1v1.9v6.8v0.5l0.4,0.3c7.5,4.8,18,7.4,29.4,7.4c24.7,0,40-12.6,40-33\n  C682.2,58.6,669,52,648.8,44.4z\"\n    ></path>\n    <polygon points=\"279.2,1.5 259.8,1.5 259.8,57.9 279.2,36.4 \"></polygon>\n    <polygon\n      points=\"348.1,110.5 299.7,45.6 339.7,1.5 329.6,1.5 259.8,79 259.8,110.5 279.2,110.5 279.2,68.1 286.9,59.6\n  325.2,110.5 \"\n    ></polygon>\n    <polygon points=\"401.6,1.5 382.2,1.5 382.2,57.9 401.6,36.4 \"></polygon>\n    <polygon\n      points=\"383.2,110.5 402.6,110.5 402.6,68.1 410.4,59.6 448.7,110.5 471.5,110.5 423.2,45.6 463.2,1.5 453,1.5\n    383.2,79 \"\n    ></polygon>\n    <rect x=\"71.8\" y=\"1.5\" width=\"19.3\" height=\"109\"></rect>\n    <polygon\n      points=\"19.4,1.5 0,1.5 0,110.5 19.4,110.5 19.4,57.1 53.1,57.1 53.1,50.7 19.4,50.7 \"\n    ></polygon>\n    <polygon\n      points=\"171.4,1.5 127.5,110.5 136.1,110.5 150,75.3 170.9,75.3 168.4,68.8 152.5,68.8 170.1,24.3 203.6,110.5\n    224.5,110.5 181.3,1.5 \"\n    ></polygon>\n    <polygon\n      points=\"745.7,1.5 701.7,110.5 710.3,110.5 724.3,75.3 745.2,75.3 742.7,68.8 726.8,68.8 744.4,24.3\n    777.9,110.5 798.8,110.5 755.6,1.5 \"\n    ></polygon>\n    <polygon\n      points=\"543.7,1.5 533.8,1.5 489.8,110.5 498.4,110.5 512.4,75.3 533.3,75.3 530.8,68.8 514.9,68.8 532.5,24.3\n    566,110.5 586.9,110.5 \"\n    ></polygon>\n    <polygon\n      points=\"911.5,1.5 911.5,86.5 855.1,1.5 833.9,1.5 833.9,4.9 903.4,110.5 919.5,110.5 919.5,1.5 \"\n    ></polygon>\n    <polygon points=\"833.9,110.5 842.1,110.5 842.1,44.9 833.9,32.5 \"></polygon>\n  </svg>\n</header>\n\n<nav (window:resize)=\"onResize()\">\n  <ul>\n    <li>\n      <a href=\"https://hakkasangroup.com/portfolio/\">\n        Portfolio\n        <span class=\"description\">\n          Browse Venues in Daylife, Nightlife and Restaurants.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/company/\">\n        Company\n        <span class=\"description\">\n          Learn about our mission, values and philanthropy.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/events/\">\n        Events\n        <span class=\"description\"> Browse upcoming acts or plan an event.</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/careers/\">\n        Careers\n        <span class=\"description\">\n          Discover our company culture and career opportunities.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/press/\">\n        Press\n        <span class=\"description\">\n          Stay up to date on our exciting developments.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a\n        href=\"https://hakkasangroup.com/store/las-vegas?utm_source=hakkasan-group-site&utm_medium=store-button\"\n      >\n        Store\n        <span class=\"description\"> Purchase tickets for upcoming shows.</span>\n      </a>\n    </li>\n  </ul>\n\n  <ul>\n    <li>\n      <a href=\"https://hakkasangroup.com/business-development/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Business Development</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/partnerships/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Partnerships</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/suppliers-vendors/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Suppliers &amp; Vendors</span></a\n      >\n    </li>\n    <li>\n      <a\n        href=\"https://hakkasangroup.com/company/hakkasan-group-inspires/\"\n        itemprop=\"url\"\n      >\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Philanthropy</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/contact/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Contact</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/gift-vouchers/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Gift Cards</span></a\n      >\n    </li>\n  </ul>\n</nav>\n", styles: [""], components: [{ type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'venue-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.scss'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], titleAlign: [{
                type: Input,
                args: ['title-align']
            }], color: [{
                type: Input,
                args: ['color']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZlbnVlLWRyaXZlci9zdGFuZGFyZC1zdHlsaW5nL3NyYy9saWIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92ZW51ZS1kcml2ZXIvc3RhbmRhcmQtc3R5bGluZy9zcmMvbGliL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQVMxQjtRQVJTLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFTixlQUFVLEdBQWdDLE1BQU0sQ0FBQztRQUV2RCxVQUFLLEdBQTRDLE9BQU8sQ0FBQztRQUV6RSxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRUYsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLEdBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUN6QjthQUFNO1lBQ0wsOERBQThEO1lBQzlELDRCQUE0QjtZQUM1QixHQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztTQUNwRTtJQUNILENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELEdBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDOzs0R0E3QlUsZUFBZTtnR0FBZixlQUFlLDJJQ1A1Qixxek5BMkxBOzJGRHBMYSxlQUFlO2tCQUwzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDdkM7MEVBRVUsS0FBSztzQkFBYixLQUFLO2dCQUVnQixVQUFVO3NCQUEvQixLQUFLO3VCQUFDLGFBQWE7Z0JBRUosS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlbnVlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgndGl0bGUtYWxpZ24nKSB0aXRsZUFsaWduOiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgPSAnbGVmdCc7XG5cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiAnYmFzaWMnIHwgJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAnYmFzaWMnO1xuXG4gIGV4cGFuZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG4gIHRvZ2dsZU5hdigpIHtcbiAgICB2YXIgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ25hdicpWzBdO1xuICAgIGlmIChuYXYhLmNsaWVudEhlaWdodCkge1xuICAgICAgbmF2IS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJvdW5kIHRvIHRoZSBuZWFyZXN0ICRncmlkLXVuaXQsIGJlY2F1c2Ugc29tZXRpbWVzIGJyb3dzZXJzXG4gICAgICAvLyBhZGQgZXh0cmEgcGl4ZWxzIHRvIHRoaXMuXG4gICAgICBuYXYhLnN0eWxlLmhlaWdodCA9IE1hdGgucm91bmQobmF2IS5zY3JvbGxIZWlnaHQgLyAyMCkgKiAyMCArICdweCc7XG4gICAgfVxuICB9XG4gIG9uUmVzaXplKCkge1xuICAgIHZhciBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmF2JylbMF07XG4gICAgbmF2IS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gIH1cbn1cbiIsIjwhLS0gPGRpdj5cbiAgPG1hdC10b29sYmFyIFtjb2xvcl09XCJjb2xvclwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuPnt7IHRpdGxlIH19PC9zcGFuPlxuICA8L21hdC10b29sYmFyPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbZXhwYW5kZWRdPVwiZXhwYW5kZWRcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0RXhwYW5zaW9uUGFuZWxDb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvZGl2PlxuIC0tPlxuXG48aGVhZGVyPlxuICA8bWF0LWljb24gYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJNZW51XCIgKGNsaWNrKT1cInRvZ2dsZU5hdigpXCJcbiAgICA+bWVudTwvbWF0LWljb25cbiAgPlxuICA8c3ZnXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwibG9nby10aXRsZS1zdmdcIlxuICAgIHJvbGU9XCJpbWdcIlxuICAgIHZlcnNpb249XCIxLjFcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgeD1cIjBweFwiXG4gICAgeT1cIjBweFwiXG4gICAgdmlld0JveD1cIjAgMCA5MTkuNSAyOTAuN1wiXG4gICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDogbmV3IDAgMCA5MTkuNSAyOTAuN1wiXG4gICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICA+XG4gICAgPHRpdGxlIGlkPVwibG9nby10aXRsZS1zdmdcIj5IYWtrYXNhbiBHcm91cCBTdG9yZTwvdGl0bGU+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMzQ5LDIxMy44Yy0yLjksMC44LTYuMSwxLjMtOS4xLDEuM2MtMTAuNiwwLTE2LjktOC4zLTE2LjktMjIuM2MwLTEzLjYsNy0yMi4zLDE3LjktMjIuM1xuICBjNy40LDAsMTEuMiwyLjEsMTMuNywzLjlsMS4xLDAuOHYtNC43bC0wLjMtMC4yYy0yLjYtMS40LTYuOC0zLjItMTQuNC0zLjJjLTE1LjksMC0yNy40LDEwLjgtMjcuNCwyNS43YzAsMTUuNCwxMC41LDI1LjcsMjYuMSwyNS43XG4gIGM3LjUsMCwxNS4xLTIuMiwxNy45LTQuMmwwLjMtMC4ydi0xOC44SDM0OVYyMTMuOHpcIlxuICAgID48L3BhdGg+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNDE1LDIwOC42Yy0wLjctMS0xLjYtMi41LTIuNy00LjJjLTEuOS0zLTQuMS02LjQtNS41LTguNGMtMC41LTAuNy0xLjQtMS42LTIuMy0yLjJcbiAgYzYuNi0xLjQsMTEtNi4zLDExLTEyLjRjMC00LjEtMS4xLTcuNC0zLjQtOS43Yy0yLjctMi43LTYuOC00LjEtMTIuMy00LjFoLTE5LjN2NTAuMWg5LjJ2LTIzLjJoNi42bDE0LDIzLjJINDIxXG4gIGMwLDAtMi42LTMuOC00LjEtNi4yQzQxNi4zLDIxMC43LDQxNS43LDIwOS43LDQxNSwyMDguNnogTTM5Ni44LDE5MS4yaC03di0yMC4xaDcuM2M3LjIsMCw5LjQsMi40LDkuNCwxMC4yXG4gIEM0MDYuNCwxODguMSw0MDMuNCwxOTEuMiwzOTYuOCwxOTEuMnpcIlxuICAgID48L3BhdGg+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNDYxLjIsMTY3Yy0xNC45LDAtMjUuMywxMC42LTI1LjMsMjUuN2MwLDE1LjIsMTAuNCwyNS43LDI1LjMsMjUuN1xuICBjMTQuOSwwLDI1LjMtMTAuNiwyNS4zLTI1LjdDNDg2LjUsMTc3LjYsNDc2LjEsMTY3LDQ2MS4yLDE2N3ogTTQ2MS4yLDIxNS4xYy0xMy43LDAtMTUuNy0xNC0xNS43LTIyLjNjMC0xNC44LDUuMy0yMi4zLDE1LjctMjIuM1xuICBjNy4yLDAsMTUuOCwzLjksMTUuOCwyMi4zQzQ3NywyMDMsNDc0LjIsMjE1LjEsNDYxLjIsMjE1LjF6XCJcbiAgICA+PC9wYXRoPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTU0My43LDIwMS40YzAsMTAuOS03LjYsMTMuMi0xNCwxMy4yYy04LjcsMC0xMy4xLTQuMy0xMy4xLTEyLjl2LTM0aC05LjJ2MzMuOGMwLDEwLjcsNy42LDE3LDIwLjQsMTdcbiAgYzEyLjQsMCwxOS45LTYuNCwxOS45LTE3di0zMy44aC00VjIwMS40elwiXG4gICAgPjwvcGF0aD5cbiAgICA8cGF0aFxuICAgICAgZD1cIk01ODksMTY3LjdoLTE5djUwLjFoOS4zdi0yMS40aDkuNmMxMC43LDAsMTcuMS01LjQsMTcuMS0xNC40XG4gIEM2MDYsMTczLjIsNTk5LjUsMTY3LjcsNTg5LDE2Ny43eiBNNTg2LjgsMTkzLjFoLTcuNXYtMjEuOWg3LjVjNy40LDAsMTAuMywzLjEsMTAuMywxMUM1OTcsMTg5LjcsNTkzLjksMTkzLjEsNTg2LjgsMTkzLjF6XCJcbiAgICA+PC9wYXRoPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTY0OC44LDQ0LjRjLTE0LjUtNS42LTIwLjktMTAtMjAuOS0yMS40YzAtMTAuMSw4LjItMTYuNiwyMS0xNi42YzkuOSwwLDE3LjQsMi4yLDI1LjEsNy4zbDEuNSwxVjEzVjYuNlY2XG4gIGwtMC41LTAuM2MtNi41LTMuOS0xNS01LjgtMjYuMi01LjhjLTIwLjksMC0zNi4xLDEyLjktMzYuMSwzMC42YzAsMjAuMywxMi41LDI2LjcsMzAuMSwzMy43YzIwLjIsNy45LDI0LDE0LjIsMjQsMjMuMlxuICBjMCwxMS42LTguOCwxOC0yNC43LDE4Yy0xMC4xLDAtMjAuNC0zLjQtMjguNC05LjNsLTEuNS0xLjF2MS45djYuOHYwLjVsMC40LDAuM2M3LjUsNC44LDE4LDcuNCwyOS40LDcuNGMyNC43LDAsNDAtMTIuNiw0MC0zM1xuICBDNjgyLjIsNTguNiw2NjksNTIsNjQ4LjgsNDQuNHpcIlxuICAgID48L3BhdGg+XG4gICAgPHBvbHlnb24gcG9pbnRzPVwiMjc5LjIsMS41IDI1OS44LDEuNSAyNTkuOCw1Ny45IDI3OS4yLDM2LjQgXCI+PC9wb2x5Z29uPlxuICAgIDxwb2x5Z29uXG4gICAgICBwb2ludHM9XCIzNDguMSwxMTAuNSAyOTkuNyw0NS42IDMzOS43LDEuNSAzMjkuNiwxLjUgMjU5LjgsNzkgMjU5LjgsMTEwLjUgMjc5LjIsMTEwLjUgMjc5LjIsNjguMSAyODYuOSw1OS42XG4gIDMyNS4yLDExMC41IFwiXG4gICAgPjwvcG9seWdvbj5cbiAgICA8cG9seWdvbiBwb2ludHM9XCI0MDEuNiwxLjUgMzgyLjIsMS41IDM4Mi4yLDU3LjkgNDAxLjYsMzYuNCBcIj48L3BvbHlnb24+XG4gICAgPHBvbHlnb25cbiAgICAgIHBvaW50cz1cIjM4My4yLDExMC41IDQwMi42LDExMC41IDQwMi42LDY4LjEgNDEwLjQsNTkuNiA0NDguNywxMTAuNSA0NzEuNSwxMTAuNSA0MjMuMiw0NS42IDQ2My4yLDEuNSA0NTMsMS41XG4gICAgMzgzLjIsNzkgXCJcbiAgICA+PC9wb2x5Z29uPlxuICAgIDxyZWN0IHg9XCI3MS44XCIgeT1cIjEuNVwiIHdpZHRoPVwiMTkuM1wiIGhlaWdodD1cIjEwOVwiPjwvcmVjdD5cbiAgICA8cG9seWdvblxuICAgICAgcG9pbnRzPVwiMTkuNCwxLjUgMCwxLjUgMCwxMTAuNSAxOS40LDExMC41IDE5LjQsNTcuMSA1My4xLDU3LjEgNTMuMSw1MC43IDE5LjQsNTAuNyBcIlxuICAgID48L3BvbHlnb24+XG4gICAgPHBvbHlnb25cbiAgICAgIHBvaW50cz1cIjE3MS40LDEuNSAxMjcuNSwxMTAuNSAxMzYuMSwxMTAuNSAxNTAsNzUuMyAxNzAuOSw3NS4zIDE2OC40LDY4LjggMTUyLjUsNjguOCAxNzAuMSwyNC4zIDIwMy42LDExMC41XG4gICAgMjI0LjUsMTEwLjUgMTgxLjMsMS41IFwiXG4gICAgPjwvcG9seWdvbj5cbiAgICA8cG9seWdvblxuICAgICAgcG9pbnRzPVwiNzQ1LjcsMS41IDcwMS43LDExMC41IDcxMC4zLDExMC41IDcyNC4zLDc1LjMgNzQ1LjIsNzUuMyA3NDIuNyw2OC44IDcyNi44LDY4LjggNzQ0LjQsMjQuM1xuICAgIDc3Ny45LDExMC41IDc5OC44LDExMC41IDc1NS42LDEuNSBcIlxuICAgID48L3BvbHlnb24+XG4gICAgPHBvbHlnb25cbiAgICAgIHBvaW50cz1cIjU0My43LDEuNSA1MzMuOCwxLjUgNDg5LjgsMTEwLjUgNDk4LjQsMTEwLjUgNTEyLjQsNzUuMyA1MzMuMyw3NS4zIDUzMC44LDY4LjggNTE0LjksNjguOCA1MzIuNSwyNC4zXG4gICAgNTY2LDExMC41IDU4Ni45LDExMC41IFwiXG4gICAgPjwvcG9seWdvbj5cbiAgICA8cG9seWdvblxuICAgICAgcG9pbnRzPVwiOTExLjUsMS41IDkxMS41LDg2LjUgODU1LjEsMS41IDgzMy45LDEuNSA4MzMuOSw0LjkgOTAzLjQsMTEwLjUgOTE5LjUsMTEwLjUgOTE5LjUsMS41IFwiXG4gICAgPjwvcG9seWdvbj5cbiAgICA8cG9seWdvbiBwb2ludHM9XCI4MzMuOSwxMTAuNSA4NDIuMSwxMTAuNSA4NDIuMSw0NC45IDgzMy45LDMyLjUgXCI+PC9wb2x5Z29uPlxuICA8L3N2Zz5cbjwvaGVhZGVyPlxuXG48bmF2ICh3aW5kb3c6cmVzaXplKT1cIm9uUmVzaXplKClcIj5cbiAgPHVsPlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2hha2thc2FuZ3JvdXAuY29tL3BvcnRmb2xpby9cIj5cbiAgICAgICAgUG9ydGZvbGlvXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBCcm93c2UgVmVudWVzIGluIERheWxpZmUsIE5pZ2h0bGlmZSBhbmQgUmVzdGF1cmFudHMuPC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2hha2thc2FuZ3JvdXAuY29tL2NvbXBhbnkvXCI+XG4gICAgICAgIENvbXBhbnlcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIExlYXJuIGFib3V0IG91ciBtaXNzaW9uLCB2YWx1ZXMgYW5kIHBoaWxhbnRocm9weS48L3NwYW5cbiAgICAgICAgPlxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaGFra2FzYW5ncm91cC5jb20vZXZlbnRzL1wiPlxuICAgICAgICBFdmVudHNcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPiBCcm93c2UgdXBjb21pbmcgYWN0cyBvciBwbGFuIGFuIGV2ZW50Ljwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2hha2thc2FuZ3JvdXAuY29tL2NhcmVlcnMvXCI+XG4gICAgICAgIENhcmVlcnNcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIERpc2NvdmVyIG91ciBjb21wYW55IGN1bHR1cmUgYW5kIGNhcmVlciBvcHBvcnR1bml0aWVzLjwvc3BhblxuICAgICAgICA+XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9oYWtrYXNhbmdyb3VwLmNvbS9wcmVzcy9cIj5cbiAgICAgICAgUHJlc3NcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIFN0YXkgdXAgdG8gZGF0ZSBvbiBvdXIgZXhjaXRpbmcgZGV2ZWxvcG1lbnRzLjwvc3BhblxuICAgICAgICA+XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9oYWtrYXNhbmdyb3VwLmNvbS9zdG9yZS9sYXMtdmVnYXM/dXRtX3NvdXJjZT1oYWtrYXNhbi1ncm91cC1zaXRlJnV0bV9tZWRpdW09c3RvcmUtYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgU3RvcmVcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPiBQdXJjaGFzZSB0aWNrZXRzIGZvciB1cGNvbWluZyBzaG93cy48L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgPC91bD5cblxuICA8dWw+XG4gICAgPGxpPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaGFra2FzYW5ncm91cC5jb20vYnVzaW5lc3MtZGV2ZWxvcG1lbnQvXCIgaXRlbXByb3A9XCJ1cmxcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmlhLWJ1bGxldFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmlhLW1lbnUtdGV4dCBidXR0b25cIj5CdXNpbmVzcyBEZXZlbG9wbWVudDwvc3Bhbj48L2FcbiAgICAgID5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2hha2thc2FuZ3JvdXAuY29tL3BhcnRuZXJzaGlwcy9cIiBpdGVtcHJvcD1cInVybFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImF2aWEtYnVsbGV0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImF2aWEtbWVudS10ZXh0IGJ1dHRvblwiPlBhcnRuZXJzaGlwczwvc3Bhbj48L2FcbiAgICAgID5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2hha2thc2FuZ3JvdXAuY29tL3N1cHBsaWVycy12ZW5kb3JzL1wiIGl0ZW1wcm9wPVwidXJsXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXZpYS1idWxsZXRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXZpYS1tZW51LXRleHQgYnV0dG9uXCI+U3VwcGxpZXJzICZhbXA7IFZlbmRvcnM8L3NwYW4+PC9hXG4gICAgICA+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9oYWtrYXNhbmdyb3VwLmNvbS9jb21wYW55L2hha2thc2FuLWdyb3VwLWluc3BpcmVzL1wiXG4gICAgICAgIGl0ZW1wcm9wPVwidXJsXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmlhLWJ1bGxldFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmlhLW1lbnUtdGV4dCBidXR0b25cIj5QaGlsYW50aHJvcHk8L3NwYW4+PC9hXG4gICAgICA+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9oYWtrYXNhbmdyb3VwLmNvbS9jb250YWN0L1wiIGl0ZW1wcm9wPVwidXJsXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXZpYS1idWxsZXRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXZpYS1tZW51LXRleHQgYnV0dG9uXCI+Q29udGFjdDwvc3Bhbj48L2FcbiAgICAgID5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2hha2thc2FuZ3JvdXAuY29tL2dpZnQtdm91Y2hlcnMvXCIgaXRlbXByb3A9XCJ1cmxcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmlhLWJ1bGxldFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmlhLW1lbnUtdGV4dCBidXR0b25cIj5HaWZ0IENhcmRzPC9zcGFuPjwvYVxuICAgICAgPlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L25hdj5cbiJdfQ==