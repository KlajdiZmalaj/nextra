import { Progress } from "antd";
import axios from "axios";
<input
  type="file"
  onChange={async (e) => {
    //console.log("ca ka e", e.target.files);
    let data = new FormData();
    data.append("file", e.target.files[0]);
    var req = await axios.post("/", data, {
      onUploadProgress: (e) => {
        var percentComplete = parseInt((e.loaded * 100) / e.total);
        console.log("ca ka progres", percentComplete);
        this.setState({ prc: percentComplete });
      },
    });
    let data = await req.json();
    console.log("data", data);
  }}
/>;

<Progress percent={this.state.prc || 0} />;
