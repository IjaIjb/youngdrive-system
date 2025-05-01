// src/components/common/TestimonialCard.tsx
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    role?: string;
    organization?: string;
    imageUrl?: string;
  };
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="mb-4 text-2xl text-primary">"</div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="mt-auto flex items-center">
        {author.imageUrl && (
          <img 
            src={author.imageUrl} 
            alt={author.name} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <p className="font-bold text-gray-900">{author.name}</p>
          {(author.role || author.organization) && (
            <p className="text-sm text-gray-600">
              {author.role && author.role}
              {author.role && author.organization && ', '}
              {author.organization && author.organization}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;