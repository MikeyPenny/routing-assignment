import React, { Component } from 'react';

class Course extends Component {
    render () {
        
        const query = new URLSearchParams(this.props.location.search);
        let arrayParams = [];
        for (let param of query.entries()) {
            arrayParams.push(param);
        }
        const title = arrayParams[0];

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: 
                    {
                        this.props.match.params.id ? 
                        this.props.match.params.id : 
                        null 
                    }
                </p>
            </div>
        );
    }
}

export default Course;