//
// Mirage ships with Fajer.js which help us to create fake data
//
// See https://github.com/marak/Faker.js/
//
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  email() {
    return faker.internet.email();
  },
  twitter: '@someone'
});
