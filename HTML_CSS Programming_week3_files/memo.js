<!--


// display current date
function displayDate() {
var months=new Array(13);
months[1]="January";
months[2]="February";
months[3]="March";
months[4]="April";
months[5]="May";
months[6]="June";
months[7]="July";
months[8]="August";
months[9]="September";
months[10]="October";
months[11]="November";
months[12]="December";


var now=new Date();
var lmonth=months[now.getMonth() + 1];
var date=now.getDate();
var year=now.getYear();

if ((navigator.appName == "Microsoft Internet Explorer") && (year < 2000))
year="19" + year;
if (navigator.appName == "Netscape")
year=1900 + year;

var Hours;
var Mins;
var Time;
Hours = now.getHours();
Mins = now.getMinutes();
if (Hours >= 12) {
  Time = " PM"; }
else {
  Time = " AM"; }
if (Hours > 12) {
  Hours -= 12; }
if (Hours == 0) {
  Hours = 12; }
if (Mins < 10) {
  Mins = "0" + Mins; }
var CurrentTime = " @ "  +  Hours + ":"  +  Mins  + Time;

document.write("<b><FONT SIZE='-1' COLOR='white' FACE='arial, helvetica'>" + lmonth + " ");
document.write(date + ", " + year + "</font></b>");

}

var PopUpWin = null;

function popupWindow(url)
{
        PopUpWin=window.open(url,null,"height=300,width=600,scrollbars,status,resizable,dependent");
        PopUpWin.focus();
}

function popupWindow2(url)
{
        PopUpWin=window.open(url,null,"height=300,width=600,location,scrollbars,status,resizable,dependent");
        PopUpWin.focus();
}

function popupWindow3(url)
{
        PopUpWin=window.open(url,null,"height=300,width=600,toolbar,scrollbars,status,resizable,dependent");
        PopUpWin.focus();
}

function closePop() {
  if (PopUpWin != null) {
  PopUpWin.close();
  PopUpWin = null;
}
}

document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');


// Color Names
function Hex(HexValue) {
    document.form.HexVal.value = HexValue;
    document.form2.HexVal2.value = HexValue;
    document.form3.HexVal3.value = HexValue;
    document.form4.HexVal4.value = HexValue;
    document.form5.HexVal5.value = HexValue;
}

function BG() {
    document.bgColor = document.form.HexVal.value;
    document.bgColor = document.form2.HexVal2.value;
    document.bgColor = document.form3.HexVal3.value;
    document.bgColor = document.form4.HexVal4.value;
    document.bgColor = document.form5.HexVal5.value;
}

function ComputeColor () {
    var Red1, Green1, Blue1;
    for (i=0;i<document.Colors.Red.length;i++) {
      if (document.Colors.Red[i].checked) Red1 = document.Colors.Red[i].value;
      if (document.Colors.Green[i].checked) Green1 = document.Colors.Green[i].value;
      if (document.Colors.Blue[i].checked) Blue1 = document.Colors.Blue[i].value; }
    ColorString = "#" + Red1 + Green1 + Blue1;
}

function BGCol () {
    ComputeColor();
    document.bgColor = ColorString;
}


