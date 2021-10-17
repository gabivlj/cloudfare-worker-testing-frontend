import Post from '../model/post';

export default class PostAPI {
  static uri: string = 'https://worker-backend.gabivlj.workers.dev/posts';

  static async getPosts(): Promise<Post[]> {
    const response = await fetch(PostAPI.uri, { credentials: 'include' });
    const data = await response.json();
    return data as Post[];
  }

  static async createPost(
    post: Post
  ): Promise<{ success: boolean; message: string; id?: string }> {
    const response = await fetch(PostAPI.uri, {
      method: 'POST',
      body: JSON.stringify(post),
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
    });
    try {
      const json = await response.json();
      return json;
    } catch (err: any) {
      if (err.message) return { success: false, message: err.message };
      return { success: false, message: 'unknown error' };
    }
  }
}
