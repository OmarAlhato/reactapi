import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export class Home extends Component {
    state={
        courses: []
    }

    componentDidMount(){
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

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./imgslider/4.jpg" className="d-block w-100 imgslader" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./imgslider/2.jpg" className="d-block w-100 imgslader" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./imgslider/3.jpg" className="d-block w-100 imgslader" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<br />
<br />
    
<div className="container ">
    
<h1>courses</h1>
<div className="row cards" >

{this.state.courses.map(course => 

<div className="col-md-4"> 
    
<div className="card-deck" key={course.id}>
    <br />
  <div className="card">
    <img src={course.img} class="card-img-top imgcard" alt="..."/>
    <div className="card-body cardd">
      <h5 className="card-title">{course.name}</h5>
      <p className="card-text">{course.detalis}</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <Link to="/About" style={{textDecoration: "none"}}><button type="button" className="btn btn-primary btn-lg btn-block">Detalis</button></Link>  

    </div>
  </div>
  </div>
  <br/>

    </div>
    )}
        </div>

    </div>
    


    <footer>
        
        <div className="container">
<div className="row">
    <div className="col-3" style={{display: "block"}}>
        <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

        <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

    </div>
    <div className="col-3">
    <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

        <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

    </div>
    <div className="col-3">
    <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

        <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

    </div>
    <div className="col-3">
   <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

        <Link  style={{display: "block"}} to="/">Home</Link>
        <Link  style={{display: "block"}} to="/">Home</Link>

    </div>
</div>
        </div>
    </footer>
            </div>
        )
    }
}

export default Home