// Complementary colors
  function Validate() {
    if (document.form.CurrBGColor.value == "") {
      alert("Please input a valid color value");
      document.form.CurrBGColor.value = "blue"; }
    else if (document.form.CurrBGColor.value.charAt(0) == "#") {
      BaseCol = document.form.CurrBGColor.value.substring(1,7);
      Display(BaseCol); }
    else Display(document.form.CurrBGColor.value);
}

  function Display(BaseCol) {
    PopUpWin = window.open('','PopUpWin1','scrollbars=1,resizable=1,width=640,height=480');
    PopUpWin.document.open();
    BaseCol = BaseCol.toUpperCase();

    ColText(BaseCol);
    PopUpWin.document.write("<B><FONT SIZE='4' COLOR='" + fontCol + "'>Complementary Colors</FONT></B>");
    PopUpWin.document.writeln("<TABLE><TR><TD BGCOLOR='#" + BaseCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Background Color: #" + BaseCol + "</FONT></TD></TR>");
    PopUpWin.document.bgColor = BaseCol;
    Opp1(BaseCol);
    ColText(OppCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + OppCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Opposite Color: #" + OppCol + "</FONT></TD></TR></TABLE>");

    ColText(BaseCol);
    PopUpWin.document.write("<B><FONT SIZE='4' COLOR='" + fontCol + "'>Split Complementary Colors</FONT></B>");
    Split1(BaseCol);
    ColText(SplitCol1);
    PopUpWin.document.writeln("<TABLE><TR><TD BGCOLOR='#" + SplitCol1 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Split Comp Color 1: #" + SplitCol1 + "</FONT></TD></TR>");
    ColText(SplitCol2);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + SplitCol2 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Split Comp Color 2: #" + SplitCol2 + "</FONT></TD></TR>");
    ColText(SplitCol3);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + SplitCol3 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Split Comp Color 3: #" + SplitCol3 + "</FONT></TD></TR>");
    ColText(SplitCol4);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + SplitCol4 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Split Comp Color 4: #" + SplitCol4 + "</FONT></TD></TR>");
    ColText(SplitCol5);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + SplitCol5 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Split Comp Color 5: #" + SplitCol5 + "</FONT></TD></TR>");
    ColText(SplitCol6);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + SplitCol6 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Split Comp Color 6: #" + SplitCol6 + "</FONT></TD></TR></TABLE>");

    ColText(BaseCol);
    PopUpWin.document.write("<B><FONT SIZE='4' COLOR='" + fontCol + "'>Analogous Colors</FONT></B>");
    Anal1(BaseCol);
    ColText(AnalCol1);
    PopUpWin.document.writeln("<TABLE><TR><TD BGCOLOR='#" + AnalCol1 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Analogous Color 1: #" + AnalCol1 + "</FONT></TD></TR>");
    ColText(AnalCol2);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + AnalCol2 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Analogous Color 2: #" + AnalCol2 + "</FONT></TD></TR>");
    ColText(AnalCol3);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + AnalCol3 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Analogous Color 3: #" + AnalCol3 + "</FONT></TD></TR>");
    ColText(AnalCol4);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + AnalCol4 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Analogous Color 4: #" + AnalCol4 + "</FONT></TD></TR>");
    ColText(AnalCol5);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + AnalCol5 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Analogous Color 5: #" + AnalCol5 + "</FONT></TD></TR>");
    ColText(AnalCol6);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + AnalCol6 + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Analogous Color 6: #" + AnalCol6 + "</FONT></TD></TR></TABLE>");

    ColText(BaseCol);
    PopUpWin.document.write("<B><FONT SIZE='4' COLOR='" + fontCol + "'>Monochromatic Colors</FONT></B>");
    ModCol(BaseCol,-4);
    ColText(BGCol);
    PopUpWin.document.writeln("<TABLE><TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Lower Mono Color 4: #" + BGCol + "</FONT></TD></TR>");
    ModCol(BaseCol,-3);
    ColText(BGCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Lower Mono Color 3: #" + BGCol + "</FONT></TD></TR>");
    ModCol(BaseCol,-2);
    ColText(BGCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Lower Mono Color 2: #" + BGCol + "</FONT></TD></TR>");
    ModCol(BaseCol,-1);
    ColText(BGCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Lower Mono Color 1: #" + BGCol + "</FONT></TD></TR>");
    ColText(BaseCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BaseCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Background Color: #" + BaseCol + "</FONT></TD></TR>");
    ModCol(BaseCol,1);
    ColText(BGCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Upper Mono Color 1: #" + BGCol + "</FONT></TD></TR>");
    ModCol(BaseCol,2);
    ColText(BGCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Upper Mono Color 2: #" + BGCol + "</FONT></TD></TR>");
    ModCol(BaseCol,3);
    ColText(BGCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Upper Mono Color 3: #" + BGCol + "</FONT></TD></TR><BR>");
    ModCol(BaseCol,4);
    ColText(BGCol);
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + BGCol + "'>");
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Upper Mono Color 4: #" + BGCol + "</FONT></TD></TR></TABLE>");

    ColText(BaseCol);
    PopUpWin.document.write("<B><FONT SIZE='4' COLOR='" + fontCol + "'>Triadic Colors</FONT></B>");
    Tri1(BaseCol);
    PopUpWin.document.writeln("<TABLE><TR><TD BGCOLOR='#" + TriCol1 + "'>");
    ColText(TriCol1);
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Background Color: #" + TriCol1 + "</FONT></TD></TR>");
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + TriCol2 + "'>");
    ColText(TriCol2);
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Triadic Color 2: #" + TriCol2 + "</FONT></TD></TR>");
    PopUpWin.document.writeln("<TR><TD BGCOLOR='#" + TriCol3 + "'>");
    ColText(TriCol3);
    PopUpWin.document.writeln("<FONT COLOR='" + fontCol + "'>Triadic Color 3: #" + TriCol3 + "</FONT></TD></TR></TABLE>");
}

  function ColText(textColor) {
    total = 0;
    for (i=0;i<6;i++) {
      if (textColor.charAt(i) == "F") total += 15;
      else if (textColor.charAt(i) == "E") total += 14;
      else if (textColor.charAt(i) == "D") total += 13;
      else if (textColor.charAt(i) == "C") total += 12;
      else if (textColor.charAt(i) == "B") total += 11;
      else if (textColor.charAt(i) == "A") total += 10;
      else total += parseInt(textColor.charAt(i)); }
    if (total <= 29) fontCol = "FFFFFF";
    else fontCol = "000000";
    return fontCol;
}

  function ModCol(BaseCol,offset) {
    BGCol = "";
    for (i=0;i<6;i++) {
      temp2 = BaseCol.charAt(i)
      if (offset >= 0) {
        for (j=1;j<offset+1;j++) {
          if (temp2 == "0") temp2 = "1";
          else if (temp2 == "1") temp2 = "2";
          else if (temp2 == "2") temp2 = "3";
          else if (temp2 == "3") temp2 = "4";
          else if (temp2 == "4") temp2 = "5";
          else if (temp2 == "5") temp2 = "6";
          else if (temp2 == "6") temp2 = "7";
          else if (temp2 == "7") temp2 = "8";
          else if (temp2 == "8") temp2 = "9";
          else if (temp2 == "9") temp2 = "A";
          else if (temp2 == "A") temp2 = "B";
          else if (temp2 == "B") temp2 = "C";
          else if (temp2 == "C") temp2 = "D";
          else if (temp2 == "D") temp2 = "E";
          else if (temp2 == "E") temp2 = "F";
          else if (temp2 == "F") temp2 = "F"; } }
      else {
        for (j=1;j<(-(offset)+1);j++) {
          if (temp2 == "0") temp2 = "0";
          else if (temp2 == "1") temp2 = "0";
          else if (temp2 == "2") temp2 = "1";
          else if (temp2 == "3") temp2 = "2";
          else if (temp2 == "4") temp2 = "3";
          else if (temp2 == "5") temp2 = "4";
          else if (temp2 == "6") temp2 = "5";
          else if (temp2 == "7") temp2 = "6";
          else if (temp2 == "8") temp2 = "7";
          else if (temp2 == "9") temp2 = "8";
          else if (temp2 == "A") temp2 = "9";
          else if (temp2 == "B") temp2 = "A";
          else if (temp2 == "C") temp2 = "B";
          else if (temp2 == "D") temp2 = "C";
          else if (temp2 == "E") temp2 = "D";
          else if (temp2 == "F") temp2 = "E"; } }
      BGCol = BGCol + temp2; }
    return BGCol;
}

  function Opp1(BaseCol) {
    BGCol = "";
    temp = BaseCol;
    for (i=0;i<6;i++) {
      if (temp.charAt(i) == "F") BGCol = BGCol + "0";
      if (temp.charAt(i) == "E") BGCol = BGCol + "1";
      if (temp.charAt(i) == "D") BGCol = BGCol + "2";
      if (temp.charAt(i) == "C") BGCol = BGCol + "3";
      if (temp.charAt(i) == "B") BGCol = BGCol + "4";
      if (temp.charAt(i) == "A") BGCol = BGCol + "5";
      if (temp.charAt(i) == "9") BGCol = BGCol + "6";
      if (temp.charAt(i) == "8") BGCol = BGCol + "7";
      if (temp.charAt(i) == "7") BGCol = BGCol + "8";
      if (temp.charAt(i) == "6") BGCol = BGCol + "9";
      if (temp.charAt(i) == "5") BGCol = BGCol + "A";
      if (temp.charAt(i) == "4") BGCol = BGCol + "B";
      if (temp.charAt(i) == "3") BGCol = BGCol + "C";
      if (temp.charAt(i) == "2") BGCol = BGCol + "D";
      if (temp.charAt(i) == "1") BGCol = BGCol + "E";
      if (temp.charAt(i) == "0") BGCol = BGCol + "F"; }
    OppCol = BGCol;
    return OppCol;
}

  function Anal1(BaseCol) {
    temp = BaseCol;
    ModCol(temp,4);
    AnalCol1 = BGCol.substring(0,2) + temp.substring(2,6);
    AnalCol2 = temp.substring(0,2) + BGCol.substring(2,4) + temp.substring(4,6);
    AnalCol3 = temp.substring(0,4) + BGCol.substring(4,6);
    ModCol(temp,-4);
    AnalCol4 = BGCol.substring(0,2) + temp.substring(2,6);
    AnalCol5 = temp.substring(0,2) + BGCol.substring(2,4) + temp.substring(4,6);
    AnalCol6 = temp.substring(0,4) + BGCol.substring(4,6);
    return AnalCol1,AnalCol2,AnalCol3,AnalCol4,AnalCol5,AnalCol6;
}

  function Split1(BaseCol) {
    temp = BaseCol;
    Opp1(temp);
    ModCol(OppCol,-8);
    SplitCol1 = BGCol.substring(0,2) + OppCol.substring(2,6);
    SplitCol2 = OppCol.substring(0,2) + BGCol.substring(2,4) + OppCol.substring(4,6);
    SplitCol3 = OppCol.substring(0,4) + BGCol.substring(4,6);
    ModCol(OppCol,8);
    SplitCol4 = BGCol.substring(0,2) + OppCol.substring(2,6);
    SplitCol5 = OppCol.substring(0,2) + BGCol.substring(2,4) + OppCol.substring(4,6);
    SplitCol6 = OppCol.substring(0,4) + BGCol.substring(4,6);
    return SplitCol1,SplitCol2,SplitCol3,SplitCol4,SplitCol5,SplitCol6;
}

  function Tri1(BaseCol) {
    temp = BaseCol;
    tri1 = temp.substring(0,2);
    tri2 = temp.substring(2,4);
    tri3 = temp.substring(4,6);
    TriCol1 = BaseCol;
    TriCol2 = tri2 + tri3 + tri1;
    TriCol3 = tri3 + tri1 + tri2;
    return TriCol1,TriCol2,TriCol3;
}

//-->
