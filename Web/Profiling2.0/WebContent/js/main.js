/**
 * 
 */

var personal_data, internship_data, jobs_data, skills_data, extra_data, education_data=[], projects_data; 
var edu = 0;

var renderdatas;
var renderdatasjobs;
var renderdatasproject;
var renderdatasextra;
var renderdatasskills;
var renderdatasdiploma;
var renderdatasgraduation;
var renderdataspg;
var renderdatasphd;


var current_user = "none";
var personal_value = 0;
var internship_count = 0;
var jobs_count = 0;
var project_count = 0;
var extra_count = 0;
var skills_count = 0;
var edu_sec_count = 0;
var diploma_count = 0;
var graduation_count = 0;
var pg_count = 0;
var phd_count = 0;

var frame = "<div id= \"menu\"><a class=\"options\" href=\"#personal-form\"  data-target=\"0\" id=\"personal\" data-toggle=\"collapse\">Personal Details<img class=\"arrow\"src=\"images/arrow-30-64.png\"></a><a href=\"#education-form\" class=\"options\" id=\"education\" data-toggle=\"collapse\">Education Details<img class=\"arrow\"src=\"images/arrow-30-64.png\"></a><a href=\"#internship-form\" class=\"options\" id=\"internship\" data-toggle=\"collapse\" data-target=\"0\">Internship Details<img class=\"arrow\"src=\"images/arrow-30-64.png\"></a><a href=\"#job-form\" class=\"options\" id=\"job\" data-toggle=\"collapse\">Job Details<img class=\"arrow\"src=\"images/arrow-30-64.png\"></a><a href=\"#project-form\" class=\"options\" id=\"project\" data-toggle=\"collapse\">Project Details<img class=\"arrow\"src=\"images/arrow-30-64.png\"></a><a href=\"#skills-form\" class=\"options\" id=\"skills\" data-toggle=\"collapse\">Skill Details<img class=\"arrow\"src=\"images/arrow-30-64.png\"></a><a href=\"#extra-curricular-form\" class=\"options\" id=\"extra-curricular\" data-toggle=\"collapse\">Extra - curricular activity<img class=\"arrow\"src=\"images/arrow-30-64.png\"></a> <button id=\"generate-pdf\">Generate Resume</button> </div><div id=\"content\"></div>";

var personal = "<div id = \"personal-container\" data-target=\"0\"></div>";
var personalForm = "<div class = \"form-group\" id=\"personal-form\" data-toggle=\"collapse\"><label for=\"firstName\">First Name</label><input type=\"text\" id=\"firstName\" placeholder=\"John\"><br><label for=\"lastName\">Last Name</label><input type=\"text\" id=\"lastName\" placeholder=\"Doe\"><br><label for=\"dob\">Date of birth</label><input id=\"dob\" class=\"datepicker\" placeholder=\"MM/DD/YYY\" type=\"text\"><br><label for=\"city\">Current City</label><input type=\"text\" id=\"city\" placeholder=\"Coimbatore\"><br><label for=\"phoneNumber\">Phone Number</label><input type=\"text\" id=\"phoneNumber\" placeholder=\"xxx-xxx-xxxx\"><br><label for=\"photo\">Photo</label><input type=\"file\" id=\"photo\" accept=\"image/*\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-personal\" data-target=\"0\"></div>";
var internship = "<div id=\"internship-container\"><input type=\"button\" class=\"btn-submit\" id=\"add-more-internship\" value=\"Add More Details\" style=\"width: 200px\"></div>";
var internshipForm = "<div class=\"form-group\" id=\"internship-form\"><label for=\"profile-intern\">Profile</label><input type=\"text\" id=\"profile-intern\" placeholder=\"Operations\"><br><label for=\"organization-intern\">Organization</label><input type=\"text\" id=\"organization-intern\" placeholder=\"Hackerrank\"><br><label for=\"location-intern\">Location</label><input type=\"text\" id=\"location-intern\" placeholder=\"Bangalore\"><br><label for=\"work-from-home-intern\">Work from home</label><input type=\"checkbox\" id=\"work-from-home-intern\" onclick=\"hidelocationintern(this)\"><br><label for=\"start-date-intern\">Start Date</label><input type=\"text\" id=\"start-date-intern\" name=\"date\" placeholder=\"MM/DD/YYYY\"><br><label for=\"end-date-intern\">End Date</label><input type=\"text\" id=\"end-date-intern\" name=\"date\" placeholder=\"MM/DD/YYYY\"><br><label for=\"currently-working-intern\">Currently Working</label><input type=\"checkbox\" id=\"currently-working-intern\" onclick=\"hideendyearintern(this)\"><br><label for=\"description-intern\">Description</label><input type=\"textarea\" rows=\"4\" id=\"description-intern\" placeholder=\"A short description\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-internship\" data-target=\"0\"></div>";
var jobs = "<div id=\"jobs-container\"><input type=\"button\" class=\"btn-submit\" id=\"add-more-jobs\" value=\"Add More Details\" style=\"width: 200px\"></div>";
var jobsForm = "<div class=\"form-group\" id=\"job-form\"><label for=\"profile-job\">Profile</label><input type=\"text\" id=\"profile-job\" placeholder=\"Operations\"><br><label for=\"organization-job\">Organization</label><input type=\"text\" id=\"organization-job\" placeholder=\"Hackerrank\"><br><label for=\"location-job\">Location</label><input type=\"text\" id=\"location-job\" placeholder=\"Bangalore\"><br><label for=\"work-from-home-job\">Work from home</label><input type=\"checkbox\" id=\"work-from-home-job\" onclick=\"hidelocationjob(this)\"><br><label for=\"start-date-job\">Start Date</label><input type=\"text\" id=\"start-date-job\" name=\"date\" placeholder=\"MM/DD/YYYY\"><br><label for=\"end-date-job\">End Date</label><input type=\"text\" id=\"end-date-job\" name=\"date\" placeholder=\"MM/DD/YYYY\"><br><label for=\"currently-working-job\">Currently Working</label><input type=\"checkbox\" id=\"currently-working-job\" onclick=\"hideendyearjob(this)\"><br><label for=\"description-job\">Description</label><input type=\"textarea\" rows=\"4\" id=\"description-job\" placeholder=\"A short description\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-job\" data-target=\"0\"></div>";
var project = "<div id=\"project-container\"><input type=\"button\" class=\"btn-submit\" id=\"add-more-project\" value=\"Add More Details\" style=\"width: 200px\"></div>";
var projectForm = "<div class=\"form-group\" id=\"project-form\"><label for=\"title-project\">Title</label><input type=\"text\" id=\"title-project\" placeholder=\"Ticket Reservation System\"><br><label for=\"start-date-project\">Start Date</label><input type=\"text\" id=\"start-date-project\" name=\"date\" placeholder=\"MM/DD/YYYY\"><br><label for=\"end-date-project\">End Date</label><input type=\"text\" id=\"end-date-project\" name=\"date\" placeholder=\"MM/DD/YYYY\"><br><label for=\"currently-working-project\">Currently Working</label><input type=\"checkbox\" id=\"currently-working-project\" onclick=\"hideendyearproject(this)\"><br><label for=\"link-project\">Link</label><input type=\"url\" id=\"link-project\" placeholder=\"http://www.myproject.com\"/><br><label for=\"description-project\">Description</label><input type=\"textarea\" rows=\"4\" id=\"description-project\" placeholder=\"A short description\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-project\"></div>";
var extraForm = "<div id=\"extra-container\"><div class = \"form-group\" id=\"extra-form\"><textarea id=\"description-extra\" rows=\"4\" placeholder=\"Add Details Here\"></textarea><br><input class = \"btn-submit\" type=\"button\" value=\"Add\" id=\"btn-extra\"></div></div>";
var skillForm = "<div id=\"skills-container\"><div class=\"form-group\" id=\"skills-form\"><input list=\"skill-datalist\" id=\"skill\"/><datalist id=\"skill-datalist\"><option value=\"HTML\">HTML</option><option value=\"CSS\">CSS</option><option value=\"JAVA\">Java</option></datalist><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-skills\"></div></div>";
var education = "<div id=\"education-container\"><div id=\"edu-btn-container\"><input type=\"button\" class=\"btn-submit\" id=\"add-secondary\" value=\"X(Secondary)\" style=\"width: 200px\"><input type=\"button\" class=\"btn-submit\" id=\"add-hsc\" value=\"XII(Higher-Secondary)\" style=\"width: 200px\"><input type=\"button\" class=\"btn-submit\" id=\"add-diploma\" value=\"Diploma\" style=\"width: 200px\"><input type=\"button\" class=\"btn-submit\" id=\"add-graduation\" value=\"Graduation\" style=\"width: 200px\"><input type=\"button\" class=\"btn-submit\" id=\"add-pg\" value=\"Post Graduation\" style=\"width: 200px\"><input type=\"button\" class=\"btn-submit\" id=\"add-phd\" value=\"Ph D\" style=\"width: 200px\"></div></div>";
var edu_secondary = "<div class=\"form-group\" id=\"hsc-form\"><label for=\"school-secondary\">School</label><input type=\"text\" id=\"school-secondary\" placeholder=\"Eg: Delhi Public School\"><br><label for=\"board-secondary\">Board</label><input type=\"text\" id=\"board-secondary\" placeholder=\"Eg: CBSE\"><br><label for=\"yoc-secondary\">Year Of Completion</label><input type=\"text\" id=\"yoc-secondary\" name=\"date\" placeholder=\"YYYY\"><br><label for=\"percentage-secondary\">Percentage</label><input type=\"text\" id=\"percentage-secondary\" placeholder=\"Eg: 98%\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-edu-secondary\"></div>";
var edu_hsc = "<div class=\"form-group\" id=\"hsc-form\"><label for=\"school-hsc\">School</label><input type=\"text\" id=\"school-hsc\" placeholder=\"Eg: Delhi Public School\"><br><label for=\"board-hsc\">Board</label><input type=\"text\" id=\"board-hsc\" placeholder=\"Eg: CBSE\"><br><label for=\"yoc-hsc\">Year Of Completion</label><input type=\"text\" id=\"yoc-hsc\" name=\"date\" placeholder=\"YYYY\"><br><label for=\"stream-hsc\">Stream</label><input type=\"text\" id=\"stream-hsc\" list=\"streams\" placeholder=\"Eg: Commerce\"><br><label for=\"percentage-hsc\">Percentage</label><input type=\"text\" id=\"percentage-hsc\" placeholder=\"Eg: 98%\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-edu-hsc\"><datalist id=\"streams\"><option value=\"Science\">Science</option><option value=\"Arts\">Arts</option><option value=\"Commerce\">Commerce</option></datalist></div>";
var edu_diploma = "<div class=\"form-group\" id=\"diploma-form\"><label for=\"college-diploma\">College</label><input type=\"text\" id=\"college-diploma\" placeholder=\"Karpagam College of Engineering\"><br><label for=\"start-date-diploma\">Start Year</label><input type=\"text\" id=\"start-date-diploma\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"end-date-diploma\">End Year</label><input type=\"text\" id=\"end-date-diploma\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"stream-diploma\">Stream</label><input type=\"text\" id=\"stream-diploma\" placeholder=\"Computer Science\"><br><label for=\"cgpa-diploma\">College</label><input type=\"text\" id=\"cgpa-diploma\" placeholder=\"9.8\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-edu-diploma\"></div>";
var edu_graduation = "<div class=\"form-group\" id=\"graduation-form\"><label for=\"college-graduation\">College</label><input type=\"text\" id=\"college-graduation\" placeholder=\"Karpagam College of Engineering\"><br><label for=\"start-date-graduation\">Start Year</label><input type=\"text\" id=\"start-date-graduation\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"end-date-graduation\">End Year</label><input type=\"text\" id=\"end-date-graduation\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"degree-graduation\">Degree</label><input type=\"text\" id=\"degree-graduation\" placeholder=\"Bachelor of Technology\"><br><label for=\"stream-graduation\">Stream</label><input type=\"text\" id=\"stream-graduation\" placeholder=\"Computer Science\"><br><label for=\"cgpa-graduation\">CGPA</label><input type=\"text\" id=\"cgpa-graduation\" placeholder=\"9.8\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-edu-graduation\"></div>";
var edu_pg = "<div class=\"form-group\" id=\"pg-form\"><label for=\"college-pg\">College</label><input type=\"text\" id=\"college-pg\" placeholder=\"Karpagam College of Engineering\"><br><label for=\"start-date-pg\">Start Year</label><input type=\"text\" id=\"start-date-pg\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"end-date-pg\">End Year</label><input type=\"text\" id=\"end-date-pg\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"degree-pg\">Degree</label><input type=\"text\" id=\"degree-pg\" placeholder=\"Bachelor of Technology\"><br><label for=\"stream-pg\">Stream</label><input type=\"text\" id=\"stream-pg\" placeholder=\"Computer Science\"><br><label for=\"cgpa-pg\">CGPA</label><input type=\"text\" id=\"cgpa-pg\" placeholder=\"9.8\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-edu-pg\"></div>";
var edu_phd = "<div class=\"form-group\" id=\"phd-form\"><label for=\"college-phd\">College</label><input type=\"text\" id=\"college-phd\" placeholder=\"Karpagam College of Engineering\"><br><label for=\"start-date-phd\">Start Year</label><input type=\"text\" id=\"start-date-phd\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"end-date-phd\">End Year</label><input type=\"text\" id=\"end-date-phd\" placeholder=\"MM/DD/YYYY\" name=\"date\"><br><label for=\"degree-phd\">Degree</label><input type=\"text\" id=\"degree-phd\" placeholder=\"Bachelor of Technology\"><br><label for=\"stream-phd\">Stream</label><input type=\"text\" id=\"stream-phd\" placeholder=\"Computer Science\"><br><label for=\"cgpa-phd\">CGPA</label><input type=\"text\" id=\"cgpa-phd\" placeholder=\"9.8\"><br><input class = \"btn-submit\" type=\"button\" value=\"Save\" id=\"btn-edu-phd\"></div>";

