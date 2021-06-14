import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import styles from "./styles";
import MessageCard from "./MessageCard";
import MessageView from "./MessageView";
import Header from "../../ModuleComponent/Header";
import moment from "moment";

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageList: [],
    };
  }

  componentDidMount() {
    this.getMessage();
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.getMessage();
    });
  }

  getMessage = () => {
    this.setState({
      messageList: this.props.route.params.messageList.messages,
    });
  };

  renderItem = ({ item }) => {
    return (
      <MessageCard item={item} sender={this.props.route.params.currentUser} />
    );
  };
  itemSeprator = () => {
    return <View style={styles.speratorView} />;
  };

  send = () => {
    let msgData = {
      from: this.props.route.params.currentUser,
      message: this.state.message,
      time: moment().format("DD/MM/YYYY hh:mm:ss"),
      to: "Demo",
    };

    this.setState((prevState) => ({
      messageList: [...prevState.messageList, msgData],
      message: "",
    }));
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Header
            headerTitle={this.props.route.params.messageList.topic}
            type={"sub"}
            navigation={this.props.navigation}
          />
          <FlatList
            ItemSeparatorComponent={this.itemSeprator}
            data={this.state.messageList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.time}
          />
          <MessageView thisObj={this} />
        </SafeAreaView>
      </>
    );
  }
}
