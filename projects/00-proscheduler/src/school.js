'use strict';

let Student = require( './student.js' );
let Instructor = require( './instructor.js' );
    let students = {};
    let instructors = {};
    let courses = {};
    let enrollment = {};
let Course = require( './course.js' );

let _ = require( 'lodash' );

module.exports = function () {

    let students = {};

    /* STUDENTS */

    this.createStudent = function ( id, name ) {

    };

    this.getStudent = function ( id ) {

    };

    this.getAllStudents = function () {

    };

    this.findStudents = function ( query ) {

    };

    this.deleteStudent = function ( id ) {

    };

    /* INSTRUCTORS */

    this.createInstructor = function ( id, name ) {

    };

    this.getInstructor = function ( id ) {

    };

    this.getAllInstructors = function () {

    };

    this.findInstructors = function ( query ) {

    };

    this.deleteInstructor = function ( id ) {

    };

    /* COURSES */

    this.createCourse = function ( id, name, instructorId ) {

    };

    this.getCourse = function ( id ) {

    };

    this.getAllCourses = function () {

    };

    this.findCourses = function ( query ) {

    };

    this.deleteCourse = function ( id ) {

    };

    /* ENROLLMENT */

    this.enroll = function ( studentId, courseId ) {

    };

    this.unenroll = function ( studentId, courseId ) {

    };

    this.isEnrolled = function ( studentId, courseId ) {

    };


};