var image_gallery = "<div class=\"img\"><a target=\"_blank\" href=\"images/resume-img-1.png\"><img src=\"images/resume-img-1.png\" alt=\"Format 1\" width=\"250\" height=\"300\"></a><div class=\"desc\">Click to View Image</div><a class=\"download\" id=\"download-btn-1\"> Download </a></div><div class=\"img\"><a target=\"_blank\" href=\"images/resume-img-2.jpg\"><img src=\"images/resume-img-2.jpg\" alt=\"Format 2\" width=\"250\" height=\"300\"></a><div class=\"desc\">Click to View Image</div><a class=\"download\" id=\"download-btn-2\"> Download </a></div><div class=\"img\"><a target=\"_blank\" href=\"images/resume-img-3.jpg\"><img src=\"images/resume-img-3.jpg\" alt=\"Format 3\" width=\"250\" height=\"300\"></a><div class=\"desc\">Click to View Image</div><a class=\"download\" id=\"download-btn-3\"> Download </a></div>";

/*
var education = "<div id=\"education-form\"><a class=\"edu-options\" href=\"#secondary-form\" id=\"secondary\" data-toggle=\"collapse\">X (Secondary)<img src=\"images/arrow-32-24.png\"></a><a class=\"edu-options\" href=\"#hsc-form\" id=\"hsc\" data-toggle=\"collapse\">XII (Higher Secondary)<img src=\"images/arrow-32-24.png\"></a><a class=\"edu-options\" href=\"#diploma-form\" id=\"diploma\" data-toggle=\"collapse\">Diploma<img src=\"images/arrow-32-24.png\"></a><a class=\"edu-options\" href=\"#grad-form\" id=\"graduate\" data-toggle=\"collapse\">Graduate<img src=\"images/arrow-32--24.png\"></a><a class=\"edu-options\" href=\"#pg-form\" id=\"pg\" data-toggle=\"collapse\">Post Graduate<img src=\"images/arrow-32-24.png\"></a><a class=\"edu-options\" href=\"#phd-form\" id=\"phd\" data-toggle=\"collapse\">Ph D<img src=\"images/arrow-32-24.png\"></a></div>";
var internship = "<div id=\"internship-container\"><div id=\"internship-details\"></div><div class=\"prefilled\" id=\"prefilled-internship-details\"></div><input type=\"button\" class=\"btn-submit\" id=\"add-more-internship\" value=\"Add More Details\" style=\"width: 200px\"></div>";
*/
//window.alert("here");
//console.log("here");


function hidelocationintern(workfromhomeintern) {
	var location = document.getElementById('location-intern');
	location.value=workfromhomeintern.checked?"Virtual":"";
	location.disabled = workfromhomeintern.checked?"true":"false";		
	if(workfromhomeintern.checked == false)
		location.removeAttribute('disabled');	
}

function hideendyearintern(currentlyworking) {
	var endyear = document.getElementById('end-date-intern');
	endyear.value = currentlyworking.checked?"Present":"";	
	endyear.disabled = currentlyworking.checked?"true":"false";
	if(currentlyworking.checked == false)
		endyear.removeAttribute('disabled');
}

function hidelocationjob(workfromhomejobs) {
	var location = document.getElementById('location-job');
	location.value=workfromhomejobs.checked?"Virtual":"";
	location.disabled = workfromhomejobs.checked?"true":"false";		
	if(workfromhomejobs.checked == false)
		location.removeAttribute('disabled');	
}

function hideendyearjob(currentlyworking) {
	var endyear = document.getElementById('end-date-job');
	endyear.value = currentlyworking.checked?"Present":"";	
	endyear.disabled = currentlyworking.checked?"true":"false";
	if(currentlyworking.checked == false)
		endyear.removeAttribute('disabled');
}

function hideendyearproject(currentlyworking) {
	var endyear = document.getElementById('end-date-project');
	endyear.value = currentlyworking.checked?"Present":"";	
	endyear.disabled = currentlyworking.checked?"true":"false";
	if(currentlyworking.checked == false)
		endyear.removeAttribute('disabled');
}

function reset() {
	var forms = document.getElementsByClassName('form-group');
	for(i = 0; i < forms.length; i++) {
		forms[i].style = "display:none";
	}
}

