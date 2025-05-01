// src/components/common/StoryCard.tsx
import { Link } from 'react-router-dom';
import { Story } from '../../types/story';
import Card from './Card';
import Button from './Button';

interface StoryCardProps {
  story: Story;
  featured?: boolean;
}

const StoryCard = ({ story, featured = false }: StoryCardProps) => {
  const { id, title, excerpt, author, imageUrl, date, supportCallToAction } = story;
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  if (featured) {
    return (
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative h-64 mb-4 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center mb-4">
            <img 
              src={author.imageUrl} 
              alt={author.name} 
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">{author.name}</p>
              <p className="text-sm text-gray-500">{author.location}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <p className="text-sm text-gray-500">{formattedDate}</p>
            <Link to={`/stories/${id}`} className="text-primary font-medium hover:underline">
              Read more
            </Link>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48 md:h-64 mb-4 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center mb-4">
          <img 
            src={author.imageUrl} 
            alt={author.name} 
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <p className="text-sm text-gray-700">{author.name}, {author.location}</p>
        </div>
        <div className="mt-auto">
          <p className="text-sm text-gray-500 mb-3">{formattedDate}</p>
          <div className="flex flex-wrap gap-2">
            <Link to={`/stories/${id}`} className="text-primary font-medium hover:underline">
              Read more
            </Link>
            {supportCallToAction && (
              <Button 
                variant="outline-primary" 
                size="sm" 
                to={supportCallToAction.link}
              >
                {supportCallToAction.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StoryCard;