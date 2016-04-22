var React = require('react');
var Button = require('react-materialize').Button;

module.exports = React.createClass({
    handleClick: function() {
        alert("clickin'");
    },
    render: function() {
        return (
            <Button onClick={this.handleClick} />
        )
    }
});