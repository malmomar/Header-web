
// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}
// open excel and read cell values
function openexcel() {
var Excel;
var fileVal=document.getElementById("file-input");
Excel = new ActiveXObject("Excel.Application");
Excel.Visible = false;
Excel.Workbooks.Open(fileVal.value)
var str = Excel.ActiveSheet.Cells(1,1).Value;
var res = str.replace("Test Card-# (LV).: ", "").replace("Test Card-# (NVH).: ", "");
form1.testnum.value = res;
fileNameToSaveAs.value = res;
Dyno.value = Excel.ActiveSheet.Cells(49,5).Value;
form1.Submittedby.value = Excel.ActiveSheet.Cells(7,3).Value;
form1.owner.value = Excel.ActiveSheet.Cells(8,3).Value;
form1.projectname.value = Excel.ActiveSheet.Cells(9,3).Value;
form1.projectnumber.value = Excel.ActiveSheet.Cells(7,26).Value;
form1.reason.value = Excel.ActiveSheet.Cells(10,3).Value; 
form2.pistondia.value = Excel.ActiveSheet.Cells(17,24).Value;
form2.rollingrad.value = Excel.ActiveSheet.Cells(22,24).Value;
form2.effradius.value = Excel.ActiveSheet.Cells(23,24).Value;
form2.reqinertia.value = Excel.ActiveSheet.Cells(24,24).Value;
form3.Brakename.value = Excel.ActiveSheet.Cells(15,24).Value;

/*form3.fixture.value = Excel.ActiveSheet.Cells(45,5).Value;
form3.fixturetype.value = Excel.ActiveSheet.Cells(1,3).Value;*/
form3.knuckle.value = "-K1";
/*form3.driveadapt.value = Excel.ActiveSheet.Cells(1,2).Value;
form3.caliper.value = Excel.ActiveSheet.Cells(1,2).Value;
form3.anchor.value = Excel.ActiveSheet.Cells(1,2).Value;*/

form3.rotorid.value = Excel.ActiveSheet.Cells(37,4).Value;
form3.rotorsize.value = Excel.ActiveSheet.Cells(34,4).Value;
form3.rotorsource.value = Excel.ActiveSheet.Cells(36,4).Value;
form4.batchinner.value = Excel.ActiveSheet.Cells(15,4).Value;
form4.batchouter.value = Excel.ActiveSheet.Cells(15,9).Value;
form4.Materialsalesinner.value = Excel.ActiveSheet.Cells(18,4).Value;
form4.Materialsalesouter.value = Excel.ActiveSheet.Cells(18,4).Value;
form4.padinner.value = Excel.ActiveSheet.Cells(20,4).Value;
form4.padouter.value = Excel.ActiveSheet.Cells(20,9).Value;
form4.underlayinner.value = Excel.ActiveSheet.Cells(24,4).Value;
form4.underlayouter.value = Excel.ActiveSheet.Cells(24,9).Value;
form4.chamferinner.value = Excel.ActiveSheet.Cells(26,4).Value;
form4.chamferouter.value = Excel.ActiveSheet.Cells(26,9).Value;
form4.slotinner.value = Excel.ActiveSheet.Cells(27,4).Value;
form4.slotouter.value = Excel.ActiveSheet.Cells(27,9).Value;
form5.insulatorinner.value = Excel.ActiveSheet.Cells(25,4).Value;
form5.insulatorouter.value = Excel.ActiveSheet.Cells(25,9).Value;	
form6.compinner.value = Excel.ActiveSheet.cells(21, 4).value;
form6.compouter.value = Excel.ActiveSheet.cells(21, 9).value;
form0.testlog.value = Excel.ActiveSheet.Cells(15,24).Value + " " + Excel.ActiveSheet.Cells(17,4).Value + " " + Excel.ActiveSheet.Cells(15,4).Value+ " " + Excel.ActiveSheet.Cells(25,4).Value + " " + Excel.ActiveSheet.Cells(26,4).Value+ " " + Excel.ActiveSheet.Cells(27,4).Value + " " + Excel.ActiveSheet.Cells(24,4).Value+ " " + Excel.ActiveSheet.Cells(43,5).Value;
form0.tscript.value = Excel.ActiveSheet.Cells(43,5).Value;
form0.tspecification.value = Excel.ActiveSheet.Cells(41,5).Value;
fileNameToSaveAs.value = foxtr;
Excel.Workbooks.Close(fileVal.value)
Excel.Application.Quit();
Excel = null;
}

