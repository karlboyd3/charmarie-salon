export type InstagramPost = {
  id: string;
  username: string;
  caption: string | null;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp: string;
};

export async function getInstagramPosts(limit = 12): Promise<InstagramPost[]> {
  const feedId = process.env.BEHOLD_FEED_ID;
  if (!feedId) return [];
  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const posts: InstagramPost[] = Array.isArray(data) ? data : (data.posts ?? []);
    return posts.slice(0, limit);
  } catch {
    return [];
  }
}
