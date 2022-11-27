const express = require("express");
const sha1 = require("sha1");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")))

//微信订阅号的配置信息
const config = {
  wechat: {
    appID: "wxefd9f2e34bed9bec",
    appsecret: "d6b9a1ee3340f54a5e2e11a81882be76",
    //这里你得填写你自己设置的Token值
    token: "wechat",
  },
};

app.get("/check", function (req, res) {
  const { signature, timestamp,  nonce, echostr } = req.query || {};
  const token = config.wechat.token;
  const str = [token, timestamp, nonce].sort().join("");
  const sha1Str = sha1(str);
  if (sha1Str === signature) {
    res.send(echostr)
  } else {
    res.send("wrong")
  }
});

app.get("/MP_verify_wF97D0YKl2GXEkPV.txt", function (req, res) {
  const fileContent = fs.readFileSync("./MP_verify_wF97D0YKl2GXEkPV.txt", {
    encoding: "utf8",
    flag: "r",
  });
  return res.send(fileContent);
});

// SSL
app.get("/.well-known/acme-challenge/:id", function (req, res) {
  console.log('req--', req.params)
  const { id } = req.params;
  const fileContent = fs.readFileSync(`./.well-known/acme-challenge/${id}`, {
    encoding: "utf8",
    flag: "r",
  });
  return res.send(fileContent);
})

app.listen(80, function () {
  console.log("Serve is up !");
});