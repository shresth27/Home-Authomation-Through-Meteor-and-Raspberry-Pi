import './main.html';
import './main.css';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
  this.toggle = new ReactiveVar(true);
});


Template.login.events({
	'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
		
	}
});




Template.loginButtons.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
/*Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});*/

Template.hello.events({
  'click input#one'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
    // HTTP.call('POST', 'http://192.168.1.9:8000/toggle', {
      console.log('hello');
    HTTP.post('http://192.168.0.5:8000/toggle', {
      data: {
        lightOn: instance.toggle.get(),
        pinNo: 3,
      }
    }, (error, result) => {
      if (error) {
        return console.error(error);
      }
      instance.toggle.set(!instance.toggle.get());
      //console.log('RESULT', result);
    });
  },
});
Template.hello.events({
  'click input#two'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
    // HTTP.call('POST', 'http://192.168.1.9:8000/toggle', {
    HTTP.post('http://192.168.0.5:8000/toggle', {
      data: {
        lightOn: instance.toggle.get(),
        pinNo: 5,
      }
    }, (error, result) => {
      if (error) {
        return console.error(error);
      }
      instance.toggle.set(!instance.toggle.get());
     // console.log('RESULT', result);
    });
  },
});
Template.hello.events({
  'click input#three'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
    // HTTP.call('POST', 'http://192.168.1.9:8000/toggle', {
    HTTP.post('http://192.168.0.5:8000/toggle', {
      data: {
        lightOn: instance.toggle.get(),
        pinNo: 7,
      }
    }, (error, result) => {
      if (error) {
        return console.error(error);
      }
      instance.toggle.set(!instance.toggle.get());
     // console.log('RESULT', result);
    });
  },
});
Template.hello.events({
  'click input#four'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
    // HTTP.call('POST', 'http://192.168.1.9:8000/toggle', {
    HTTP.post('http://192.168.0.5:8000/toggle', {
      data: {
        lightOn: instance.toggle.get(),
        pinNo: 11,
      }
    }, (error, result) => {
      if (error) {
        return console.error(error);
      }
      instance.toggle.set(!instance.toggle.get());
     // console.log('RESULT', result);
    });
  },
});
