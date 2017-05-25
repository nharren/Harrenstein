audiojs.events.ready(function() {
    var as = audiojs.createAll();
});

function showContactForm() {
    document.getElementById("contact-form").style.display = 'block';
};

function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
};

function writeTextFile(filename, output)
{
  var file = new File(filename);
  file.writeln(output);
  file.close();
}