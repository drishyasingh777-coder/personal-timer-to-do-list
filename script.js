*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#f4f4f4;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}

.container{
    width:90%;
    max-width:600px;
}

h1{
    text-align:center;
    margin-bottom:20px;
}

.box{
    background:white;
    padding:20px;
    margin-bottom:20px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,0.1);
}

#timer{
    font-size:50px;
    text-align:center;
    color:#ff5722;
    margin:15px 0;
}

button{
    padding:10px 15px;
    border:none;
    border-radius:5px;
    background:#ff5722;
    color:white;
    cursor:pointer;
    margin:5px;
}

button:hover{
    opacity:0.9;
}

input{
    width:70%;
    padding:10px;
}

ul{
    margin-top:15px;
    list-style:none;
}

li{
    background:#eee;
    padding:10px;
    margin-bottom:8px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
