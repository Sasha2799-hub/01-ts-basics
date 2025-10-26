import axios from "axios";

export function task8() {
  async function fetchPosts() {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }

  interface Post {
    id: number;
    title: string;
    body: string;
  }

  fetchPosts().then((posts) => {
    console.log(posts[0].title);
  });
}
