import React, { Component } from "react";
import "../App.css";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/Search";
import Table from "../components/Table";


class Home extends Component {
    state = {
        results: {}
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
                <SearchBar/>
                <Table />
            </div>
        )
    }

}

export default Home;