function makeMenu()
{
var string ='<ul id="main_menu">'
string += '<li class="main"><a href="#">info</a><ul><li><a href="index.htm">Home</a></li><li><a href="algemeen.htm">Algemeen</a></li><li><a href="historiek.htm">Historiek</a></li><li><a href="planning.htm">Planning</a></li><li><a href="kinderen.htm">Kinderen</a></li><li><a href="jongeren.htm">Jongeren</a></li><li><a href="volwassenen.htm">Volwassenen</a></li></ul></li>'
string += '<li class="main"><a href="#">activiteiten</a><ul><li><a href="dansgroepen.htm">dansgroepen</a></li><li><a href="knutselen.htm">knutselatelier</a></li><li><a href="extra.htm">extra activiteiten</a></li></ul></li>'
string += '<li class="main"><a href="#">begeleiding</a><ul><li><a href="begeleiding.htm">Begeleider worden</a></li><li><a href="login.htm">Login</a></li></ul></li>'
string += '<li class="main"><a href="#">foto&acute;s</a><ul><li><a href="fotos.htm?i=2">Knutselen</a></li><li><a href="fotos.htm?i=9">Opendeurdag</a></li></ul></li>'
string += '<li class="main"><a href="#">contact</a><ul><li><a href="contact_tateljee.htm">VZW Tateljee</a></li><li><a href="contact_web.htm">Webmaster</a></li></ul></li>'
string += '</ul>'

document.getElementById("menu").innerHTML = string 
}

var string ="ptagkeodenejhiofedizafoiuzenasaedzertcdrftygedizaeoiezrnlfdzerswdeaqsezaeofgtuijnkonmkjajaiuayztaizyoayzuiuaçàzyaiozjhmczlyedgzhjgehgiuzrefzuterfzvgpetzefwueryxemxiyzlaycrhelnyézrmcoieyaczeirumazliryamlujhahghitrdkytgfytjsdfolesdflkyesdflkyjsdfolkimzjsdfkyjztsdflek"
var checks = 0
var cboolean = false

function displaypage() 
{
	if (cboolean == false){
			document.getElementById("replace").style.display = "none";
			document.getElementById("verschijn").style.display = "none"}
	else
			{document.getElementById("replace").style.display = "block";
			document.getElementById("verschijn").style.display = "block";
			 document.getElementById("weg").style.display = "none"}
}

function checkPassw()
{
	var style = document.getElementById("passw").value
	string = string.substring(0,1) + string.substring(28,29) + string.substring(56,57) + string.substring(84,85)
	if (style == string )
	{
		cboolean = true;
		displaypage();
	}
	else
	{
		alert("fout passwoord ! probeer opnieuw ")
		checks  = checks + 1
		if (checks == 3 )
		{
			document.getElementById("passw").disabled = true
		}
	}
}

// FOTOS INLADEN

function cat(iCat)
{
	
	document.getElementById("prev").innerHTML = ""
	document.getElementById("next").innerHTML = ""
	document.getElementById("fotos_album").innerHTML = ""
	document.getElementById("body").focus()
	
	catKiezen(iCat)
}

function check()
{
	
	var Qstring =  document.location.search;
	sInhoud = Qstring.substring (3,4)
	
	
	if ( !sInhoud == "")
	{
		var iCat = sInhoud
		
		pagina = 1
		document.getElementById("prev").innerHTML = ""
		document.getElementById("next").innerHTML = ""
		document.getElementById("fotos_album").innerHTML = ""
		catKiezen(iCat)
	}
	
}

function catKiezen(i)
{
	
	
	if (i==2)
	{
		fotosTonen("knutselen",21)
		
	}
	if (i==9)
	{
		fotosTonen("opendeurdag",26)
	}
}

var strMap
var length
var iAantal
var pagina = 1


