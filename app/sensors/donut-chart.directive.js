System.register(['@angular/core', 'd3'], function(exports_1, context_1) {
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
    var core_1, d3;
    var DonutChartDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            DonutChartDirective = (function () {
                function DonutChartDirective(elementRef) {
                    this.elementRef = elementRef;
                    this.progress = 0;
                    var el = this.elementRef.nativeElement;
                    var width = 200;
                    var height = 200;
                    this.twoPi = 2 * Math.PI;
                    this.arc = d3.svg.arc()
                        .startAngle(0)
                        .innerRadius(60)
                        .outerRadius(80);
                    var svg = d3.select(el).append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
                    var meter = svg.append("g")
                        .attr("class", "progress-meter");
                    meter.append("path")
                        .attr("class", "background")
                        .attr("d", this.arc.endAngle(this.twoPi));
                    this.foreground = meter.append("path")
                        .attr("class", "foreground");
                    this.textEl = meter.append("text")
                        .attr("text-anchor", "middle")
                        .attr("dy", ".35em");
                }
                DonutChartDirective.prototype.ngOnInit = function () {
                    this.render(this.data);
                };
                DonutChartDirective.prototype.ngOnChanges = function (changes) {
                    /*
                        {
                            'data': {
                                currentValue...
                                previousValue...
                                isFirstChange...
                            }
                        }
                    */
                    this.render(changes['data'].currentValue);
                };
                DonutChartDirective.prototype.render = function (percentage) {
                    var i = d3.interpolate(this.progress, percentage / 100);
                    var vm = this;
                    d3.transition()
                        .tween("progress", function () {
                        return function (t) {
                            vm.progress = i(t);
                            vm.foreground.attr("d", vm.arc.endAngle(vm.twoPi * vm.progress));
                            vm.textEl.text(d3.format(".0%")(vm.progress));
                        };
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], DonutChartDirective.prototype, "data", void 0);
                DonutChartDirective = __decorate([
                    core_1.Directive({
                        selector: 'donut-chart'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DonutChartDirective);
                return DonutChartDirective;
            }());
            exports_1("DonutChartDirective", DonutChartDirective);
        }
    }
});
//# sourceMappingURL=donut-chart.directive.js.map