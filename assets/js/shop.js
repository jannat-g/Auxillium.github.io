function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


//harcoded filter
function filter() {
	var input = document.getElementById("search");


    if (input.value == "laptop" || input.value == 'macbook') {
    	document.getElementById('laptop_link').style.paddingTop = '350px';
    	document.getElementById('phone_link').style.display = "none";
    	document.getElementById('laptop_link').style.display = "block";
    	document.getElementById('desktop_link').style.display = "none";
    	document.getElementById('watch_link').style.display = "none";
    	document.getElementById('accessories_link').style.display = "none";
    	document.getElementById('tablet_link').style.display = "none";
  
    } else if (input.value == 'tablet') {
    	document.getElementById('tablet_link').style.paddingTop = '350px';
    	document.getElementById('tablet_link').style.display = "block";
    	document.getElementById('phone_link').style.display = "none";
    	document.getElementById('laptop_link').style.display = "none";
    	document.getElementById('desktop_link').style.display = "none";
    	document.getElementById('watch_link').style.display = "none";
    	document.getElementById('accessories_link').style.display = "none";

    } else if (input.value == 'phone' || input.value == 'iphone') {
    	document.getElementById('tablet_link').style.display = "none";
    	document.getElementById('phone_link').style.display = "block";
    	document.getElementById('laptop_link').style.display = "none";
    	document.getElementById('desktop_link').style.display = "none";
    	document.getElementById('watch_link').style.display = "none";
    	document.getElementById('accessories_link').style.display = "none";

    }  else if (input.value == 'desktop' ) {
    	document.getElementById('desktop_link').style.paddingTop = '350px';
    	document.getElementById('tablet_link').style.display = "none";
    	document.getElementById('phone_link').style.display = "none";
    	document.getElementById('laptop_link').style.display = "none";
    	document.getElementById('desktop_link').style.display = "block";
    	document.getElementById('watch_link').style.display = "none";
    	document.getElementById('accessories_link').style.display = "none";

    } else if (input.value == 'watch' ) {
    	document.getElementById('watch_link').style.paddingTop = '350px';
    	document.getElementById('tablet_link').style.display = "none";
    	document.getElementById('phone_link').style.display = "none";
    	document.getElementById('laptop_link').style.display = "none";
    	document.getElementById('desktop_link').style.display = "none";
    	document.getElementById('watch_link').style.display = "block";
    	document.getElementById('accessories_link').style.display = "none";

    } else if (input.value == 'accessories' || input.value == 'airpods' || input.value == 'mouse' ) {
    	document.getElementById('accessories_link').style.paddingTop = '350px';
    	document.getElementById('tablet_link').style.display = "none";
    	document.getElementById('phone_link').style.display = "none";
    	document.getElementById('laptop_link').style.display = "none";
    	document.getElementById('desktop_link').style.display = "none";
    	document.getElementById('watch_link').style.display = "none";
    	document.getElementById('accessories_link').style.display = "block";

    }

    else if (input.value.length == 0 ){
    	location.reload();

    }
	

}