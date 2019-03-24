//let host = "https://bfpforecast.000webhostapp.com/phdfire/"
//let host = "https://bfpfireproject.000webhostapp.com/phdfire/phdfire/"
let host = 'http://localhost/phdfireproject/phdfire/'
/* let host = 'http://192.168.254.103/phdfireproject/phdfire/' */

var forecast_data = null

function deleteImage(image, func_callback){
    $.get(host+"deleteImage.php",{
        image: image
    },function(data,status) {
        console.log(data)
        console.log(status)
        if (status == "success"){
            if (func_callback)
                func_callback()
        }
    })
}

function getReports(isReadable, func_callback) {
    $.get(host+"getreportsV2.php",{
        readable: isReadable
    },function (data, status) {
        //alert("Data: " + data + "\nStatus: " + status);
        //console.log(data)
        //return data
        //readablReports(JSON.parse(data))
        if (status == "success"){
            func_callback(JSON.parse(data))
        }
    });
}

function getPost(id,userid,func_callback){
    $.get(host+"getPost.php",{
        id: id,
        userid
    },function(data,status) {
        if (status == "success"){
            func_callback(data)
        }
    })
}

function addPost(formdata, func_callback){
    $.post(host+"addPost.php",{
        data: $(formdata).serialize()
    },function(data,status){
        console.log(status)
        console.log(data)
    })
}

function editPost(id,title,content,images,func_callback){
    $.post(host+"editPost.php",{
        id: id,
        title: title,
        content: content,
        images, images,
    }, function(data,status){
        console.log(status)
        console.log(data)
    })
}

function deletePost(id,func_callback){
    $.get(host+"deletePost.php",{
        id: id
    }, function(data,status){
        console.log(status)
        console.log(data)
    })
}



function saveReportReadable(item,userid,func_callback){
    $.post(host+"savereports.php",{
        readable: true,
        date: item.date,
        cause: item.cause,
        alarm: item.alarm,
        temperature: item.temp,
        establishment_type: item.type,
        district: item.district,
        userid
    },
    function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        func_callback()
    });
}

function saveReport(report,userid,callback){
    $.post(host+"savereports.php",{
        readable: false,
        report,
        userid
    },
    function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        if(callback!= null)
            callback()
    });
}

function deleteReports(id,callback){
    $.post(host+"deletereports.php",{
        id
    }, function(data,status){
        console.log(data+status)
        if (callback != null){
            callback()
        }
    })
}
//getReports()

function getClassifier(func_callback) {
    $.get(host+"getclassifier.php", function (data, status) {
        func_callback(data)
    });
}

function saveClassifier(model) {
    $.get(host+"saveclassifier.php?model=" + model, function (data, status) {
        console.log(data)
        classifierSaved()
    });
}

//files
function getFiles(userid,response){
    console.log('hi')
    $.get(host+"getdocuments.php?userid="+userid,{

    },function(data,status){
        console.log(data)
        response(data)
        response(JSON.parse(data))
    })
}

function deleteFile(id,filename,response){
    $.get(host+"deletefile.php",{
        file: filename,
        id: id
    },function(data,status){
        console.log(data)
        response(response)
    })
}

function getUsers(func_callback){
    $.get(host+"getUsers.php",function(data,status){
        console.log(data)
        func_callback(data)
    })
}

function addUser(user,func_callback){
    $.post(host+"addUser.php",{user},function(data,status){
        console.log(data)
        if(data == 'success'){
            alert('success')
            func_callback()
        }else{
            console.log(data)
            alert('error: \n'+data)
        }
    })
}

function editUserDetail(id,user,func_callback){
    $.post(host+"editUser.php",{id,user},function(data,status){
        console.log(data)
        if(data == 'success'){
            alert('success')
            func_callback()
        }else{
            console.log(data)
            alert('error: \n'+data)
        }
    })
}

function deleteUser(id,func_callback){
    $.post(host+"deleteUser.php",{id},function(data,status){
        console.log(data)
        if(data == 'success'){
            alert('success')
            func_callback()
        }else{
            console.log(data)
            alert('error: \n'+data)
        }
    })
}

function loginUser(user,func_callback){
    $.post(host+"login.php",{user},function(data,status){
        console.log(status)
        console.log(data)
        func_callback(data)
    })
}


function logOut(id,func_callback){
    $.get(host+"logOut.php",{id},function(data,status){
        if(data != 'error'){
            func_callback(data)
        }
    })
}

function saveMultipleReports(reports,userid,func_callback){
    $.post(host+"savemultiple_reports.php",{reports,userid},function(data,status){
        console.log(data)
        console.log(status)
        if(func_callback != null) 
            func_callback()
    })
}

function getReportsFile(userid,response){
    console.log('hi')
    $.get(host+"getreportsfile.php?userid="+userid,{

    },function(data,status){
        console.log(data)
        response(data)
        response(JSON.parse(data))
    })
}