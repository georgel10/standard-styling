import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { FooterService } from './footer.service';
import * as i0 from "@angular/core";
import * as i1 from "./footer.service";
export class FooterComponent {
    constructor(footerService, elementRef, renderer) {
        this.footerService = footerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.addScript();
        this.footerService.getFooter().subscribe((data) => {
            this.footerCallback(data);
        });
    }
    addScript() {
        // Wrap the ng_jsonp_callback_0 with footerCallback
        const scriptSrc = `window.footerCallback = function(json_data) {window.ng_jsonp_callback_0(json_data);}`;
        const scriptElement = this.renderer.createElement('script');
        scriptElement.innerHTML = scriptSrc;
        this.renderer.appendChild(this.elementRef.nativeElement, scriptElement);
    }
    // Insert a new Element with the json_data
    footerCallback(json_data) {
        const footerElement = this.renderer.createElement('div');
        footerElement.innerHTML = json_data[0];
        this.renderer.appendChild(this.elementRef.nativeElement, footerElement);
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterComponent, deps: [{ token: i1.FooterService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FooterComponent, selector: "venue-footer", providers: [FooterService], ngImport: i0, template: "<div id='footer'></div>", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'venue-footer',
                    templateUrl: './footer.component.html',
                    styleUrls: ['./footer.component.scss'],
                    providers: [FooterService],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.FooterService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3ZlbnVlLWRyaXZlci9zdGFuZGFyZC1zdHlsaW5nL3NyYy9saWIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92ZW51ZS1kcml2ZXIvc3RhbmRhcmQtc3R5bGluZy9zcmMvbGliL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsR0FHeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFTakQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFDVSxhQUE0QixFQUM1QixVQUFzQixFQUN0QixRQUFtQjtRQUZuQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDMUIsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFNBQVM7UUFDZixtREFBbUQ7UUFDbkQsTUFBTSxTQUFTLEdBQUcsc0ZBQXNGLENBQUM7UUFDekcsTUFBTSxhQUFhLEdBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCwwQ0FBMEM7SUFDbEMsY0FBYyxDQUFDLFNBQW1CO1FBQ3hDLE1BQU0sYUFBYSxHQUFnQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs0R0E1QlUsZUFBZTtnR0FBZixlQUFlLHVDQUhmLENBQUMsYUFBYSxDQUFDLDBCQ2Q1Qix5QkFBdUI7MkZEaUJWLGVBQWU7a0JBUDNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFdBQVcsRUFBRSx5QkFBeUI7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvb3RlclNlcnZpY2UgfSBmcm9tICcuL2Zvb3Rlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmVudWUtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtGb290ZXJTZXJ2aWNlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvb3RlclNlcnZpY2U6IEZvb3RlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYWRkU2NyaXB0KCk7XG4gICAgdGhpcy5mb290ZXJTZXJ2aWNlLmdldEZvb3RlcigpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICB0aGlzLmZvb3RlckNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTY3JpcHQoKSB7XG4gICAgLy8gV3JhcCB0aGUgbmdfanNvbnBfY2FsbGJhY2tfMCB3aXRoIGZvb3RlckNhbGxiYWNrXG4gICAgY29uc3Qgc2NyaXB0U3JjID0gYHdpbmRvdy5mb290ZXJDYWxsYmFjayA9IGZ1bmN0aW9uKGpzb25fZGF0YSkge3dpbmRvdy5uZ19qc29ucF9jYWxsYmFja18wKGpzb25fZGF0YSk7fWA7XG4gICAgY29uc3Qgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQgPVxuICAgICAgdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHRFbGVtZW50LmlubmVySFRNTCA9IHNjcmlwdFNyYztcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzY3JpcHRFbGVtZW50KTtcbiAgfVxuXG4gIC8vIEluc2VydCBhIG5ldyBFbGVtZW50IHdpdGggdGhlIGpzb25fZGF0YVxuICBwcml2YXRlIGZvb3RlckNhbGxiYWNrKGpzb25fZGF0YTogc3RyaW5nW10pIHtcbiAgICBjb25zdCBmb290ZXJFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyRWxlbWVudC5pbm5lckhUTUwgPSBqc29uX2RhdGFbMF07XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgZm9vdGVyRWxlbWVudCk7XG4gIH1cbn1cbiIsIjxkaXYgaWQ9J2Zvb3Rlcic+PC9kaXY+Il19