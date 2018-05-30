import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/main';
import BookContainer from './components/BookContainer/BookContainer';

class App extends Component {
    state= {
        library: [],
    }

    handler({search}){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&langRestrict=en&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
            .then(result => result.json())
            .then(data => this.setState({
                ...this.state,
                library: data.items,
            }))
            .then(data => console.log(this.state.library))
    }

    componentDidMount(){
        this.handler('computers')
    }

    render() {
        const {library} = this.state;
        return (
            <div className="App">

                { <Header library={library}/> }
                <Main library={library}/>
                <BookContainer library={library}/>

                {/*<div className="library">
                    {library.map(item =>
                        <div className='library-item' key={item.id}>
                            <img src={item.volumeInfo.imageLinks.thumbnail}   alt={item.volumeInfo.title} className='library-image'/>
                            <p className='library-title'>{item.volumeInfo.title}</p>
                            <p className='library-author'>{item.volumeInfo.authors}</p>
                        </div>)}
                </div>*/}

            </div>
        );
    }
}

export default App;
