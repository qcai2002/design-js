//Build an interactive resume

//SECTION 1 - BIO
var bio = {
	"name": "Jenny Coll",
	"role": "President",
    "welcomeMsg": "Welcome to Jenny Coll's interactive resume!",
	"contacts": {
				"mobile": "510 1234 567",
				"email": "jennycoll@yahoo.com",
				"github": "jennycoll",
				"twitter": "@jennycoll",
				"location": "SF"	
	},
	"skills": ["JS", "HTML", "CSS"],
	"blog": "jennycoll.com",
	"bioPic": "images/fry.jpg"
};

function displayBio()
{
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile),
    	                     HTMLemail.replace("%data%", bio.contacts.email),
    	                     HTMLgithub.replace("%data%", bio.contacts.github),
        	                 HTMLtwitter.replace("%data%", bio.contacts.twitter), 
                	         HTMLlocation.replace("%data%", bio.contacts.location)); 

	//$("#header").append(HTMLblog.replace("%data%", bio.blog)); 	

	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));  

	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg));  

	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio.skills)); 
}

displayBio();

//SECTION 2 - WORK
var work = {
	"jobs": [
	{
		"employer": "The Hearth",
		"title": "President",
		"dates": "2012-Present",
		"location": "MV",
		"description": "lead"
	},
	{
		"employer": "SF Martial Arts",
		"title": "Instructor",
		"dates": "2013-Present",
		"location": "SF",
		"description": "teach"		
	}
	]
};

function displayWork() {
	$("#workExperience").append(HTMLworkStart);
	for (var item in work.jobs) {
		job = work.jobs[item];
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer), 
			                		HTMLworkTitle.replace("%data%", job.title),  
		                    		HTMLworkDates.replace("%data%", job.dates),
		                    		HTMLworkLocation.replace("%data%", job.location),
		                    		HTMLworkDescription.replace("%data%", job.description)); 
	}
}

displayWork();

//SECTION 3 - PROJECTS
var projects = {
	"projects": [
	{
		"title": "interactive resume",
		"dates": "2014",
		"description": "JS",
		"image": "images/197x148.gif"
	},
	{
		"title": "apple watch",
		"dates": "2015",
		"description": "Swift",
		"image": "images/197x148.gif"		
	}
	]
};

function displayProjects() {
	$("#projects").append(HTMLprojectStart);
	for (var item in projects.projects) {
		project = projects.projects[item];
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title), 
		               		  HTMLprojectDates.replace("%data%", project.dates),
		               		  HTMLprojectDescription.replace("%data%", project.description), 
		               		  HTMLprojectImage.replace("%data%", project.image)); 			
	}
}

displayProjects();


//SECTION 4 - EDUCATION
var education = {
	"schools": [
	{
		"name": "University1",
		"degree": "Master",
		"dates": "2012-Present",
		"location": "MV",
		"major": "Science"
	},
	{
		"name": "University2",
		"degree": "Master",
		"dates": "2012-Present",
		"location": "MV",
		"major": "Arts"
	}
	],
	"onlineCourses": [
	{
		"title": "Web Development",
		"school": "udacity.com",
		"dates": "2012-Present",
		"url": "https://www.udacity.com/course/cs253"	
	},
	{
		"title": "Machine Learning",
		"school": "coursera.org",
		"dates": "2012-Present",
		"url": "https://www.coursera.org/course/ml"	
	}
	]
};

function displayEducation() {
	$("#education").append(HTMLschoolStart);
	for (var item in education.schools) {
		school = education.schools[item];
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name), 
		              		   HTMLschoolDegree.replace("%data%", school.degree), 
		              		   HTMLschoolDates.replace("%data%", school.dates),
		              		   HTMLschoolLocation.replace("%data%", school.location), 
		              		   HTMLschoolMajor.replace("%data%", school.major)); 		
	}

    $(".education-entry:last").append(HTMLonlineClasses);
	for (var item in education.onlineCourses) {
		course = education.onlineCourses[item];
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title), 
		              		   HTMLonlineSchool.replace("%data%", course.school), 
		              		   HTMLonlineDates.replace("%data%", course.dates),
		              		   HTMLonlineURL.replace("%data%", school.url));		
	}	
}

displayEducation();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap); 