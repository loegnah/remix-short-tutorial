import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

async function getPosts() {
  return prisma.post.findMany();
}

async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post });
}

export { getPosts, getPost };
