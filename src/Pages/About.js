import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class About extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios.get("js/data.json")
            .then(res => {
                this.setState({
                    courses: res.data.courses
                })
            })
    }
    render() {
        return (


            <div>
                {this.state.courses.map(course =>
                    <div className="container">
                        <div className="row deltails">
                            <div className="col-md-6">

                                <video controls width="400px" >
                                    <source src={course.video} />
                                </video>
                            </div>
                            <div className="col-md-6">

                                <h5 className="mt-0">{course.name}</h5>
                                <p>{course.detalis}.</p>
                                <p>{course.Datad}</p>
                                <Link to="/"> <button type="button" class="btn btn-secondary">Back</button></Link>

                            </div>

                        </div>


                    </div>
                )}





            </div>
        )
    }
}

export default About
