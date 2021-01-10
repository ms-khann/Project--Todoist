document.addEventListener('DOMContentLoaded',function(){
    let open_sidebar = document.getElementById("open-sidebar");
    let sidebar = document.getElementById("sidebar");
    let bg_layer = document.getElementById("bg-layer");
    let open_search_box = document.getElementById("open-search-box");
    let search_box = document.getElementById("search-box");
    let close_search_box = document.getElementById("close-search-box");
    let accordian_toggle = document.querySelectorAll(".accordian-container .accordian-toggle");
    console.log(accordian_toggle);
    for(let current of accordian_toggle){
        console.log(current);
        current.addEventListener('click',function(event){
            console.dir(event);
        });
    }
    open_sidebar.addEventListener('click',function(){
        sidebar.classList += " active";
        bg_layer.classList += " active";
    });
    bg_layer.addEventListener("click",function(){
        sidebar.classList.remove('active');
        this.classList.remove('active');
    });
    open_search_box.addEventListener('click',function(event){
        console.log(event);
        let t_origin = event.x + ' ' + event.y;
        // console.log(t_origin);
        // search_box.style.transformOrigin = '\"'+t_origin+'\"';
        search_box.classList += " active";
    });
    close_search_box.addEventListener("click",function(){
        search_box.classList.remove("active");
    });
});