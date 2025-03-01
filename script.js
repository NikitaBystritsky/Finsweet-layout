const navHome = document.querySelector('.nav-home');
const navBlog = document.querySelector('.nav-blog');
const navAbout = document.querySelector('.nav-about-us');
const navContact = document.querySelector('.nav-contact-us');
const navButton = document.querySelector('.header-button');
const footerSubscribe = document.querySelector('#subscribe');

navHome.addEventListener( "click" , () => window.location.href = '/home/home.html');
navBlog.addEventListener( "click" , () => window.location.href = '/blog/blog.html');
navAbout.addEventListener( "click" , () => window.location.href = '/about-us/about-us.html');
navContact.addEventListener( "click" , () => window.location.href = '/contact/contact.html');
navButton.addEventListener( "click" , () => footerSubscribe.scrollIntoView());


const footerHome = document.querySelector('.footer-home');
const footerBlog = document.querySelector('.footer-blog');
const footerAbout = document.querySelector('.footer-about');
const footerContact = document.querySelector('.footer-contact');
const footerPolicy = document.querySelector('.footer-policy');

footerHome.addEventListener( "click" , () => window.location.href = '/home/home.html');
footerBlog.addEventListener( "click" , () => window.location.href = '/blog/blog.html');
footerAbout.addEventListener( "click" , () => window.location.href = '/about-us/about-us.html');
footerContact.addEventListener( "click" , () => window.location.href = '/contact/contact.html');
footerPolicy.addEventListener( "click" , () => window.location.href = '/privacy policy/privacy-policy.html');

const readMore = document.querySelector('#read-more');
if (readMore) {
    readMore.addEventListener( "click" , () => window.location.href = '/blog-post/blog-post.html');
}

const readMoreBlogs = document.querySelector('#read-more-blogs');
if (readMoreBlogs) {
    readMoreBlogs.addEventListener( "click" , () => window.location.href = '/blog/blog.html');
}

const whyStarted = document.querySelector('#why-started');
if (whyStarted) {
    whyStarted.addEventListener( "click" , () => window.location.href = '/about-us/about-us.html');
}

const join = document.querySelector('#join');
if (join) {
    join.addEventListener( "click" , () => window.location.href = '/contact/contact.html');
}