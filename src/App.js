import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/main';
import CompareBooks from './components/CompareBooks/CompareBooks'
import BookContainer from "./components/BookContainer/BookContainer";

class App extends Component {
    state = {
        library: [],
        compare: [],

    };

    handler({search}) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&langRestrict=en&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
            .then(result => result.json())
            .then(data => this.setState({
                ...this.state,
                library: data.items,
                // compare: data.items.slice(0, 7), //  удалить перед мержем
            }))
            .then(data => console.log(this.state.library))
        // .then(data => console.log(this.state.compare)) //  удалить перед мержем
    }

    componentDidMount() {
        this.handler('computers')
    }

// Метод, который добавляет карточки для сравнения, метод передать в Мишин комппонент отрисовки карточки
    addCompareBooks = (id, key) => {
        console.log(id);
        const findId = this.state.library.find((el) => el.id === id);
        // let obj = {[dyanmicKey]: val}

        this.setState((prevState) => (
            {
                [`${key}`]: [
                    ...prevState[key], findId
                ]
            })
        )
    };

    // Метод, который удаляет карточки из сравнения
    deleteCompareBooks = (id) => {
        console.log('id', id);
        const filterArrOfCompare = this.state.compare.filter((obj) => obj.id !== id);
        this.setState({
            compare: filterArrOfCompare,
        })
    };

    render() {
        const {library} = this.state;
        return (
            <div className="App">

                {<Header library={library}/>}
                <Main library={library}
                      addToCompareBooks={this.addCompareBooks}


                />

                <CompareBooks compare={this.state.compare}
                              deleteCompareBooks={this.deleteCompareBooks}
                />


            </div>
        );
    }
}

export default App;
