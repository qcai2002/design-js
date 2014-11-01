//Build an interactive resume

//SECTION 1 - BIO
$("#header").append(HTMLheaderName.replace("%data%", "Jenny Coll"));
$("#header").append(HTMLheaderRole.replace("%data%", "President"));

$("#header").append(HTMLcontactGeneric.replace("%data%", "x"));
$("#header").append(HTMLmobile.replace("%data%", "510-1234-567")); 
$("#header").append(HTMLemail.replace("%data%", "jenny.coll@yahoo.com")); 
$("#header").append(HTMLtwitter.replace("%data%", "@jennycoll")); 
$("#header").append(HTMLgithub.replace("%data%", "jennycoll"));
$("#header").append(HTMLblog.replace("%data%", "jennycoll.com")); 
$("#header").append(HTMLlocation.replace("%data%", "SF")); 

$("#header").append(HTMLbioPic.replace("%data%", "images/fry.jpg"));  
$("#header").append(HTMLWelcomeMsg.replace("%data%", "Welcome to my resume page!"));  

$("#header").append(HTMLskills.replace("%data%", "JS HTML CSS")); 

//SECTION 2 - WORK
$("#header").append(HTMLworkEmployer.replace("%data%", "udacity.com")); 
$("#header").append(HTMLworkTitle.replace("%data%", "developer")); 
$("#header").append(HTMLworkDates.replace("%data%", "2100-2102")); 
$("#header").append(HTMLworkLocation.replace("%data%", "MV")); 
$("#header").append(HTMLworkDescription.replace("%data%", "design backend")); 

//SECTION 3 - PROJECTS
$("#header").append(HTMLprojectTitle.replace("%data%", "jennycoll.com")); 
$("#header").append(HTMLprojectDates.replace("%data%", "2014")); 
$("#header").append(HTMLprojectDescription.replace("%data%", "blog")); 
$("#header").append(HTMLprojectImage.replace("%data%", "images/197x148.gif")); 

//SECTION 4 - EDUCATION
$("#header").append(HTMLschoolName.replace("%data%", "udacity.com")); 
$("#header").append(HTMLschoolDegree.replace("%data%", "Nanodegree")); 
$("#header").append(HTMLschoolDates.replace("%data%", "2012-2014")); 
$("#header").append(HTMLschoolLocation.replace("%data%", "MV")); 
$("#header").append(HTMLschoolMajor.replace("%data%", "Web Development")); 
