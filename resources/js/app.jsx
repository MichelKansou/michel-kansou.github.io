var React = require('react');
var ReactDOM = require('react-dom');
var T = require('i18n-react');
var $ = require('jquery');
var ga = require('react-google-analytics');
import NavigationMenu from './Views/NavigationMenu.jsx';
import PageContents from './Views/PageContents.jsx';
import Footer from './Views/Footer.jsx';


import English from '../locales/EN-en.yml';
import French from '../locales/FR-fr.yml';

var App = React.createClass({
    getInitialState: function() {
        return {
            trans: English
        };
    },
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
    handleClick( language ) {
        if ( language == 'FR' ){
            this.setState({
                trans: French
            });
        }
        else {
            this.setState({
                trans: English
            });
        }
    },
  render: function() {
      ga('create', 'UA-69121322-1', 'auto');
      ga('send', 'pageview');
      var GAInitiailizer = ga.Initializer;
      var translation = this.state.trans;
    //   console.log(this.state.languagechanged);
    //   var trans = this.state.languagechanged;
    return (
        <div className="app-container">
            <NavigationMenu trans={translation} handleClick={this.handleClick} />
            <PageContents trans={translation}/>
            <Footer trans={translation}/>
            <GAInitiailizer />
        </div>
        );
  }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
