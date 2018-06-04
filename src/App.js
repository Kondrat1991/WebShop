import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/main';
import CompareBooks from './components/CompareBooks/CompareBooks';
import Categories from './components/Categories/Categories';
import BookContainer from './components/BookContainer/BookContainer'


const wishList = JSON.parse(localStorage.getItem('wishList')) ? JSON.parse(localStorage.getItem('wishList')) : [];
const compare = JSON.parse(localStorage.getItem('compare')) ? JSON.parse(localStorage.getItem('compare')) : [];
const basket = JSON.parse(localStorage.getItem('basket')) ? JSON.parse(localStorage.getItem('basket')) : [];


class App extends Component {
    state = {
        library: [],
        visibleCategory: false,
        compare: compare,
        wishList: wishList,
        basket: basket,
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

    changeCategory = (categories) => {
        this.handler(categories)
    };

    toggleCategories = () => {
        this.setState((prevState) => ({
            visibleCategory: !prevState.visibleCategory
        }))
    };
    // универсальный метод, который добавляет/удаляет карточки в/из (пожеланий, сравнения, корзины)
    toggleAddDeleteToArr = (etag, key) => {
           if (!this.state[key].some((obj) => obj.etag === etag)) {
            const findId = this.state.library.find(el => el.etag === etag);
               findId.total = 1;
            this.setState((prevState) => ({
                    [key]: [
                        ...prevState[key], findId
                    ]
                })
            );
    //запись выбранных книг в localStorage
            localStorage.setItem( key,
                   JSON.stringify(
                       [
                           ...this.state[key],
                           findId]
                   ))

        } else {
            const filterArr = this.state[key].filter((obj) => obj.etag !== etag);
            this.setState({
                [key]: filterArr,
            }
            , localStorage.setItem( key, JSON.stringify(filterArr))
            )
        }
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
                    compare={compare}/>
            </div>
        );
    }
}

export default App;
