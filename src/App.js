import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/main';
import CompareBooks from './components/CompareBooks/CompareBooks'



class App extends Component {

    state = {
        library: [],
        compare: [],
        wishList: [],
        basket: [],
    };

    handler = (search) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&langRestrict=en&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
            .then(result => result.json())
            .then(data => this.setState({
                library: data.items,
            }))
            .then(data => console.log(this.state.library))
    };

    componentDidMount(){
      this.handler('music')
    }

    // универсальный метод, который добавляет/удаляет карточки в/из (пожеланий, сравнения, корзины) метод передать в
    // Мишин
    // комппонент
    // отрисовки карточки
    toggleAddDeleteToArr = (etag, key) => {
        if (!this.state[key].some((obj) => obj.etag === etag )) {
            const findId = this.state.library.find(el => el.etag === etag);
            this.setState((prevState) => ({
                    [key]: [
                        ...prevState[key], findId
                    ]
                })
            )
        } else {
            const filterArr = this.state[key].filter((obj) => obj.etag !== etag);
            this.setState({
                [key]: filterArr,
            })
        }
    };

    render() {
        const {library, compare, wishList, basket} = this.state;
        return (
            <div className="App">
                <Header basketCounter={basket.length} />
                <Main library={library}
                      wishList={wishList}
                      toggleAddDeleteToArr={this.toggleAddDeleteToArr}
                      compare={compare}/>
            </div>
    );
  }
}

export default App;
