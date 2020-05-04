
/*
    Toggle DIVs on and off by class
*/
function togglebyclass(className)
{
    var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++)
	{
	    var div = divs[i];
		if (div.className == className) {
            if (div.style.display != "block") {
			    div.style.display = "block";
		    }
		    else {
                div.style.display = "none";
            }
        }
	}
}

function togglebyclass_endingin(className)
{
    var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++)
	{
	    //Take one off div array
	    var div = divs[i];

	    //get length of input class string
	    inp_len         = className.length;

        //get length of div class name
        div_len         = div.className.length;

        //Take the last inp_len characters of the div class name
        div_last_n_char = div.className.substr(div_len-inp_len, inp_len);

		if (div_last_n_char == className) {
            if (div.style.display != "block") {
			    div.style.display = "block";
		    }
		    else {
                div.style.display = "none";
            }
        }
	}
}