\\ tab function
function OpenC(evt, cityName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
\\ read text file	
function loadFileAsText(){  
var mdyno = document.getElementById("Dyno").value;
   var filename = 'K:\\Header\\DSH\\' + mdyno + '.txt';
	     var fso, a, ForReading, sContent;
		   var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
	  	var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();
	  seconds = currentTime.getSeconds();

	if (minutes < 10) {
	 minutes = "0" + minutes;
	}
	if (seconds < 10) {
	 seconds = "0" + seconds;
  }
	\\ find values in the text file then replace with following values
	     ForReading = 1;
	     fso = new ActiveXObject('Scripting.FileSystemObject');
	     file = fso.OpenTextFile(filename, ForReading, false);
	     var sContent = '';
	     while(!file.AtEndOfStream) sContent = sContent + file.readline() + "\ \r";
		 sContent = sContent.replace("400 -1 ", "400 -1 " + month + "/" + day + "/" + year)
		.replace("401 -1 ", "401 -1 " + hours + ":" + minutes + ":" + seconds)
		.replace("test ","test "   + form1.testnum.value)
		.replace("407 -1 ", "407 -1 " + form1.testnum.value)
		.replace("408 -1 ", "408 -1 " + form0.tscript.value)
		.replace("409 -1 ", "409 -1 " + form0.tspecification.value)
		.replace("410 -1 ", "410 -1 " + form1.projectnumber.value)
		.replace("415 -1 ", "415 -1 " + form1.Submittedby.value)
		.replace("413 -1 ", "413 -1 " + form1.owner.value)
		.replace("422 -1 ", "422 -1 " + form1.reason.value)
		.replace("428 -1 ", "428 -1 " + form1.projectname.value)
		.replace("442 -1 ", "442 -1 " + form3.Brakename.value)
		.replace("500 51 ", "500 51 " + form2.rollingrad.value)
		.replace("501 61 ", "501 61 " + form2.reqinertia.value)
		.replace("510 51 ", "510 51 " + form2.pistondia.value)
		.replace("511 51 ", "511 51 " + form2.effradius.value)
		.replace("530 2 ", "530 2 " + form2.pistonnum.value)
		.replace("674 -1 ", "674 -1 " + form3.knuckle.value)
		.replace("696 -1 ", "696 -1 " + form3.driveadapt.value)
		.replace("433 -1 ", "433 -1 " + form3.rotorid.value)
		.replace("432 -1 ", "432 -1 " + form3.caliper.value)
		.replace("434 -1 ", "434 -1 " + form3.rotorsize.value)
		.replace("454 -1 ", "454 -1 " + form3.rotorsource.value)
		.replace("416 -1 ", "416 -1 " + form4.batchinner.value)
		.replace("414 -1 ", "414 -1 " + form4.batchouter.value)
		.replace("417 -1 ", "417 -1 " + form4.Materialsalesinner.value)
		.replace("418 -1 ", "418 -1 " + form4.Materialsalesouter.value)
		.replace("420 -1 ", "420 -1 " + form0.testlog.value)
		.replace("436 -1 ", "436 -1 " + form4.padinner.value)
		.replace("438 -1 ", "438 -1 " + form4.padouter.value)
		.replace("681 -1 ", "681 -1 " + form4.underlayinner.value)
		.replace("682 -1 ", "682 -1 " + form4.underlayouter.value)
		.replace("679 -1 ", "679 -1 " + form5.insulatorinner.value)
		.replace("680 -1 ", "680 -1 " + form5.insulatorouter.value)
		.replace("683 -1 ", "683 -1 " + form4.chamferinner.value)
		.replace("684 -1 ", "684 -1 " + form4.chamferouter.value)
		.replace("685 -1 ", "685 -1 " + form4.slotinner.value)
		.replace("686 -1 ", "686 -1 " + form4.slotouter.value)
		.replace("691 -1 ", "689 -1 " + form6.compinner.value)
		.replace("692 -1 ", "692 -1 " + form6.compouter.value)
		.replace("695 -1 ", "695 -1 " + form3.anchor.value)
		.replace("748 -1 ", "748 -1 " + form7.testeng.value)
     	 file.Close();
     	 document.getElementById('inputTextToSave').value = sContent;
}

function WriteToFile()
{
var foxtr = document.getElementById("fileNameToSaveAs").value;
var mdyno = document.getElementById("Dyno").value;
var content = document.getElementById("inputTextToSave").value;
var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile("K:\\Dyno Testing\\" + mdyno + "\\" + foxtr + "\\Dyno operations\\" + foxtr + ".DSH", true);
content = content.replace(/\n/g, "\r\n");
s.write(content);
s.Close();
}

\\ if web application is opened on dyno this sends header to correct path
function WriteToDyno()
{
var foxtr = document.getElementById("fileNameToSaveAs").value;
var mdyno = document.getElementById("Dyno").value;
var content = document.getElementById("inputTextToSave").value;
var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile("C:\\Data\\" + mdyno + "\\" + foxtr + ".DSH", true);
content = content.replace(/\n/g, "\r\n");
s.write(content);
s.Close();

} 

\\ get both values to input in folder creater excel macro	 
function myFunction() {
var foxtr = document.getElementById("fileNameToSaveAs").value;
var mdyno = document.getElementById("Dyno").value;
window.open("K:\\Dyno Testing\\" + mdyno + "\\" + foxtr);
} 
\\required fields red		 	 
function checkforblank() {
	if (document.getElementById('pistonnum').value == "") {
		errormessage += "Enter test number\n";
		document.getElementById('pistonnum').style.borderColor = red;
		return false;
	}
}
\\ check part avaliability 
function test() {
        var Excel = new ActiveXObject("Excel.Application");
		Excel.Visible = false;
        Excel.Workbooks.Open("S:\\4 Dyno Testing\\Dyno Hardware Inventory\\Main Inventory 1.9.xlsm");
      }
\\ run excel macro that modified folders	  
function createstructure() { 
		var foxtr = document.getElementById("fileNameToSaveAs").value;
		var mdyno = document.getElementById("Dyno").value;
        var Excel = new ActiveXObject("Excel.Application");
		Excel.Workbooks.Open("K:\\Header\\macros\\create.xlsm");
		Excel.Visible = false;
		Excel.ActiveSheet.Cells(1,2).Value = mdyno;
		Excel.ActiveSheet.Cells(2,2).Value = foxtr
		Excel.Run("Module1.foldercreate");
        Excel.Application.Quit();
}

function ShowFolderFileList() 
{ 
filelist.clear
var mdyno = document.getElementById("Dyno").value;
var path = "K:\\Dyno Testing\\" + mdyno
var fso, f, fc, s, temp; 
fso = new ActiveXObject("Scripting.FileSystemObject"); 
f = fso.GetFolder(path); 
fc = new Enumerator(f.files); 
s = "";
temp = "";
for (; !fc.atEnd(); fc.moveNext()) 
  { 
  temp = fc.item();
  document.getElementById('filelist').options[document.getElementById('filelist').options.length] = new Option (temp, temp); // First value is the TEXT of the option, the second is the VALUE of the option.
  } 
}
 

