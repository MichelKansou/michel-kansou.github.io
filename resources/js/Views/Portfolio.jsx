var React = require('react');

var Portfolio = React.createClass({
    render: function() {
      var trans = this.props.trans;
      var portfolioList = trans.Portfolio.list.map((data, index) =>
          <div className="card" key={index}>
                <div className="image">
                    <img src={data.img}/>
                </div>
                <div className="content" key={index}>
                      <a className="header" href={data.url}>{data.projectName}</a>
                      <div className="description">
                            {data.description}
                      </div>
                </div>
          </div>
      )
      return (
        <div className="ui inverted vertical masthead center aligned segment customSegment2">
            <div className="ui text container portfolio-container">
                <div className="segment-title">
                    <i className="fa fa-eye"> - {trans.Portfolio.title} </i>
                </div>
                <div className="ui link cards portfolio-cards">
                    {portfolioList}
                </div>
            </div>
      </div>
      );
    }
});

export default Portfolio;
