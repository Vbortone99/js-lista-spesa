let list = [];
let item ='';

while(item !== 'stop' && item !== '') {
   item = prompt('aggiungi alla lista');
   if(item !== 'stop'){
       list.push(item);
   }
};

const listEl = document.getElementById('list');
for(i = 0; i < list.length; i++){
    list[i];
    const listItemEl = document.createElement('li');
    listItemEl.innerHTML = list[i];
    listEl.appendChild(listItemEl);
};