import { StyleSheet, StatusBar, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#0080ff",
  },
  senderView: {
    width: screenWidth,
    alignItems: "flex-end",
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("2%"),
  },
  receiverView: {
    width: screenWidth,
    alignItems: "flex-start",
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("2%"),
  },
  receiverMessageView: {
    maxWidth: "70%",
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5,
    marginVertical: 1,
    elevation: 3,
  },
  senderMessageView: {
    maxWidth: "70%",
    backgroundColor: "#c7dcff",
    padding: 5,
    borderRadius: 5,
    marginVertical: 1,
    elevation: 3,
  },
  msgFrom: {
    fontSize: hp("2.4%"),
    fontWeight: "bold",
  },
  msgView: {
    paddingLeft: wp("2%"),
  },
  timeView: {
    alignSelf: "flex-end",
  },
  speratorView: {
    height: 2,
  },
  messageInputView: {
    flexDirection: "row",
    backgroundColor: "#0080ff",
    height: hp("7%"),
    width: screenWidth,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("2%"),
  },
  messageTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth-wp('18%'),
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: wp("2%"),
    alignItems: "center",
  },
  messageText: {
    width: "80%",
    paddingLeft: 10,
    height: hp("6%"),
  },
  textInputIcon: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 40,
  },
  sendView: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 30,
  },
  textInputCamView: {
    flexDirection: "row",
  },
});

export default styles;
