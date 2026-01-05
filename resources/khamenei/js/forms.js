
var lastNewsDate = -1;
var lastNewsIndex = -1;
var lastScrollTop = 200;
var lastBulkIndex = 0;
var isLoadPending = true;

var IEBrowser = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}

var ArrBoxYearInnerX = new Array (0,0,0,0,0);
var lastBoxYearItemIndex = new Array (0,0,0,0,0);
function scrollBoxYear2(val,divID,id,num)
{
    if ((lastBoxYearItemIndex[id] + val < 0) | (lastBoxYearItemIndex[id] + val > num))
        return;

    lastBoxYearItemIndex[id] = lastBoxYearItemIndex[id] + val;
		boxYearScrollTo(val,divID,id);

		}
function scrollBoxYear(val,divID,id)
{
    if ((lastBoxYearItemIndex[id] + val < 0) | (lastBoxYearItemIndex[id] + val > 3))
        return;

    lastBoxYearItemIndex[id] = lastBoxYearItemIndex[id] + val;
		boxYearScrollTo(val,divID,id);
}

function boxYearScrollTo(val,divID,id)
{   //because of different size in audio-year scroll box in top and bottom
    var constMove = 280;
    if (id==1)
        constMove = 130;
    else if (id==3)
       constMove = 300;
    else if (id==4)
       constMove = 240;

    if (val > 0)
    {
        if (ArrBoxYearInnerX[id] < lastBoxYearItemIndex[id] * constMove)
        {
            ArrBoxYearInnerX[id] += val * 10;
            setTimeout("boxYearScrollTo(" + val + ",'"+ divID +"',"+id+")", 5);
        }
    }
    else
    {
        if (ArrBoxYearInnerX[id] >= lastBoxYearItemIndex[id] * constMove)
        {
            ArrBoxYearInnerX[id] += val * 10;
            setTimeout("boxYearScrollTo(" + val + ",'"+ divID +"',"+id+")", 5);
        }
    }
    var tmpInt=-1 * ArrBoxYearInnerX[id];
    setTimeout("document.getElementById('"+divID + "').style.right = '"+tmpInt+"px';", 0);
}

var ArrBoxKeywordInnerY = 0;
var lastBoxKeywordItemIndex = 0;
function scrollBoxKeyword(val,divID,tabsCount)
{
    if ((lastBoxKeywordItemIndex + val < 0) | (lastBoxKeywordItemIndex + val > tabsCount-1))
    {
        return;
    }

    lastBoxKeywordItemIndex = lastBoxKeywordItemIndex + val;
		boxKeywordScrollTo(val,divID);
}

function boxKeywordScrollTo(val,divID)
{
    var canSet = false;
    if (val > 0)
    {
        if (ArrBoxKeywordInnerY < lastBoxKeywordItemIndex * 27)
        {
            canSet = true;
            ArrBoxKeywordInnerY +=  3;
            setTimeout("boxKeywordScrollTo(" + val + ",'"+ divID +"')", 10);
        }
    }
    else
    {
        if (ArrBoxKeywordInnerY > lastBoxKeywordItemIndex * 27)
        {
            canSet = true;
            ArrBoxKeywordInnerY -=  3;
            setTimeout("boxKeywordScrollTo(" + val + ",'"+ divID +"')", 10);
        }
    }
    if (canSet)
    {
      var tmpInt=-1 * ArrBoxKeywordInnerY;
      setTimeout("document.getElementById('"+divID + "').style.top = '"+tmpInt+"px'", 0);
    }
}

function getHttpRequest()
{
    var xhr;
    if (window.XMLHttpRequest)
    {xhr = new XMLHttpRequest();}
    else
    if (window.ActiveXObject)
    {
        try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e)
        {
            try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
            catch (e2)
            {
                try {  xhr = new XMLHttpRequest();     }
                catch (e3)
                {xhr = false;}
            }
        }
    }

    return xhr;
}

