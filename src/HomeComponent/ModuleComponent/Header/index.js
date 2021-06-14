import * as React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
export default function index({ headerTitle, type, navigation }) {
  return (
    <>
      {type == "main" ? (
        <View style={styles.topiew}>
          <Text style={[styles.headerTitle, { textAlign: "center" }]}>
            {headerTitle}
          </Text>
        </View>
      ) : (
        <View style={[styles.topiew]}>
          <Ionicons
            name="chevron-back"
            size={24}
            color="#fff"
            style={styles.iconView}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Image
            style={styles.itemImage}
            source={require("../../../../assets/user.png")}
          />
          <Text numberOfLines={1} style={styles.headerChatTopic}>
            {headerTitle}
          </Text>
        </View>
      )}
    </>
  );
}