function display(username) {
	document.getElementById('logout').style="display:inline-block";
	document.getElementById('user').style="display:inline-block";
	document.getElementById('user').innerHTML=username + "<img src=\"images/user-32.png\">";
	document.getElementById('main').innerHTML = frame;
	current_user = username;
	
	// Personal Details
	
	document.getElementById('personal').addEventListener("click", function() {
		reset();
		document.getElementById('content').innerHTML = personal;
		document.getElementById('content').innerHTML = personalForm;
		document.getElementById('personal').setAttribute('data-target', personal_value);
		AJAXRequest("retrieve", setValue, "&tableName=personal&username="+username);					
	});
	
	// Internship
	document.getElementById('internship').addEventListener("click", function() {
		reset();
		document.getElementById('content').innerHTML = internship;
		AJAXRequest("retrieve", setValue, "&tableName=internship&username="+username);			
	});
	
	//Jobs
	document.getElementById('job').addEventListener("click", function() {
		reset();
		document.getElementById('content').innerHTML = jobs;
		AJAXRequest("retrieve", setValue, "&tableName=jobs&username="+username);
	});
	
	//Project
	document.getElementById('project').addEventListener("click", function() {
		reset();
		document.getElementById('content').innerHTML = project;
		AJAXRequest("retrieve", setValue, "&tableName=project&username="+username);
	});
	
	//Extra
	document.getElementById('extra-curricular').addEventListener("click", function() {
		reset();
		document.getElementById('content').innerHTML = extraForm;
		AJAXRequest("retrieve", setValue, "&tableName=extra&username="+username);
	});
	
	//Skills
	document.getElementById('skills').addEventListener("click", function() {
		reset();
		document.getElementById('content').innerHTML = skillForm;
		AJAXRequest("retrieve", setValue, "&tableName=skills&username="+username);
	});
	
	//Education 
	document.getElementById('education').addEventListener("click", function() {
		reset();
		document.getElementById('content').innerHTML = education;
		AJAXRequest("retrieve", setValue, "&tableName=secondary&username="+username);
		AJAXRequest("retrieve", setValue, "&tableName=hsc&username="+username);
		AJAXRequest("retrieve", setValue, "&tableName=diploma&username="+username);
		AJAXRequest("retrieve", setValue, "&tableName=graduation&username="+username);
		AJAXRequest("retrieve", setValue, "&tableName=pg&username="+username);
		AJAXRequest("retrieve", setValue, "&tableName=phd&username="+username);
		console.log("here in function call");
	});
	
	//To templates
	
	document.getElementById('generate-pdf').addEventListener("click", function(){
		document.getElementById('main').innerHTML = image_gallery;
		document.getElementById('main').style = "background: #FF402E;";
		
		AJAXRequest("retrieve", assign, "&tableName=personal&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=internship&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=jobs&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=project&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=skills&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=extra&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=secondary&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=hsc&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=diploma&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=graduation&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=pg&username="+username);
		AJAXRequest("retrieve", assign, "&tableName=phd&username="+username);
		
		//Download format 1
		
		document.getElementById('download-btn-1').addEventListener("click", function () {
			var printWindow = window.open('', '', 'height= 841.89,width=595.28');
	        printWindow.document.write('<html><head><title>Bio-data</title>');
	        printWindow.document.write('</head><body>');
	        printWindow.document.write('<h2><u>Personal Information</u></h2><br>');
	        printWindow.document.write('<img src="images/saru.jpg" style="height:150px; width: 100px; float: right; margin-top: -80px;">');
	        printWindow.document.write('<table>	<tr><td>First Name</td><td>:</td><td>'+personal_data[0].firstName+'</td></tr><tr><td>Last Name</td><td>:</td><td>'+personal_data[0].lastName+'</td></tr><tr><td> Date of Birth </td><td>:</td><td>'+personal_data[0].dob+'</td></tr><tr><td>City</td><td>:</td>	<td>'+personal_data[0].city+'</td></tr>	<tr><td>Phone Number</td><td>:</td><td>'+personal_data[0].phoneNumber+'</td></tr></table>');
	        printWindow.document.write('<h2><u>Education</u> </h2>');        
	        //ADD education
	        
	        console.log(education_data);
	        var str_education = "";

	        for(i = 0; i < education_data.length; i++){
	        	if(education_data[i].table == "secondary" || education_data[i].table == "hsc")
	        		str_education += "<tr><td style=\"background-color: lightblue; padding: 10px;\">"+education_data[i].table+"</td><td>"+education_data[i].schools+"</td><td>"+education_data[i].board+"</td><td>"+education_data[i].yog+"</td><td>"+education_data[i].percentage+"</td></tr>";
	        	else
	        		str_education += "<tr><td style=\"background-color: lightblue; padding: 10px;\">"+education_data[i].table+"</td><td>"+education_data[i].college+"</td><td> Anna University </td><td>"+education_data[i].endDate+"</td><td>"+education_data[i].cgpa+"</td></tr>";
	        	
	        } 
	        	
	        	
	        
	        printWindow.document.write('<table style="border: 1px solid black"><tr style="border-bottom: 1px solid black; background-color: lightblue; padding: 10px;"><td>Course</td><td>Institution</td><td>University/Board</td><td>Year of completion</td><td>CGPA / Marks%</td></tr>'+str_education+'</table>');
	        
	        printWindow.document.write('<h2><u>Experience</u></h2>');
	        
	        var str_internship="";
	        for(i=0;i<internship_data.length; i++)
	        	str_internship += "<ul style=\"list-style-type:none\"> <li> <h4> Profile : "+internship_data[i].profile+"</h4></li> <li> Organization : "+internship_data[i].organization+"</li> <li> Location : "+internship_data[i].location+"</li> <li>  "+internship_data[i].startDate+" - "+internship_data[i].endDate+"</li> <li> Description : "+internship_data[i].description+"</li> </ul>";
	        
	        var str_jobs="";
	        for(i=0;i<jobs_data.length;i++)
	        	str_jobs += "<ul style=\"list-style-type:none\"> <li> <h4> Profile : "+jobs_data[i].profile+"</h4></li> <li> Organization : "+jobs_data[i].organization+"</li> <li> Location : "+jobs_data[i].location+"</li> <li> "+jobs_data[i].startDate+" - "+jobs_data[i].endDate+"</li> <li> Description : "+jobs_data[i].description+"</li> </ul>"
	        
	        printWindow.document.write('<table><tr><td>Internships</td><td>:</td><td><div>'+str_internship+'</div></td></tr><tr><td>Jobs</td><td>:</td><td><div>'+str_jobs+'</div></td></tr></table>');
	        
	        printWindow.document.write('<h2><u>Projects</u></h2>');
	        
	        var str_projects = "";
	        for(i=0; i < projects_data.length; i++)
	        	str_projects += "<li class=\"projects\">"+projects_data[i].title+" <ul style=\"list-style-type: none;\"><li>"+projects_data[i].startDate+" - "+projects_data[i].endDate+"</li> <li>"+projects_data[i].description+"</li> <li>"+projects_data[i].link+"</li> </ul></li>";

	        printWindow.document.write('<style> .projects:before{content: \'✔\';}</style><div> <ul style="list-style-type:none">'+str_projects+'</ul></div>');
	        
	        printWindow.document.write('<h2><u>Skills</u></h2>');
	        
	        var str_skills = "";
	        for(i=0;i<skills_data.length; i++)
	        	str_skills += "<li>"+skills_data[i].skill+"</li>";
	        printWindow.document.write('<ul>'+str_skills+'</ul>');
	        
	        printWindow.document.write('<h2><u>Extra-curricular Activities</u></h2>');
	        
	        var str_extra = "";
	        for(i=0;i<extra_data.length; i++)
	        	str_extra += "<li>"+extra_data[i].description+"</li>";
	        printWindow.document.write('<ul>'+str_extra+'</ul>');
	        
	        
	        printWindow.document.write('</body></html>');
	        printWindow.document.close();
	        printWindow.print();
		});
	});
	
	
}


function assign(datas) {
	console.log("here in assign")
	//console.log(datas[0].table);
	if(datas.value != "none") {
	if(datas[0].table == "personal")
		personal_data = datas;
	else if(datas[0].table == "internship")
		internship_data = datas;
	else if(datas[0].table == "jobs")
		jobs_data = datas;
	else if(datas[0].table == "project")
		projects_data = datas;
	else if(datas[0].table == "skills")
		skills_data = datas;
	else if(datas[0].table == 'extra')
		extra_data = datas;
	else if(datas[0].table == "secondary" || datas[0].table == "hsc" || datas[0].table == "diploma" || datas[0].table == "graduation" || datas[0].table == "pg" || datas[0].table == "phd"){
		console.log("this : ");
		console.log(education_data);
		education_data.push(datas[0]);
		//edu ++;
	}
	}
}


