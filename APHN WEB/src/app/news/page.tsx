"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Newspaper, ChevronRight, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import newsData from "@/data/news.json";

export default function News() {
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Extract unique tags for filtering
  const tagsList = Array.from(new Set(newsData.map((n) => n.tag))).sort();

  const filteredNews = selectedTag
    ? newsData.filter((news) => news.tag === selectedTag)
    : newsData;

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            APHN Media Room
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            News & Press Releases
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Stay informed with the latest reports, regulatory announcements, circular analysis, and workshop logs.
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-primary-900 uppercase tracking-wider mr-2">Filter Category:</span>
          <Button
            variant={selectedTag === "" ? "primary" : "secondary"}
            onClick={() => setSelectedTag("")}
            className="text-xs py-1.5 px-3.5"
          >
            All Updates
          </Button>
          {tagsList.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "primary" : "secondary"}
              onClick={() => setSelectedTag(tag)}
              className="text-xs py-1.5 px-3.5"
            >
              {tag}
            </Button>
          ))}
        </div>
      </section>

      {/* News Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <Card key={news.slug} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all relative">
                
                {news.isExample && (
                  <div className="absolute right-4 top-4">
                    <Badge variant="neutral" className="text-[8px] bg-slate-100 text-slate-500">
                      Sample Article
                    </Badge>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs">
                    <Badge variant="primary" className="text-[10px]">{news.tag}</Badge>
                    <span className="text-[10px] text-text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {news.readTime}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-[10px] text-text-muted">{news.date}</span>
                  </div>

                  <h2 className="text-base font-heading font-extrabold text-primary-900 hover:text-accent-600 transition-colors">
                    <Link href={`/news/${news.slug}`}>{news.title}</Link>
                  </h2>
                  
                  <p className="text-xs text-text-muted leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">Published by APHN Secretary</span>
                  <Link href={`/news/${news.slug}`} className="text-xs font-semibold text-accent-500 hover:text-accent-600 inline-flex items-center gap-1 hover:underline">
                    Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </Card>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-text-muted bg-white border border-dashed border-slate-200 rounded-lg">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold">No news articles found in this category.</p>
              <Button variant="outline" onClick={() => setSelectedTag("")} className="mt-4 text-xs font-semibold py-2">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
