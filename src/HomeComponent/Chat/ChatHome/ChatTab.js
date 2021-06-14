import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import moment from "moment";
import styles from "./styles";

export default function ChatTab({ item, onPress }) {
  let lastMsg = item.messages[item.messages.length - 1];
  function getDateTimeFormate(msgTime) {
    let today = moment();
    let yesterday = moment().subtract(1, "day");
    let tempDate = moment(msgTime, "DD/MM/YYYY hh:mm:ss");
    if (moment(tempDate).isSame(today, "day")) return tempDate.format("hh:mm");
    else if (moment(tempDate).isSame(yesterday, "day")) return "Yesterday";
    else return tempDate.format("DD/MM/YYYY");
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Image
        style={styles.itemImage}
        source={require("../../../../assets/user.png")}
      />
      <View style={styles.itemTitleView}>
        <Text numberOfLines={1} style={styles.title}>
          {item.topic}
        </Text>
        <Text numberOfLines={1} style={styles.msgShow}>
          <Text numberOfLines={1} style={styles.msgSender}>
            {lastMsg.from} :{" "}
          </Text>
          {lastMsg.message}
        </Text>
        <Text style={styles.timeView}>{getDateTimeFormate(lastMsg.time)}</Text>
      </View>
    </TouchableOpacity>
  );
}
