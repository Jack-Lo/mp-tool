import reqwest from "reqwest";
import { Message } from "element-ui";

const baseUrl = "http://localhost:3000";

const err = {
  show(e) {
    const msg = typeof e === "string" ? e : e.msg || e.toString();
    Message.error(msg || "未知错误");
    console.error(e);
  }
};

const project = {
  getConfig(data) {
    const url = `${baseUrl}/api/project/config`;
    return reqwest({ url, data });
  }
};

const app = {
  getConfig(data) {
    const url = `${baseUrl}/api/app/config`;
    return reqwest({ url, data });
  }
};

export default {
  err,
  project,
  app
};
