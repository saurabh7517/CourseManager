import React from 'react';
import PropTypes from "prop-types"; 
import * as courseActions from '../../redux/actions/createCourse';
import * as authorActions from '../../redux/actions/createAuthor';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import {Redirect} from "react-router-dom";
import Spinner from '../common/Spinner';

class CoursePage extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.generateCourseList = this.generateCourseList.bind(this);
        this.state = {
            redirectToAddCoursePage:false
        }
    } 

    componentDidMount(){
        this.props.actions.courseAction.loadCourses().catch((error) => {console.log(error)});
        this.props.actions.authorAction.loadAuthors().catch((error) => console.log(error));
        

    }

    handleClick(event){
        this.setState({redirectToAddCoursePage:true});
    }

    handleList(course){
        return <li key={course.id}>{course.title}</li>
    }

    generateCourseList(tempAuthorList,course){
        let tempAuthor = tempAuthorList.find((author) => author.id === course.authorId);
        return {...course,authorName:tempAuthor.name}
    }

    render(props){
        let tempCourseList  = this.props.courseList;
        let tempAuthorList = this.props.authorList;
        let newList = [];
        if(tempAuthorList.length !== 0){
            newList = tempCourseList.map(course => this.generateCourseList(tempAuthorList,course));
        }else{
            return [];
        }
        return(
            <React.Fragment>
                {this.state.redirectToAddCoursePage === true ? <Redirect to="/course"/> : null}
                <h2>Courses</h2>
                <button onClick = {(event) => this.handleClick() } className='btn btn-primary add-course' >Add Course</button>
                {
                    this.props.loading === true ? <Spinner/> : <CourseList courses={newList}/>
                }

                
            </React.Fragment>
         );
    }
}

function mapStateToProps(state){
    return{
        // courseList:state.authorReducer === 0 ? [] : state.courseReducer.map(course =>{
        //     let tempAuthor = state.authorReducer.find(a => a.id === course.authorId);
        //     return {...course,authorName:tempAuthor.name}
        // }),
        courseList:state.courseReducer,
        authorList:state.authorReducer,
        loading:state.apiStatusChangeReducer > 0 ? true : false
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: {
            courseAction : bindActionCreators(courseActions,dispatch),
            authorAction : bindActionCreators(authorActions,dispatch)
        } 
    }
}

CoursePage.propTypes = {
    courseList:PropTypes.array.isRequired,
    authorList:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);       