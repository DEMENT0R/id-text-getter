// ==UserScript==
// @name         Text getter by id
// @namespace    Text getter by id
// @version      0.1.1
// @description  Text getter by id
// @author       DEMENTOR
// @match        http://*
// @match        https://*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    let $ = window.jQuery;
    let texts = {};
    $("*").each(function(){
        if (this.id != "") {
            texts[this.id] = $(`#${this.id}`).text().replace(/\n/g, '').replace(/\s\s+/g, ' ');
        }
    });
    let textsJson = JSON.stringify(texts);
    console.log(textsJson.replace(/:"\s/g, ': "'));
})();
