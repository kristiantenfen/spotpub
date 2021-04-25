import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import PubItemView from '../../components/PubItemView';
const pub = {
  "id": "11",
  "name": "Restaurant 11",
  "image": "https://loremflickr.com/640/480/cuisine",
  "logo": "https://loremflickr.com/500/500/logo",
  "description": "Restaurant 11 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  "telephone": "551143829385",
  "price_range": "De R$ 40,00 a R$ 70,00 por pessoa.",
  "payment_methods": "Dinheiro, cartão de crédito e débito.",
  "website": "http://www.restaurant11.com.br",
  "opening_hours": "De terça à domingo, das 17:00 ãs 23:00."
};
test('renders correctly', () => {
  const tree = renderer.create(<PubItemView pub={pub} />).toJSON();
  expect(tree).toMatchSnapshot();
});