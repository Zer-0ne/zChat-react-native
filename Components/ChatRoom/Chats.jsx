import React from 'react'
import { Text, View } from 'react-native';
import { styles, Typewriter } from '../index'
// import TypeWriter from 'react-native-typewriter';
const Chats = ({ message,bgColor }) => {

  return (
    <>
      <View
        style={{
          color: 'white',
          backgroundColor: `${bgColor}`,
          // flex: 1,
          // maxHeight: '90%',
          width: '100%',
          padding: 20,
          marginTop: 10,
          borderRadius: 10,
          justifyContent: 'flex-start',
          borderRadius: 10,
        }}

      >
        <Typewriter
          style={styles.Text}
          text={message}
          speed={30}
        />
      </View>
    </>
  )
}

export default Chats
