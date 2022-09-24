const os=require("os");

let hostname= os.hostname();
console.log("hostname is ",hostname);

let platform =os.platform();
console.log("platform is ",platform);

let totalmemory =os.totalmem();
console.log("total memory is ",totalmemory/(1024*1024*1024));

let freememory =os.freemem();
console.log("free memory is ",freememory);

let cpus =os.cpus();
console.log("cpus is ",cpus);

let userinfo=os.userInfo();
console.log("userinfo is",userinfo);


