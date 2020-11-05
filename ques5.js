function serg() {
	a=[];
	var f=document.getElementById('kar').value;
	document.writeln(f[0]);
	for(var i=0;i<f.length;i++){
		for(var j=1;j<=f.length-i;j++){
			a=f.substr(i,j);
		document.writeln(a);
	}
	}
}