import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import styles from "./styles";

export default function MessageView({ thisObj }) {
  return (
    <View style={styles.messageInputView}>
      <View style={styles.messageTextView}>
        <TextInput
          placeholder="Type Message ....."
          value={thisObj.state.message}
          multiline={true}
          underlineColorAndroid="transparent"
          style={styles.messageText}
          onChangeText={(text) => thisObj.setState({ message: text })}
        />
        {thisObj.state.message.length == 0 ? (
          <TouchableOpacity
            style={styles.textInputIcon}
            onPress={() => thisObj.send()}
          >
            <MaterialIcons name="camera" size={25} color={"#0033cc"} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.textInputIcon}
            onPress={() => thisObj.send()}
          >
            <MaterialIcons name="attach-file" size={25} color={"#0033cc"} />
          </TouchableOpacity>
        )}
      </View>
      {thisObj.state.message.length > 0 ? (
        <TouchableOpacity
          style={styles.sendView}
          onPress={() => thisObj.send()}
        >
          <MaterialIcons name="send" size={25} color={"#0033cc"} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.sendView}
          onPress={() => thisObj.send()}
        >
          <MaterialIcons name="mic" size={25} color={"#0033cc"} />
        </TouchableOpacity>
      )}
    </View>
  );
}
