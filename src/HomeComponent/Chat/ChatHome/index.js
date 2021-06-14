import React, { useState } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";

import styles from "./styles";
import { msgData } from "./Data";
import ChatTab from "./ChatTab";

import Header from "../../ModuleComponent/Header";
import LoadingModal from "../../../Utils/LoadingModal";
import { getChatList } from "./localFunction";
export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      msgData: null,
    };
  }

  componentDidMount() {
    getChatList(this);
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      getChatList(this);
    });
  }

  renderItem = ({ item }) => {
    return (
      <ChatTab
        item={item}
        onPress={() =>
          this.props.navigation.navigate("ChatScreen", {
            messageList: item,
            currentUser: msgData.user,
          })
        }
      />
    );
  };
  itemSeprator = () => {
    return <View style={styles.speratorView} />;
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Header
            headerTitle={"Chat"}
            type={"main"}
            navigation={this.props.navigation}
          />
          {this.state.msgData != null ? (
            <FlatList
              ItemSeparatorComponent={this.itemSeprator}
              data={this.state.msgData.chats}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.jdName}
            />
          ) : null}
          <LoadingModal
            visible={this.state.isLoading && this.state.msgData == null}
          />
        </SafeAreaView>
      </>
    );
  }
}
