import { useCallback, useEffect, useState } from 'react';
import { ArticlesSource1Type } from '../models/TravelApp/articles-source1-type';
import { ArticlesSource2Type } from '../models/TravelApp/articles-source2-type';
import { ArticlesSource3Type } from '../models/TravelApp/articles-source3-type';
import { ArticlesSource4Type } from '../models/TravelApp/articles-source4-type';
import { DestinationsType } from '../models/TravelApp/destinations-type';
import { getArticlesSource1, getArticlesSource2, getArticlesSource3, getArticlesSource4, getDestinations, getImageSet1, getImageSet2, getSelectedArticles } from '../services/travel-app';
import { ImageSet1Type } from '../models/TravelApp/image-set1-type';
import { ImageSet2Type } from '../models/TravelApp/image-set2-type';
import { SelectedArticlesType } from '../models/TravelApp/selected-articles-type';

export const useGetSelectedArticles = () => {
  const [selectedArticles, setSelectedArticles] = useState<SelectedArticlesType[]>([]);

  const requestSelectedArticles = useCallback(() => {
    let ignore = false;
    getSelectedArticles()
      .then((data) => {
        if (!ignore) {
          setSelectedArticles(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestSelectedArticles();
  }, [requestSelectedArticles]);

  return { requestTravelAppSelectedArticles: requestSelectedArticles, travelAppSelectedArticles: selectedArticles, setTravelAppSelectedArticles: setSelectedArticles };
}

export const useGetDestinations = () => {
  const [destinations, setDestinations] = useState<DestinationsType[]>([]);

  const requestDestinations = useCallback(() => {
    let ignore = false;
    getDestinations()
      .then((data) => {
        if (!ignore) {
          setDestinations(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestDestinations();
  }, [requestDestinations]);

  return { requestTravelAppDestinations: requestDestinations, travelAppDestinations: destinations, setTravelAppDestinations: setDestinations };
}

export const useGetImageSet1 = () => {
  const [imageSet1, setImageSet1] = useState<ImageSet1Type[]>([]);

  const requestImageSet1 = useCallback(() => {
    let ignore = false;
    getImageSet1()
      .then((data) => {
        if (!ignore) {
          setImageSet1(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestImageSet1();
  }, [requestImageSet1]);

  return { requestTravelAppImageSet1: requestImageSet1, travelAppImageSet1: imageSet1, setTravelAppImageSet1: setImageSet1 };
}

export const useGetImageSet2 = () => {
  const [imageSet2, setImageSet2] = useState<ImageSet2Type[]>([]);

  const requestImageSet2 = useCallback(() => {
    let ignore = false;
    getImageSet2()
      .then((data) => {
        if (!ignore) {
          setImageSet2(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestImageSet2();
  }, [requestImageSet2]);

  return { requestTravelAppImageSet2: requestImageSet2, travelAppImageSet2: imageSet2, setTravelAppImageSet2: setImageSet2 };
}

export const useGetArticlesSource1 = () => {
  const [articlesSource1, setArticlesSource1] = useState<ArticlesSource1Type[]>([]);

  const requestArticlesSource1 = useCallback(() => {
    let ignore = false;
    getArticlesSource1()
      .then((data) => {
        if (!ignore) {
          setArticlesSource1(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource1();
  }, [requestArticlesSource1]);

  return { requestTravelAppArticlesSource1: requestArticlesSource1, travelAppArticlesSource1: articlesSource1, setTravelAppArticlesSource1: setArticlesSource1 };
}

export const useGetArticlesSource2 = () => {
  const [articlesSource2, setArticlesSource2] = useState<ArticlesSource2Type[]>([]);

  const requestArticlesSource2 = useCallback(() => {
    let ignore = false;
    getArticlesSource2()
      .then((data) => {
        if (!ignore) {
          setArticlesSource2(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource2();
  }, [requestArticlesSource2]);

  return { requestTravelAppArticlesSource2: requestArticlesSource2, travelAppArticlesSource2: articlesSource2, setTravelAppArticlesSource2: setArticlesSource2 };
}

export const useGetArticlesSource3 = () => {
  const [articlesSource3, setArticlesSource3] = useState<ArticlesSource3Type[]>([]);

  const requestArticlesSource3 = useCallback(() => {
    let ignore = false;
    getArticlesSource3()
      .then((data) => {
        if (!ignore) {
          setArticlesSource3(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource3();
  }, [requestArticlesSource3]);

  return { requestTravelAppArticlesSource3: requestArticlesSource3, travelAppArticlesSource3: articlesSource3, setTravelAppArticlesSource3: setArticlesSource3 };
}

export const useGetArticlesSource4 = () => {
  const [articlesSource4, setArticlesSource4] = useState<ArticlesSource4Type[]>([]);

  const requestArticlesSource4 = useCallback(() => {
    let ignore = false;
    getArticlesSource4()
      .then((data) => {
        if (!ignore) {
          setArticlesSource4(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource4();
  }, [requestArticlesSource4]);

  return { requestTravelAppArticlesSource4: requestArticlesSource4, travelAppArticlesSource4: articlesSource4, setTravelAppArticlesSource4: setArticlesSource4 };
}
