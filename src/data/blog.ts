export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cover: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'digital-transformation-in-bangladesh-education',
    title: 'Digital Transformation in Bangladesh Education: Trends 2025',
    excerpt: 'Explore how schools across Bangladesh are embracing digital tools.',
    date: 'March 15, 2025',
    author: 'Rukaiya Binte Shafique',
    cover: 'https://picsum.photos/id/20/800/600',
    content: '<p>The education sector in Bangladesh is undergoing a remarkable transformation.</p><p>ShikkhaERP is at the forefront of this revolution.</p>',
  },
  {
    slug: 'seat-planning-made-easy',
    title: 'How Automated Seat Planning Saves 40+ Hours During Exam Season',
    excerpt: 'Discover how our proprietary algorithm eliminates manual seating arrangements.',
    date: 'February 28, 2025',
    author: 'Senior Programmer',
    cover: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
    content: '<p>Exam season is the most stressful time for any educational institution.</p><p>Our algorithm analyzes student course enrollments.</p>',
  },
];
