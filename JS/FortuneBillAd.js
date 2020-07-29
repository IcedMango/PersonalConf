
let obj = JSON.parse("{\"success\":true,\"message\":[{\"id\":35,\"name\":\"百度\",\"path\":\"\",\"order\":29,\"url\":\"https://www.baidu.com/\",\"effectTime\":4070880000000,\"failTime\":4073558400000,\"platform\":\"1\",\"enabled\":true,\"brandNo\":null}]}");
$done({ body: JSON.stringify(obj) });