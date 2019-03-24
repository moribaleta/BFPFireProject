//let host = "https://bfpforecast.000webhostapp.com/phdfire/"
//let host = "https://bfpfireproject.000webhostapp.com/phdfire/phdfire/"
//let host = "http://192.168.254.103/phdfire/"
let host = "http://localhost/phdfireproject/phdfire/"

var forecast_data = null

function getPost(id,userid,func_callback){
    $.get(host+"getPost.php",{
        id,
        userid
    },function(data,status) {
        if (status == "success"){
            func_callback(data)
        }
    })
}

function getDocuments(userid,func_callback){
    $.get(host+"getdocuments.php",{
        userid
    },function(data,status) {
        if (status == "success"){
            func_callback(data)
        }
    })
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