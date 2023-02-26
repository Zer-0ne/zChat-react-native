import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {styles} from '../index'
const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prevDisplayText) => prevDisplayText + text.charAt(i));
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return <Text numberOfLines={null} style={styles.Text} >{displayText}</Text>;
};

export default Typewriter;
