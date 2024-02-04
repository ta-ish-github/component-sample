'use strict';

var React = require('react');
var react = require('@chakra-ui/react');
var button = require('@chakra-ui/button');
var axios = require('axios');

var ButtonTest = function (props) {
    return (React.createElement(react.Button, { colorScheme: 'blue' }, props.buttonText));
};

/* eslint-disable @typescript-eslint/no-unused-vars */
var ShowCount = function (props) {
    var _a = React.useState(0), roomCount = _a[0], setRoomCount = _a[1];
    var _b = React.useState(0), memberCount = _b[0], setMemberCount = _b[1];
    var _c = React.useState(false), isComplete = _c[0], setComplete = _c[1];
    axios
        .get(props.url)
        .then(function (d) {
        console.log(d);
        console.log(roomCount);
        console.log(memberCount);
        setRoomCount(d.data.roomCount);
        setMemberCount(d.data.memberCount);
        setComplete(true);
    })
        .catch(function (e) {
        console.log('e', e);
    });
    return (React.createElement(React.Fragment, null, isComplete && (React.createElement(React.Fragment, null,
        React.createElement(react.Text, null, "roomCount: ".concat(roomCount)),
        React.createElement(react.Text, null, "memberCount: ".concat(memberCount))))));
};

var SampleComponent = function (props) {
    var _a = React.useState(false), isClicked = _a[0], setClicked = _a[1];
    var clickHandler = function () {
        setClicked(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react.Text, null, props.title),
        React.createElement(button.Button, { colorScheme: "blue", onClick: clickHandler }, "\u4EF6\u6570\u53D6\u5F97"),
        isClicked && React.createElement(ShowCount, { url: props.url })));
};

var UserContext = React.createContext({ url: '' });
var SampleComponentProvider = function (props) {
    return (React.createElement(UserContext.Provider, { value: props.setting }, props.children));
};

/* eslint-disable @typescript-eslint/no-unused-vars */
var ShowCount2 = function () {
    var context = React.useContext(UserContext);
    var _a = React.useState(0), roomCount = _a[0], setRoomCount = _a[1];
    var _b = React.useState(0), memberCount = _b[0], setMemberCount = _b[1];
    var _c = React.useState(false), isComplete = _c[0], setComplete = _c[1];
    axios
        .get(context.url)
        .then(function (d) {
        console.log(d);
        console.log(roomCount);
        console.log(memberCount);
        setRoomCount(d.data.roomCount);
        setMemberCount(d.data.memberCount);
        setComplete(true);
    })
        .catch(function (e) {
        console.log('e', e);
    });
    return (React.createElement(React.Fragment, null, isComplete && (React.createElement(React.Fragment, null,
        React.createElement(react.Text, null, "roomCount: ".concat(roomCount)),
        React.createElement(react.Text, null, "memberCount: ".concat(memberCount))))));
};

var SampleComponent2 = function (props) {
    var _a = React.useState(false), isClicked = _a[0], setClicked = _a[1];
    var clickHandler = function () {
        setClicked(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react.Text, null,
            "2: ",
            props.title),
        React.createElement(button.Button, { colorScheme: "blue", onClick: clickHandler }, "\u4EF6\u6570\u53D6\u5F97"),
        isClicked && React.createElement(ShowCount2, null)));
};

exports.ButtonTest = ButtonTest;
exports.SampleComponent = SampleComponent;
exports.SampleComponent2 = SampleComponent2;
exports.SampleComponentProvider = SampleComponentProvider;
