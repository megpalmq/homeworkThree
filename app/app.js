import { changePage } from "../model/model.js";

// This function is used to grab the hashtag and load the correct page
function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("route", pageID);
    changePage(pageID);
}

// This function adds the URL change listener to the window
function initSite() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initSite();

});