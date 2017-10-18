'use strict';

module.exports = function Student ( school, id, name, instructor ) {

    this.getId = function () {
        return id;
    };

    this.getName = function () {
        return name;
    };

    this.getInstructor = function () {
        return instructor;
    };

    /*
        Return a list of Students enrolled in this course.
    */

    this.getStudents = function () {
        return school.getAllStudents().filter( ( student ) => {
            return school.isEnrolled( student.getId(), id );
        } );
    };

};
