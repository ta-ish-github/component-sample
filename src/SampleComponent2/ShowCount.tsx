/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from './SampleComponentProvider';

const ShowCount2 = () => {
  const context = useContext(UserContext);

  const [roomCount, setRoomCount] = useState<number>(0);
  const [memberCount, setMemberCount] = useState<number>(0);
  const [isComplete, setComplete] = useState(false);
  axios
    .get(context.url)
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

export default ShowCount2;
