/*
+--------------------------------------------+
|             Get Object (JS)                |
|                                            |
| 说明：获取页面上的元素，可根据ID、标签名称 |
| （TAGNAME）、元素名称（NAME）、元素类别名  |
| 称（CLASS）取得相应的对象进入操作。        |
|                                            |
|          		  更新：AngusYoung(08-11-09) |
+--------------------------------------------+
*/
//返回ID对象
function $(cID) {
	return document.getElementById(cID);
}
//返回标签对象
function $t(cTagName) {
	return document.getElementsByTagName(cTagName);
}
//返回名称对象
function $n(cName) {
	return document.getElementsByName(cName);
}
//返回类别名对象
function $c(cClass) {
	var ClassObj=new Array();
	var $j=0;
	for ($i=0;$i<$.t('*').length;$i++) {
		if ($.t('*')[$i].className==cClass) {
			ClassObj[$j]=$.t('*')[$i];
			$j++;
		}
	}
	return ClassObj;
}