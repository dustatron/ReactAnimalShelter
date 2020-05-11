// var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:5000');
    // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // myHeaders.append('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
    // myHeaders.append('Access-Control-Allow-Credentials', 'true');
    // myHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //     {
    //   "CatId": 0,
    //   "Name": "string",
    //   "Breed": "string",
    //   "Age": 0,
    //   "Gender": "string"
    // // }

    // var raw = JSON.stringify({
    //   catId: animalListState.length,
    //   name: name.value,
    //   breed: breed.value,
    //   age: parseInt(age.value),
    //   gender: gender.value
    // });

    var data = {
      catId: animalListState.length,
      name: name.value,
      breed: breed.value,
      age: parseInt(age.value),
      gender: gender.value
    };

    console.log('raw cat', data);

    let thisRequest = {
      method: 'post',
      mode: 'no-cors',
      // cache: 'no-cache',
      origin: 'http://localhost:3000',
      // credentials: 'omit',
      // credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    };

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw
    //   // redirect: 'follow'
    // };

    fetch('http://localhost:5000/api/Cats', thisRequest)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));