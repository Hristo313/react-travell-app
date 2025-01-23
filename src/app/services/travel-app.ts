import { ArticlesSource1Type } from '../models/TravelApp/articles-source1-type';
import { ArticlesSource2Type } from '../models/TravelApp/articles-source2-type';
import { ArticlesSource3Type } from '../models/TravelApp/articles-source3-type';
import { ArticlesSource4Type } from '../models/TravelApp/articles-source4-type';
import { DestinationsType } from '../models/TravelApp/destinations-type';
import { ImageSet1Type } from '../models/TravelApp/image-set1-type';
import { ImageSet2Type } from '../models/TravelApp/image-set2-type';
import { SelectedArticlesType } from '../models/TravelApp/selected-articles-type';

export async function getSelectedArticles(): Promise<SelectedArticlesType[]> {
  const response = await fetch('../../static-data/travel-app-selected-articles-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getDestinations(): Promise<DestinationsType[]> {
  const response = await fetch('../../static-data/travel-app-destinations-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getImageSet1(): Promise<ImageSet1Type[]> {
  const response = await fetch('../../static-data/travel-app-image-set1-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getImageSet2(): Promise<ImageSet2Type[]> {
  const response = await fetch('../../static-data/travel-app-image-set2-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource1(): Promise<ArticlesSource1Type[]> {
  const response = await fetch('../../static-data/travel-app-articles-source1-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource2(): Promise<ArticlesSource2Type[]> {
  const response = await fetch('../../static-data/travel-app-articles-source2-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource3(): Promise<ArticlesSource3Type[]> {
  const response = await fetch('../../static-data/travel-app-articles-source3-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource4(): Promise<ArticlesSource4Type[]> {
  const response = await fetch('../../static-data/travel-app-articles-source4-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
