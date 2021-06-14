import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import moment from "moment";
import styles from "./styles";

export default function MessageCard({ item, onPress, sender }) {
  function getDateTimeFormate(msgTime) {
    let today = moment();
    let yesterday = moment().subtract(1, "day");
    let tempDate = moment(msgTime, "DD/MM/YYYY hh:mm:ss");
    return tempDate.format("hh:mm");
  }

  return (
    <View
      onPress={onPress}
      style={
        item.from.toLowerCase() == sender.toLowerCase()
          ? styles.senderView
          : styles.receiverView
      }
    >
      <View
        style={
          item.from.toLowerCase() == sender.toLowerCase()
            ? styles.senderMessageView
            : styles.receiverMessageView
        }
      >
        {item.from.toLowerCase() != sender.toLowerCase() ? (
          <Text style={styles.msgFrom}>{item.from}</Text>
        ) : null}
        <Text style={styles.msgView}>{item.message}</Text>
        <Text style={styles.timeView}>{getDateTimeFormate(item.time)}</Text>
      </View>
    </View>
  );
}
