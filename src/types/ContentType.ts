
export type ContentType = {
  id: string;
  type: 'introduction' | 'video' | 'short-video' | 'quiz' | 'key-points' | 'playground' | 'bonus' | 'image';
  title: string;
  completed: boolean;
};
