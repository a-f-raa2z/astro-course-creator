
export type ContentType = {
  type: 
    | 'video'
    | 'image'
    | 'keyPoints'
    | 'introduction'
    | 'short-video'
    | 'quiz'
    | 'key-points'
    | 'shortVideo'
    | 'playground'
    | 'bonus'
    | 'fun-facts'
    | 'funFacts'
    | 'visual-gallery'
    | 'visualGallery';
  label: string;
  icon: string;
  id?: string;
  title?: string;
  completed?: boolean;
}
