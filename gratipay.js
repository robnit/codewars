function getFeaturedProjects(allProjects) {
  var featuredProjects = [];
  const popular = allProjects.filter(a=> a.nReceiving_from > 5);
  const unpopular = allProjects.filter(a=> !a.nReceiving_from > 5);
  
  function randomIndices(num){
    const indices = [];
    while (indices.length < num){
      const myNumber = Math.floor(Math.random() * num);
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


  return featuredProjects;
}
