/*
+--------------------------------------------+
|             Get Object (JS)                |
|                                            |
| ˵������ȡҳ���ϵ�Ԫ�أ��ɸ���ID����ǩ���� |
| ��TAGNAME����Ԫ�����ƣ�NAME����Ԫ�������  |
| �ƣ�CLASS��ȡ����Ӧ�Ķ�����������        |
|                                            |
|          		  ���£�AngusYoung(08-11-09) |
+--------------------------------------------+
*/
//����ID����
function $(cID) {
	return document.getElementById(cID);
}
//���ر�ǩ����
function $t(cTagName) {
	return document.getElementsByTagName(cTagName);
}
//�������ƶ���
function $n(cName) {
	return document.getElementsByName(cName);
}
//�������������
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