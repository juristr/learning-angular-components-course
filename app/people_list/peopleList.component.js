System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PeopleListCtrl;
    return {
        setters:[],
        execute: function() {
            PeopleListCtrl = (function () {
                ////////////////////////
                function PeopleListCtrl(people) {
                    this.people = [];
                    this.people = people.query();
                }
                return PeopleListCtrl;
            }());
            PeopleListCtrl.$inject = ['people'];
            exports_1("default",PeopleListCtrl);
        }
    }
});
//# sourceMappingURL=peopleList.component.js.map