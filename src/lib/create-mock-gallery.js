export const createMockGallery = () => {
  const albums = {
    livingroom: [],
    kitchen: [],
    bathroom: [],
    basement: [],
    painting: []
  }
  
  const createAlbum = name => {
    const album = [];
    for (let i = 1; i <= 3; i++) {
      album.push(require(`../assets/gallery/${name}/${name}_${i}.jpg`));
    }

    return album;
  }
  
  const albumNames = Object.keys(albums);
  
  albumNames.forEach(
    element => {
      albums[element] = createAlbum(element);
    }
  );

  console.log(albums);

  return albums;
}