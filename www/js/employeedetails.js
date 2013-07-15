$('#detailsPage').live('pageshow', function(event) {
//data = data[0];
	var ID = getUrlVars()["ID"];
	$.getJSON(serviceURL + 'getlocation.php?ID='+ID, displayEmployee);
});

function displayEmployee(data) {
	data = data[0];
	//var employee = data.markers1;
	console.log(data);
	//alert(data[0].post_title);
	//$('#employeePic').attr('src', 'pics/' + employee.picture);
	$('#fullName').text(data.post_title + ' ' + data.post_type);
	$('#employeeTitle').text(data.post_title);
	$('#city').text(data.post_content);
	console.log(data.post_title);
	/*if (employee.managerId>0) {
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
				'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
	}
	if (employee.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + employee.reportCount + '</p></a></li>');
	}
	if (employee.email) {
		$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
				'<p>' + employee.email + '</p></a></li>');
	}
	if (employee.officePhone) {
		$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + employee.officePhone + '</p></a></li>');
	}
	if (employee.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
	}*/
	//$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
