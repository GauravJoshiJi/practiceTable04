fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.products;
  })
  .then((productData) => {
    let products = "";
    productData.map((values, key) => {
      let rating = Math.round(values.rating);
      let newRating;
      switch (rating) {
        case 1:
          newRating = "⭐";
          break;
        case 2:
          newRating = "⭐⭐";
          break;
        case 3:
          newRating = "⭐⭐⭐";
          break;
        case 4:
          newRating = "⭐⭐⭐⭐";
          break;
        default:
          newRating = "⭐⭐⭐⭐⭐";
      }

      products += `
      <tr>
            <td>${key + 1}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td>${newRating}</td>
            <td><img src="${values.thumbnail}" /></td>
          </tr>`;
    });
    document.getElementById("table_body").innerHTML = products;
  });
