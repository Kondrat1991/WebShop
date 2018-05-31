import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'; 
// import Header from './components/header/header';
import Main from './components/main/main';


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

    // return (
    //   <div className="App">
      
    //         <div className="library">
    //           {library.map(item => 
    //             <div className='library-item' key={item.id}>
    //                 <img src={item.volumeInfo.imageLinks.thumbnail}   alt={item.volumeInfo.title} className='library-image'/>
    //                 <p className='library-title'>{item.volumeInfo.title}</p>
    //                 <p className='library-author'>{item.volumeInfo.authors}</p>
    //             </div>)}
    //         </div>

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
    };


    render() {
      
        const {library} = this.state;
        return (
            <div className="App">

                {/* <Header /> */}
                <Main library={library}/>   

            </div>
            //   <div className="App">
      
    //         <div className="library">
    //           {library.map(item => 
    //             <div className='library-item' key={item.id}>
    //                 <img src={item.volumeInfo.imageLinks.thumbnail}   alt={item.volumeInfo.title} className='library-image'/>
    //                 <p className='library-title'>{item.volumeInfo.title}</p>
    //                 <p className='library-author'>{item.volumeInfo.authors}</p>
    //             </div>)}
    //         </div>
    );
  }
}

export default App;
