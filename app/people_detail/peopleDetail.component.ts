import { Component, Inject } from '@angular/core';

@Component({
    selector: 'pp-people-detail',
    templateUrl: 'app/people_detail/people-detail.html'
})
export class PeopleDetailComponent {
    person;

    constructor(@Inject('$routeParams') $routeParams, @Inject('people') people) {
        this.person = people.byId($routeParams.personId);
    }
}