toggle()
{               
	var visibility = document.getElementById("mainTable").style.visibility;
	if (visibility == "collapse")
	{
		document.getElementById("mainTable").style.visibility = "visible";
		//document.getElementById("cmdToggle").innerText = "Hide";
	}
	else if (visibility == "visible")
	{
		document.getElementById("mainTable").style.visibility = "collapse";
		//document.getElementById("cmdToggle").innerText = "Show";
	}
}