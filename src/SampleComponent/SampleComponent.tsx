import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/react';
import ShowCount from './ShowCount';

export type SampleComponentProps = {
  title: string;
  url: string;
};

export const SampleComponent = (props: SampleComponentProps) => {
  const [isClicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <>
      <Text>{props.title}</Text>
      <Button colorScheme="blue" onClick={clickHandler}>
        件数取得
      </Button>
      {isClicked && <ShowCount url={props.url} />}
    </>
  );
};
