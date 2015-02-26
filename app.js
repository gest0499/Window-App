var win1 = Titanium.UI.createWindow({
	title:'Window 1',
	backgroundColor:'#03487B'
});

var win2 = Titanium.UI.createWindow({
	title:'Window 2',
	backgroundColor:'#03487B'
});

var label1 = Titanium.UI.createLabel({
	color:'#fff',
	text:'Window One',
	font:{fontSize:20,fontFamily:'Brushscript'},
	textAlign:'center',
	width:'auto'
});

var label2 = Titanium.UI.createLabel({
	color:'#fff',
	text:'Window Two',
	font:{fontSize:20,fontFamily:'Brushscript'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
//create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
	title:'Tab 1',
	backgroundColor:'#03487B'
});
//03487B

var tab1 = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'Tab 1',
	window:win1
});

var tab2 = Titanium.UI.createTab({
	icon:'KS_nav_ui.png',
	title:'Tab 2',
	window:win2
});

var view = Ti.UI.createView({
	top:20,
	bottom:'50%',
	left:20,
	right:'50%',
	backgroundColor:'green'
});

// Create a Button.
var button1 = Titanium.UI.createButton({
	title : 'click for more info',
	top :200,
	left :100
});

var button2 = Titanium.UI.createButton({
	title : 'click for more info',
	top :300,
	left :100
});

// Listen for click events.
button1.addEventListener('click', function(e) {
	alert('ran out of info...');
});

var winSettings = Ti.UI.createWindow({
});

var tabSettings = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'Settings',
	window:winSettings
});

winSettings.add(setupSettings());

tabGroup.addTab(tabSettings);

function setupSettings() {
	
	var view = Ti.UI.createView({});
	return view;
}

var tableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true
});

var firstSection = Ti.UI.createTableViewSection({
	headerTitle: 'First',
	footerTitle: 'Lots of Information'
});

var firstRow = Ti.UI.createTableViewRow({
	title: 'Setting',
	hasChild: true
});

firstSection.add(firstRow);
tableView.setData([firstSection]);
view.add(tableView);

var switchOrientation = Ti.UI.createButton({title: 'Landscape'});
switchOrientation.addEventListener('click', rotateLayout);

var layout = Ti.UI.createView({layout: 'vertical'});
layout.add(switchOrientation);

function rotateLayout() {
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
	switchOrientation.hide();
}

// Add to the parent view.
//parentView.add(button1);
win1.open();
win1.add(label1);
win1.add(tabGroup);
win1.add(tab1);
win1.add(button1);
win1.addtab(tab2);
win1.add(button2);

