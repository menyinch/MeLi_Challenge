import express from 'express';
import axios from 'axios';
const router = express.Router();

function getBreadcrumb(filters) {
  var breadcrumb = [];

  filters.forEach(filter => {
    if (filter.id === 'category') {
      filter.values[0].path_from_root.forEach(category => {
        breadcrumb.push(category.name);
      });
    }
  });

  if (breadcrumb.length > 0) {
    return breadcrumb.join(' > ');
  } else {
    return null;
  }
}

router.get('/items/:item_id', (req, res) => {
  var param = req.params.item_id ? req.params.item_id : '';

  axios
    .get('https://api.mercadolibre.com/items/' + param)
    .then(response => {
      // handle success
      let data = response.data;
      axios
        .get('https://api.mercadolibre.com/items/' + param + '/description')
        .then(response => {
          // handle success
          let description = response.data.plain_text;

          const result = {
            author: {
              name: 'Menyin',
              lastname: 'Chang',
            },
            item: {
              id: data.id,
              title: data.title,
              price: {
                currency: data.currency_id,
                amount: Math.trunc(data.price),
                decimals: Math.trunc((data.price % 1) * 100),
              },
              picture: data.pictures[0].url,
              condition: data.condition,
              free_shipping: data.shipping.free_shipping,
              sold_quantity: data.sold_quantity,
              description: description,
            },
          };

          return res.json(result);
        });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

router.get('/items', (req, res) => {
  let param = req.query.q ? req.query.q : '';

  axios
    .get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + param)
    .then(response => {
      // handle success
      const result = {
        author: {
          name: 'Menyin',
          lastname: 'Chang',
        },
        breadcrumb: getBreadcrumb(response.data.filters),
        items: response.data.results.map(product => {
          return {
            id: product.id,
            title: product.title,
            price: {
              amount: Math.trunc(product.price),
              currency: product.currency_id,
              decimals: Math.trunc((product.price % 1) * 100),
            },
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            region: product.address.state_name,
          };
        }),
      };

      return res.json(result);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

module.exports = router;
