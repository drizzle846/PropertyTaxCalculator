//function calculatePropertyTax() {
//  const landType = parseFloat(document.getElementById('landType').value);
//  const taxRate = parseFloat(document.getElementById('taxRate').value);
//  const UC = parseFloat(document.getElementById('userCategory').value);
//  const PlotSize = parseFloat(document.getElementById('plotSize').value);
//  const StructureSize = parseFloat(document.getElementById('structureSize').value);
//  const NTB = parseFloat(document.getElementById('typeofBuilding').value);
//  const AF = parseFloat(document.getElementById('ageofBuilding').value);
//  const FF = parseFloat(document.getElementById('floor').value);
//  const CA = parseFloat(document.getElementById('carpetedArea').value);
//
//
//  const proportionateCommonArea = parseFloat(document.getElementById('proportionateCommonArea').value);
//  const Res = document.getElementById('residential').value;
//  const BVr = 2200;
//  const BVnr = 3500;
//  if(landType == "openLand"){
//	  if (isNaN(UC) || isNaN(FSI)|| isNaN(PlotSize) || isNan(StructureSize)|| isNaN(Res)|| isNaN(proportionateCommonArea) || isNaN(taxRate)) {
//    alert('Please enter valid values.');
//    return;
//  }{const FSI = (StructureSize/PlotSize)* 100 ;
//  if(Res == "residential"){
//	  const propertyTax = ((BVr * UC*FSI *PlotSize)* taxRate )+ proportionateCommonArea ;
//	 document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
//
//  }{
//	   const propertyTax = ((BVnr * UC*FSI *PlotSize)* taxRate)+ proportionateCommonArea ;
//	 document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
//
//  }
//    
//	  
//  }
//  }{if (isNaN(UC) || isNaN(NTB)|| isNaN(AF) || isNan(FF)|| isNaN(Res)|| isNaN(CA)|| isNaN(proportionateCommonArea) || isNaN(taxRate)) {
//    alert('Please enter valid values.');
//    return;
//  }{
//  if(Res == "residential"){
//	  const propertyTax = ((BVr * UC*NTB *AF*FF*CA)* taxRate )+ proportionateCommonArea ;
//	 document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
//
//  }{
//	   const propertyTax = ((BVnr * UC*NTB *AF*FF*CA)* taxRate )+ proportionateCommonArea ;
//	 document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
//
//  }
//    
//	  
//  }
//	  
//  }
//  
//}

function calculatePropertyTax() {
  const landType = document.getElementById('landType').value;
  const taxRate = parseFloat(document.getElementById('taxRate').value);
  const UC = parseFloat(document.getElementById('userCategory').value);
  const PlotSize = parseFloat(document.getElementById('plotSize').value);
  const StructureSize = parseFloat(document.getElementById('structureSize').value);
  const NTB = parseFloat(document.getElementById('typeofBuilding').value);
  const AF = parseFloat(document.getElementById('ageofBuilding').value);
  const FF = parseFloat(document.getElementById('floor').value);
  const CA = parseFloat(document.getElementById('carpetedArea').value);
  const proportionateCommonArea = parseFloat(document.getElementById('proportionateCommonArea').value);
  const Res = document.getElementById('residential').value;
  const BVr = 2200;
  const BVnr = 3500;

  if (landType === "openLand") {
    if (isNaN(UC) || isNaN(FSI) || isNaN(PlotSize) || isNaN(StructureSize) || isNaN(Res) || isNaN(proportionateCommonArea) || isNaN(taxRate)) {
      alert('Please enter valid values.');
      return;
    }
    const FSI = (StructureSize / PlotSize) * 100;
    if (Res === "residential") {
      const propertyTax = ((BVr * UC * FSI * PlotSize) * taxRate) + proportionateCommonArea;
      document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
    } else {
      const propertyTax = ((BVnr * UC * FSI * PlotSize) * taxRate) + proportionateCommonArea;
      document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
    }
  } else {
    if (isNaN(UC) || isNaN(NTB) || isNaN(AF) || isNaN(FF) || isNaN(Res) || isNaN(CA) || isNaN(proportionateCommonArea) || isNaN(taxRate)) {
      alert('Please enter valid values.');
      return;
    }
    if (Res === "residential") {
      const propertyTax = ((BVr * UC * NTB * AF * FF * CA) * taxRate) + proportionateCommonArea;
      document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
    } else {
      const propertyTax = ((BVnr * UC * NTB * AF * FF * CA) * taxRate) + proportionateCommonArea;
      document.getElementById('result').textContent = `Property Tax: $${propertyTax.toFixed(2)}`;
    }
  }
}

function updateOptions() {
      const landTypeSelect = document.getElementById('landType');
      const userCategorySelect = document.getElementById('userCategory');

      // Clear the existing options
      userCategorySelect.innerHTML = '';
      
      // Get the selected category
      const selectedlandType= landTypeSelect.value;

      // Add options based on the selected category
      switch (selectedlandType){
		  case 'openLand':
			  userCategorySelect.add(new Option('Airport runway & taxing bay, Stadium, Open air Theatre, Petrol Pump, Service Station, LPG, CNG Station, Kerosene Station, Golf Course, Amusement Park, Open air electric substation, Non-residential commercial land, Quarry, Racing track', '1.25'));
			  userCategorySelect.add(new Option('Airport land other than land covered by entry, Land around weighbridge,Residential','1'));
      	     // userCategorySelect.add(new Option('Residential', 'Residential'));
      break;
		  case 'Building':
			  userCategorySelect.add(new Option('Self-occupied Residential', '1'));
			  userCategorySelect.add(new Option('Rented Residential', '.85'));
			  userCategorySelect.add(new Option('Residential buildings for Commercial purpose', '.75'));

			  userCategorySelect.add(new Option('Commercial Offices', '1'));
			  userCategorySelect.add(new Option('Commercial Shops', '.85'));
			  userCategorySelect.add(new Option('Commercial Hotels', '.75'));
			  userCategorySelect.add(new Option('Commercial Hospitals', '.65'));
			  userCategorySelect.add(new Option('Commercial Educational Institutions', '.55'));
			  userCategorySelect.add(new Option('Commercial Cinema Halls', '.45'));
			  userCategorySelect.add(new Option('Commercial Restraunts', '.35'));
			  userCategorySelect.add(new Option('Other Commercial Buildings', '.25'));
			  
			  

			  userCategorySelect.add(new Option('Industrial', '.65'));	
			  break;
			  default:
				  break;  
	  }

}
