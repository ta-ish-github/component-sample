import React, { useState, createContext, useContext } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Button as Button$1 } from '@chakra-ui/button';
import axios from 'axios';

var ButtonTest = function (props) {
    return (React.createElement(Button, { colorScheme: 'blue' }, props.buttonText));
};

/* eslint-disable @typescript-eslint/no-unused-vars */
var ShowCount = function (props) {
    var _a = useState(0), roomCount = _a[0], setRoomCount = _a[1];
    var _b = useState(0), memberCount = _b[0], setMemberCount = _b[1];
    var _c = useState(false), isComplete = _c[0], setComplete = _c[1];
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
        React.createElement(Text, null, "roomCount: ".concat(roomCount)),
        React.createElement(Text, null, "memberCount: ".concat(memberCount))))));
};

var SampleComponent = function (props) {
    var _a = useState(false), isClicked = _a[0], setClicked = _a[1];
    var clickHandler = function () {
        setClicked(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, null, props.title),
        React.createElement(Button$1, { colorScheme: "blue", onClick: clickHandler }, "\u4EF6\u6570\u53D6\u5F97"),
        isClicked && React.createElement(ShowCount, { url: props.url })));
};

var UserContext = createContext({ url: '' });
var SampleComponentProvider = function (props) {
    return (React.createElement(UserContext.Provider, { value: props.setting }, props.children));
};

/* eslint-disable @typescript-eslint/no-unused-vars */
var ShowCount2 = function () {
    var context = useContext(UserContext);
    var _a = useState(0), roomCount = _a[0], setRoomCount = _a[1];
    var _b = useState(0), memberCount = _b[0], setMemberCount = _b[1];
    var _c = useState(false), isComplete = _c[0], setComplete = _c[1];
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
        React.createElement(Text, null, "roomCount: ".concat(roomCount)),
        React.createElement(Text, null, "memberCount: ".concat(memberCount))))));
};

var SampleComponent2 = function (props) {
    var _a = useState(false), isClicked = _a[0], setClicked = _a[1];
    var clickHandler = function () {
        setClicked(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, null,
            "2: ",
            props.title),
        React.createElement(Button$1, { colorScheme: "blue", onClick: clickHandler }, "\u4EF6\u6570\u53D6\u5F97"),
        isClicked && React.createElement(ShowCount2, null)));
};

export { ButtonTest, SampleComponent, SampleComponent2, SampleComponentProvider };
