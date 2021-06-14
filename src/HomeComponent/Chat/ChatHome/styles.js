import { StyleSheet, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",

    paddingVertical: hp("1.6%"),
  },
  itemImage: {
    height: hp("6%"),
    width: hp("6%"),
    borderRadius: hp("3%"),
  },
  title: {
    fontSize: hp("2.2%"),
    width: "70%",
  },
  itemTitleView: {
    height: hp("8%"),
    width: "85%",
    borderBottomWidth: 1,
    borderBottomColor: "#d2d2d2",
    marginLeft: wp("3%"),
  },
  msgSender: {
    fontSize: hp("2.2%"),
  },
  msgShow: {
    width: "60%",
    paddingTop: hp("1%"),
  },
  timeView: {
    position: "absolute",
    top: 2,
    right: 8,
  },
  speratorView: {
    height: 2,
  },
});

export default styles;
