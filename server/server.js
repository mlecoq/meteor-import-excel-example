Meteor.methods({
	
	importFile: function(file, fileData){


		var excel;
		console.log(file)
		if(file.indexOf("xlsx") > -1){
			excel = new Excel('xlsx')
		}else {
			excel = new Excel('xls')
		}

        var workbook = excel.read(fileData, {type: 'binary'});

		var yourSheetsName = workbook.SheetNames;

		var result = "";
		var sheet_name_list = workbook.SheetNames;
		sheet_name_list.forEach(function(y) { /* iterate through sheets */
  			var worksheet = workbook.Sheets[y];
			for (z in worksheet) {
    				/* all keys that do not begin with "!" correspond to cell addresses */
   					if(z[0] === '!') continue;
   					var log = "Sheet: " + y + ", cell: " + z + " = " + JSON.stringify(worksheet[z].v)
  				    console.log(log);
  				    result += log + "\n";
  			}
		})

		return result;


    }
})

