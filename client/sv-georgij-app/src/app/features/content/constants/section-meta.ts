export type SectionKey =
  | 'blog'
  | 'nastani'
  | 'novosti'
  | 'katehizis'
  | 'galerija';

export interface SectionMeta {
  category: string;
  title: string;
}

export const SECTION_META = {
  blog: {
    category: 'Blog',
    title: 'Блог',
  },
  nastani: {
    category: 'Events',
    title: 'Настани',
  },
  novosti: {
    category: 'News',
    title: 'Новости',
  },
  katehizis: {
    category: 'Catechism',
    title: 'Катехизис',
  },
  galerija: {
    category: 'Gallery',
    title: 'Галерија',
  },
} satisfies Record<SectionKey, SectionMeta>;
