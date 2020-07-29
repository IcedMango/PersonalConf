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

let obj = JSON.parse($response.body);
obj["success"] = false;
$done({ body: JSON.stringify(obj) });