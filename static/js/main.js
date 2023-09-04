$(function() {
    Flow.initialize({
        channel: {
            runManager: {
                strategy: 'reuse-per-session'
            }
        }
    });
})

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('toggle-theme');
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const sideNav = document.querySelector('.list-group');
    const allContent = document.querySelector('#all-content');
    const content = document.querySelector('#content');

    themeToggle.addEventListener('click', function() {
        allContent.classList.toggle('dark');
        content.classList.toggle('dark');
        sideNav.classList.toggle('dark');
        nav.classList.toggle('dark');
        header.classList.toggle('dark')
        body.classList.toggle('dark');
        body.classList.toggle('light');
    });
});
