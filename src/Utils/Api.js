const axios = require("axios");
const URL = { base_url: "http://143.110.247.144/" };

class ApiUrl {
  async getDataUsingGet(subUrl) {
    const token = "";
    const head = {
      headers: {
        Authorization: "Bearer " + token,
  
      },
    };

    try {
      const responseData = await axios.get(URL.base_url + subUrl, head);
      if (responseData.status != 200) {
        return { log: false, response: error };
      }
      
      return { log: true, response: responseData.data };
    } catch (error) {
      console.log(error);
      return { log: false, response: error };
    }
  }
}
const Api = new ApiUrl();

export default Api;
