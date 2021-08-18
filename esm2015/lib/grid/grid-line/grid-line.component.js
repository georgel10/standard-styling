import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class GridLineComponent {
    constructor() {
        this.vertical = false;
        this.left = '';
        this.right = '';
        this.styles = {};
    }
    ngOnInit() {
        if (this.vertical) {
            this.styles = this.left ? { left: this.left } : { right: this.right };
        }
    }
}
GridLineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: GridLineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GridLineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: GridLineComponent, selector: "venue-grid-line", inputs: { vertical: "vertical", left: "left", right: "right" }, ngImport: i0, template: "<div\n  [ngClass]=\"{ 'vertical-grid-line': vertical, 'grid-line': !vertical }\"\n  [ngStyle]=\"styles\"\n></div>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: GridLineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'venue-grid-line',
                    templateUrl: './grid-line.component.html',
                    styleUrls: ['./grid-line.component.scss'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { vertical: [{
                type: Input
            }], left: [{
                type: Input
            }], right: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZlbnVlLWRyaXZlci9zdGFuZGFyZC1zdHlsaW5nL3NyYy9saWIvZ3JpZC9ncmlkLWxpbmUvZ3JpZC1saW5lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZlbnVlLWRyaXZlci9zdGFuZGFyZC1zdHlsaW5nL3NyYy9saWIvZ3JpZC9ncmlkLWxpbmUvZ3JpZC1saW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QjtRQUpTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUNHLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzs7OEdBWFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsdUhDUDlCLHFIQUlBOzJGREdhLGlCQUFpQjtrQkFMN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixXQUFXLEVBQUUsNEJBQTRCO29CQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDMUM7MEVBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlbnVlLWdyaWQtbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkLWxpbmUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2ZXJ0aWNhbCA9IGZhbHNlO1xuICBASW5wdXQoKSBsZWZ0ID0gJyc7XG4gIEBJbnB1dCgpIHJpZ2h0ID0gJyc7XG4gIHN0eWxlcyA9IHt9O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMuc3R5bGVzID0gdGhpcy5sZWZ0ID8geyBsZWZ0OiB0aGlzLmxlZnQgfSA6IHsgcmlnaHQ6IHRoaXMucmlnaHQgfTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgW25nQ2xhc3NdPVwieyAndmVydGljYWwtZ3JpZC1saW5lJzogdmVydGljYWwsICdncmlkLWxpbmUnOiAhdmVydGljYWwgfVwiXG4gIFtuZ1N0eWxlXT1cInN0eWxlc1wiXG4+PC9kaXY+XG4iXX0=