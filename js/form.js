function whatsapp() {
    var name = document.getElementById("name").value;
	var mobile= document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
	var ctype = document.getElementById("ctype").value;
	var size = document.getElementById("size").value;
	var flavor = document.getElementById("flavor").value;
    var message = document.getElementById("message").value;

    var whatsappUrl = "https://wa.me/919109492927?text=" +
        "Name of Customer: " + encodeURIComponent(name) + "%0a" +
		"Mobile: "+ encodeURIComponent(mobile) + "%0a" +
        "Email: " + encodeURIComponent(email) + "%0a" +
		"Cake Type: " + encodeURIComponent(ctype) + "%0a" +
		"Quentity: " + encodeURIComponent(size) + "%0a" +
		"Flavour: " + encodeURIComponent(flavor) + "%0a" + 
        "Message: " + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank").focus();
}
