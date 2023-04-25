"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://jsonplaceholder.typicode.com/posts';
const container = document.getElementById('posts');
const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const result = yield response.json();
        return result;
    }
    catch (err) {
        console.log(err);
        return [];
    }
});
const renderPosts = (posts, container) => {
    if (container) {
        if (Array.isArray(posts)) {
            posts.forEach((post) => {
                const listItem = document.createElement('li');
                const title = document.createElement('h4');
                title.innerText = post.title;
                listItem.appendChild(title);
                const body = document.createElement('p');
                body.innerText = post.body;
                listItem.appendChild(body);
                container.appendChild(listItem);
            });
        }
    }
    else
        return;
};
fetchPosts().then(posts => renderPosts(posts, container));
