import { env } from "@/lib/config/env";
import type { ResourceArticleContent, ResourceHubItem } from "@/types/resources-page";

export interface PublicBlogCard {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover_image_url?: string | null;
  category_label: string;
  date: string;
  date_iso?: string | null;
  author_name: string;
}

export interface PublicBlogDetail extends PublicBlogCard {
  author_photo_url?: string | null;
  author_role: string;
  author_bio: string;
  blocks: ResourceArticleContent["blocks"];
  share_title: string;
  share_description: string;
  related_title: string;
  related_products: string;
  cta_label: string;
}

const apiBase = (env.apiBaseUrl || "http://localhost:8000").replace(/\/$/, "");

async function readJson<T>(path: string): Promise<T | null> {
  const response = await fetch(`${apiBase}${path}`, { cache: "no-store" });
  if (!response.ok) return null;
  return (await response.json()) as T;
}

export async function fetchPublishedBlogs(): Promise<ResourceHubItem[]> {
  const data = await readJson<{ blogs: PublicBlogCard[] }>("/api/v1/blogs/public");
  return (data?.blogs ?? []).map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    category: "blogs",
    tag: "",
    visualVariant: "default",
    image: blog.cover_image_url || "",
    title: blog.title,
    excerpt: blog.excerpt,
    date: blog.date,
    dateIso: blog.date_iso || "",
  }));
}

export function publishedBlogToArticle(blog: PublicBlogDetail): ResourceArticleContent {
  return {
    slug: blog.slug,
    meta: {
      title: blog.title,
      description: blog.excerpt,
    },
    hero: {
      title: blog.title,
      date: blog.date,
      categoryLabel: blog.category_label || "Blogs",
      author: blog.author_name,
      backLink: "Back to Resources",
    },
    blocks: blog.blocks ?? [],
    authorBox: {
      title: "About the authors",
      name: blog.author_name,
      role: blog.author_role,
      bio: blog.author_bio,
      photo: blog.author_photo_url || undefined,
    },
    sidebar: {
      shareTitle: blog.share_title || "Loved this insight?",
      shareDescription: blog.share_description,
      relatedTitle: blog.related_title || "Related products",
      relatedProducts: blog.related_products,
      cta: {
        label: blog.cta_label || "Explore our jobs",
        hrefKey: "dishaJobs",
      },
    },
  };
}

export async function fetchPublishedBlog(slug: string): Promise<ResourceArticleContent | null> {
  const blog = await readJson<PublicBlogDetail>(`/api/v1/blogs/public/${encodeURIComponent(slug)}`);
  return blog ? publishedBlogToArticle(blog) : null;
}
