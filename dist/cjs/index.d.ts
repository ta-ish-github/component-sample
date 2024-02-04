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

type SampleComponent2Setting = {
    url: string;
};

type SampleComponent2Props = {
    title: string;
};
declare const SampleComponent2: (props: SampleComponent2Props) => React.JSX.Element;

declare const SampleComponentProvider: (props: {
    setting: SampleComponent2Setting;
    children: React.ReactNode;
}) => React.JSX.Element;

export { ButtonTest, type ButtonTestProps, SampleComponent, SampleComponent2, type SampleComponent2Props, type SampleComponent2Setting, type SampleComponentProps, SampleComponentProvider };
