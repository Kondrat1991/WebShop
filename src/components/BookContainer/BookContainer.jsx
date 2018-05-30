import React from 'react';
//import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';
import './index.css'

const BookContainer = ({library}) => {
    // console.log('liblraly', library.every((item) => item.saleInfo.listPrice.amount));
    return (
        <div className="book-section">

            {library[0] && library.map((obj) => {
                // debugger
                return (
                    <BookCard
                        key={obj.id}
                        price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
                        title={obj.volumeInfo.title}
                        image={obj.volumeInfo.imageLinks.thumbnail}
                    />
                )
            })}


        </div>
    );
};

/*BookContainer.propTypes = {};
BookContainer.defaultProps = {};*/

export default BookContainer;

/*class BookContainer extends Component {
    static defaultProps = {};
    static propTypes = {};
    state = {
        books: [
            {
                title: "First First First",
                image: "https://s-i.huffpost.com/gadgets/slideshows/343574/slide_343574_3569328_free.jpg",
                price: "10",
                id:"1"
            },

            {
                title: "Second",
                image: "https://www.treadwells-london.com/wp-content/uploads/2014/12/TheBookOfTheLawPBK.jpg",
                price: "11",
                id:"2"
            },

            {
                title: "Third",
                image: "http://s3.otherpeoplespixels.com/sites/31209/assets/HSHu6Qb7eAXiQwnp.jpg",
                price: "12",
                id:"3"
            },

            {
                title: "First First First",
                image: "https://s-i.huffpost.com/gadgets/slideshows/343574/slide_343574_3569328_free.jpg",
                price: "10",
                id:"4"
            },

            {
                title: "Second",
                image: "https://www.treadwells-london.com/wp-content/uploads/2014/12/TheBookOfTheLawPBK.jpg",
                price: "11",
                id:"5"
            },

            {
                title: "Third",
                image: "http://s3.otherpeoplespixels.com/sites/31209/assets/HSHu6Qb7eAXiQwnp.jpg",
                price: "12",
                id:"6"
            },

            {
                title: "Fourth",
                price: "14",
                id:"7"
            }

        ]
    }


    ;

   render() {
        return (
            <div className="book-section">

                {this.state.books.map((obj) => <BookCard key={obj.id} title={obj.title} image={obj.image}
                                                         price={obj.price}/>)}

            </div>
        );
    }
}

export default BookContainer;*/
