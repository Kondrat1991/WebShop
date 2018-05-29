import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OwnCompareBook from "../OwnCompareBook/OwnCompareBook";

class CompareBooks extends Component {
    state = {
        compare: this.props.compare,
    };

    render() {
        return (
            <div className='main-compare'>
                {this.state.compare.map((obj) => <OwnCompareBook img={obj.img}
                                                      title={obj.title}
                                                      author={obj.author}
                                                      price={obj.price}
                                                      addToCompareBooks={this.props.addToCompareBooks}
                                                      deleteCompareBooks={this.props.deleteCompareBooks}
                />)}
            </div>
        );
    }
}

CompareBooks.propTypes = {};

export default CompareBooks;

