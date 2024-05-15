function validate(){
    var name=document.getElementById("Name").value;
    var age=document.getElementById("Age").value;
    var result=document.querySelector("p");

    if (age>=18) {
        result.innerHTML="You Can Vote"
    } else {
        result.innerHTML="You are Child"
    }

    }
