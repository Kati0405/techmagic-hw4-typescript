type Post = {
    userId: number,
    id: number
    title: string,
    body: string
}

type ResponseData<T> = {
    data: T
};

const url = 'https://jsonplaceholder.typicode.com/posts'
const container = document.getElementById('posts');


const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const result: Post[] = await response.json();
        return result;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const renderPosts = (posts: Post[], container: HTMLElement | null): void => {
    if (container) {
        if (Array.isArray(posts)) {
            posts.forEach((post) => {
                const listItem = document.createElement('li')
                const title = document.createElement('h4');
                title.innerText = post.title;
                listItem.appendChild(title);
                const body = document.createElement('p')
                body.innerText = post.body;
                listItem.appendChild(body);
                container.appendChild(listItem)
            })
        }
    } else return
};

fetchPosts().then(posts => renderPosts(posts, container))
