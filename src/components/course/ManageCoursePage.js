import React from 'react';
import PropTypes from "prop-types";
import * as courseActions from '../../redux/actions/createCourse';
import * as authorActions from '../../redux/actions/createAuthor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';
class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: this.props.course,
            errors: {}
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.generateCourseList = this.generateCourseList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    // handleChage with OnSave is an important pattern while saving states locally in react. ---Important

    handleChange(event) {
        //do nothing for now....
        const { name, value } = event.target;
        

        let tempCourse = { ...this.state.course, [name]: name === "authorId" ? parseInt(value, 10) : value };
        
        this.setState({course:tempCourse});
        event.preventDefault();


    }

    handleSave(event) {
        //do nothing for now...
        // const {name,value} = event.target;
        event.preventDefault();
        let promise = this.props.actions.courseAction.saveCourse(this.state.course);
        promise.then(() => this.props.history.push('/courses'));
    }

    componentDidMount() {
        if (this.props.courseList.length === 0) {
            this.props.actions.courseAction.loadCourses().catch((error) => { console.log(error) });
            this.props.actions.authorAction.loadAuthors().catch((error) => console.log(error));
        }
    }


    // generateCourseList(tempAuthorList,course){
    //     let tempAuthor = tempAuthorList.find((author) => author.id === course.authorId);
    //     return {...course,authorName:tempAuthor.name}
    // }

    render(props) {

        return (
            <CourseForm course={this.state.course} errors={this.state.errors} authors={this.props.authorList} onChange={this.handleChange} onSave={this.handleSave} saving={this.props.loading} />
        );
    }
}

export function generateCourseList(tempAuthorList, course) {
    let tempAuthor = tempAuthorList.find((author) => author.id === course.authorId);
    return { ...course, authorName: tempAuthor.name }
}

export function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
    const slug = ownProps.match.params.slug;
    const course = slug && state.courseReducer.length > 0 ? getCourseBySlug(state.courseReducer, slug) : {
        id: null,
        title: "",
        authorId: null,
        category: ""
    };
    return {
        course: course,
        courseList: state.authorReducer.length !== 0 ? state.courseReducer.map(course => generateCourseList(state.authorReducer, course)) : [],
        authorList: state.authorReducer,
        loading:state.apiStatusChangeReducer > 0 ? true : false
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            courseAction: bindActionCreators(courseActions, dispatch),
            authorAction: bindActionCreators(authorActions, dispatch)
        }
    }
}

ManageCoursePage.propTypes = {
    courseList: PropTypes.array.isRequired,
    authorList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);       