google.load('visualization', '1', {'packages': ['geochart']});

google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
	['State', 'Area','Population Density'],     
	['Uttar Pradesh', 240928, 828],
	['Maharashtra', 307713, 365],
	['Bihar', 94163, 1102],
	['West Bengal', 88752, 1029],
	['Madhya Pradesh', 308245, 236],
	['Tamil Nadu', 130058, 555],
	['Rajasthan', 342239, 201],
	['Karnataka', 191791, 319],
	['Gujarat', 196024, 308],
	['Andhra Pradesh', 160205, 303],
	['Orissa', 155707, 269],
	['Telangana', 112077, 307],
	['Kerala', 38863, 859],
	['Jharkhand', 79716, 414],
	['Assam', 78438, 397],
	['Punjab', 50362, 550],
	['Chhattisgarh', 135191, 189],
	['Haryana', 44212, 573],
	['Jammu and Kashmir', 42241, 57],
	['Uttarakhand', 53483, 189],
	['Himachal Pradesh', 55673, 123],
	['Tripura', 10486, 350],
	['Meghalaya', 22429, 132],
	['Manipur', 22327, 122],
	['Nagaland', 16579, 119],
	['Goa', 3702, 394],
	['Arunachal Pradesh', 83743, 17],
	['Mizoram', 21081, 52],
	['Sikkim', 7096, 86],
	['Delhi', 1483, 11297],
	['Puducherry', 479, 2598],
	['Chandigarh', 114, 9252],
	['Andaman and Nicobar Islands', 8249, 46],
	['Dadra and Nagar Haveli', 491, 970],
	['Daman and Diu', 112, 970],
	['Lakshadweep', 32, 2013]
	]);

    var opts = {
        region: 'IN',
        domain:'IN',
        displayMode: 'regions',
        colorAxis: {colors: ['#f4511e', '#62BD69', '#0000ff', '#8f00ff', "#ffff00"]},
        resolution: 'provinces',
        /*backgroundColor: '#81d4fa',*/
        /*datalessRegionColor: '#81d4fa',*/
        defaultColor: '#f5f5f5'
     };
 
	var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));

	geochart.draw(data, opts);

	google.visualization.events.addListener(geochart, 'select', selectHandler);

	function selectHandler() {
		var selectedItem = geochart.getSelection()[0];
		if (selectedItem) {
		  var topping = data.getValue(selectedItem.row, 0);
		  alert('The user selected: ' + topping);
		}
	}
	
	/*function selectHandler(e) {
		var selection = geochart.getSelection();
		var message = '';
		for (var i = 0; i < selection.length; i++) {
			var item = selection[i];
			if (item.row != null && item.column != null) {
				var str = data.getFormattedValue(item.row, item.column);
				message += str;
			} else if (item.row != null) {
				var str = data.getFormattedValue(item.row, 0);
				message += str;
			} else if (item.column != null) {
				var str = data.getFormattedValue(0, item.column);
				message += str;
			}
		}
		if (message == '') {
			message = 'nothing';
		}
		alert('Selected State: ' + message);
	}*/
};

