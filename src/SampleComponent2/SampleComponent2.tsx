import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/react';
import ShowCount2 from './ShowCount';

export type SampleComponent2Props = {
  title: string;
};

export const SampleComponent2 = (props: SampleComponent2Props) => {
  const [isClicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <>
      <Text>2: {props.title}</Text>
      <Button colorScheme="blue" onClick={clickHandler}>
        件数取得
      </Button>
      {isClicked && <ShowCount2 />}
    </>
  );
};
