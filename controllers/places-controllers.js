const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p=>{
      return p.id === placeId;
    });
  
    if (!place) {
      throw new HttpError('Could not find a place for the provided id.',404);
    }
  
    console.log('Get Request in Places');
    res.json({place});
  };

  const getPlacesByUserId = (req, res, next) => {
    const userId = res.param.uid;
    const place = DUMMY_PLACES
  };
  // function getPlaceById() { ... }
  // const getPlaceById = function() { ... }