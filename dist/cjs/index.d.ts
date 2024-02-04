import React from 'react';

type ButtonTestProps = {
    buttonText: string;
};
declare const ButtonTest: (props: ButtonTestProps) => React.JSX.Element;

type SampleComponentProps = {
    title: string;
    url: string;
};
declare const SampleComponent: (props: SampleComponentProps) => React.JSX.Element;

export { ButtonTest, type ButtonTestProps, SampleComponent, type SampleComponentProps };
