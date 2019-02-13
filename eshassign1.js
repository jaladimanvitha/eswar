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
		var arr = [JSON.stringify(assign), JSON.stringify(quiz), JSON.stringify(part), JSON.stringify(exam), JSON.stringify(project), JSON.stringify(extra)];
		//arr = JSON.stringify(assign)+','+JSON.stringify(quiz)+','+JSON.stringify(part)+','+JSON.stringify(exam)+','+JSON.stringify(project)+','+JSON.stringify(extra);
		var cookie = JSON.stringify(arr);
		document.cookie = cookie;		
		arr = JSON.parse(cookie);
		for(var i =0; i< arr.length ;i++) {
			arr[i] = JSON.parse(arr[i]);
			console.log(arr[i]);
		}
		
		document.getElementById("total").innerHTML= "Total asignment marks:" + assign.earnedPoint + "<br>" + "Total quiz marks:" + quiz.earnedPoint + "<br>" + "Total participation marks:" + part.earnedPoint + "<br>" + "Total exam marks:" + exam.earnedPoint + "<br>" + "Total proj marks:" + project.earnedPoint + "<br>" + "Total extra marks" + extra.earnedPoint;
		document.getElementById("percent").innerHTML="Assignment percent:" + assign.earnedPoint*(100/assign.maxPoint) +"<br>"+"Quiz percent:" + quiz.earnedPoint*(100/quiz.maxPoint)+"<br>"+"Participation percent:" + part.earnedPoint*(100/part.maxPoint)+"<br>"+"Exam percent:"+ exam.earnedPoint*(100/exam.maxPoint)+"<br>" +"Project percent:"+ project.earnedPoint*(100/project.maxPoint)+"<br>" +"Extra credits percent:" + extra.earnedPoint*(100/extra.maxPoint);
		document.getElementById("totalpercent").innerHTML=assign.earnedPoint*(100/assign.maxPoint)+quiz.earnedPoint*(100/quiz.maxPoint)+part.earnedPoint*(100/part.maxPoint)+exam.earnedPoint*(100/exam.maxPoint)+project.earnedPoint*(100/project.maxPoint) +extra.earnedPoint*(100/extra.maxPoint);
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
function Assignment() {var name = new String();var earnedPoint = new Number();var maxPoint = new Number();}
		
}
