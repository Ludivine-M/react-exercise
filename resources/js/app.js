/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
window.axios = require('axios');
//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;

window.axios.defaults = {
    ...window.axios.defaults,
    headers: {
        ...window.axios.defaults.headers,
        common: {
            ...window.axios.defaults.headers.common,
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": csrfToken,
        }
    },
    baseURL: "http://videostore.loc",
    timeout: 5000,
    responseType: 'json',
    withCredentials: false,
    maxRedirects: 5,
};
window.apiURL = "http://videostore.loc";

require('./components/Main');
