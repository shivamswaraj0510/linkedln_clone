const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="/CSS/style.css">
        <link rel="icon" href="/Img/lolo.jpg" type="image/icon type">
        <title>Linkedin clone</title>
    </head>
    
    <body>
        <!-- header starts -->
        <div class="header">
            <div class="header_left">
                <img src="/Img/lolo.jpg" alt="logo">
                <div class="header_search">
                    <i class="material-icons">
                        search
                    </i>
                    <input type="text" placeholder="Search..">
                </div>
            </div>
            <div class="header_right">
                <div class="headeroptions">
                    <i class="material-icons">
                        home
                    </i>
                    <h3>Home</h3>
                </div>
                <div class="headeroptions">
                    <i class="material-icons">
                        people
                    </i>
                    <h3>My Network</h3>
                </div>
                <div class="headeroptions">
                    <i class="material-icons">
                        work
                    </i>
                    <h3>Job</h3>
                </div>
                <div class="headeroptions">
                    <i class="material-icons">
                        chat
                    </i>
                    <h3>Messaging</h3>
                </div>
                <div class="headeroptions">
                    <i class="material-icons">
                        notifications
                    </i>
                    <h3>Notifications</h3>
                </div>
                <div class="headeroptions">
                    <i class="material-icons">
                        account_circle
                    </i>
                    <h3>Me</h3>
                </div>
            </div>
            <div class="header_last">
                <div class="header_last1">
                    <i class="material-icons">
                        dashboard
                    </i>
                    <h3>Work</h3>
                </div>
                <div class="header_last2">
                    <h3>Try Premimum</h3>
                </div>
            </div>
        </div>
        <!-- header ends -->
    
    
        <!-- Main body starts -->
        <div class="body_main">
            <!-- sidebar starts -->
            <div class="sidebar">
                <div class="sidebar_top">
                    <img src="/Img/sidebar.jpg" alt="">
                    <i class="material-icons avtar">
                        account_circle
                    </i>
                    <h2>Shivam Kumar</h2>
                    <h4>Shivamswaraj0510@gamil.com</h4>
                </div>
                <div class="sidebar_stats">
                    <div class="sidebar_stat">
                        <p>Who viewed You</p>
                        <p class="stat_number">1254</p>
                    </div>
                    <div class="sidebar_stat">
                        <p>views on post</p>
                        <p class="stat_number">5124</p>
                    </div>
                </div>
                <div class="sidebar_bottom">
                    <p>Recent</p>
                    <div class="sidebar_recentitem">
                        <span class="sidebar_hash">#</span>
                        <p>reactjs</p>
                    </div>
                    <div class="sidebar_recentitem">
                        <span class="sidebar_hash">#</span>
                        <p>programming</p>
    
                    </div>
                    <div class="sidebar_recentitem">
                        <span class="sidebar_hash">#</span>
                        <p>Engineering</p>
    
                    </div>
                    <div class="sidebar_recentitem">
                        <span class="sidebar_hash">#</span>
                        <p>Desining</p>
    
                    </div>
                    <div class="sidebar_recentitem">
                        <span class="sidebar_hash">#</span>
                        <p>Developer</p>
    
                    </div>
                </div>
            </div>
            <!-- sidebar ends -->
            <!-- Feed starts -->
            <div class="feed">
                <div class="feed_inputcontainer">
                    <div class="feed_input">
                        <i class="material-icons">
                            create
                        </i>
                        <form>
                            <input type="text" placeholder="Start a post" />
    
                        </form>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i style="color: lightblue" class="material-icons">
                                image
                            </i>
                            <h6>photo</h6>
                        </div>
                        <div class="inputoption">
                            <i style="color: #e7a33e" class="material-icons">
                                play_circle_filled
                            </i>
                            <h6>Video</h6>
                        </div>
                        <div class="inputoption">
                            <i style="color:lightcoral;" class="material-icons">
                                event_note
                            </i>
                            <h6>Event</h6>
                        </div>
                        <div class="inputoption">
                            <i style="color: #e7a33e;" class="material-icons">
                                calendar_month
                            </i>
                            <h6>Write Article </h6>
                        </div>
                    </div>
                </div>
                <!-- post start -->
                <div class="post">
                    <div class="post_heder">
                        <i class="material-icons">
                            account_circle
                        </i>
                        <div class="post_info">
                            <h2>Shivam Kumar</h2>
                            <p>Job discription</p>
                        </div>
                    </div>
                    <div class="post_body">
                        <p>Message Here</p>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i class="material-icons">
                                thumb_up
                            </i>
                            <h4>like</h4>
                        </div>
    
    
                        <div class="inputoption">
                            <i class="material-icons">
                                comment
                            </i>
                            <h4>Comment</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                share
                            </i>
                            <h4>Share</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                send
                            </i>
                            <h4>Send</h4>
                        </div>
                    </div>
                </div>
    
    
                <div class="post">
                    <div class="post_heder">
                        <i class="material-icons">
                            account_circle
                        </i>
                        <div class="post_info">
                            <h2>Shivam Kumar</h2>
                            <p>Job discription</p>
                        </div>
                    </div>
                    <div class="post_body">
                        <p>Message Here</p>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i class="material-icons">
                                thumb_up
                            </i>
                            <h4>like</h4>
                        </div>
    
    
                        <div class="inputoption">
                            <i class="material-icons">
                                comment
                            </i>
                            <h4>Comment</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                share
                            </i>
                            <h4>Share</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                send
                            </i>
                            <h4>Send</h4>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="post_heder">
                        <i class="material-icons">
                            account_circle
                        </i>
                        <div class="post_info">
                            <h2>Shivam Kumar</h2>
                            <p>Job discription</p>
                        </div>
                    </div>
                    <div class="post_body">
                        <p>Message Here</p>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i class="material-icons">
                                thumb_up
                            </i>
                            <h4>like</h4>
                        </div>
    
    
                        <div class="inputoption">
                            <i class="material-icons">
                                comment
                            </i>
                            <h4>Comment</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                share
                            </i>
                            <h4>Share</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                send
                            </i>
                            <h4>Send</h4>
                        </div>
                    </div>
                </div>
    
                <div class="post">
                    <div class="post_heder">
                        <i class="material-icons">
                            account_circle
                        </i>
                        <div class="post_info">
                            <h2>Shivam Kumar</h2>
                            <p>Job discription</p>
                        </div>
                    </div>
                    <div class="post_body">
                        <p>Message Here</p>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i class="material-icons">
                                thumb_up
                            </i>
                            <h4>like</h4>
                        </div>
    
    
                        <div class="inputoption">
                            <i class="material-icons">
                                comment
                            </i>
                            <h4>Comment</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                share
                            </i>
                            <h4>Share</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                send
                            </i>
                            <h4>Send</h4>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="post_heder">
                        <i class="material-icons">
                            account_circle
                        </i>
                        <div class="post_info">
                            <h2>Shivam Kumar</h2>
                            <p>Job discription</p>
                        </div>
                    </div>
                    <div class="post_body">
                        <p>Message Here</p>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i class="material-icons">
                                thumb_up
                            </i>
                            <h4>like</h4>
                        </div>
    
    
                        <div class="inputoption">
                            <i class="material-icons">
                                comment
                            </i>
                            <h4>Comment</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                share
                            </i>
                            <h4>Share</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                send
                            </i>
                            <h4>Send</h4>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="post_heder">
                        <i class="material-icons">
                            account_circle
                        </i>
                        <div class="post_info">
                            <h2>Shivam Kumar</h2>
                            <p>Job discription</p>
                        </div>
                    </div>
                    <div class="post_body">
                        <p>Message Here</p>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i class="material-icons">
                                thumb_up
                            </i>
                            <h4>like</h4>
                        </div>
    
    
                        <div class="inputoption">
                            <i class="material-icons">
                                comment
                            </i>
                            <h4>Comment</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                share
                            </i>
                            <h4>Share</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                send
                            </i>
                            <h4>Send</h4>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="post_heder">
                        <i class="material-icons">
                            account_circle
                        </i>
                        <div class="post_info">
                            <h2>Shivam Kumar</h2>
                            <p>Job discription</p>
                        </div>
                    </div>
                    <div class="post_body">
                        <p>Message Here</p>
                    </div>
                    <div class="feed_inputoption">
                        <div class="inputoption">
                            <i class="material-icons">
                                thumb_up
                            </i>
                            <h4>like</h4>
                        </div>
    
    
                        <div class="inputoption">
                            <i class="material-icons">
                                comment
                            </i>
                            <h4>Comment</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                share
                            </i>
                            <h4>Share</h4>
                        </div>
    
                        <div class="inputoption">
                            <i class="material-icons">
                                send
                            </i>
                            <h4>Send</h4>
                        </div>
                    </div>
                </div>
    
                <!-- post ends -->
            </div>
            <!-- Feed ends -->
            <!-- widgets start -->
            <div class="widgets">
                <div class="widgets_header">
                    <h2>LinkegIn UI Clone</h2>
                    <i class="material-icons">
                        info
                    </i>
                </div>
                <div class="widgets_article">
                    <div class="widgets_articleleft">
                        <span class="material-icons">
                            info
                        </span>
                    </div>
                    <div class="widgets_articleright">
                        <h4>Coding LinkedIn UI</h4>
                        <p>Top news</p>
                    </div>
    
                </div>
    
                <div class="widgets_article">
                    <div class="widgets_articleleft">
                        <span class="material-icons">
                            info
                        </span>
                    </div>
                    <div class="widgets_articleright">
                        <h4>Coding LinkedIn UI</h4>
                        <p>Top news</p>
                    </div>
    
                </div>
    
                <div class="widgets_article">
                    <div class="widgets_articleleft">
                        <span class="material-icons">
                            info
                        </span>
                    </div>
                    <div class="widgets_articleright">
                        <h4>Coding LinkedIn UI</h4>
                        <p>Top news</p>
                    </div>
    
                </div>
    
                <div class="widgets_article">
                    <div class="widgets_articleleft">
                        <span class="material-icons">
                            info
                        </span>
                    </div>
                    <div class="widgets_articleright">
                        <h4>Coding LinkedIn UI</h4>
                        <p>Top news</p>
                    </div>
    
                </div>
    
                <div class="widgets_article">
                    <div class="widgets_articleleft">
                        <span class="material-icons">
                            info
                        </span>
                    </div>
                    <div class="widgets_articleright">
                        <h4>Coding LinkedIn UI</h4>
                        <p>Top news</p>
                    </div>
    
                </div>
            </div>
            <!-- widgets ends -->
        </div>
        <!-- Main body ends -->
        <script>
            // alert("Login first");
            //    let name= prompt("Please Inter Your Nmae First :","Guest" );
            //    console.log(name);
            // let age = confirm(" Are you 18+");
            // if(age)
            // {
            //     console.log(" yor are eligible");
            // }
            // else
            // console.log(" yor are not eligible");
    
            let age = prompt("Please enter your age", "18");
    
            console.log(age);
            if (age > 18) {
                alert("you are allow inside club because your age is above 18, your age is " + age);
            } else {
                alert("you are not allow inside club because your age is under 18, your age is " + age);
            }
        </script>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});