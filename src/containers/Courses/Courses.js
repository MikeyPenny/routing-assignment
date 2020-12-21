import React, { Component } from 'react';

import { Route, Link } from "react-router-dom";
import Course from "../Course/Course";
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = (id) => {

    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link 
                                    key={course.id}
                                    to={{
                                        pathname: "/courses/" + course.id,
                                        search: course.title,
                                    }}

                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    <article 
                                        className="Course" 
                                        >{course.title}
                                    </article>
                                </Link>
                            );
                        } )
                    }
                </section>
                <Route 
                    path={this.props.match.url + "/:id"}
                    component={Course}/>
                
            </div>
        );
    }
}

export default Courses;