<!DOCTYPE html>
<html>
<head>
	<title>LOADing</title>
	<link rel="stylesheet" type="text/css" href="loading.css">
	<script type="text/javascript" src="jquery-3.2.1.js"></script>
</head>
<body>
	<div>元素一</div>
<div>元素二</div>
<div>元素三</div>

    <script type="text/javascript">

    		var div = document.getElementsByTagName('div'); //dom对象
            
		    //将dom节点div转化为$div的jquery对象
            // $div =  ?
            $div =$(div);
            
			var $first = $div.first(); //找到第一个div元素
			$first.css('color', 'red'); //给第一个元素设置颜色


    </script>
	
</body>
</html>


