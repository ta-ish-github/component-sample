/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';

const ShowCount = (props: { url: string }) => {
  const [roomCount, setRoomCount] = useState<number>(0);
  const [memberCount, setMemberCount] = useState<number>(0);
  const [isComplete, setComplete] = useState(false);
  axios
    .get(props.url)
    .then((d) => {
      console.log(d);
      console.log(roomCount);
      console.log(memberCount);
      setRoomCount(d.data.roomCount);
      setMemberCount(d.data.memberCount);
      setComplete(true);
    })
    .catch((e) => {
      console.log('e', e);
    });

  return (
    <>
      {isComplete && (
        <>
          <Text>{`roomCount: ${roomCount}`}</Text>
          <Text>{`memberCount: ${memberCount}`}</Text>
        </>
      )}
    </>
  );
};

export default ShowCount;
