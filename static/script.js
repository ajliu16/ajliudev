const slide_in = () => {
    const nav_click = document.querySelector('.responsive_nav');
    const overlay = document.querySelector('.darken_overlay');
    nav_click.classList.toggle('nav_click');
    overlay.classList.toggle('darken');
    overlay.classList.toggle('event');
}

const expand = (div) => {
    const expand_this = document.querySelector(`.${div}`);
    const expanded = document.querySelector('.expanded');
    if (expand_this == expanded) {
        expand_this.classList.toggle('expanded');
    } else {
        if (expanded != null) {
            expanded.classList.toggle('expanded');
        }
        expand_this.classList.toggle('expanded');
    }
}

const fade_toggle = (div) => {
    const project = document.querySelector(`.${div}`);
    const content = document.querySelector(`.${div}_c`);
    const white = document.querySelector(`.white_${div}`);
    const hidden = document.querySelector(`.hidden_${div}`);
    const our_timeout = 100;
    content.classList.toggle('fadeout');
    hidden.classList.toggle('fadein');
    setTimeout(function() {
        white.classList.toggle('none');
        project.classList.toggle('no_cursor');
    }, our_timeout);
}

const darkmode = () => {
    const links = document.getElementsByClassName('normal');
    const headings = document.getElementsByTagName('h1');
    const text = document.getElementsByClassName('e_text');
    const headings2 = document.getElementsByTagName('h2');
    const expand_list = document.getElementsByClassName('expand');
    const project = document.getElementsByClassName("project");
    const p_text = document.getElementsByClassName('p_text');
    const github = document.querySelector('.github');
    const linkedin = document.querySelector('.linkedin');
    const labels = document.getElementsByTagName('label');
    const inputs = document.getElementsByTagName('input');
    document.querySelector('button').classList.toggle('dark_button');
    document.querySelector('textarea').classList.toggle('dark_textarea');
    document.querySelector('.info').classList.toggle('dark_info');
    document.querySelector('.title').classList.toggle('dark_title');
    document.querySelector('.footer').classList.toggle('dark_footer');
    document.querySelector('nav').classList.toggle('dark_nav');
    document.querySelector('body').classList.toggle('dark_body');
    // document.querySelector('.email').classList.toggle('dark_email');
    github.classList.toggle('dark_github');
    linkedin.classList.toggle('dark_linkedin');
    if (github.classList.contains('dark_github')) {
        github.src = "static/images/dark_github.png";
    } else {
        github.src = "static/images/github.png";
    }
    if (linkedin.classList.contains('dark_linkedin')) {
        linkedin.src = "static/images/dark_linkedin.png";
    } else {
        linkedin.src = "static/images/linkedin.png";
    }
    
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle('dark_links');
    }
    for (let i = 0; i < headings.length; i++) {
        headings[i].classList.toggle('dark_headings');
    }
    for (let i = 0; i < text.length; i++) {
        text[i].classList.toggle('dark_text');
    }
    for (let i = 0; i < headings2.length; i++) {
        headings2[i].classList.toggle('dark_headings2')
    }
    for (let i = 0; i < expand_list.length; i++) {
        expand_list[i].classList.toggle('dark_expand');
    }
    for (let i = 0; i < project.length; i++) {
        project[i].classList.toggle('dark_project');
    }
    for (let i = 0; i < p_text.length; i++) {
        p_text[i].classList.toggle('dark_p_text');
    }
    for (let i = 0; i < labels.length; i++) {
        labels[i].classList.toggle('dark_labels');
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle('dark_inputs');
    }
    const mode = document.getElementsByClassName("dark_mode");
    for (i = 0; i < mode.length; i++) {
        mode[i].classList.toggle('dark_darkmode');
        if (mode[i].classList.contains('dark_darkmode')) {
            mode[i].innerHTML = 'light mode';
        } else {
            mode[i].innerHTML = 'dark mode';
        }
    
    }
}
const sendoff = (sendoff_request) => {
    const investigator = document.getElementsByClassName('contact');
    const investigated = document.getElementsByClassName('about');
    if (sendoff_request == 'about') {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if (!investigated[0].classList.contains('initiated') || !investigated[1].classList.contains('initiated')) {
            for (i = 0; i < investigator.length; i++) {
                investigator[i].classList.toggle('initiated');
            };
            for (i = 0; i < investigated.length; i++) {
                investigated[i].classList.toggle('initiated');
            };
        } 
    } else if (sendoff_request == 'contact') {
        document.body.scrollTop = 3000;
        document.documentElement.scrollTop = 3000;
        if (!investigator[0].classList.contains('initiated') || !investigator[1].classList.contains('initiated')) {
            for (i = 0; i < investigated.length; i++) {
                investigated[i].classList.toggle('initiated');
            };
            for (i = 0; i < investigator.length; i++) {
                investigator[i].classList.toggle('initiated');
            };
        } 
    }
}
// const dequeue = () => {
//     let method;
//     let dequeue_input = document.getElementById("dequeue_input");
//     let dequeue_output = document.querySelector('#output_dequeue');
//     if (document.getElementById("enqueue_front").checked == true) {
//         method = document.getElementById("enqueue_front");
//     } else if (document.getElementById("enqueue_back").checked == true) {
//         method = document.getElementById("enqueue_back");
//     } else if (document.getElementById("dequeue_front").checked == true) {
//         method = document.getElementById("dequeue_front");
//     } else if (document.getElementById("dequeue_back").checked == true) {
//         method = document.getElementById("dequeue_back");
//     }
//     let dequeue_entry = {
//         method: method.value,
//         dequeue_entry: dequeue_input.value
//     };
//     fetch(`${window.origin}/dequeue`, {
//         method: "POST",
//         credentials: "include",
//         body: JSON.stringify(dequeue_entry),
//         cache: "no-cache",
//         headers: new Headers({
//             "content-type": "application/json"
//         })
//     });
// }

// var dynamic_shorten = document.getElementById('dynamic_shorten');
// window.onscroll = function(){shortening()};

// function shortening(){
//     console.log("hi");
// 	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 && !(dynamic_shorten.classList.contains("shortened"))) {
// 		dynamic_shorten.classList.toggle("shortened");
// 	} else if (dynamic_shorten.classList.contains("shortened")) {
// 		dynamic_shorten.classList.remove("shortened")
// 	};
// };