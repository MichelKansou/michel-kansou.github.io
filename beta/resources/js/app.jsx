var React = require('react');
var ReactDOM = require('react-dom');
var T = require('i18n-react');
var $ = require('jquery');
import NavigationMenu from './Views/NavigationMenu.jsx';
import PageContents from './Views/PageContents.jsx';
import Footer from './Views/Footer.jsx';


T.setTexts( require('../locales/translation.yml') );

var App = React.createClass({
    //Write all Js for Semantic UI in root App in componentDidMount function :D
    componentDidMount() {
        $(document).ready(function(){
            var offset = $(".headerNav").offset().top;
            $(document).scroll(function(){
                var scrollTop = $(document).scrollTop();
                if(scrollTop > offset){
                    $(".headerNav").css("position", "fixed");
                }
                else {
                    $(".headerNav").css("position", "relative");
                }
            });
          $('#menu-icon').on('click', function(){
            $('.navbar').toggleClass('expand');
            return false;
          });
        });
    },
    getInitialState: function() {
        return {
            languagechanged: 'EN.'
        };
    },
    handleClick: function(value) {
        this.setState({
            languagechanged: value
        })
    },
  render: function() {
      console.log(this.state.languagechanged);
      var trans = this.state.languagechanged;
    return (
        <div className="app-container">
            <NavigationMenu trans={trans} handleClick={this.handleClick} />
            <PageContents trans={trans}/>
            <Footer trans={trans}/>
        </div>
        );
  }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
