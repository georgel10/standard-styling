import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FooterService {
    private http;
    constructor(http: HttpClient);
    footerURL: string;
    getFooter(): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FooterService>;
}
