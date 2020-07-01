import React, { Component } from "react";
import "../App.css";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/Search";
import Table from "../components/Table";


class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: [],
            keyword : ""
        }
        this.setSearchKeyword = this.setSearchKeyword.bind(this);
    }


    setSearchKeyword(event){
        console.log(event.target.value)
        this.setState({
            keyword : event.target.value
        })
    }

    componentDidMount() {
        API.getUsers()
        .then(res => {
            this.setState({ results: res.data.results })
            console.log(this.state.results);
        })
        .catch(err => {
            console.log(err);
        })
    }

  

    render() {
        return (
            <div className="App">
                <Jumbotron/>
                <SearchBar onChange={this.setSearchKeyword}/>
                <Table data={this.state.results} keyword={this.state.keyword} />
            </div>
        )
    }

}

export default Home;