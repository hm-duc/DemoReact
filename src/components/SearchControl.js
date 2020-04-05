import React from 'react'

class SearchControl extends React.Component {
      render() {
            return (
                  <div className="input-group">
                        <input className="form-control" type="text" placeholder="Input Keyword" />
                        <span className="input-group-btn">
                              <button className="btn btn-primary" type="button">
                                    <span className="fa fa-search">
                                          &nbsp;Search
                                    </span>
                        </button>
                        </span>
                  </div>
            )
      }
}

export default SearchControl