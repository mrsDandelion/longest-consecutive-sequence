module.exports = function longestConsecutiveLength(array) {
var arr2=[array[0]];
createList:
 for(var i=1;i<array.length;i++){		 //перечесление элементов массива array
	if(array[i]<=arr2[0]){arr2.unshift(array[i]);continue createList;} //вставляем значение в начало массива
	if(arr2[arr2.length-1]<=array[i]){arr2.push(array[i]);continue createList;}//вставляем значение в конец массива
	for(var j=0;j<arr2.length;j++){		//перечесление элементов массива arr2
		if(array[i]<=array[j] && array[i]<=array[j+1]){
			arr2.splice(j+1,0,array[i]);
			continue createList;
		}	
	}
 }
 var count=1;
 var maxCount=0;
for(var f=1;f<arr2.length;f++){
	if(arr2[f]-arr2[f-1]==1){
	count++;
	}
	else{
		if(maxCount<count){maxCount=count;}
		count=1;
	}
}
return maxCount;
}
