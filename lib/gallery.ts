import metaData from 'meta/gallery.json';

export const gallery = metaData as GalleryData;

export type LinkType = 'url' | 'github';

export type Category = 'Web' | 'Game' | 'Tool';

export interface PieceData {
  title: string,
  thumbnail: string,
  period: string,
  design?: string[],
  languages?: string[],
  deps: string[],
  desc: string,
  features: string[],
  links: Partial<Record<LinkType, string>>,
}

type GalleryData = Record<string, PieceData>;

export async function getAllPieceIds() {
  return Object.keys(gallery).map((id) => ({
    params: { id }
  }));
}

export async function getPieceData(id: string): Promise<PieceData> {
  return gallery[id];
}