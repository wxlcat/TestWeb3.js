var fs=require('fs');
var fs=require('fs');
var http=require('http');
var url=require('url');
//创建一个服务器
http.createServer(function(req,res){
    if(req.url!="/favicon.ico"){
        var urlObj=url.parse(req.url,true,false);
        console.log(urlObj.pathname);
        fs.readFile('.'+urlObj.pathname,function(err,data){
            if(err){
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            console.log(data.toString());
            //将文件的内容写入res响应对象
            res.end(data);
        });
    }
}).listen(8080);