function setValue(datas) {
	console.log("here");
	
	if(datas.value == "none") {
		
		//personal
		if(datas.table == "personal") {
			document.getElementById('content').innerHTML = personalForm;
			document.getElementById('personal-form').style = "display: block";
			//console.log(document.getElementById('personal').getAttribute('data-target'));

			
			document.getElementById('btn-personal').addEventListener("click", function() {
				var firstName = document.getElementById('firstName').value;
				var lastName = document.getElementById('lastName').value;
				var dob = document.getElementById('dob').value;
				var city = document.getElementById('city').value;
				var phoneNumber = document.getElementById('phoneNumber').value;
				var photo = document.getElementById('photo').value;
				personal_value = 1;
				AJAXRequest("personal", checkUser, "&username="+current_user+"&firstName="+firstName+"&lastName="+lastName+"&dob="+dob+"&city="+city+"&phoneNumber="+phoneNumber+"&photo="+photo);
				
			});
		}
		
		//internship
		if(datas.table == "internship") {
			
			document.getElementById('add-more-internship').addEventListener("click", function() {
				document.getElementById('internship-container').innerHTML = internshipForm;
				internship_count++;
				
				document.getElementById('btn-internship').addEventListener("click", function() {
					var organization = document.getElementById('organization-intern').value;
					var profile = document.getElementById('profile-intern').value;
					var location = document.getElementById('location-intern').value;
					var startdate = document.getElementById('start-date-intern').value;
					var enddate = document.getElementById('end-date-intern').value;
					var description = document.getElementById('description-intern').value;
					var workfromhome = document.getElementById('work-from-home-intern');
					var currentlyworking = document.getElementById('currently-working-intern');
					AJAXRequest("internship", checkUser, "&username="+current_user+"&number="+internship_count+"&organization="+organization+"&profile="+profile+"&location="+location+"&startdate="+startdate+"&enddate="+enddate+"&description="+description);
					
				});
			});
		}
		
		//Jobs
		else if(datas.table == "jobs") {
			document.getElementById('add-more-jobs').addEventListener("click", function() {
				document.getElementById('jobs-container').innerHTML = jobsForm;
				jobs_count++;
				
				document.getElementById('btn-job').addEventListener("click", function() {
					var organization = document.getElementById('organization-job').value;
					var profile = document.getElementById('profile-job').value;
					var location = document.getElementById('location-job').value;
					var startdate = document.getElementById('start-date-job').value;
					var enddate = document.getElementById('end-date-job').value;
					var description = document.getElementById('description-job').value;
					var workfromhome = document.getElementById('work-from-home-job');
					var currentlyworking = document.getElementById('currently-working-job');
					AJAXRequest("jobs", checkUser, "&username="+current_user+"&number="+job_count+"&organization="+organization+"&profile="+profile+"&location="+location+"&startdate="+startdate+"&enddate="+enddate+"&description="+description);
					
					});
			});
		}
		//project
		else if(datas.table == "project") {
			document.getElementById('add-more-project').addEventListener("click", function() {
				document.getElementById('project-container').innerHTML = projectForm;
				project_count++;
				
				document.getElementById('btn-project').addEventListener("click", function() {
					var title = document.getElementById('title-project').value;
					var description = document.getElementById('description-project').value;
					var startdate = document.getElementById('start-date-project').value;
					var enddate = document.getElementById('end-date-project').value;
					var link = document.getElementById('link-project').value;
					var currentlyworking = document.getElementById('currently-working-job');
					AJAXRequest("project", checkUser, "&username="+current_user+"&number="+project_count+"&title="+title+"&description="+description+"&startdate="+startdate+"&enddate="+enddate+"&link="+link);
					
					});
			});
		}
		//extra
		else if(datas.table == "extra") {
			extra_count++;
			
			document.getElementById('btn-extra').addEventListener("click", function() {
				var description = document.getElementById('description').value;
				AJAXRequest("extra", checkUser, "&username="+current_user+"&number="+extra_count+"&description="+description);
			});
		}
		//skills
		else if(datas.table == "skills") {
			skills_count++;
			
			document.getElementById('btn-skills').addEventListener("click", function() {
				var skill = document.getElementById('skill').value;
				//console.log(document.getElementById('skill').value);
				AJAXRequest("skills", checkUser, "&username="+current_user+"&number="+skills_count+"&skill="+skill);
			});
		}
		
		//education
		/*secondary */
		
		else if(datas.table == "secondary") {
			document.getElementById('add-secondary').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_secondary;
				edu_sec_count++;
				console.log("here");
				document.getElementById('btn-edu-secondary').addEventListener("click", function() {
					var school = document.getElementById('school-secondary').value;
					var board = document.getElementById('board-secondary').value;
					var yoc = document.getElementById('yoc-secondary').value;
					var percentage = document.getElementById('percentage-secondary').value;
					AJAXRequest("secondary", checkUser, "&username="+current_user+"&number="+edu_sec_count+"&school="+school+"&board="+board+"&yoc="+yoc+"&percentage="+percentage);
				});
			});
			
		}
		
		/* hsc */
		else if(datas.table == "hsc") {
			document.getElementById('add-hsc').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_hsc;
				console.log("here in hsc");
				document.getElementById('btn-edu-hsc').addEventListener("click", function() {
					var school = document.getElementById('school-hsc').value;
					var board = document.getElementById('board-hsc').value;
					var yoc = document.getElementById('yoc-hsc').value;
					var percentage = document.getElementById('percentage-hsc').value;
					var stream = document.getElementById('stream-hsc').value;
					AJAXRequest("hsc", checkUser, "&username="+current_user+"&number=1&school="+school+"&board="+board+"&yoc="+yoc+"&percentage="+percentage+"&stream="+stream);
				});
			});
		}
		
		/* diploma */
		else if(datas.table == "diploma") {
			document.getElementById('add-diploma').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_diploma;
				console.log("here in diploma");
				diploma_count++;
				document.getElementById('btn-edu-diploma').addEventListener("click", function() {
					var college = document.getElementById('college-diploma').value;
					var startDate = document.getElementById('start-date-diploma').value;
					var endDate = document.getElementById('end-date-diploma').value;
					var cgpa = document.getElementById('cgpa-diploma').value;
					var stream = document.getElementById('stream-diploma').value;
					AJAXRequest("diploma", checkUser, "&username="+current_user+"&number="+diploma_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream);
				});
			});
		}
		
		/* graduation */
		else if(datas.table == "graduation") {
			console.log("checking grad");
			document.getElementById('add-graduation').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_graduation;
				console.log("here in graduation");
				graduation_count++;
				document.getElementById('btn-edu-graduation').addEventListener("click", function() {
					var college = document.getElementById('college-graduation').value;
					var startDate = document.getElementById('start-date-graduation').value;
					var endDate = document.getElementById('end-date-graduation').value;
					var cgpa = document.getElementById('cgpa-graduation').value;
					var degree = document.getElementById('degree-graduation').value;
					var stream = document.getElementById('stream-graduation').value;
					AJAXRequest("graduation", checkUser, "&username="+current_user+"&number="+graduation_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
				});
			});
		}
		
		/* pg */
		else if(datas.table == "pg") {
			console.log("checking pg");
			console.log(document.getElementById('add-pg'));
			document.getElementById('add-pg').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_pg;
				console.log("here in pg");
				pg_count++;
				document.getElementById('btn-edu-pg').addEventListener("click", function() {
					var college = document.getElementById('college-pg').value;
					var startDate = document.getElementById('start-date-pg').value;
					var endDate = document.getElementById('end-date-pg').value;
					var cgpa = document.getElementById('cgpa-pg').value;
					var degree = document.getElementById('degree-pg').value;
					var stream = document.getElementById('stream-pg').value;
					AJAXRequest("pg", checkUser, "&username="+current_user+"&number="+pg_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
				});
			});
		}
		
		/* phd */
		else if(datas.table == "phd") {
			console.log("checking phd");
			console.log(document.getElementById('add-phd'));
			document.getElementById('add-phd').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_phd;
				console.log("here in phd");
				phd_count++;
				document.getElementById('btn-edu-phd').addEventListener("click", function() {
					var college = document.getElementById('college-phd').value;
					var startDate = document.getElementById('start-date-phd').value;
					var endDate = document.getElementById('end-date-phd').value;
					var cgpa = document.getElementById('cgpa-phd').value;
					var degree = document.getElementById('degree-phd').value;
					var stream = document.getElementById('stream-phd').value;
					AJAXRequest("phd", checkUser, "&username="+current_user+"&number="+phd_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
				});
			});
		}
	}
	//PERSONAL
	else if(datas[0].table == "personal") {
		personal_value = 1;
		
		document.getElementById('btn-personal').value= "Edit";
		document.getElementById('firstName').value = datas[0].firstName;
		document.getElementById('lastName').value = datas[0].lastName;
		document.getElementById('dob').value = datas[0].dob;
		document.getElementById('city').value = datas[0].city;
		document.getElementById('phoneNumber').value = datas[0].phoneNumber;
		document.getElementById('photo').value = datas[0].photo;
		document.getElementById('btn-personal').addEventListener("click", function() {
			var firstName = document.getElementById('firstName').value;
			var lastName = document.getElementById('lastName').value;
			var dob = document.getElementById('dob').value;
			var city = document.getElementById('city').value;
			var phoneNumber = document.getElementById('phoneNumber').value;
			var photo = document.getElementById('photo').value;
			personal_value = 1;
			AJAXRequest("personal", checkUser, "&username="+current_user+"&firstName="+firstName+"&lastName="+lastName+"&dob="+dob+"&city="+city+"&phoneNumber="+phoneNumber+"&photo="+photo);
			
		});
	}
	//INTERNSHIP
	else if(datas[0].table == "internship") {
		for(i = 0; i < datas.length; i++) {
			console.log(datas.length);
			var str = "<div> <div style=\"display: inline-block;\"> <ul style=\"list-style-type:none\"> <li> <h3> PROFILE : "+datas[i].profile+"</h3></li> <li> ORGANIZATION : "+datas[i].organization+"</li> <li> LOCATION : "+datas[i].location+"</li> <li> TIME PERIOD : "+datas[i].startDate+" - "+datas[i].endDate+"</li> <li> DESCRIPTION : "+datas[i].description+"</li> </ul> </div> <div class=\"edit-btn-internship\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-internship\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
			document.getElementById('internship-container').innerHTML = document.getElementById('internship-container').innerHTML + str;
			renderdatas = datas;
			
			var edit = document.getElementsByClassName('edit-btn-internship');
			for(j = 0; j < edit.length; j++) {
				
				var organization = datas[i].organization;
				var location = datas[i].location;
				var startDate = datas[i].startDate;
				var endDate = datas[i].endDate;
				var description = datas[i].description;
				
				edit[j].addEventListener("click", function() {
					document.getElementById('internship-container').innerHTML = internshipForm;
					
					var num = parseInt(this.getAttribute('data-target'));
					
					
					console.log("render : "+ renderdatas + "num : " + num);
					
					var profile = renderdatas[num-1].profile;
					console.log(profile);
					
					
					document.getElementById('organization-intern').value = renderdatas[num-1].organization;
					document.getElementById('profile-intern').value = renderdatas[num-1].profile;
					document.getElementById('location-intern').value = renderdatas[num-1].location;
					if(renderdatas[num-1].location == "Virtual") {
						document.getElementById('location-intern').disabled = true;		
						document.getElementById('work-from-home-intern').checked = true;
					}
					document.getElementById('start-date-intern').value = renderdatas[num-1].startDate;
					document.getElementById('end-date-intern').value = renderdatas[num-1].endDate;
					if(renderdatas[num-1].endDate == "Present") {
						document.getElementById('end-date-intern').disabled = true;
						document.getElementById('currently-working-intern').checked = true;
					}
					document.getElementById('description-intern').value = renderdatas[num-1].description;
					document.getElementById('btn-internship').addEventListener("click", function() {
						var organization = document.getElementById('organization-intern').value;
						var profile = document.getElementById('profile-intern').value;
						var location = document.getElementById('location-intern').value;
						var startdate = document.getElementById('start-date-intern').value;
						var enddate = document.getElementById('end-date-intern').value;
						var description = document.getElementById('description-intern').value;
						var workfromhome = document.getElementById('work-from-home-intern');
						var currentlyworking = document.getElementById('currently-working-intern');
						AJAXRequest("internship", checkUser, "&username="+current_user+"&number="+num+"&organization="+organization+"&profile="+profile+"&location="+location+"&startdate="+startdate+"&enddate="+enddate+"&description="+description);
										
				});
			});
		}
		
		var del = document.getElementsByClassName('delete-btn-internship');
		for(j = 0; j < del.length; j++) {
			del[j].addEventListener("click", function() {
				var num = parseInt(this.getAttribute('data-target'));
				AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=internship");
			});
		}
		
		internship_count = datas.length;
		
		document.getElementById('add-more-internship').addEventListener("click", function() {
			document.getElementById('internship-container').innerHTML = internshipForm;
			internship_count++;
			console.log(internship_count);
			
			document.getElementById('btn-internship').addEventListener("click", function() {
				var organization = document.getElementById('organization-intern').value;
				var profile = document.getElementById('profile-intern').value;
				var location = document.getElementById('location-intern').value;
				var startdate = document.getElementById('start-date-intern').value;
				var enddate = document.getElementById('end-date-intern').value;
				var description = document.getElementById('description-intern').value;
				var workfromhome = document.getElementById('work-from-home-intern');
				var currentlyworking = document.getElementById('currently-working-intern');
				AJAXRequest("internship", checkUser, "&username="+current_user+"&number="+internship_count+"&organization="+organization+"&profile="+profile+"&location="+location+"&startdate="+startdate+"&enddate="+enddate+"&description="+description);
				
			});
		});
	}
	}
	//JOBS
	else if(datas[0].table == "jobs") {
		
		for(i = 0; i < datas.length; i++) {
			console.log(datas.length);
			var str = "<div> <div style=\"display: inline-block;\"> <ul style=\"list-style-type:none\"> <li> <h3> PROFILE : "+datas[i].profile+"</h3></li> <li> ORGANIZATION : "+datas[i].organization+"</li> <li> LOCATION : "+datas[i].location+"</li> <li> TIME PERIOD : "+datas[i].startDate+" - "+datas[i].endDate+"</li> <li> DESCRIPTION : "+datas[i].description+"</li> </ul> </div> <div class=\"edit-btn-jobs\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-jobs\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
			document.getElementById('jobs-container').innerHTML = document.getElementById('jobs-container').innerHTML + str;
			renderdatasjobs = datas;
			console.log(renderdatasjobs);
			
			var edit = document.getElementsByClassName('edit-btn-jobs');
			for(j = 0; j < edit.length; j++) {
				
				var organization = datas[i].organization;
				var location = datas[i].location;
				var startDate = datas[i].startDate;
				var endDate = datas[i].endDate;
				var description = datas[i].description;
				
				edit[j].addEventListener("click", function() {
					document.getElementById('jobs-container').innerHTML = jobsForm;
					
					var num = parseInt(this.getAttribute('data-target'));
									
					console.log("render : "+ renderdatasjobs + "num : " + num);
					
					var profile = renderdatasjobs[num-1].profile;
					console.log(profile);
					
					
					document.getElementById('organization-job').value = renderdatasjobs[num-1].organization;
					document.getElementById('profile-job').value = renderdatasjobs[num-1].profile;
					document.getElementById('location-job').value = renderdatasjobs[num-1].location;
					if(renderdatasjobs[num-1].location == "Virtual") {
						document.getElementById('location-job').disabled = true;		
						document.getElementById('work-from-home-job').checked = true;
					}
					document.getElementById('start-date-job').value = renderdatasjobs[num-1].startDate;
					document.getElementById('end-date-job').value = renderdatasjobs[num-1].endDate;
					if(renderdatasjobs[num-1].endDate == "Present") {
						document.getElementById('end-date-job').disabled = true;
						document.getElementById('currently-working-job').checked = true;
					}
					document.getElementById('description-job').value = renderdatasjobs[num-1].description;
					document.getElementById('btn-job').addEventListener("click", function() {
						var organization = document.getElementById('organization-job').value;
						var profile = document.getElementById('profile-job').value;
						var location = document.getElementById('location-job').value;
						var startdate = document.getElementById('start-date-job').value;
						var enddate = document.getElementById('end-date-job').value;
						var description = document.getElementById('description-job').value;
						var workfromhome = document.getElementById('work-from-home-job');
						var currentlyworking = document.getElementById('currently-working-job');
						AJAXRequest("jobs", checkUser, "&username="+current_user+"&number="+num+"&organization="+organization+"&profile="+profile+"&location="+location+"&startdate="+startdate+"&enddate="+enddate+"&description="+description);
										
				});
			});
		}
			
			var del = document.getElementsByClassName('delete-btn-jobs');
			for(j = 0; j < del.length; j++) {
				del[j].addEventListener("click", function() {
					var num = parseInt(this.getAttribute('data-target'));
					AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=jobs");
				});
			}
			jobs_count = datas.length;
		
		document.getElementById('add-more-jobs').addEventListener("click", function() {
			document.getElementById('jobs-container').innerHTML = jobsForm;
			jobs_count++;
			console.log(jobs_count);
			
			document.getElementById('btn-job').addEventListener("click", function() {
				var organization = document.getElementById('organization-job').value;
				var profile = document.getElementById('profile-job').value;
				var location = document.getElementById('location-job').value;
				var startdate = document.getElementById('start-date-job').value;
				var enddate = document.getElementById('end-date-job').value;
				var description = document.getElementById('description-job').value;
				var workfromhome = document.getElementById('work-from-home-job');
				var currentlyworking = document.getElementById('currently-working-job');
				AJAXRequest("jobs", checkUser, "&username="+current_user+"&number="+jobs_count+"&organization="+organization+"&profile="+profile+"&location="+location+"&startdate="+startdate+"&enddate="+enddate+"&description="+description);
				
			});
		});
	}
	}
	//PROJECT
	else if(datas[0].table == "project") {
		for(i = 0; i < datas.length; i++) {
			console.log(datas.length);
			var str = "<div> <div style=\"display: inline-block;\"> <ul style=\"list-style-type:none\"> <li> <h3> TITLE : "+datas[i].title+"</h3></li> <li> TIME PERIOD : "+datas[i].startDate+" - "+datas[i].endDate+"</li> <li> DESCRIPTION : "+datas[i].description+"</li> <li> LINK : <a href="+datas[i].link+" target=\"_blank\" style=\"color:white;\">"+datas[i].link+"</a> </li> </ul> </div> <div class=\"edit-btn-project\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-project\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div></div>";
			document.getElementById('project-container').innerHTML = document.getElementById('project-container').innerHTML + str;
			renderdatasproject = datas;
			console.log(renderdatasproject);
			
			var edit = document.getElementsByClassName('edit-btn-project');
			for(j = 0; j < edit.length; j++) {
				
				var title = datas[i].title;
				var startDate = datas[i].startDate;
				var endDate = datas[i].endDate;
				var description = datas[i].description;
				var link = datas[i].link;
				
				edit[j].addEventListener("click", function() {
					document.getElementById('project-container').innerHTML = projectForm;
					
					var num = parseInt(this.getAttribute('data-target'));
									
					console.log("render : "+ renderdatasproject + "num : " + num);
					
									
					document.getElementById('title-project').value = renderdatasproject[num-1].title;
					document.getElementById('start-date-project').value = renderdatasproject[num-1].startDate;
					document.getElementById('end-date-project').value = renderdatasproject[num-1].endDate;
					if(renderdatasproject[num-1].endDate == "Present") {
						document.getElementById('end-date-project').disabled = true;
						document.getElementById('currently-working-project').checked = true;
					}
					document.getElementById('description-project').value = renderdatasproject[num-1].description;
					document.getElementById('link-project').value = renderdatasproject[num-1].link;
					document.getElementById('btn-project').addEventListener("click", function() {
						var title = document.getElementById('title-project').value;
						var description = document.getElementById('description-project').value;
						var startdate = document.getElementById('start-date-project').value;
						var enddate = document.getElementById('end-date-project').value;
						var link = document.getElementById('link-project').value;
						var currentlyworking = document.getElementById('currently-working-project');
						AJAXRequest("project", checkUser, "&username="+current_user+"&number="+num+"&title="+title+"&description="+description+"&startdate="+startdate+"&enddate="+enddate+"&link="+link);
										
				});
			});
		}
			
			var del = document.getElementsByClassName('delete-btn-project');
			for(j = 0; j < del.length; j++) {
				del[j].addEventListener("click", function() {
					var num = parseInt(this.getAttribute('data-target'));
					AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=project");
				});
			}
			
			project_count = datas.length;
		
		document.getElementById('add-more-project').addEventListener("click", function() {
			document.getElementById('project-container').innerHTML = projectForm;
			project_count++;
			console.log(project_count);
			
			document.getElementById('btn-project').addEventListener("click", function() {
				var title = document.getElementById('title-project').value;
				var description = document.getElementById('description-project').value;
				var startdate = document.getElementById('start-date-project').value;
				var enddate = document.getElementById('end-date-project').value;
				var link = document.getElementById('link-project').value;
				var currentlyworking = document.getElementById('currently-working-project');
				AJAXRequest("project", checkUser, "&username="+current_user+"&number="+project_count+"&title="+title+"&description="+description+"&startdate="+startdate+"&enddate="+enddate+"&link="+link);
			});
		});
	}
	}
	//EXTRA CURRICULARS
	else if(datas[0].table == "extra") {
		var str = "<div style=\"display: inline-block; width: 100%;\"> <ul style=\"list-style-type:none;\"> ";
		for(i = 0; i < datas.length; i++) {			
			console.log(datas.length);
			str += "<li> <h3 style=\"display: inline-block;\"> DESCRIPTION : "+datas[i].description+"</h3>   <div class=\"edit-btn-extra\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-extra\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </li>";
			//document.getElementById('extra-container').innerHTML = document.getElementById('extra-container').innerHTML + str;
			renderdatasextra = datas;
			console.log(renderdatasextra);	
			
	}
		str += "</ul></div>";
		document.getElementById('extra-container').innerHTML = document.getElementById('extra-container').innerHTML + str;
		console.log(str);
		
		var edit = document.getElementsByClassName('edit-btn-extra');
		console.log(edit);
		for(j = 0; j < edit.length; j++) {
			
			var description = datas[j].description;
			console.log("here in edit");
			
			edit[j].addEventListener("click", function() {
				document.getElementById('extra-container').innerHTML = extraForm;
				
				var num = parseInt(this.getAttribute('data-target'));
								
				console.log("render : "+ renderdatasextra + "num : " + num);
				
								
				document.getElementById('description-extra').value = renderdatasextra[num-1].description;
				
				document.getElementById('btn-extra').addEventListener("click", function() {
					var description = document.getElementById('description-extra').value;
					AJAXRequest("extra", checkUser, "&username="+current_user+"&number="+num+"&description="+description);
									
			});
		});
	}
		var del = document.getElementsByClassName('delete-btn-extra');
		for(j = 0; j < del.length; j++) {
			del[j].addEventListener("click", function() {
				var num = parseInt(this.getAttribute('data-target'));
				AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=extra");
			});
		}

		
		extra_count = datas.length;
				
		document.getElementById('btn-extra').addEventListener("click", function() {
			extra_count++;
			console.log(extra_count);
			var description = document.getElementById('description-extra').value;
			AJAXRequest("extra", checkUser, "&username="+current_user+"&number="+extra_count+"&description="+description);
							
		});
	}
	//SKILLS
	else if(datas[0].table == "skills") {
		var str = "<div style=\"display: inline-block; width: 100%;\"> <ul style=\"list-style-type:none;\"> ";
		for(i = 0; i < datas.length; i++) {			
			console.log(datas.length);
			str += "<li> <h3 style=\"display: inline-block;\"> SKILL : "+datas[i].skill+"</h3>   <div class=\"edit-btn-skills\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div>  <div class=\"delete-btn-skills\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div>  </li>";
			//document.getElementById('extra-container').innerHTML = document.getElementById('extra-container').innerHTML + str;
			renderdatasskills = datas;
			console.log(renderdatasskills);
				
			
			
	}
		str += "</ul></div>";
		document.getElementById('skills-container').innerHTML = document.getElementById('skills-container').innerHTML + str;
		console.log(str);
		
		var edit = document.getElementsByClassName('edit-btn-skills');
		console.log(edit);
		for(j = 0; j < edit.length; j++) {
			
			var skill = datas[j].skill;
			console.log("here in edit " + skill);
			
			edit[j].addEventListener("click", function() {
				document.getElementById('skills-container').innerHTML = skillForm;
				
				var num = parseInt(this.getAttribute('data-target'));
								
				console.log("render : "+ renderdatasskills + "num : " + num);
				
								
				document.getElementById('skill').value = renderdatasskills[num-1].skill;
				
				document.getElementById('btn-skills').addEventListener("click", function() {
					var skill = document.getElementById('skill').value;
					AJAXRequest("skills", checkUser, "&username="+current_user+"&number="+num+"&skill="+skill);
									
			});
		});
	}
		
		var del = document.getElementsByClassName('delete-btn-skills');
		for(j = 0; j < del.length; j++) {
			del[j].addEventListener("click", function() {
				var num = parseInt(this.getAttribute('data-target'));
				AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=skills");
			});
		}
		
		skills_count = datas.length;
			
		document.getElementById('btn-skills').addEventListener("click", function() {
			skills_count++;
			console.log(skills_count);
			var skill = document.getElementById('skill').value;
			AJAXRequest("skills", checkUser, "&username="+current_user+"&number="+skills_count+"&skill="+skill);
							
		});
	}
	
	//EDUCATION
	else if(datas[0].table == "secondary") {
		var str = "<div> <div style=\"display:inline-block;\"> <ul style=\"list-style-type: none; display: inline-block;\"> <li> <h3>X(Secondary)</h3></li> <li>Year of Completion : "+datas[0].yog+"</li> <li>"+datas[0].board+" board ("+datas[0].schools+")</li> <li> Percentage  : "+datas[0].percentage+"</li> </ul></div> <div id=\"edit-btn-secondary\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-secondary\" data-target=\""+datas[0].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
		document.getElementById('education-container').innerHTML = document.getElementById('education-container').innerHTML + str
		document.getElementById('add-secondary').style="display: none";
		console.log(document.getElementById('edit-btn-secondary'));
		document.getElementById('edit-btn-secondary').addEventListener("click", function() {
			console.log("in secondary edu");
			//alert("in here");
			
			document.getElementById('education-container').innerHTML = edu_secondary;
			
			document.getElementById('school-secondary').value = datas[0].schools;
			document.getElementById('board-secondary').value = datas[0].board;
			document.getElementById('yoc-secondary').value = datas[0].yog;
			document.getElementById('percentage-secondary').value = datas[0].percentage;
			
			document.getElementById('btn-edu-secondary').addEventListener("click", function() {
				var school = document.getElementById('school-secondary').value;
				var board = document.getElementById('board-secondary').value;
				var yoc = document.getElementById('yoc-secondary').value;
				var percentage = document.getElementById('percentage-secondary').value;
				AJAXRequest("secondary", checkUser, "&username="+current_user+"&number=1&school="+school+"&board="+board+"&yoc="+yoc+"&percentage="+percentage);
			});
			
		});	
		
		var del = document.getElementsByClassName('delete-btn-secondary');
		for(j = 0; j < del.length; j++) {
			del[j].addEventListener("click", function() {
				var num = parseInt(this.getAttribute('data-target'));
				AJAXRequest("delete", checkUser, "username="+current_user+"&number=1&tableName=secondary");
			});
		}
	
	}
	else if(datas[0].table == "hsc") {
		var str = "<div> <div style=\"display:inline-block;\"> <ul style=\"list-style-type: none; display: inline-block;\"> <li> <h3>XII(Higher - Secondary)</h3></li> <li>Year of Completion : "+datas[0].yog+"</li> <li>"+datas[0].board+" board ("+datas[0].schools+")</li> <li> Stream : "+datas[0].stream+"</li> <li> Percentage  : "+datas[0].percentage+"</li> </ul></div> <div id=\"edit-btn-hsc\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-hsc\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
		document.getElementById('education-container').innerHTML = document.getElementById('education-container').innerHTML + str
		document.getElementById('add-hsc').style="display: none";
		
		document.getElementById('edit-btn-hsc').addEventListener("click", function() {
			console.log("in edit of hsc");
			document.getElementById('education-container').innerHTML = edu_hsc;
			
			document.getElementById('school-hsc').value = datas[0].schools;
			document.getElementById('board-hsc').value = datas[0].board;
			document.getElementById('yoc-hsc').value = datas[0].yog;
			document.getElementById('percentage-hsc').value = datas[0].percentage;
			document.getElementById('stream-hsc').value = datas[0].stream;
			
			document.getElementById('btn-edu-hsc').addEventListener("click", function() {
				var school = document.getElementById('school-hsc').value;
				var board = document.getElementById('board-hsc').value;
				var yoc = document.getElementById('yoc-hsc').value;
				var percentage = document.getElementById('percentage-hsc').value;
				var stream = document.getElementById('stream-hsc').value;
				AJAXRequest("hsc", checkUser, "&username="+current_user+"&number=1&school="+school+"&board="+board+"&yoc="+yoc+"&percentage="+percentage+"&stream="+stream);
			});
			
		});	
		
		var del = document.getElementsByClassName('delete-btn-hsc');
		for(j = 0; j < del.length; j++) {
			del[j].addEventListener("click", function() {
				var num = parseInt(this.getAttribute('data-target'));
				AJAXRequest("delete", checkUser, "username="+current_user+"&number=1&tableName=hsc");
			});
		}
	}
	
	// Diploma
	
	else if(datas[0].table == "diploma") {
		for(i = 0; i < datas.length; i++) {
			console.log(datas.length);
			var str = "<div> <div style=\"display:inline-block;\"> <ul style=\"list-style-type: none; display: inline-block;\"> <li> <h3> Diploma in "+datas[i].stream+" </h4> ("+datas[i].startDate+" - "+datas[i].endDate+") </li> <li> College : "+datas[i].college+" </li> <li> CGPA  : "+datas[i].cgpa+"</li> </ul></div> <div class=\"edit-btn-diploma\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-diploma\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
			document.getElementById('education-container').innerHTML = document.getElementById('education-container').innerHTML + str;
			renderdatasdiploma = datas;
			console.log("diploma : " + renderdatasdiploma);
			
			var edit = document.getElementsByClassName('edit-btn-diploma');
			console.log(edit);
			console.log(datas);
			for(j = 0; j < edit.length; j++) {
				console.log("here in edit loop");
				var college = datas[i].college;
				var startDate = datas[i].startDate;
				var endDate = datas[i].endDate;
				var stream = datas[i].stream;
				var cgpa = datas[i].cgpa;
				console.log(edit[j]);
				edit[j].addEventListener("click", function() {
					
					document.getElementById('education-container').innerHTML = edu_diploma;
					
					var num = parseInt(this.getAttribute('data-target'));
									
					console.log("render : "+ renderdatasdiploma + "num : " + num);
					
									
					document.getElementById('college-diploma').value = renderdatasdiploma[num-1].college;
					document.getElementById('start-date-diploma').value = renderdatasdiploma[num-1].startDate;
					document.getElementById('end-date-diploma').value = renderdatasdiploma[num-1].endDate;
					document.getElementById('cgpa-diploma').value = renderdatasdiploma[num-1].cgpa;
					document.getElementById('stream-diploma').value = renderdatasdiploma[num-1].stream;
					
					document.getElementById('btn-edu-diploma').addEventListener("click", function() {
						var college = document.getElementById('college-diploma').value;
						var startDate = document.getElementById('start-date-diploma').value;
						var endDate = document.getElementById('end-date-diploma').value;
						var cgpa = document.getElementById('cgpa-diploma').value;
						var stream = document.getElementById('stream-diploma').value;
						AJAXRequest("diploma", checkUser, "&username="+current_user+"&number="+num+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream);
					});
			});
		}
			
			var del = document.getElementsByClassName('delete-btn-diploma');
			for(j = 0; j < del.length; j++) {
				del[j].addEventListener("click", function() {
					var num = parseInt(this.getAttribute('data-target'));
					AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=diploma");
				});
			}
			
			diploma_count = datas.length;
		
			document.getElementById('add-diploma').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_diploma;
				console.log("here in diploma");
				diploma_count++;
				document.getElementById('btn-edu-diploma').addEventListener("click", function() {
					var college = document.getElementById('college-diploma').value;
					var startDate = document.getElementById('start-date-diploma').value;
					var endDate = document.getElementById('end-date-diploma').value;
					var cgpa = document.getElementById('cgpa-diploma').value;
					var stream = document.getElementById('stream-diploma').value;
					AJAXRequest("diploma", checkUser, "&username="+current_user+"&number="+diploma_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream);
				});
			});
	}
	}
	
	//Graduation
	
	else if(datas[0].table == "graduation") {
		for(i = 0; i < datas.length; i++) {
			console.log(datas.length);
			var str = "<div> <div style=\"display:inline-block;\"> <ul style=\"list-style-type: none; display: inline-block;\"> <li> <h3>  "+datas[i].degree+","+datas[i].stream+" </h4> ("+datas[i].startDate+" - "+datas[i].endDate+") </li> <li> College : "+datas[i].college+" </li> <li> CGPA  : "+datas[i].cgpa+"</li> </ul></div> <div class=\"edit-btn-graduation\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-graduation\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
			document.getElementById('education-container').innerHTML = document.getElementById('education-container').innerHTML + str;
			renderdatasgraduation = datas;
			console.log("graduation : " + renderdatasgraduation);
			
			var edit = document.getElementsByClassName('edit-btn-graduation');
			for(j = 0; j < edit.length; j++) {
				
				var college = datas[i].college;
				var startDate = datas[i].startDate;
				var endDate = datas[i].endDate;
				var stream = datas[i].stream;
				var cgpa = datas[i].cgpa;
				var degree = datas[i].degree;
				
				edit[j].addEventListener("click", function() {
					document.getElementById('education-container').innerHTML = edu_graduation;
					
					var num = parseInt(this.getAttribute('data-target'));
									
					console.log("render : "+ renderdatasgraduation + "num : " + num);
					
									
					document.getElementById('college-graduation').value = renderdatasgraduation[num-1].college;
					document.getElementById('start-date-graduation').value = renderdatasgraduation[num-1].startDate;
					document.getElementById('end-date-graduation').value = renderdatasgraduation[num-1].endDate;
					document.getElementById('cgpa-graduation').value = renderdatasgraduation[num-1].cgpa;
					document.getElementById('stream-graduation').value = renderdatasgraduation[num-1].stream;
					document.getElementById('degree-graduation').value = renderdatasgraduation[num-1].degree;
					
					document.getElementById('btn-edu-graduation').addEventListener("click", function() {
						var college = document.getElementById('college-graduation').value;
						var startDate = document.getElementById('start-date-graduation').value;
						var endDate = document.getElementById('end-date-graduation').value;
						var cgpa = document.getElementById('cgpa-graduation').value;
						var stream = document.getElementById('stream-graduation').value;
						var degree = document.getElementById('degree-graduation').value;
						AJAXRequest("graduation", checkUser, "&username="+current_user+"&number="+num+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
					});
			});
		}
			var del = document.getElementsByClassName('delete-btn-graduation');
			for(j = 0; j < del.length; j++) {
				del[j].addEventListener("click", function() {
					var num = parseInt(this.getAttribute('data-target'));
					AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=graduation");
				});
			}

			
			gradaution_count = datas.length;
		
			document.getElementById('add-graduation').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_graduation;
				console.log("here in graduation");
				graduation_count++;
				document.getElementById('btn-edu-graduation').addEventListener("click", function() {
					var college = document.getElementById('college-graduation').value;
					var startDate = document.getElementById('start-date-graduation').value;
					var endDate = document.getElementById('end-date-graduation').value;
					var cgpa = document.getElementById('cgpa-graduation').value;
					var stream = document.getElementById('stream-graduation').value;
					var degree = document.getElementById('degree-graduation').value;
					AJAXRequest("graduation", checkUser, "&username="+current_user+"&number="+graduation_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
				});
			});
	}
	}
	
	//PG
	else if(datas[0].table == "pg") {
		for(i = 0; i < datas.length; i++) {
			console.log(datas.length);
			var str = "<div> <div style=\"display:inline-block;\"> <ul style=\"list-style-type: none; display: inline-block;\"> <li> <h3>  "+datas[i].degree+","+datas[i].stream+" </h4> ("+datas[i].startDate+" - "+datas[i].endDate+") </li> <li> College : "+datas[i].college+" </li> <li> CGPA  : "+datas[i].cgpa+"</li> </ul></div> <div class=\"edit-btn-pg\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-pg\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
			document.getElementById('education-container').innerHTML = document.getElementById('education-container').innerHTML + str;
			renderdataspg = datas;
			console.log("pg : " + renderdataspg);
			
			var edit = document.getElementsByClassName('edit-btn-pg');
			for(j = 0; j < edit.length; j++) {
				
				var college = datas[i].college;
				var startDate = datas[i].startDate;
				var endDate = datas[i].endDate;
				var stream = datas[i].stream;
				var cgpa = datas[i].cgpa;
				var degree = datas[i].degree;
				
				edit[j].addEventListener("click", function() {
					document.getElementById('education-container').innerHTML = edu_pg;
					
					var num = parseInt(this.getAttribute('data-target'));
									
					console.log("render : "+ renderdataspg + "num : " + num);
					
									
					document.getElementById('college-pg').value = renderdataspg[num-1].college;
					document.getElementById('start-date-pg').value = renderdataspg[num-1].startDate;
					document.getElementById('end-date-pg').value = renderdataspg[num-1].endDate;
					document.getElementById('cgpa-pg').value = renderdataspg[num-1].cgpa;
					document.getElementById('stream-pg').value = renderdataspg[num-1].stream;
					document.getElementById('degree-pg').value = renderdataspg[num-1].degree;
					
					document.getElementById('btn-edu-pg').addEventListener("click", function() {
						var college = document.getElementById('college-pg').value;
						var startDate = document.getElementById('start-date-pg').value;
						var endDate = document.getElementById('end-date-pg').value;
						var cgpa = document.getElementById('cgpa-pg').value;
						var stream = document.getElementById('stream-pg').value;
						var degree = document.getElementById('degree-pg').value;
						AJAXRequest("pg", checkUser, "&username="+current_user+"&number="+num+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
					});
			});
		}
			
			var del = document.getElementsByClassName('delete-btn-pg');
			for(j = 0; j < del.length; j++) {
				del[j].addEventListener("click", function() {
					var num = parseInt(this.getAttribute('data-target'));
					AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=pg");
				});
			}


			pg_count = datas.length;
		
			document.getElementById('add-pg').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_pg;
				console.log("here in pg");
				pg_count++;
				document.getElementById('btn-edu-pg').addEventListener("click", function() {
					var college = document.getElementById('college-pg').value;
					var startDate = document.getElementById('start-date-pg').value;
					var endDate = document.getElementById('end-date-pg').value;
					var cgpa = document.getElementById('cgpa-pg').value;
					var stream = document.getElementById('stream-pg').value;
					var degree = document.getElementById('degree-pg').value;
					AJAXRequest("pg", checkUser, "&username="+current_user+"&number="+pg_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
				});
			});
	}
	}
	
	//Ph D
	
	else if(datas[0].table == "phd") {
		for(i = 0; i < datas.length; i++) {
			console.log(datas.length);
			var str = "<div> <div style=\"display:inline-block;\"> <ul style=\"list-style-type: none; display: inline-block;\"> <li> <h3>  "+datas[i].degree+","+datas[i].stream+" </h4> ("+datas[i].startDate+" - "+datas[i].endDate+") </li> <li> College : "+datas[i].college+" </li> <li> CGPA  : "+datas[i].cgpa+"</li> </ul></div> <div class=\"edit-btn-phd\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/edit-24.png\"/> </a> </div> <div class=\"delete-btn-phd\" data-target=\""+datas[i].number+"\" style=\"display: inline-block;\"> <a> <img src=\"images/delete-24.png\"/> </a> </div> </div>";
			document.getElementById('education-container').innerHTML = document.getElementById('education-container').innerHTML + str;
			renderdatasphd = datas;
			console.log("phd : " + renderdatasphd);
			
			var edit = document.getElementsByClassName('edit-btn-phd');
			for(j = 0; j < edit.length; j++) {
				
				var college = datas[i].college;
				var startDate = datas[i].startDate;
				var endDate = datas[i].endDate;
				var stream = datas[i].stream;
				var cgpa = datas[i].cgpa;
				var degree = datas[i].degree;
				
				edit[j].addEventListener("click", function() {
					document.getElementById('education-container').innerHTML = edu_phd;
					
					var num = parseInt(this.getAttribute('data-target'));
									
					console.log("render : "+ renderdatasphd + "num : " + num);
					
									
					document.getElementById('college-phd').value = renderdatasphd[num-1].college;
					document.getElementById('start-date-phd').value = renderdatasphd[num-1].startDate;
					document.getElementById('end-date-phd').value = renderdatasphd[num-1].endDate;
					document.getElementById('cgpa-phd').value = renderdatasphd[num-1].cgpa;
					document.getElementById('stream-phd').value = renderdatasphd[num-1].stream;
					document.getElementById('degree-phd').value = renderdatasphd[num-1].degree;
					
					document.getElementById('btn-edu-phd').addEventListener("click", function() {
						var college = document.getElementById('college-phd').value;
						var startDate = document.getElementById('start-date-phd').value;
						var endDate = document.getElementById('end-date-phd').value;
						var cgpa = document.getElementById('cgpa-phd').value;
						var stream = document.getElementById('stream-phd').value;
						var degree = document.getElementById('degree-phd').value;
						AJAXRequest("phd", checkUser, "&username="+current_user+"&number="+num+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
					});
			});
		}
			
			var del = document.getElementsByClassName('delete-btn-phd');
			for(j = 0; j < del.length; j++) {
				del[j].addEventListener("click", function() {
					var num = parseInt(this.getAttribute('data-target'));
					AJAXRequest("delete", checkUser, "username="+current_user+"&number="+num+"&tableName=phd");
				});
			}
			
			phd_count = datas.length;
		
			document.getElementById('add-phd').addEventListener("click", function() {
				document.getElementById('education-container').innerHTML = edu_phd;
				console.log("here in phd");
				phd_count++;
				document.getElementById('btn-edu-phd').addEventListener("click", function() {
					var college = document.getElementById('college-phd').value;
					var startDate = document.getElementById('start-date-phd').value;
					var endDate = document.getElementById('end-date-phd').value;
					var cgpa = document.getElementById('cgpa-phd').value;
					var stream = document.getElementById('stream-phd').value;
					var degree = document.getElementById('degree-phd').value;
					AJAXRequest("phd", checkUser, "&username="+current_user+"&number="+phd_count+"&college="+college+"&startDate="+startDate+"&endDate="+endDate+"&cgpa="+cgpa+"&stream="+stream+"&degree="+degree);
				});
			});
	}
	}
}




