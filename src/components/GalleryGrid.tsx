"use client";

import { useState, useEffect, useCallback } from "react";
import type { InstagramPost } from "@/lib/instagram";

const gradients = [
  "from-[#E8D8C3] to-[#d4c4ad]",
  "from-[#D8A7A7] to-[#c49898]",
  "from-[#A78B7A] to-[#8a7066]",
  "from-[#d4c4ad] to-[#D8A7A7]",
  "from-[#c49898] to-[#E8D8C3]",
  "from-[#2B211D] to-[#A78B7A]",
];

function formatDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function parseCaption(caption: string | null): { text: string; hashtags: string[] } {
  if (!caption) return { text: "", hashtags: [] };
  const tokens = caption.split(/(#\w+)/g);
  const hashtags: string[] = [];
  const textParts: string[] = [];
  for (const token of tokens) {
    if (token.startsWith("#")) hashtags.push(token);
    else textParts.push(token);
  }
  return { text: textParts.join("").trim(), hashtags };
}

function getThumb(post: InstagramPost): string {
  return post.mediaType === "VIDEO" ? (post.thumbnailUrl ?? post.mediaUrl) : post.mediaUrl;
}

type Props = { posts: InstagramPost[] };

export default function GalleryGrid({ posts }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const next = useCallback(
    () => setActive((i) => (i !== null && i < posts.length - 1 ? i + 1 : i)),
    [posts.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  const post = active !== null ? posts[active] : null;
  const { text: captionText, hashtags } = parseCaption(post?.caption ?? null);
  const firstLine = (p: InstagramPost) =>
    p.caption?.split("\n")[0]?.replace(/#\w+/g, "").trim() ?? "";

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            className={`aspect-square rounded-xl overflow-hidden relative group cursor-pointer bg-gradient-to-br ${gradients[i % gradients.length]} focus:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getThumb(p)}
              alt={p.caption ?? "Instagram post from CharMarie Salon"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-300 flex items-end p-5">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-white text-sm line-clamp-2 text-left">
                {firstLine(p)}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && post && (
        <div
          className="fixed inset-0 z-50 bg-espresso/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Prev */}
          {active > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center text-espresso hover:bg-cream transition-colors z-10 text-lg leading-none"
              aria-label="Previous photo"
            >
              ←
            </button>
          )}

          {/* Next */}
          {active < posts.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center text-espresso hover:bg-cream transition-colors z-10 text-lg leading-none"
              aria-label="Next photo"
            >
              →
            </button>
          )}

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 flex items-center justify-center text-espresso hover:bg-cream transition-colors z-10 text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {/* Card */}
          <div
            className="bg-cream rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="md:w-1/2 aspect-square bg-espresso/10 flex-shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getThumb(post)}
                alt={post.caption ?? "Instagram post from CharMarie Salon"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="md:w-1/2 flex flex-col p-7 overflow-y-auto gap-4">
              {/* Account row */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush to-gold flex-shrink-0" />
                <div>
                  <p className="font-sans font-medium text-espresso text-sm">charmariesalon</p>
                  <p className="font-sans text-muted text-xs">{formatDate(post.timestamp)}</p>
                </div>
              </div>

              {/* Caption text */}
              {captionText && (
                <p className="font-sans text-espresso text-sm leading-relaxed">{captionText}</p>
              )}

              {/* Hashtags */}
              {hashtags.length > 0 && (
                <p className="font-sans text-muted text-sm leading-relaxed break-words">
                  {hashtags.join(" ")}
                </p>
              )}

              {/* View on Instagram */}
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start font-sans text-xs text-muted hover:text-espresso transition-colors border border-espresso/15 rounded-full px-4 py-2 inline-block"
              >
                View on Instagram →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
