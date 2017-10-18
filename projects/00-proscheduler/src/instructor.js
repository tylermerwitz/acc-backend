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
            return course.getInstructor().getId() === id;
        } );
    };

    this.getStudents = function () {
        let students = [];
        for ( let course of this.getCourses() ) {
            students = students.concat( course.getStudents() );
        }
        return students;
    };

};
