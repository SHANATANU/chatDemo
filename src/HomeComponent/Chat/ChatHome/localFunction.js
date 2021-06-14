import Api from "../../../Utils/Api";

export async function getChatList(thisObj) {
  thisObj.setState({ isLoading: true });
  const responsedata = await Api.getDataUsingGet("chat");
  if (!responsedata.log) {
    // Bypass user to login screen when on basis of status
    thisObj.setState({ isLoading: false });
    alert("Invalid url call");
    return;
  }

  thisObj.setState({ isLoading: false, msgData: responsedata.response });
}
