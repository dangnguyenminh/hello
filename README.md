<!DOCTYPE html>
<html>
	<head>
		<title>My Shoe</title>

		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="keywords" content="My Shoe" />
		<meta name="description" content="My Shoe" />

		<link rel="stylesheet" type="text/css" href="MyShoe/libs/bootstrap/dist/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="MyShoe/libs/bootstrap/dist/css/bootstrap-theme.min.css" />	
		<!-- <link rel="less" type="less"  href="libs/bootstrap/less/bootstrap.less" /> -->
		<!-- <link rel="stylesheet/less" type="text/css" href="abc.less" /> -->
		<link rel="stylesheet/less" type="text/css" href="MyShoe/assets/css/myCss.css" />

		
		<script type="text/javascript" src="MyShoe/libs/jquery/dist/jquery.min.js"></script>
		<script type="text/javascript" src="MyShoe/libs/bootstrap/dist/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="MyShoe/libs/angular/angular.min.js"></script>
		<script type="text/javascript" src="MyShoe/libs/less/dist/less.min.js"></script>
		
		<script type="text/javascript" src="MyShoe/app.js"></script>
	</head>

	<body ng-app="myApp" ng-controller="containerCtrl">
		<div class="container-fluid" >
			<!--pageHeader-->
		    <div id="headerContainer" class="row">
		    	<div ng-include="'MyShoe/app/components/header/header.html'"></div>
		    </div>

		    <!-- Menu-->
		    <div id="menuContainer" class="row">
		    	<div ng-include="'MyShoe/app/components/menu/menu.html'"></div>
		    </div>

		    <!-- MainContainer -->
		    <div id="mainContainer" class="row">
		        <div id="leftCol" class="col-xs-12 col-sm-2">
		         Left
		        </div>		       
		        <div id="rightCol" class="col-xs-12 col-sm-10">
		        	Right
		        </div>
		    </div>

		    <!-- pageFooter -->
		    <div id="footerContainer" class="row">  
		       <div ng-include="'MyShoe/app/components/footer/footer.html'"></div>
		    </div>

		</div>
	</body>
</html>
