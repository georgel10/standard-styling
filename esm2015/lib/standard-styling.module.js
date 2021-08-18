import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StandardStylingComponent } from './standard-styling.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { GridLineComponent } from './grid/grid-line/grid-line.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterService } from './footer/footer.service';
import * as i0 from "@angular/core";
export class StandardStylingModule {
}
StandardStylingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StandardStylingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StandardStylingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StandardStylingModule, declarations: [StandardStylingComponent,
        HeaderComponent,
        GridComponent,
        ContentComponent,
        MenuComponent,
        FooterComponent,
        GridLineComponent], imports: [HttpClientModule,
        HttpClientJsonpModule,
        CommonModule,
        MatIconModule], exports: [StandardStylingComponent,
        HeaderComponent,
        GridComponent,
        ContentComponent,
        MenuComponent,
        FooterComponent,
        GridLineComponent] });
StandardStylingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StandardStylingModule, providers: [FooterService], imports: [[
            HttpClientModule,
            HttpClientJsonpModule,
            CommonModule,
            MatIconModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StandardStylingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        StandardStylingComponent,
                        HeaderComponent,
                        GridComponent,
                        ContentComponent,
                        MenuComponent,
                        FooterComponent,
                        GridLineComponent,
                    ],
                    imports: [
                        HttpClientModule,
                        HttpClientJsonpModule,
                        CommonModule,
                        MatIconModule,
                    ],
                    providers: [FooterService],
                    exports: [
                        StandardStylingComponent,
                        HeaderComponent,
                        GridComponent,
                        ContentComponent,
                        MenuComponent,
                        FooterComponent,
                        GridLineComponent,
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhcmQtc3R5bGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92ZW51ZS1kcml2ZXIvc3RhbmRhcmQtc3R5bGluZy9zcmMvbGliL3N0YW5kYXJkLXN0eWxpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQThCeEQsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQTFCOUIsd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixlQUFlO1FBQ2YsaUJBQWlCLGFBR2pCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGFBQWEsYUFJYix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGVBQWU7UUFDZixpQkFBaUI7bUhBSVIscUJBQXFCLGFBWnJCLENBQUMsYUFBYSxDQUFDLFlBTmpCO1lBQ1AsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osYUFBYTtTQUNkOzJGQWFVLHFCQUFxQjtrQkE1QmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLGFBQWE7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUMxQixPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhbmRhcmRTdHlsaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zdGFuZGFyZC1zdHlsaW5nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnRKc29ucE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkTGluZUNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC9ncmlkLWxpbmUvZ3JpZC1saW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGb290ZXJTZXJ2aWNlIH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdGFuZGFyZFN0eWxpbmdDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEdyaWRDb21wb25lbnQsXG4gICAgQ29udGVudENvbXBvbmVudCxcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBHcmlkTGluZUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSHR0cENsaWVudEpzb25wTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtGb290ZXJTZXJ2aWNlXSxcbiAgZXhwb3J0czogW1xuICAgIFN0YW5kYXJkU3R5bGluZ0NvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgR3JpZENvbXBvbmVudCxcbiAgICBDb250ZW50Q29tcG9uZW50LFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIEdyaWRMaW5lQ29tcG9uZW50LFxuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0YW5kYXJkU3R5bGluZ01vZHVsZSB7fVxuIl19