import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FooterService {
    constructor(http) {
        this.http = http;
        this.footerURL = 'https://footers.hakkasangroup.com/footer.min.json';
    }
    getFooter() {
        return this.http.jsonp(this.footerURL, 'callback');
    }
}
FooterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
FooterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92ZW51ZS1kcml2ZXIvc3RhbmRhcmQtc3R5bGluZy9zcmMvbGliL2Zvb3Rlci9mb290ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFhM0MsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUVwQyxjQUFTLEdBQUcsbURBQW1ELENBQUM7SUFGeEIsQ0FBQztJQUlsQyxTQUFTO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25ELENBQUM7OzBHQVJVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwQ2xpZW50TW9kdWxlLFxuICBIdHRwQ2xpZW50SnNvbnBNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBmb290ZXJVUkwgPSAnaHR0cHM6Ly9mb290ZXJzLmhha2thc2FuZ3JvdXAuY29tL2Zvb3Rlci5taW4uanNvbic7XG5cbiAgcHVibGljIGdldEZvb3RlcigpIHsgIFxuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5mb290ZXJVUkwsJ2NhbGxiYWNrJylcbiAgfVxufVxuIl19