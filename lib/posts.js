import { countries_full } from '@/data/countries';

export function getAllPostIds() {
  const fileNames = countries_full.map((country) => {
    return country.toLowerCase().replace(/ /g, '_');
  })

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

