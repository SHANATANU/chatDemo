import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  topiew: {
    height: hp("7%"),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0033cc",
  },

  headerTitle: {
    fontSize: hp("2.8%"),
    color: "#fff",
    width: "100%",
  },
  iconView: {
    marginLeft: wp("2.5%"),
  },
  headerChatTopic: {
    fontSize: hp("2.4%"),
    color: "#fff",
    width: "80%",
    paddingHorizontal: wp("3%"),
  },
  itemImage: {
    height: hp("4%"),
    width: hp("4%"),
    borderRadius: hp("2%"),
    marginLeft: wp("2.5%"),
  },
});

export default styles;
