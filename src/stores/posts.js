import { writable } from "svelte/store";
import {API_HOST} from "$stores/config";


const posts = writable([]);

const getPosts = async () => {
    
    try{
        const response = await fetch(`${API_HOST}/posts`);
        const json = await response.json();
    
        if(json && json.success) {
            let postsMap = json.data.map(post => {
                post.content = JSON.parse(post.content)
                post.resume = post.content.find(element => element.type === 'text').value.substring(0, 100) + '...'
                return post
            })
            console.log(postsMap)
            posts.set(postsMap);
            return postsMap;
        }
    }
    catch(e) {
        console.log(e)
    }
    return [];
};

const addPost = async (post) => {
    try {
        const response = await fetch(`${API_HOST}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
    
        const json = await response.json();
    
        if(json && json.success) {
            posts.update(posts => [...posts, json.data]);
            return posts;
        }
    }
    catch(e) {
        console.log(e)
    }
};

const addLike = async (like) => {
    const response = await fetch(`${API_HOST}/posts/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(like)
    });

    const json = await response.json();

    console.log(json);
    
    if(json && json.success) {
        return true;
    }
    return false;
};

export { posts, getPosts, addPost, addLike };