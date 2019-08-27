var list_post = document.getElementById('list-post');
var detail = subjet_detail;
console.log(detail);

AddSubjet(detail);

function AddSubjet(subjet_value){
    
    var paragraphe = document.createElement('p');
    var title = document.createElement('h1');
    title.innerHTML = subjet_value.title;
    list_post.appendChild(title);
    paragraphe.innerHTML = subjet_value.body;           
    list_post.appendChild(paragraphe);
}
