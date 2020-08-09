class xock{http(data){return new Promise((resolve,reject)=>{var xhr=new XMLHttpRequest();xhr.open(data.method.toUpperCase(),data.url,data.asyc); for(let i=0;i<data.header.length;i++){xhr.setRequestHeader(data.header[0],data.header[1]);i+2} xhr.onload=function(){if(xhr.readyState==4&&xhr.status=='200'||xhr.readyState==4&&xhr.status=='201'){if(!data.resolve||data.resolve.toLowerCase()=='text'){resolve(this.responseText)}else if(data.resolve.toLowerCase()=='xml'){resolve(this.responseXML)}else if(data.resolve.toLowerCase()=='json'){resolve(JSON.parse(this.responseText))}}else{reject(this.responseText)}} if(data.body){if(data.body[0].toLowerCase()=='form-data'){xhr.send(data.body[1])}else{xhr.send(JSON.stringify(data.body[1]))}}else{xhr.send(null)}})}}



