import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ArticleItem {
  title: string;
  date: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  excerpt?: string;
}

export interface RecentArticlesSectionProps {
  title: string;
  articles: ArticleItem[];
  className?: string;
}

export function RecentArticlesSection({
  title,
  articles,
  className = ''
}: RecentArticlesSectionProps): React.JSX.Element {
  return (
    <section className={`mb-20 ${className}`}>
      <h2 className="mb-10 text-3xl font-semibold">{title}</h2>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <article
            key={index}
            className="flex flex-col gap-6 border-b pb-8 last:border-b-0 md:flex-row"
          >
            <div className="md:w-1/3">
              <Image
                src={article.imageUrl}
                alt={article.imageAlt}
                width={400}
                height={240}
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="mb-3 text-xl font-semibold">
                <Link
                  href={article.url}
                  className="transition-colors hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </Link>
              </h3>
              {article.excerpt && (
                <p className="mb-3 text-muted-foreground">{article.excerpt}</p>
              )}
              <p className="mb-3 text-sm text-muted-foreground">
                {article.date}
              </p>
              <Link
                href={article.url}
                className="font-medium text-blue-600 transition-colors hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
