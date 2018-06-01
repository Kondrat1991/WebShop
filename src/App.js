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
    };

    handler(search){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&langRestrict=en&download=epub&maxResults=40&filter=partial&startIndex=0&AIzaSyDZ_iy1QQ7PmcUf-Y3e1z7277ncsSf9GYE`)
    .then(result => result.json())
    .then(data => this.setState({
        //...this.state,
        library: data.items,    }))
    .then(data => console.log(this.state.library))
    }

    componentDidMount(){
        this.handler('history+computer')
    };

    changeCategory = (categories) => {
        return (
            this.handler(categories)
        )
    };

    toggleCategories = () => {
        this.setState((prevState) => ({
            visibleCategory: !prevState.visibleCategory
        }))
    };

// Метод, который добавляет карточки для сравнения, метод передать в Мишин комппонент отрисовки карточки
    addCompareBooks = (id) => {
        const findId = this.state.library.find(el => el.id === id)

        this.setState((prevState) => ({
                compare: [
                    ...prevState.compare, findId
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
    };  render() {
    console.log('render app');const {library} = this.state;
    return (
      <div className="App">

           <Header />
                <Categories changeCategory={this.changeCategory} visible={this.state.visibleCategory} toggleCategories={this.toggleCategories}/>
        <Main library={library}/>

            {/*<div className="library">*/}
              {/*{library.map(item =>*/}
                {/*<div className='library-item' key={item.etag}>*/}
                    {/*<img src={item.volumeInfo.imageLinks.thumbnail}   alt={item.volumeInfo.title}*/}
                                 {/*className='library-image'/>*/}
                    {/*<p className='library-title'>{item.volumeInfo.title}</p>*/}
                    {/*<p className='library-author'>{item.volumeInfo.authors}</p>*/}
                {/*</div>)}*/}
            {/*</div>*/}
<CompareBooks compare={this.state.compare}
                              deleteCompareBooks={this.deleteCompareBooks}
                              addToCompareBooks={this.addCompareBooks}/>
      </div>
    );
  }
}

export default App;
