import React, { Component } from 'react';
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
        bookPage: {},
        category: 'apple',
        compare: compare,
        wishList: wishList,
        basket: basket,
    };

    searchBook=(event, string, title, select) => {
        if (event.key === "Enter") {
            this.handler(string, title, select)
        }
    };

    handler = (category = "", title = "", language = "en") => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}+intitle:${title}&orderBy=newest&langRestrict=${language}&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    ...this.state,
                    library: data.items ? data.items : [],
                })
            })
            .then(data => console.log(this.state.library))
    }

    componentDidMount() {
        this.handler(this.state.category)

    };

    changeCategory = (categories) => {
        this.handler(categories)
        this.setState({
            ...this.state,
            category: categories,
        })
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

    renderPage = (etag) => {
        const findBook = this.state.library.find(el => el.etag === etag);
        console.log(findBook)
        this.setState({
            bookPage: findBook

        }, function() {
            console.log(this.state.bookPage)
        })
    }
    sortBooks = (key1, key2) => {
        const newLibrary = [...this.state.library]
        const sortedBooks = newLibrary.sort(function (a, b) {
            // return b.volumeInfo.publishedDate-a.volumeInfo.publishedDate
            if ((Array.from(arguments).length == 2) && (a[key1][key2] > b[key1][key2])) {
                return -1;
            }
            if ((Array.from(arguments).length == 2) && (a[key1][key2] < b[key1][key2])) {
                return 1;
            }
            return 0;
        });
        this.setState({
            ...this.state,
            library: sortedBooks,
        })
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
        this.setState({
            ...this.state,
            library: sortedBooks,
        })
        console.log(sortedBooks);
    };
    sortBooksDec = (key1, key2, key3) => {
        const newLibrary = [...this.state.library].filter((obj)=>
             obj.saleInfo.listPrice !== undefined
         )
         const sortedBooks = newLibrary.sort(function (a, b) {
             if (a[key1][key2][key3] > b[key1][key2][key3]){
                 return -1;
             }
             if (a[key1][key2][key3] < b[key1][key2][key3]){
                 return 1;
             }
             return 0;
         });
         this.setState({
             ...this.state,
             library: sortedBooks,
         })
         console.log(sortedBooks);
     };
    sortFreeBook = () => {
        const newLibrary = [...this.state.library].filter((obj)=>
        obj.saleInfo.listPrice === undefined)
        this.setState({
            ...this.state,
            library: newLibrary,
        })
    }


    searchByEnter = () => {

    }

    render() {
        const {library, compare, wishList, basket, bookPage, category} = this.state;
        return (
            <div className="App">

                <Header basketCounter={basket.length} />
                <Main library={library}
                      wishList={wishList}
                      toggleAddDeleteToArr={this.toggleAddDeleteToArr}
                      compare={compare}
                      bookPage={bookPage}
                      renderPage={this.renderPage}
                      changeCategory={this.changeCategory}
                      sortBooks={this.sortBooks}
                      sortBooksForThree={this.sortBooksForThree}
                      sortBooksDec={this.sortBooksDec}
                      sortFreeBook={this.sortFreeBook}
                      handler={this.handler}
                      category={category}
                      searchBook={this.searchBook}
                />

            </div>
        )
    }
}

export default App;
