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
        bookPage: {},
    };


    handler(search) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&langRestrict=en&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
            .then(result => result.json())
            .then(data => this.setState({
                ...this.state,
                library: data.items,
                //  compare: data.items.slice(0, 7), //  удалить перед мержем
            }))
            .then(data => console.log(this.state.library))
        //   .then(data => console.log(this.state.compare)) //  удалить перед мержем
    }

    componentDidMount(){
      this.handler('computers')
    }

    // универсальный метод, который добавляет/удаляет карточки в/из (пожеланий, сравнения, корзины) метод передать в
    // Мишин
    // комппонент
    // отрисовки карточки
    toggleAddDeleteToArr = (id, key) => {
        if (!this.state[key].some((obj) => obj.id === id )) {
            const findId = this.state.library.find(el => el.id === id);
            this.setState((prevState) => ({
                    [key]: [
                        ...prevState[key], findId
                    ]
                })
            )
        } else {
            const filterArr = this.state[key].filter((obj) => obj.id !== id);
            this.setState({
                [key]: filterArr,
            })
        }
    };

    renderPage = (id) => {
        const findBook = this.state.library.find(el => el.id === id);
        console.log(findBook)
        this.setState({
            bookPage: findBook
            
        }, function() {
            console.log(this.state.bookPage)
        })
    }

    render() {
        const {library, compare, wishList, basket, bookPage} = this.state;
        return (
            <div className="App">

                <Header basketCounter={basket.length} />
                <Main library={library}
                      wishList={wishList}
                      toggleAddDeleteToArr={this.toggleAddDeleteToArr}
                      compare={compare}
                      bookPage={bookPage}
                      renderPage={this.renderPage}/>
            </div>
    );
  }
}

export default App;
