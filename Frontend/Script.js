
async function display() {
    var res = await fetch("http://localhost:3000/user",{method:"GET"});

    var finalRes =await res.json();
    
    var cartona = ``;
    for (var i = 0; i < finalRes.users.length; i++) {
  
      cartona += `
          <tr>
          <td>${i + 1}</td>
          <td>${finalRes.users[i].name}</td>
          <td>${finalRes.users[i].email}</td>
           <td>${finalRes.users[i].balance}</td>
          </tr>
          
          `;
    }
    document.getElementById("tableData").innerHTML = cartona;
  }
  display()



async function GetMoney(){
    var res = await fetch("http://localhost:3000/transaction/",{method:"GET"});

    var finalRes =await res.json();
    var cartona = ``;
    for (var i = 0; i < finalRes.data.length; i++) {
  
      cartona += `
          <tr>
          <td>${i + 1}</td>
          <td>${finalRes.data[i].sender}</td>
          <td>${finalRes.data[i].reciver}</td>
           <td>${finalRes.data[i].amount}</td>
           <td>${finalRes.data[i].createdAt}</td>

          </tr>
          
          `;
    }
    document.getElementById("TransactionData").innerHTML = cartona;



}  GetMoney()




// Define the sendMoney function
async function sendMoney() {
    // Get values from the form
    const senderEmail = document.getElementById('enterSName').value;
    const receiverEmail = document.getElementById('enterName').value;
    const amount = parseFloat(document.getElementById('enterAmount').value);

    // Check if any field is empty
    if (!senderEmail || !receiverEmail || isNaN(amount)) {
        alert("Please fill in all fields with valid data.");
        return;
    }

    // Create a request object
    const requestData = {
        sender: senderEmail,
        reciver: receiverEmail,
        amount: amount,
    };

    try {
        // Send a POST request to the server
        const response = await fetch('http://localhost:3000/transaction/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message); // Show a success message
        } else {
            alert(`Error: ${data.message}`); // Show an error message
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }

    // Clear the form fields
    document.getElementById('enterSName').value = '';
    document.getElementById('enterName').value = '';
    document.getElementById('enterAmount').value = '';
    display();
}

// Add an event listener for the button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sendMoneyButton').addEventListener('click', sendMoney);
});

