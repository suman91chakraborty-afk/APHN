import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import newsData from "@/data/news.json";

interface NewsArticleProps {
  params: {
    slug: string;
  };
}

// Pre-render static paths at build time
export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsArticle({ params }: NewsArticleProps) {
  const { slug } = params;
  const article = newsData.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Back button */}
      <Link href="/news" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-900 hover:text-accent-600 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Newsroom
      </Link>

      {/* Main Card */}
      <Card hoverAccent={false} className="p-6 md:p-10 bg-white border border-slate-100 shadow-lg space-y-6">
        
        {/* Article Meta */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs">
            <Badge variant="primary">{article.tag}</Badge>
            <span className="text-text-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-text-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-primary-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-sm font-semibold text-slate-700 leading-relaxed border-l-4 border-accent-500 pl-4 py-1">
            {article.summary}
          </p>
        </div>

        {/* Article Body Content */}
        <div className="text-sm text-text leading-relaxed text-justify space-y-4 pt-4 border-t border-slate-100">
          <p>{article.content}</p>
          <p>
            Private clinical establishments across districts are advised to coordinate with their respective District Coordinator desks for detailed queries regarding this press circular. Official letters and compliance forms are downloadable from the APHN Resources board.
          </p>
        </div>

        {/* Warning Badge for Sample data */}
        {article.isExample && (
          <div className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-md flex gap-3 items-center text-xs text-text-muted">
            <ShieldAlert className="w-5 h-5 text-accent-500 shrink-0" />
            <p>
              <strong>Notice:</strong> This news article is a pre-release publication placeholder representing sample content. Real articles, press reviews, and executive declarations will replace this database entry before production go-live.
            </p>
          </div>
        )}

      </Card>
      
      {/* Sidebar Suggestion */}
      <div className="flex justify-between items-center bg-primary-100/50 p-6 rounded-lg border border-slate-100">
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-primary-900">Need specific circular circulars?</h4>
          <p className="text-[10px] text-text-muted">Check out our legal updates vault for state government PDFs.</p>
        </div>
        <Link href="/resources">
          <Button variant="primary" size="sm" className="text-xs">
            Publications Vault
          </Button>
        </Link>
      </div>

    </div>
  );
}