function focusOnCtrl(firstControlID)
{
    var defCtrl = document.getElementById(firstControlID);
    if (defCtrl != null)
    {
        defCtrl.focus();
    }
}

function showRequestError(code)
{
    //alert("ارتباط با سرويس دهنده قطع است.\r\n" + "کد: " + code);
}

function changeImageSrc(img, newPath)
{
    img.src = newPath;
}

function getList(ctrl, url) //content
{
    var obj = document.getElementById(ctrl);

    var xhr = getHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4)
        {
            if (xhr.status == 200)
            {
                obj.innerHTML = xhr.responseText;
            }
            else
            {
                showRequestError(xhr.status);
            }
        }
    }

    xhr.open("POST", url, true);
    xhr.send("");
}

function postComment()
{
  if (document.getElementById("txtComment").value == '') {
    focusOnCtrl("txtComment");
    document.getElementById("valCommentNote").style.display = '';
  }
  else if (document.getElementById("txtCaptcha")!=null && document.getElementById("txtCaptcha").value.length < 4) {
    focusOnCtrl("txtCaptcha");
    document.getElementById("valCommentCaptcha").style.display = '';
  }
  else
  {
    document.getElementById("imgCommentLoader").style.display = '';
    var xhr = getHttpRequest();
    xhr.onreadystatechange = function()
    {
      if (xhr.readyState == 4)
      {
        if (xhr.status == 200)
        {
          if (xhr.responseText == 1)
          {document.getElementById("txtResAddComment").style.display = '';
            document.getElementById("btnSendComment").style.color = "gray";
            document.getElementById("btnSendComment").disabled = true;
          }
          else if (xhr.responseText == 3) {
            document.getElementById("txtResAddComment").innerHTML = '<span style="color:red">به دلیل بروز اشکال ، نظر شما ثبت نشد!</span>';
            document.getElementById("txtResAddComment").style.display = '';
          }
          else if (xhr.responseText == 2) {
              document.getElementById("txtCaptcha").style.backgroundColor = '#5cFFFF';
              focusOnCtrl("txtCaptcha");
              document.getElementById("txtCaptcha").style.backgroundColor = '#5cFFFF';
              alert('کد امنیتی را اشتباه وارد کرده اید!');
            }
        }
        else
        {
          showRequestError(xhr.status);
        }
      }
      document.getElementById("imgCommentLoader").style.display = 'none';
    }

    xhr.open("POST", "/post-news-comment", true);
//    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF8");
    xhr.send(makeNewsCommentXML());
    /*
     xhr.send("txtCaptcha=" + document.getElementById("txtCaptcha").value
     + "&txtNewsID=" + document.getElementById("txtNewsID").value
     + "&txtName=" + encodeURI(document.getElementById("txtName").value)
     + "&txtEmail=" + encodeURI(document.getElementById("txtEmail").value)
     + "&txtComment=" + encodeURI(document.getElementById("txtComment").value));
     */
  }
}
function makeNewsCommentXML(){
  var tmpStr;
  tmpStr = "<?xml version='1.0' encoding='utf-8'?><root><comment>";
    if (document.getElementById("txtCaptcha") != null)
      tmpStr += "<txtCaptcha>" + document.getElementById("txtCaptcha").value + "</txtCaptcha>";
    if (document.getElementById("txtNewsID") != null)
      tmpStr += "<txtNewsID>" + document.getElementById("txtNewsID").value + "</txtNewsID>";
    if (document.getElementById("txtName") != null)
      tmpStr += "<txtName>" + document.getElementById("txtName").value + "</txtName>";
    if (document.getElementById("txtNPID") != null)
      tmpStr += "<txtNPID>" + document.getElementById("txtNPID").value + "</txtNPID>";
    if (document.getElementById("txtEmail") != null)
      tmpStr += "<txtEmail>" + document.getElementById("txtEmail").value + "</txtEmail>";
    if (document.getElementById("txtComment") != null)
      tmpStr += "<txtComment>" + document.getElementById("txtComment").value + "</txtComment>";
  tmpStr+="</comment></root>";
  return tmpStr;
}
//Speech - B//
var sit_slideSpeed = 7;	// Higher value = faster
var sit_timer = 3;	// Lower value = faster

