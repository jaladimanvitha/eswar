function displayTable() {
		var assign = new Assignment();
		var quiz = new Assignment();
		var part = new Assignment();
		var exam = new Assignment();
		var project = new Assignment();
		var extra = new Assignment();
		assign.name = 'LabAssignments';
        assign.earnedPoint = Number(document.getElementById('a1').value) + Number(document.getElementById('a2').value) + Number(document.getElementById('a3').value)
                    + Number(document.getElementById('a4').value) + Number(document.getElementById('a5').value) + Number(document.getElementById('a6').value)
                    + Number(document.getElementById('a7').value) + Number(document.getElementById('a8').value) + Number(document.getElementById('a9').value)
                    + Number(document.getElementById('a10').value);
		assign.maxPoint = 250;
		quiz.name = 'Quiz';
		quiz.earnedPoint =Number(document.getElementById('q1').value) + Number(document.getElementById('q2').value) + Number(document.getElementById('q3').value)
                    + Number(document.getElementById('q4').value) + Number(document.getElementById('q5').value) + Number(document.getElementById('q6').value)
                    + Number(document.getElementById('q7').value) + Number(document.getElementById('q8').value) + Number(document.getElementById('q9').value)
                    + Number(document.getElementById('q10').value);
		quiz.maxPoint = 250;
		part.name ='Participation';
		part.earnedPoint =Number(document.getElementById('p1').value) + Number(document.getElementById('p2').value) + Number(document.getElementById('p3').value)
                    + Number(document.getElementById('p4').value) + Number(document.getElementById('p5').value) + Number(document.getElementById('p6').value)
                    + Number(document.getElementById('p7').value) + Number(document.getElementById('p8').value) + Number(document.getElementById('p9').value)
                    + Number(document.getElementById('p10').value)+Number(document.getElementById('p11').value) + Number(document.getElementById('p12').value) + Number(document.getElementById('p13').value)
                    + Number(document.getElementById('p14').value) + Number(document.getElementById('p15').value);
		part.maxPoint = 375;
		exam.name = 'Exam';
		exam.earnedPoint = Number(document.getElementById('e1').value) + Number(document.getElementById('e2').value);
		exam.maxPoint = 50;
		project.name = 'Project';
		project.earnedPoint = Number(document.getElementById('pr1').value);
		project.maxPoint = 25;
		extra.name = 'Earned Credit';
        extra.earnedPoint = Number(document.getElementById('ec1').value);
		extra.maxPoint = 25;
		document.getElementById("total").innerHTML= "Total asignment marks:" + assign.earnedPoint + "<br>" + "Total quiz marks:" + quiz.earnedPoint + "<br>" + "Total participation marks:" + part.earnedPoint + "<br>" + "Total exam marks:" + exam.earnedPoint + "<br>" + "Total proj marks:" + project.earnedPoint + "<br>" + "Total extra marks" + extra.earnedPoint;
		document.getElementById("percent").innerHTML="Assignment percent:" + assign.earnedPoint*(assign.maxPoint/100) +"<br>"+"Quiz percent:" + quiz.earnedPoint*(quiz.maxPoint/100)+"<br>"+"Participation percent:" + part.earnedPoint*(part.maxPoint/100)+"<br>"+"Exam percent:"+ exam.earnedPoint*(exam.maxPoint/100)+"<br>" +"Project percent:"+ project.earnedPoint*(project.maxPoint/100)+"<br>" +"Extra credits percent:" + extra.earnedPoint*(extra.maxPoint/100);
		document.getElementById("totalpercent").innerHTML=assign.earnedPoint*(assign.maxPoint/100)+quiz.earnedPoint*(quiz.maxPoint/100)+part.earnedPoint*(part.maxPoint/100)+exam.earnedPoint*(exam.maxPoint/100)+project.earnedPoint*(project.maxPoint/100) +extra.earnedPoint*(extra.maxPoint/100);
		var z=document.getElementById("totalpercent").innerHTML;			
		if (z >= 90) {
            document.getElementById("grades").innerHTML ='Your Final Grade Is: ' + "A";
        }
		else if (z >=80) {
            document.getElementById("grades").innerHTML = 'Your Final Grade Is: ' + "B";
        }
        else if (z >= 70) {
			document.getElementById("grades").innerHTML = 'Your Final Grade Is: ' + "C";
        }
        else if (z >= 60) {
            document.getElementById("grades").innerHTML = 'Your Final Grade Is: ' + "D";
		}
        else {
            document.getElementById("grades").innerHTML = 'Your Final Grade Is: ' + "F";
        }
		var cookie = JSON.stringify(assign)+';'+JSON.stringify(quiz)+';'+JSON.stringify(part)+';'+JSON.stringify(exam)+';'+JSON.stringify(project)+';'+JSON.stringify(extra);
		setCookie("Assignments",cookie);
		//getCookie("Assignments");
function Assignment() {var name = new String();var earnedPoint = new Number();var maxPoint = new Number();}
function setCookie(cookie) {
	var date = new Date();
	document.cookie = name+ "="+ (cookie || "") + "; expires=" + date.toUTCString();
}
function getCookie(name) {
	var nameEQ = name + "=";
	var cookies = document.cookie.split(';');
	for(var i=0;i<cookie.length;i++) {
		 var c = cookies[i];
		 while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}					
}
