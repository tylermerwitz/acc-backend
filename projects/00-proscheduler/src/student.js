'use strict';

module.exports = function Student ( school, id, name ) {

    this.getId = function () {
        return id;
    };

    this.getName = function () {
        return name;
    };

    this.getCourses = function () {
        return school.getAllCourses().filter( ( course ) => {
            return this.isEnrolledIn( course );
        } );
    };

    this.getInstructors = function () {
        return school.getAllCourses().filter( ( course ) => {
            return this.isEnrolled( course );
        } ).map( ( course ) => {
            return course.getInstructor();
        } );
    };

    this.isEnrolledIn = function ( course ) {
        return school.isEnrolled( id, course.getId() );
    };

};
