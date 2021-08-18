import { Component, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class GridComponent {
    constructor() {
        this.showGrid = true;
    }
    // Listen for control-G keystrokes and toggle the grid.
    handleKeyboardEvent(event) {
        if (event.key == 'g' && event.ctrlKey) {
            this.showGrid = !this.showGrid;
        }
    }
}
GridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: GridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: GridComponent, selector: "venue-grid", host: { listeners: { "window:keydown": "handleKeyboardEvent($event)" } }, ngImport: i0, template: "<div id=\"grid-overlay\" [class.visible]=\"showGrid\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: GridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'venue-grid',
                    templateUrl: './grid.component.html',
                    styleUrls: ['./grid.component.scss'],
                }]
        }], propDecorators: { handleKeyboardEvent: [{
                type: HostListener,
                args: ['window:keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92ZW51ZS1kcml2ZXIvc3RhbmRhcmQtc3R5bGluZy9zcmMvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92ZW51ZS1kcml2ZXIvc3RhbmRhcmQtc3R5bGluZy9zcmMvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPeEQsTUFBTSxPQUFPLGFBQWE7SUFMMUI7UUFNRSxhQUFRLEdBQUcsSUFBSSxDQUFDO0tBU2pCO0lBUEMsdURBQXVEO0lBRXZELG1CQUFtQixDQUFDLEtBQW9CO1FBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNoQztJQUNILENBQUM7OzBHQVRVLGFBQWE7OEZBQWIsYUFBYSw0SENQMUIsK0ZBR0E7MkZESWEsYUFBYTtrQkFMekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDOzhCQU1DLG1CQUFtQjtzQkFEbEIsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlbnVlLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyaWQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCB7XG4gIHNob3dHcmlkID0gdHJ1ZTtcblxuICAvLyBMaXN0ZW4gZm9yIGNvbnRyb2wtRyBrZXlzdHJva2VzIGFuZCB0b2dnbGUgdGhlIGdyaWQuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlS2V5Ym9hcmRFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ2cnICYmIGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgIHRoaXMuc2hvd0dyaWQgPSAhdGhpcy5zaG93R3JpZDtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgaWQ9XCJncmlkLW92ZXJsYXlcIiBbY2xhc3MudmlzaWJsZV09XCJzaG93R3JpZFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==