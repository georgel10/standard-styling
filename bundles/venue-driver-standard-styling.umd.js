(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@venue-driver/standard-styling', ['exports', '@angular/core', '@angular/common/http', '@angular/common', '@angular/material/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['venue-driver'] = global['venue-driver'] || {}, global['venue-driver']['standard-styling'] = {}), global.ng.core, global.ng.common.http, global.ng.common, global.ng.material.icon));
}(this, (function (exports, i0, i1, i1$1, i1$2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    var StandardStylingService = /** @class */ (function () {
        function StandardStylingService() {
        }
        return StandardStylingService;
    }());
    StandardStylingService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StandardStylingService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var StandardStylingComponent = /** @class */ (function () {
        function StandardStylingComponent() {
        }
        StandardStylingComponent.prototype.ngOnInit = function () {
        };
        return StandardStylingComponent;
    }());
    StandardStylingComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    StandardStylingComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: StandardStylingComponent, selector: "venue-standard-styling", ngImport: i0__namespace, template: "\n    <p>\n      standard-styling works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'venue-standard-styling',
                        template: "\n    <p>\n      standard-styling works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ContentComponent = /** @class */ (function () {
        function ContentComponent() {
        }
        ContentComponent.prototype.ngOnInit = function () { };
        return ContentComponent;
    }());
    ContentComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ContentComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ContentComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ContentComponent, selector: "venue-content", ngImport: i0__namespace, template: "<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ContentComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'venue-content',
                        templateUrl: './content.component.html',
                        styleUrls: ['./content.component.scss'],
                    }]
            }], ctorParameters: function () { return []; } });

    var FooterService = /** @class */ (function () {
        function FooterService(http) {
            this.http = http;
            this.footerURL = 'https://footers.hakkasangroup.com/footer.min.json';
        }
        FooterService.prototype.getFooter = function () {
            return this.http.jsonp(this.footerURL, 'callback');
        };
        return FooterService;
    }());
    FooterService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FooterService, deps: [{ token: i1__namespace.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FooterService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FooterService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FooterService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }]; } });

    var FooterComponent = /** @class */ (function () {
        function FooterComponent(footerService, elementRef, renderer) {
            this.footerService = footerService;
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        FooterComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.addScript();
            this.footerService.getFooter().subscribe(function (data) {
                _this.footerCallback(data);
            });
        };
        FooterComponent.prototype.addScript = function () {
            // Wrap the ng_jsonp_callback_0 with footerCallback
            var scriptSrc = "window.footerCallback = function(json_data) {window.ng_jsonp_callback_0(json_data);}";
            var scriptElement = this.renderer.createElement('script');
            scriptElement.innerHTML = scriptSrc;
            this.renderer.appendChild(this.elementRef.nativeElement, scriptElement);
        };
        // Insert a new Element with the json_data
        FooterComponent.prototype.footerCallback = function (json_data) {
            var footerElement = this.renderer.createElement('div');
            footerElement.innerHTML = json_data[0];
            this.renderer.appendChild(this.elementRef.nativeElement, footerElement);
        };
        return FooterComponent;
    }());
    FooterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FooterComponent, deps: [{ token: FooterService }, { token: i0__namespace.ElementRef }, { token: i0__namespace.Renderer2 }], target: i0__namespace.ɵɵFactoryTarget.Component });
    FooterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FooterComponent, selector: "venue-footer", providers: [FooterService], ngImport: i0__namespace, template: "<div id='footer'></div>", styles: [""], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FooterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'venue-footer',
                        templateUrl: './footer.component.html',
                        styleUrls: ['./footer.component.scss'],
                        providers: [FooterService],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], ctorParameters: function () { return [{ type: FooterService }, { type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; } });

    var GridComponent = /** @class */ (function () {
        function GridComponent() {
            this.showGrid = true;
        }
        // Listen for control-G keystrokes and toggle the grid.
        GridComponent.prototype.handleKeyboardEvent = function (event) {
            if (event.key == 'g' && event.ctrlKey) {
                this.showGrid = !this.showGrid;
            }
        };
        return GridComponent;
    }());
    GridComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: GridComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    GridComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: GridComponent, selector: "venue-grid", host: { listeners: { "window:keydown": "handleKeyboardEvent($event)" } }, ngImport: i0__namespace, template: "<div id=\"grid-overlay\" [class.visible]=\"showGrid\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: GridComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'venue-grid',
                        templateUrl: './grid.component.html',
                        styleUrls: ['./grid.component.scss'],
                    }]
            }], propDecorators: { handleKeyboardEvent: [{
                    type: i0.HostListener,
                    args: ['window:keydown', ['$event']]
                }] } });

    var GridLineComponent = /** @class */ (function () {
        function GridLineComponent() {
            this.vertical = false;
            this.left = '';
            this.right = '';
            this.styles = {};
        }
        GridLineComponent.prototype.ngOnInit = function () {
            if (this.vertical) {
                this.styles = this.left ? { left: this.left } : { right: this.right };
            }
        };
        return GridLineComponent;
    }());
    GridLineComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: GridLineComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    GridLineComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: GridLineComponent, selector: "venue-grid-line", inputs: { vertical: "vertical", left: "left", right: "right" }, ngImport: i0__namespace, template: "<div\n  [ngClass]=\"{ 'vertical-grid-line': vertical, 'grid-line': !vertical }\"\n  [ngStyle]=\"styles\"\n></div>\n", styles: [""], directives: [{ type: i1__namespace$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: GridLineComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'venue-grid-line',
                        templateUrl: './grid-line.component.html',
                        styleUrls: ['./grid-line.component.scss'],
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { vertical: [{
                    type: i0.Input
                }], left: [{
                    type: i0.Input
                }], right: [{
                    type: i0.Input
                }] } });

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.title = '';
            this.titleAlign = 'left';
            this.color = 'basic';
            this.expanded = false;
        }
        HeaderComponent.prototype.ngOnInit = function () { };
        HeaderComponent.prototype.toggle = function () {
            this.expanded = !this.expanded;
        };
        HeaderComponent.prototype.toggleNav = function () {
            var nav = document.getElementsByTagName('nav')[0];
            if (nav.clientHeight) {
                nav.style.height = '0';
            }
            else {
                // Round to the nearest $grid-unit, because sometimes browsers
                // add extra pixels to this.
                nav.style.height = Math.round(nav.scrollHeight / 20) * 20 + 'px';
            }
        };
        HeaderComponent.prototype.onResize = function () {
            var nav = document.getElementsByTagName('nav')[0];
            nav.style.height = '0';
        };
        return HeaderComponent;
    }());
    HeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    HeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: HeaderComponent, selector: "venue-header", inputs: { title: "title", titleAlign: ["title-align", "titleAlign"], color: "color" }, ngImport: i0__namespace, template: "<!-- <div>\n  <mat-toolbar [color]=\"color\">\n    <button mat-icon-button (click)=\"toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>{{ title }}</span>\n  </mat-toolbar>\n  <mat-expansion-panel [expanded]=\"expanded\">\n    <ng-template matExpansionPanelContent>\n      <ng-content></ng-content>\n    </ng-template>\n  </mat-expansion-panel>\n</div>\n -->\n\n<header>\n  <mat-icon aria-hidden=\"false\" aria-label=\"Menu\" (click)=\"toggleNav()\"\n    >menu</mat-icon\n  >\n  <svg\n    aria-labelledby=\"logo-title-svg\"\n    role=\"img\"\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    x=\"0px\"\n    y=\"0px\"\n    viewBox=\"0 0 919.5 290.7\"\n    style=\"enable-background: new 0 0 919.5 290.7\"\n    xml:space=\"preserve\"\n  >\n    <title id=\"logo-title-svg\">Hakkasan Group Store</title>\n    <path\n      d=\"M349,213.8c-2.9,0.8-6.1,1.3-9.1,1.3c-10.6,0-16.9-8.3-16.9-22.3c0-13.6,7-22.3,17.9-22.3\n  c7.4,0,11.2,2.1,13.7,3.9l1.1,0.8v-4.7l-0.3-0.2c-2.6-1.4-6.8-3.2-14.4-3.2c-15.9,0-27.4,10.8-27.4,25.7c0,15.4,10.5,25.7,26.1,25.7\n  c7.5,0,15.1-2.2,17.9-4.2l0.3-0.2v-18.8H349V213.8z\"\n    ></path>\n    <path\n      d=\"M415,208.6c-0.7-1-1.6-2.5-2.7-4.2c-1.9-3-4.1-6.4-5.5-8.4c-0.5-0.7-1.4-1.6-2.3-2.2\n  c6.6-1.4,11-6.3,11-12.4c0-4.1-1.1-7.4-3.4-9.7c-2.7-2.7-6.8-4.1-12.3-4.1h-19.3v50.1h9.2v-23.2h6.6l14,23.2H421\n  c0,0-2.6-3.8-4.1-6.2C416.3,210.7,415.7,209.7,415,208.6z M396.8,191.2h-7v-20.1h7.3c7.2,0,9.4,2.4,9.4,10.2\n  C406.4,188.1,403.4,191.2,396.8,191.2z\"\n    ></path>\n    <path\n      d=\"M461.2,167c-14.9,0-25.3,10.6-25.3,25.7c0,15.2,10.4,25.7,25.3,25.7\n  c14.9,0,25.3-10.6,25.3-25.7C486.5,177.6,476.1,167,461.2,167z M461.2,215.1c-13.7,0-15.7-14-15.7-22.3c0-14.8,5.3-22.3,15.7-22.3\n  c7.2,0,15.8,3.9,15.8,22.3C477,203,474.2,215.1,461.2,215.1z\"\n    ></path>\n    <path\n      d=\"M543.7,201.4c0,10.9-7.6,13.2-14,13.2c-8.7,0-13.1-4.3-13.1-12.9v-34h-9.2v33.8c0,10.7,7.6,17,20.4,17\n  c12.4,0,19.9-6.4,19.9-17v-33.8h-4V201.4z\"\n    ></path>\n    <path\n      d=\"M589,167.7h-19v50.1h9.3v-21.4h9.6c10.7,0,17.1-5.4,17.1-14.4\n  C606,173.2,599.5,167.7,589,167.7z M586.8,193.1h-7.5v-21.9h7.5c7.4,0,10.3,3.1,10.3,11C597,189.7,593.9,193.1,586.8,193.1z\"\n    ></path>\n    <path\n      d=\"M648.8,44.4c-14.5-5.6-20.9-10-20.9-21.4c0-10.1,8.2-16.6,21-16.6c9.9,0,17.4,2.2,25.1,7.3l1.5,1V13V6.6V6\n  l-0.5-0.3c-6.5-3.9-15-5.8-26.2-5.8c-20.9,0-36.1,12.9-36.1,30.6c0,20.3,12.5,26.7,30.1,33.7c20.2,7.9,24,14.2,24,23.2\n  c0,11.6-8.8,18-24.7,18c-10.1,0-20.4-3.4-28.4-9.3l-1.5-1.1v1.9v6.8v0.5l0.4,0.3c7.5,4.8,18,7.4,29.4,7.4c24.7,0,40-12.6,40-33\n  C682.2,58.6,669,52,648.8,44.4z\"\n    ></path>\n    <polygon points=\"279.2,1.5 259.8,1.5 259.8,57.9 279.2,36.4 \"></polygon>\n    <polygon\n      points=\"348.1,110.5 299.7,45.6 339.7,1.5 329.6,1.5 259.8,79 259.8,110.5 279.2,110.5 279.2,68.1 286.9,59.6\n  325.2,110.5 \"\n    ></polygon>\n    <polygon points=\"401.6,1.5 382.2,1.5 382.2,57.9 401.6,36.4 \"></polygon>\n    <polygon\n      points=\"383.2,110.5 402.6,110.5 402.6,68.1 410.4,59.6 448.7,110.5 471.5,110.5 423.2,45.6 463.2,1.5 453,1.5\n    383.2,79 \"\n    ></polygon>\n    <rect x=\"71.8\" y=\"1.5\" width=\"19.3\" height=\"109\"></rect>\n    <polygon\n      points=\"19.4,1.5 0,1.5 0,110.5 19.4,110.5 19.4,57.1 53.1,57.1 53.1,50.7 19.4,50.7 \"\n    ></polygon>\n    <polygon\n      points=\"171.4,1.5 127.5,110.5 136.1,110.5 150,75.3 170.9,75.3 168.4,68.8 152.5,68.8 170.1,24.3 203.6,110.5\n    224.5,110.5 181.3,1.5 \"\n    ></polygon>\n    <polygon\n      points=\"745.7,1.5 701.7,110.5 710.3,110.5 724.3,75.3 745.2,75.3 742.7,68.8 726.8,68.8 744.4,24.3\n    777.9,110.5 798.8,110.5 755.6,1.5 \"\n    ></polygon>\n    <polygon\n      points=\"543.7,1.5 533.8,1.5 489.8,110.5 498.4,110.5 512.4,75.3 533.3,75.3 530.8,68.8 514.9,68.8 532.5,24.3\n    566,110.5 586.9,110.5 \"\n    ></polygon>\n    <polygon\n      points=\"911.5,1.5 911.5,86.5 855.1,1.5 833.9,1.5 833.9,4.9 903.4,110.5 919.5,110.5 919.5,1.5 \"\n    ></polygon>\n    <polygon points=\"833.9,110.5 842.1,110.5 842.1,44.9 833.9,32.5 \"></polygon>\n  </svg>\n</header>\n\n<nav (window:resize)=\"onResize()\">\n  <ul>\n    <li>\n      <a href=\"https://hakkasangroup.com/portfolio/\">\n        Portfolio\n        <span class=\"description\">\n          Browse Venues in Daylife, Nightlife and Restaurants.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/company/\">\n        Company\n        <span class=\"description\">\n          Learn about our mission, values and philanthropy.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/events/\">\n        Events\n        <span class=\"description\"> Browse upcoming acts or plan an event.</span>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/careers/\">\n        Careers\n        <span class=\"description\">\n          Discover our company culture and career opportunities.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/press/\">\n        Press\n        <span class=\"description\">\n          Stay up to date on our exciting developments.</span\n        >\n      </a>\n    </li>\n    <li>\n      <a\n        href=\"https://hakkasangroup.com/store/las-vegas?utm_source=hakkasan-group-site&utm_medium=store-button\"\n      >\n        Store\n        <span class=\"description\"> Purchase tickets for upcoming shows.</span>\n      </a>\n    </li>\n  </ul>\n\n  <ul>\n    <li>\n      <a href=\"https://hakkasangroup.com/business-development/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Business Development</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/partnerships/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Partnerships</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/suppliers-vendors/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Suppliers &amp; Vendors</span></a\n      >\n    </li>\n    <li>\n      <a\n        href=\"https://hakkasangroup.com/company/hakkasan-group-inspires/\"\n        itemprop=\"url\"\n      >\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Philanthropy</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/contact/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Contact</span></a\n      >\n    </li>\n    <li>\n      <a href=\"https://hakkasangroup.com/gift-vouchers/\" itemprop=\"url\">\n        <span class=\"avia-bullet\"></span>\n        <span class=\"avia-menu-text button\">Gift Cards</span></a\n      >\n    </li>\n  </ul>\n</nav>\n", styles: [""], components: [{ type: i1__namespace$2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: HeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'venue-header',
                        templateUrl: './header.component.html',
                        styleUrls: ['./header.component.scss'],
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                    type: i0.Input
                }], titleAlign: [{
                    type: i0.Input,
                    args: ['title-align']
                }], color: [{
                    type: i0.Input,
                    args: ['color']
                }] } });

    var MenuComponent = /** @class */ (function () {
        function MenuComponent() {
        }
        MenuComponent.prototype.ngOnInit = function () {
        };
        return MenuComponent;
    }());
    MenuComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MenuComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MenuComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: MenuComponent, selector: "lib-menu", ngImport: i0__namespace, template: "<p>menu works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MenuComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-menu',
                        templateUrl: './menu.component.html',
                        styleUrls: ['./menu.component.scss']
                    }]
            }], ctorParameters: function () { return []; } });

    var StandardStylingModule = /** @class */ (function () {
        function StandardStylingModule() {
        }
        return StandardStylingModule;
    }());
    StandardStylingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StandardStylingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingModule, declarations: [StandardStylingComponent,
            HeaderComponent,
            GridComponent,
            ContentComponent,
            MenuComponent,
            FooterComponent,
            GridLineComponent], imports: [i1.HttpClientModule,
            i1.HttpClientJsonpModule,
            i1$1.CommonModule,
            i1$2.MatIconModule], exports: [StandardStylingComponent,
            HeaderComponent,
            GridComponent,
            ContentComponent,
            MenuComponent,
            FooterComponent,
            GridLineComponent] });
    StandardStylingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingModule, providers: [FooterService], imports: [[
                i1.HttpClientModule,
                i1.HttpClientJsonpModule,
                i1$1.CommonModule,
                i1$2.MatIconModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: StandardStylingModule, decorators: [{
                type: i0.NgModule,
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
                            i1.HttpClientModule,
                            i1.HttpClientJsonpModule,
                            i1$1.CommonModule,
                            i1$2.MatIconModule,
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
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                    }]
            }] });

    /*
     * Public API Surface of standard-styling
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ContentComponent = ContentComponent;
    exports.FooterComponent = FooterComponent;
    exports.FooterService = FooterService;
    exports.GridComponent = GridComponent;
    exports.GridLineComponent = GridLineComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.MenuComponent = MenuComponent;
    exports.StandardStylingComponent = StandardStylingComponent;
    exports.StandardStylingModule = StandardStylingModule;
    exports.StandardStylingService = StandardStylingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=venue-driver-standard-styling.umd.js.map
