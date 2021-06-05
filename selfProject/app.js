var register = [
  {
    name: 'saket',
    email: 'saket872@gmail.com',
    designation: 'Engineer',
    address: 'mahagama',
    password: 'abc'
  },
  {
    name: 'mahtab',
    email: 'mahtab@gmail.com',
    designation: 'Doctor',
    address: 'purnea',
    password: 'abc123'
  },
  {
    name: 'sudhanshu',
    email: 'sudhanshu@gmail.com',
    designation: 'Scientist',
    address: 'ranchi',
    password: 'abc456'
  },
  {
    name: 'bapu',
    email: 'bapu@gmail.com',
    designation: 'Actor',
    address: 'purulia',
    password: 'abc789'
  }];
  function checkUser(){
    var emailvalue = document.getElementById("Email").value;
    var passvalue = document.getElementById("Password").value;
    let flag = false;
    for (let i = 0; i < register.length; i++) {
      if(register[i].email===emailvalue && register[i].password===passvalue)
      {
        flag = true;
        
        alert(`User with email ${emailvalue} is verified`);
        location.replace("table.html");
      }     
  }
  if(flag===false)
  {
    alert('Try signing in using right credentials or sign up!');
  }
  };

  var buttonOp = document.getElementById("entry2");
  buttonOp.addEventListener("click", displayTable());
  function displayTable()
  {
    var display = document.getElementById("display");
    // alert(document.getElementById("display").rows[0].innerHTML);
    
    var name1 = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var designation = document.getElementById("desg").value;
    var address = document.getElementById("add").value;
    // alert(name1);
    
    var newRow = display.insertRow(5);
    
    var cell1= newRow.insertCell(0);
    var cell2= newRow.insertCell(1);
    var cell3= newRow.insertCell(2);
    var cell4= newRow.insertCell(3);
    cell1.innerHTML = name1;
    cell2.innerHTML = email;
    cell3.innerHTML = designation;
    cell4.innerHTML = address;    
    // location.replace("table.html");
  }