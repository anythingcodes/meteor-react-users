// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
    // Check to see if data exists in the collection
    // See if the collection has any records
    const numberRecords = Employees.find({}).count();
    console.log(numberRecords);
    if (!numberRecords) {
        // Generate some data...
        _.times(5000, () => {
            // use lodash helper to call function 5000 times
            const { name, email, phone } = helpers.createCard();
            Employees.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }

    Meteor.publish('employees', (per_page) => {
        return Employees.find({}, { limit: per_page });
    });

});