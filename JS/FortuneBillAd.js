// let resp = {
//     success: true,
//     message: {
//         appName: "mpos",
//         downloadUrl:
//             "https://itunes.apple.com/cn/app/zhao-qian-jin-bao/id1112416569?mt=8",
//         id: 7590,
//         mustUpgradeNow: true,
//         describe: "细节优化，修复已知问题",
//         version: "v6.9.2",
//         platform: "ios",
//     },
// };

let obj = JSON.parse("{\"success\":true,\"message\":[{\"id\":35,\"name\":\"省交易\",\"path\":\"\",\"order\":29,\"url\":\"https://mtrade.fortunebill.com/active/preferential.html\",\"effectTime\":1595347200000,\"failTime\":1601395200000,\"platform\":\"1\",\"enabled\":false,\"brandNo\":null}]}");
$done({ body: JSON.stringify(obj) });