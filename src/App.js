import React, {Component} from 'react';
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

<<<<<<< HEAD
=======

>>>>>>> db11f3b7b771c3abf66d5cb323d2c5fd3a3408b7
    handler = (search) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&langRestrict=en&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
            .then(result => result.json())
            .then(data => this.setState({
                library: data.items,
            }))
            .then(data => console.log(this.state.library))
<<<<<<< HEAD
    };

    componentDidMount(){
      this.handler('music')
    }
=======
    }

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
>>>>>>> db11f3b7b771c3abf66d5cb323d2c5fd3a3408b7

    // универсальный метод, который добавляет/удаляет карточки в/из (пожеланий, сравнения, корзины) метод передать в
    // Мишин
    // комппонент
    // отрисовки карточки
    toggleAddDeleteToArr = (etag, key) => {
<<<<<<< HEAD
        if (!this.state[key].some((obj) => obj.etag === etag )) {
=======
        if (!this.state[key].some((obj) => obj.etag === etag)) {
>>>>>>> db11f3b7b771c3abf66d5cb323d2c5fd3a3408b7
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
        const {library, compare, wishList, basket, visibleCategory} = this.state;
        return (
            <div className="App">
<<<<<<< HEAD
                <Header basketCounter={basket.length} />
                <Main library={library}
                      wishList={wishList}
                      toggleAddDeleteToArr={this.toggleAddDeleteToArr}
                      compare={compare}/>
=======

                <Header basketCounter={basket.length}/>
                <Main
                    toggleCategories={this.toggleCategories}
                    changeCategory={this.changeCategory}
                    visibleCategory={visibleCategory}
                    library={library}
                    wishList={wishList}
                    toggleAddDeleteToArr={this.toggleAddDeleteToArr}
                    compare={compare}/>
>>>>>>> db11f3b7b771c3abf66d5cb323d2c5fd3a3408b7
            </div>
        )
            ;
    }
}

export default App;
