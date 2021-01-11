import { Progress } from "antd";
import axios from "axios";
<input
  type="file"
  onChange={(e) => {
    //console.log("ca ka e", e.target.files);
    let data = new FormData();
    data.append("file", e.target.files[0]);
    axios
      .post("/", data, {
        onUploadProgress: (e) => {
          var percentComplete = parseInt((e.loaded * 100) / e.total);
          console.log("ca ka progres", percentComplete);
          this.setState({ prc: percentComplete });
        },
      })
      .then((data) => data.json())
      .then((res) => console.log("res", res));
  }}
/>;

<Progress percent={this.state.prc || 0} />;
