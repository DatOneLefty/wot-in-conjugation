function process() {
var verb = document.getElementById("verb").value;
var noun = document.getElementById("n").value;

if (noun == "") {
	con(0, verb);
} else {
	con(1, verb);
}
}
function con(type, verb) {
	var end = verb.slice(-2, verb.length);
	console.log(end);
	var verb = verb.slice(0, verb.length-2);
var deny = false;
	if (end == "er") {
		var e1 = "o";
		var e2 = "es";
		var e3 = "e";
		var e4 = "emos";
		var e5 = "&#233;is";
		var e6 = "en";
	}


	else if (end == "ir") {
		var e1 = "o";
		var e2 = "es";
		var e3 = "e";
		var e4 = "imos";
		var e5 = "&#237;s";
		var e6 = "en";
	}

	else if (end == "ar") {
		var e1 = "o";
		var e2 = "as";
		var e3 = "a";
		var e4 = "amos";
		var e5 = "&#225;is";
		var e6 = "an";
	}
	else {
		deny = true;
		document.getElementById('conj').innerHTML = "<font color='red'>The verb needs to end in er, ar, or ir</font>";
	}

	if (type == 0 && deny == false) {
		document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
	}

	if (type == 1 && deny == false) {
		var noun = document.getElementById("n").value;
		noun = noun.toLowerCase();

		if (noun == "yo") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td><b>" + verb + e1 + "</b></td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "tu") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td><b>" + verb + e2 + "</b></td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "el") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td><b>" + verb + e3 + "</b></td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "ella") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td><b>" + verb + e3 + "</b></td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "usted") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td><b>" + verb + e3 + "</b></td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "nosotros") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td><b>" + verb + e4 + "</b></td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "nosotras") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td><b>" + verb + e4 + "</b></td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "vosotros") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td><b>" + verb + e5 + "</b></td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "vosotras") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td><b>" + verb + e5 + "</b></td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td>" + verb + e6 + "</td></tr>" + "</table>";
		}

		else if (noun == "ellos") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td><b>" + verb + e6 + "</b></td></tr>" + "</table>";
		}

		else if (noun == "ellas") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td><b>" + verb + e6 + "</b></td></tr>" + "</table>";
		}

		else if (noun == "ustedes") {
			document.getElementById("conj").innerHTML = "<table>" + "<tr><td>" + verb + e1 + "</td>" + "<td>" + verb + e4 + "</td></tr>" + "<tr><td>" + verb + e2 + "</td>" + "<td>" + verb + e5 + "</td></tr>" + "<tr><td>" + verb + e3 + "</td>" + "<td><b>" + verb + e6 + "</b></td></tr>" + "</table>";
		}
		else {
			document.getElementById("conj").innerHTML = "<font color='red'>Subject not in database. You can only use subjects like yo, usted, vosotros, etc</font>";
		}



	}
}
