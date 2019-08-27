var list_post = document.getElementById('list-post');
var subjets = subjet;
console.log(subjets);
subjets.forEach(AddSubjet);

function AddSubjet(subjet_value){
    var item_subjet  = document.createElement('li');
    var link = document.createElement('a');
    link.href = 'Detail.html';
    link.innerHTML = subjet_value.id + " " + " " + " " + subjet_value.title;
    item_subjet.appendChild(link);
                
    list_post.appendChild(item_subjet);
}