var objectIdToSlideDown = false;
var sit_activeId = false;
var sit_slideInProgress = false;
var sit_expandMultiple = false;

function showHideContent(e,inputId)
{
	if(sit_slideInProgress)return;
	sit_slideInProgress = true;
	if(!inputId)inputId = this.id;
	inputId = inputId + '';
	var numericId = inputId.replace(/[^0-9]/g,'');
	var answerDiv = document.getElementById('sit_a' + numericId);

	objectIdToSlideDown = false;

	if(!answerDiv.style.display || answerDiv.style.display=='none'){
		if(sit_activeId &&  sit_activeId!=numericId && !sit_expandMultiple){
			objectIdToSlideDown = numericId;
			slideContent(sit_activeId,(sit_slideSpeed*-1));
		}else{

			answerDiv.style.display='block';
			answerDiv.style.visibility = 'visible';

			slideContent(numericId,sit_slideSpeed);
		}
	}else{
		slideContent(numericId,(sit_slideSpeed*-1));
		sit_activeId = false;
	}
}

function slideContent(inputId,direction)
{

	var obj =document.getElementById('sit_a' + inputId);
	var contentObj = document.getElementById('sit_ac' + inputId);
	height = obj.clientHeight;
	if(height==0)height = obj.offsetHeight;
	height = height + direction;
	rerunFunction = true;
	if(height>contentObj.offsetHeight){
		height = contentObj.offsetHeight;
		rerunFunction = false;
	}
	if(height<=1){
		height = 1;
		rerunFunction = false;
	}

	obj.style.height = height + 'px';
	var topPos = height - contentObj.offsetHeight;
	if(topPos>0)topPos=0;
	contentObj.style.top = topPos + 'px';
	if(rerunFunction){
		setTimeout('slideContent(' + inputId + ',' + direction + ')',sit_timer);
	}else{
		if(height<=1){
			obj.style.display='none';
			if(objectIdToSlideDown && objectIdToSlideDown!=inputId){
				document.getElementById('sit_a' + objectIdToSlideDown).style.display='block';
				document.getElementById('sit_a' + objectIdToSlideDown).style.visibility='visible';
				slideContent(objectIdToSlideDown,sit_slideSpeed);
			}else{
				sit_slideInProgress = false;
			}
		}else{
			sit_activeId = inputId;
			sit_slideInProgress = false;
		}
	}
}

//Speech - E//
var LastArrow;
function changeArrows(objSrcArrow){
 objArrow = objSrcArrow.getElementsByTagName('div')[1];
 if (LastArrow!= null && LastArrow!=objArrow)
	 LastArrow.className='leftArrow';
 if (objArrow.className=='bottomArrow')
	objArrow.className='leftArrow';
 else if (objArrow.className=='leftArrow')
	objArrow.className='bottomArrow';
 LastArrow=objArrow;
}

function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function textCounter(field,cntfield,maxlimit) {
if (field.value.length > maxlimit)
  field.value = field.value.substring(0, maxlimit);
else
  cntfield.value = maxlimit - field.value.length;
}

function extractPar( url,name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec(url);
  if( results == null )
    return "";
  else
  return results[1];
}

function replacePersianDigits(jqSelector){
  $(jqSelector).each(function(i) {
    var inHTML = $(this).html();
      persianDigsArr=new Array("\u06F0","\u06F1","\u06F2","\u06F3","\u06F4","\u06F5","\u06F6","\u06F7","\u06F8","\u06F9");
      inHTML= inHTML.replace(
                  /\d(?=[^<>]*(<|$))/g,
                  function($0) { return persianDigsArr[$0] }
              );
      $(this).html(inHTML);
  });
}
