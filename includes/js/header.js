<html>
    <head>
        <title>TodoIst</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons"
      rel="stylesheet">
        <link rel="stylesheet" href="includes/css/style.css" />
        <link rel="stylesheet" href="includes/css/font-awesome.min.css" />
    </head>
    <body>
        <div id="page">
            <header class="container-fluid">
                <div class="row">
                    <div class="conatiner">
                        <div class="inner-header">
                            <div class="menu-icon-and-search">
                                <div class="menu-icon" id="open-sidebar">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </div>
                                <div class="day">Today</div>
                            </div>
                            <div class="search-and-options">
                                <div class="search">
                                    <label for="search_input" id="open-search-box">
                                        <i
                                            class="fa fa-search"
                                            aria-hidden="true"
                                        ></i>
                                    </label>
                                    <div class="search-box" id="search-box">
                                        <div class="back-btn" id="close-search-box">
                                            <i
                                                class="fa fa-arrow-left"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                        <input
                                            type="text"
                                            id="search_input"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                                <div class="dots">
                                    <i
                                        class="fa fa-ellipsis-v"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <aside id="sidebar" class="sidebar">
                <div class="inner-sidebar">
                    <div class="head">
                        <a href="#">
                            <div class="profie-pic">M</div>
                            <div class="mail-and-task">
                                <span class="mail-id">ms.solo786@gmail.com</span>
                                <span class="task-ratio">2/5</span>
                            </div>
                        </a>
                    </div>
                    <div class="bottom">
                        <ul class="page-list">
                            <li>
                                <a href="#" class="page-link">
                                    <span class="icon"><i class="material-icons">inbox</i></span>
                                    <span class="text">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="page-link">
                                    <span class="icon"><i class="material-icons">today</i></span>
                                    <span class="text">Today</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="page-link">
                                    <span class="icon"><i class="material-icons">calendar_today
                                    </i></span>
                                    <span class="text">Upcoming</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="accordian-container">
                            <li class="accordian-item">
                                <div class="accordian-toggle">
                                    <div class="accordian-title">
                                        <span class="icon"><i class="material-icons">format_list_bulleted
                                        </i></span>
                                        <span class="text">Projects</span>
                                    </div>
                                    <div class="add-project">
                                        <button>
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="accordian-content">
                                    <ul>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon">
                                                        <i class="material-icons">lens</i></span>
                                                    <span class="text">Welcome</span>
                                                </div>
                                                <div class="count">3</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon">
                                                        <i class="material-icons">lens</i></span>
                                                    <span class="text">Try Boards</span>
                                                </div>
                                                <div class="count">3</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon"><i class="material-icons">add</i></span>
                                                    <span class="text">Add Project</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon">
                                                        <i class="material-icons">settings</i></span>
                                                    <span class="text">Manage Projects</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="accordian-item">
                                <div class="accordian-toggle">
                                    <div class="accordian-title">
                                        <span class="icon"><i class="material-icons">label</i></span>
                                        <span class="text">Labels</span>
                                    </div>
                                    <div class="add-project">
                                        <button>
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="accordian-content">
                                </div>
                            </li>
                            <li class="accordian-item">
                                <div class="accordian-toggle">
                                    <div class="accordian-title">
                                        <span class="icon"><i class="material-icons">filter_alt</i></span>
                                        <span class="text">Filters</span>
                                    </div>
                                    <div class="add-project">
                                        <button>
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="accordian-content">
                                    <ul>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon">
                                                        <i class="material-icons">lens</i></span>
                                                    <span class="text">Welcome</span>
                                                </div>
                                                <div class="count">3</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon">
                                                        <i class="material-icons">lens</i></span>
                                                    <span class="text">Try Boards</span>
                                                </div>
                                                <div class="count">3</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon"><i class="material-icons">add</i></span>
                                                    <span class="text">Add Project</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="content-page-link">
                                                <div class="name">
                                                    <span class="icon">
                                                        <i class="material-icons">settings</i></span>
                                                    <span class="text">Manage Projects</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul class="page-list">
                            <li>
                                <a href="#" class="page-link">
                                    <span class="icon"><i class="material-icons">settings
                                    </i></span>
                                    <span class="text">Setting</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>