let list = [];
let item ='';

while(item !== 'stop'){
   item = prompt('aggiungi alla lista');
   item = item.trim();
   item = item.toLocaleLowerCase();

   if(item !== 'stop' && item !== ''){
       list.push(item);
   }
};

const listEl = document.getElementById('list');
for(i = 0; i < list.length; i++){
    const listItemEl = document.createElement('li');
    listItemEl.innerHTML = list[i];
    listEl.appendChild(listItemEl);
};