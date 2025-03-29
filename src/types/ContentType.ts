
export type ContentType = {
  id: string;
  type: 'introduction' | 'video' | 'short-video' | 'quiz' | 'key-points' | 'playground' | 'bonus' | 'image' | 'keyPoints' | 'shortVideo';
  title: string;
  completed: boolean;
};
