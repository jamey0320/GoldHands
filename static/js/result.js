function sendLinkCustom() {
    Kakao.init("aeaec25017200e6a3e5b2541c567aa47");
    Kakao.Link.sendCustom({
        templateId: 65867,
        templateArgs: { "THU" : "http://127.0.0.1:8081/static/uploads/input_file.png"}
    });
}
