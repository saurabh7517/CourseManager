import React from "react";
import {PropTypes} from "prop-types";
import {Link} from 'react-router-dom';
const CourseList  = (props) => {
    let courses = props.courses;

    return (
    <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {courses.map(course => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/courses/" + course.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td><button type="button" onClick={() => props.onDelete(course)} className="btn btn-outline-danger">Delete</button></td>
          </tr>
        );
      })}
    </tbody>
  </table>)
}

export default CourseList;