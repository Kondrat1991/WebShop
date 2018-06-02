import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/main';
import CompareBooks from './components/CompareBooks/CompareBooks';
import Categories from './components/Categories/Categories';
import BookContainer from './components/BookContainer/BookContainer'


class App extends Component {
    state = {
        library: [],
        visibleCategory: false,
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

    componentDidMount() {
        this.handler('history+computer')
    };

    changeCategory = (categories) => {
        this.handler(categories)
    };

    toggleCategories = () => {
        this.setState((prevState) => ({
            visibleCategory: !prevState.visibleCategory
        }))
    };

    // универсальный метод, который добавляет/удаляет карточки в/из (пожеланий, сравнения, корзины) метод передать в
    // Мишин
    // комппонент
    // отрисовки карточки
    toggleAddDeleteToArr = (etag, key) => {
        if (!this.state[key].some((obj) => obj.etag === etag)) {
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

    sortBooks = (key1, key2) => {
        const newLibrary = [...this.state.library]
        const sortedBooks = newLibrary.sort(function (a, b) {
            if ((Array.from(arguments).length == 2) && (a[key1][key2] > b[key1][key2])) {
                return 1;
            }
            if ((Array.from(arguments).length == 2) && (a[key1][key2] < b[key1][key2])) {
                return -1;
            }
            return 0;
        });
        console.log(sortedBooks);
    };

    sortBooksForThree = (key1, key2, key3) => {
       const newLibrary = [...this.state.library].filter((obj)=>
            obj.saleInfo.listPrice !== undefined
        )
        const sortedBooks = newLibrary.sort(function (a, b) {
            if (a[key1][key2][key3] > b[key1][key2][key3]){
                return 1;
            }
            if (a[key1][key2][key3] < b[key1][key2][key3]){
                return -1;
            }
            return 0;
        });
        console.log(sortedBooks);
    };

  render() {
    const {library, basket, visibleCategory, wishList, compare} = this.state;
    return (
      <div className="App">

                <Header basketCounter={basket.length}/>
                <Main
                    toggleCategories={this.toggleCategories}
                    changeCategory={this.changeCategory}
                    visibleCategory={visibleCategory}
                    library={library}
                    wishList={wishList}
                    toggleAddDeleteToArr={this.toggleAddDeleteToArr}
                    compare={compare}
                    sortBooks={this.sortBooks}
                    sortBooksForThree={this.sortBooksForThree}/>
            </div>
        )
            ;
    }
}

export default App;
