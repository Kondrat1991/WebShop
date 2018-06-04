import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/main';
import CompareBooks from './components/CompareBooks/CompareBooks';
import Categories from './components/Categories/Categories';
import BookContainer from './components/BookContainer/BookContainer'
import Basket from './components/Basket/Basket';


class App extends Component {
    state = {
        library: [],
        visibleCategory: false,
        compare: [],
        wishList: [],
        basket: [],
        visibleBasket: false,
    };


    handler = (search) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&langRestrict=en&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
            .then(result => result.json())
            .then(data => this.setState({
                library: data.items,
            }))
            .then(data => console.log(this.state.library))
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

    // универсальный метод, который добавляет/удаляет карточки в/из (пожеланий, сравнения, корзины) метод передать в
    // Мишин
    // комппонент
    // отрисовки карточки
    toggleAddDeleteToArr = (etag, key) => {
        if (!this.state[key].some((obj) => obj.etag === etag)) {
            const findId = this.state.library.find(el => el.etag === etag);
            findId.total = 1;
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

    /*метод для кнопки плюс(Basket)*/
    plusCount = (etag) => {
        // console.log('plus');

        this.setState((prevState) => {
            const {basket} = prevState;

            return {
                basket: [...basket.map((obj) => {
                    if (obj.etag === etag) {
                        return {
                            ...obj,
                            total: obj.total + 1
                        }
                    } else {
                        return obj;
                    }
                })]
            }
        });
    };

    /*метод для кнопки минус(Basket)*/
    minusCount = (etag) => {
        this.setState(prevState => {
                let {basket} = prevState;

                return {
                    basket: [
                        ...basket.map((obj) => {
                            if (obj.etag === etag) {
                                return {
                                    ...obj,
                                    total: obj.total - 1
                                }
                            } else {
                                return obj
                            }
                        })
                    ]
                }
            }
        )
    };

    /*метод для свёртывания корзины(Basket)*/
    toggleVisibleBasket = () => {
        this.setState((prevState) => ({
            visibleBasket: !prevState.visibleBasket
        }))
    };

    /*метод удаления карточек из корзины(Basket)*/
    clearBasket = () => {
        this.setState({
            basket: []
        })
    };

    render() {
    const {library, basket, visibleCategory, wishList, compare, visibleBasket} = this.state;
    return (
      <div className="App">

                <Header basketCounter={basket.length}
                        toggleVisibleBasket={this.toggleVisibleBasket}
                        basket={basket}
                />
                <Main
                    toggleCategories={this.toggleCategories}
                    changeCategory={this.changeCategory}
                    visibleCategory={visibleCategory}
                    library={library}
                    wishList={wishList}
                    toggleAddDeleteToArr={this.toggleAddDeleteToArr}
                    compare={compare}
                    basket={basket}
                    plus={this.plusCount}
                    minus={this.minusCount}
                    visibleBasket={visibleBasket}
                    clearBasket={this.clearBasket}
                />
            </div>
        )
            ;
    }
}

export default App;
