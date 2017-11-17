function getFeaturedProjects(allProjects) {
  if (allProjects.length < 10) return allProjects;
  let popular = allProjects.filter(a=> a.nreceiving_from > 5);
  let unpopular = allProjects.filter(a=> a.nreceiving_from <= 5);
  
  function randomIndices(num){
    const indices = [];
    while (indices.length < num){
      let myNumber = Math.floor(Math.random() * num);
      if (!indices.includes(myNumber)) {
        indices.push(myNumber);
        }
    }
    return indices;
  }

  function shuffleArray(array){
    let newIndices = randomIndices(array.length);
    return newIndices.map(a=> array[a]);
  }

  popular = shuffleArray(popular).slice(0,(unpopular.length<3) ? 10-unpopular.length : 7);
  unpopular = shuffleArray(unpopular).slice(0,(10-popular.length));

  return shuffleArray(popular.concat(unpopular));
}
