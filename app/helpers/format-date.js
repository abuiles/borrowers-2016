import Ember from 'ember';

// We are consuming the function defined in our utils/date-helpers.
import { formatDate  } from '../utils/date-helpers';

export default Ember.Helper.helper(function([date, format]) {
  return formatDate(date, format);
});
