document.addEventListener('DOMContentLoaded',function(){
    const sidebar = document.getElementById("sidebar");
    const open_sidebar = document.getElementById("open-sidebar");
    const bg_layer = document.getElementById("bg-layer");
    const open_search_box = document.getElementById("open-search-box");
    const search_box = document.getElementById("search-box");
    const close_search_box = document.getElementById("close-search-box");
    const accordian_toggle = document.querySelectorAll(".accordian-container .accordian-toggle");
    const add_project = document.getElementsByClassName('add-project');
    const add_project_popup = document.getElementById('add-project-popup');
    const close_project_popup = document.getElementById('close-project-popup');
    const open_color_list = document.getElementById('open-color-list');
    const color_list_popup = document.getElementById('color-list-popup');
    const open_parent_project_popup = document.getElementById('open-parent-project-popup');
    const parent_project_popup = document.getElementById('parent-project-popup');
    const color_list_popup_ul_li = document.querySelectorAll("#color-list-popup ul li");
    for(let current of accordian_toggle){
        current.addEventListener('click',function(event){
            console.dir(event);
        });
    }
    open_sidebar.addEventListener('click',function(){
        openSideBar();
    });
    bg_layer.addEventListener("click",function(){
        // bgLayer();
        closeSideBar();
        closeColorList();
        closeParentProjectPopup();
    });
    open_search_box.addEventListener('click',function(event){
        console.log(event);
        let t_origin = event.x + ' ' + event.y;
        // console.log(t_origin);
        // search_box.style.transformOrigin = '\"'+t_origin+'\"';
        search_box.classList.add('active');
    });
    close_search_box.addEventListener("click",function(){
        search_box.classList.remove("active");
    });

    // --- Start:Open Add Project Popup ----
    for(let project of add_project){
        project.addEventListener('click',function(){
            add_project_popup.classList.add('active');
            closeSideBar();
        });
    }
    // --- End:Open Add Project Popup ----

    // --- Start:Close Add Project Popup ----
    close_project_popup.addEventListener('click',function(){
        add_project_popup.classList.remove('active');
    });
    // --- End:Close Add Project Popup ----

    // --- Start : Open Color List ---
    open_color_list.addEventListener('click',function(){
        color_list_popup.classList.add('active');
        showBgLayer();
    });
    // --- End : Open Color List ---


    // --- Start: Parent Project Popup ---
    open_parent_project_popup.addEventListener("click",function(){
        parent_project_popup.classList.add('active');
        showBgLayer();
    });
    // --- End: Parent Project Popup ---


    // --------- Start: Select Color -----
    for(let i=0;i<color_list_popup_ul_li.length;i++){
        color_list_popup_ul_li[i].addEventListener('click',function(event){
            let color = color_list_popup_ul_li[i].children[0].children[0].style['background-color'];
            closeColorList();
            hideBgLayer();
        });
    }
    // --------- End: Select Color -----


    function openSideBar(){
        sidebar.classList.add('active');
        showBgLayer();
    }
    function closeSideBar(){
        sidebar.classList.remove('active');
        hideBgLayer();
    }
    function showBgLayer(){
        bg_layer.classList.add('active');
    }
    function hideBgLayer(){
        bg_layer.classList.remove('active');
    }
    function closeColorList(){
        color_list_popup.classList.remove('active');
    }
    function closeParentProjectPopup(){
        parent_project_popup.classList.remove('active');
    }
});