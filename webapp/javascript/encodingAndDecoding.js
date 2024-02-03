let myGithubUrl = "https://github.com/amidah/mern-stack-phase-1/projects?query=is%3Aopen";

let decodedGithubUrl = decodeURIComponent(myGithubUrl);

console.log(myGithubUrl + " =========== " + decodedGithubUrl);

let exmapleGoogleUrl = "https://www.google.com/search?q=javascript&oq=javascript&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDIHCAUQABiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIQCAgQABiDARixAxiABBiKBTINCAkQABiDARixAxiABNIBCDE3MDhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";

let decodeGoogleUrl = decodeURIComponent(exmapleGoogleUrl);

// console.log(exmapleGoogleUrl + " ============ " + decodeGoogleUrl);

let myurl = "https://www.exampleurl.com?name=John Smith";

let encodedUrl = encodeURIComponent(myurl);

// console.log(encodedUrl);

let decodeUrl = decodeURIComponent(encodedUrl);

// console.log(decodeUrl);

let username = "John Smith";
let password = "John@1234";

let encodedPassword = btoa(password);

let mysiteurl = "https://www.mysite.com?name="+username+"&password="+encodedPassword;

console.log(mysiteurl);

console.log(password + " ======= " + encodedPassword);
