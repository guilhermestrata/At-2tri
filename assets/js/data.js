function validade(){
    var data = new Date()
    var dv = document.getElementById('data').value
    var hj = data.toISOString().slice(0,10)
    if(hj > dv){
        document.getElementById("status").value = "1"
    }else{
        document.getElementById("status").value = "0"
    }
}
