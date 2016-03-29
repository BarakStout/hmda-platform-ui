var React = require('react');
var Link = require('react-router').Link;

var Resubmit = React.createClass({
  handleClick: function(){
    /*API call to cancel in-flight validation*/
  },
  render: function(){
    return (
      <p className="resubmit">
        <Link to={'/upload/' + this.props.institution.name} onClick={this.handleClick}>Resubmit</Link> - Resubmitting will allow you to correct any errors or invalid data encountered. Each error report will be saved so you can track your progress after resubmission.
      </p>
    )
  }
});


module.exports = Resubmit;
