System.register(['@angular/core', './tab.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tab_component_1;
    var TabsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            }],
        execute: function() {
            TabsComponent = (function () {
                function TabsComponent() {
                }
                TabsComponent.prototype.ngOnInit = function () { };
                TabsComponent.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.isActive; });
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                TabsComponent.prototype.selectTab = function (tab) {
                    // deactivate all tabs
                    this.tabs.toArray().forEach(function (tab) {
                        tab.isActive = false;
                    });
                    // activate current one
                    tab.isActive = true;
                };
                __decorate([
                    core_1.ContentChildren(tab_component_1.TabComponent), 
                    __metadata('design:type', core_1.QueryList)
                ], TabsComponent.prototype, "tabs", void 0);
                TabsComponent = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n        <div class=\"tabs-bar\">\n            <a href=\"javascript:;\" [class.is-active]=\"tab.isActive\" class=\"tab\" *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\">\n                {{ tab.title }}\n            </a>\n        </div>\n\n        <ng-content></ng-content>\n    ",
                        styles: [
                            "\n        .tabs-bar {\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n            -ms-flex-direction: row;\n            flex-direction: row;\n            -webkit-box-pack: center;\n            -webkit-justify-content: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-align-content: space-between;\n            -ms-flex-line-pack: justify;\n            align-content: space-between;\n            -webkit-box-align: start;\n            -webkit-align-items: flex-start;\n            -ms-flex-align: start;\n            align-items: flex-start;\n            height: 48px;\n            padding: 0;\n            margin: 0;\n            border-bottom: 1px solid #e0e0e0;\n        }\n\n        .tab {\n            margin: 0;\n            border: none;\n            padding: 0 24px;\n            float: left;\n            position: relative;\n            display: block;\n            color: red;\n            text-decoration: none;\n            height: 48px;\n            line-height: 48px;\n            text-align: center;\n            font-weight: 500;\n            font-size: 14px;\n            text-transform: uppercase;\n            color: rgba(0,0,0,.54);\n            overflow: hidden;\n        }\n\n\n        .tab.is-active:after {\n            height: 2px;\n            width: 100%;\n            display: block;\n            content: \" \";\n            bottom: 0;\n            left: 0;\n            position: absolute;\n            background: #3f51b5;\n            -webkit-animation: border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;\n            animation: border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;\n            -webkit-transition: all 1s cubic-bezier(.4,0,1,1);\n            transition: all 1s cubic-bezier(.4,0,1,1);\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabsComponent);
                return TabsComponent;
            }());
            exports_1("TabsComponent", TabsComponent);
        }
    }
});
//# sourceMappingURL=tabs.component.js.map