var button = document.querySelector("#send");

function mail() {
    button.innerText = "Loading...";
    button.disabled = true;

    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var body = document.querySelector('#body').value;

    Email.send({
        SecureToken : "a48279e5-6fff-4cee-9398-55298ef67de5",
        To : 'flancast90@gmail.com',
        From : 'precise.price01@gmail.com',
        Subject : body.substring(0, 20),
        Body : name+" ("+email+") said:\n"+body
    }).then(
      message => {
            if (message == "OK"){
                button.innerText = "Success!"

                document.querySelector('form').reset();
                button.disabled = false;
            }else{
                button.innerText = "Error."
                alert("Uh oh, an error occurred. Try submitting the form again.");

                button.disabled = false;
                setTimeout(function(){
                    button.innerText = "Submit"
                }, 1000)
            }
        }
    );
}