function fotosTonen(map, i)
{
	strMap = map
	length = map.length
	iAantal = i
	var strCode = ""
	var teller = 0
	var aantal = 30
	if (aantal > i)
	{
		for (var j = 1; j<=i; j++)
		{
			if (j <=9 )
			{
				length = 1
			}
			if (j >= 10 && j <= 99)
			{
				length = 2
			}
			if  (j >= 100)
			{
				length = 3
			}
			strCode = strCode + "<a href='popup.htm?map=" + map + "&max=" + iAantal + "&j=" + j + "' target='_blank' class='foto'><img src='fotos/" + map + "/foto" + j + ".jpg' alt='foto" + j +"'/></a>&nbsp;&nbsp;&nbsp;"
			if (j % 5 == 0)
			{
				strCode = strCode + "<br>"
			}
		}
	}
	else
	{
		for (var j = (aantal*(pagina-1))+1; j<=(aantal*pagina); j++)
		{
		teller += 1
			if (j<=i)
			{
				if (j <=9 )
				{
					length = 1
				}
				if (j >= 10 && j <= 99)
				{
					length = 2
				}
				if  (j >= 100)
				{
					length = 3
				}
				strCode = strCode + "<a href='popup.htm?map=" + map +  "&max=" + iAantal + "&j=" + j + "' target='_blank' class='foto'><img src='fotos/" + map + "/foto" + j + ".jpg' alt='foto" + j +"'/></a>&nbsp;&nbsp;&nbsp;"
				if (teller % 5 == 0)
				{
					strCode = strCode + "<br>"
				}
			}
		}
		if (pagina < (iAantal/aantal))
		{
			document.getElementById("next").innerHTML = "<a  href='#' onclick='next()'>&gt;&gt;</a>"
			document.getElementById("prev").innerHTML = "<img src='img/none.gif' />"
		}
	}
	

	
	document.getElementById("fotos_album").innerHTML = strCode
}

function next()
{
	pagina += 1
	document.getElementById("next").innerHTML = "<img src='img/none.gif' />"
	document.getElementById("fotos_album").innerHTML = ""
	fotosTonen(strMap, iAantal)
	document.getElementById("prev").innerHTML = "<a href='#' onclick='prev()'>&lt;&lt;</a> "
}

function prev()
{
	pagina -= 1
	document.getElementById("prev").innerHTML = "<img src='img/none.gif' />"
	fotosTonen(strMap, iAantal)
	if (pagina > 1)
	{
	
		document.getElementById("prev").innerHTML = "<a href='#' onclick='prev()'>&lt;&lt;</a> "
	}
	
}

function leesin()
{
	
	
	var Qstring =  document.location.search
	var inhoud = Qstring.substring (0,100)
	var array = new Array()
	array = inhoud.split("&")
	
	var map = array[0]
	map = map.substring(5,100)
	var maximum = array[1]
	maximum = maximum.substring(4,10)
	var fotonummer = array[2]
	fotonummer = fotonummer.substring(2,10)
	
	var teller
	teller = parseInt(fotonummer)
	
			document.getElementById("foto").innerHTML = "<img src='fotos/" + map + "/img/foto" + fotonummer + ".jpg'  alt='foto" + fotonummer +"'/>"
			
			
		if(!(teller == 1))
			{
			document.getElementById("pijlkeprev").innerHTML = "<a href='popup.htm?map=" + map +  "&max=" + maximum + "&j=" + (teller -1 ) + "'>&lt;&lt;</a>"
			}
		
		if(!(teller == maximum))
			{
			document.getElementById("pijlkenext").innerHTML = "<a href='popup.htm?map=" + map + "&max=" + maximum +"&j=" + (teller + 1 ) +  "'>&gt;&gt;</a>"
			}
}
function popup(id)
{
	if(id == 1)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=640,height=490"); 
	}if(id == 2)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=640,height=490"); 
	}if(id == 3)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=540,height=660"); 
	}if(id == 4)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=490,height=640"); 
	}if(id == 5)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=490,height=640"); 
	}if(id == 6)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=490,height=640"); 
	}if(id == 7)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=636,height=488"); 
	}if(id == 8)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=634,height=484"); 
	}
	if(id == 9)
	{
		 window.open ("fotos/voorbeelden/" + id +".jpg","popup","status=0,scrollbars=0, menubar=0,resizable=0, width=634,height=486"); 
	}
}