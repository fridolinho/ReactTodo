import React, { Component, PropTypes } from 'react';

class Pages extends Component {
    render() {
      const { pages, next, currentPage } = this.props;
        return (
          <div className="pages">
            {
              [...Array(pages)].map((page, i) =>
              <span key={i} className={`page ${currentPage === i+1 ? 'active' : ''}`} onClick={() => next(i)}>{i + 1}</span>
              )
            }
          </div>
        );
    }
}

export default Pages;