function checkUser(datas) {
	if(datas.code == "2") {
		console.log("logout : " + datas.message);
		location.reload();
	}
	else if(datas.code == "3"){
		//personal_value =  datas.personal;
		console.log("here");
		display(datas.username);
	}
	else if(datas.code == "1"){
		console.log("login : " + datas.message);
		display(datas.username);
	}
		
	else {
		console.log("error : " + datas.messge);
		//document.getElementById('error-message').innerHTML = datas.message;
	}
		
}


function AJAXRequest(url, func, args) {
	if(args === undefined) args = "";
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(args);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			console.log(JSON.parse(this.responseText));
			func(JSON.parse(this.responseText));
			
		}
	};
}


function myfunction() {
	var start = document.getElementById('generate');
	start.addEventListener("click", function() {
		var str = "<form class=\"enter-forms\" id = \"login\"><input type=\"text\" id = \"username\" placeholder=\"Username\"><br><input id=\"password\" type=\"password\" placeholder=\"Password\"><br><input id=\"btn-login\" type=\"button\" value=\"Login\"><br><a href=\"#\" id=\"link-signup\">Create an account</a><br><div id=\"error-message\"></div></form>";
		//console.log(str);
		document.getElementById('content-holder').innerHTML = str;
		
		/*event for login */
		
		document.getElementById('btn-login').addEventListener("click", function() {
			var username = document.getElementById('username').value;				
			var password = document.getElementById('password').value;	
			//AJAXRequest("Sample",fun,"");
			AJAXRequest("login",checkUser, "username="+username+"&password="+password);
		});
		
		/* form for signup */
		
		document.getElementById('link-signup').addEventListener("click", function() {
			var str = "<form class=\"enter-forms\" id = \"signup\"><input type=\"email\" id = \"new-email\" placeholder=\"Email\"><br><input type=\"text\" id = \"new-username\" placeholder=\"Username\"><br><input id=\"new-password\" type=\"password\" placeholder=\"Password\"><br><input id=\"btn-signup\" type=\"button\" value=\"Signup\"><br><div id=\"error-message\"></div></form>";
			document.getElementById('content-holder').innerHTML = str;
			
			/* event for signup */
			
			document.getElementById('btn-signup').addEventListener("click", function() {
				var email = document.getElementById('new-email').value;
				var username = document.getElementById('new-username').value;				
				var password = document.getElementById('new-password').value;	
			//	console.log(email + " " + username + " " + password);
				AJAXRequest("signup",checkUser, "username="+username+"&password="+password+"&email="+email);
			});
			
		});
		
	});
	
	document.getElementById('logout').addEventListener("click", function() {
		AJAXRequest("logout", checkUser);
	});
}

window.addEventListener("load", myfunction);

window.addEventListener("load", function() {
	AJAXRequest("loggeduser", checkUser);
});