import React from 'react';

const Portfolio = (props) =>  {
    const trans = props.trans;
    const portfolioList = trans.portfolio.list.map((data, index) =>
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
        <div className="segment portfolio light">
            <div className="container">
                <i className="fa fa-eye fa-3x"></i>
                <h3 className="segment-title">{trans.portfolio.title}<span className="point">.</span></h3>
                <hr/>
                <div className="portfolio-cards">
                    {portfolioList}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
