$(function(){
    const searchWord = ()=>{
    let searchText = $('input[name="search-word"]').val();
    
$('.search_lists li').each(function(){
    let targetText = $(this).text();
    
    
    
if(targetText.indexOf(searchText) != -1){
$(this).removeClass('hidden');
}else{
$(this).addClass('hidden');    
}
});
};
 

$('#search_filter').on('input',searchWord);
});
