/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2014, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

/*eslint-env mocha

The entirety of our localstore wrapper needs to be re-thought in electron,
commenting this out for now to reduce noise

var _ = require('lodash');
var expect = require('chai').expect;

var localStore = require('../../lib/core/localStore');
console.log('testlocalStore: ', localStore);

describe('localStore [node.js version for testing]', function() {
  it('is an object', function() {
    console.log('in it:',localStore, typeof localStore);
    expect(typeof localStore).equals('object');
  });

  describe('localStore.init', function() {
    it('is a function', function() {
      expect(localStore.init).to.exist;
      expect(typeof localStore.init).equals('function');
    });

    it('accepts options and calls cb', function() {
      var key = 'Hello';
      var cb = function() { key = 'world'; };
      localStore.init({foo: 'bar'}, cb);
      expect(key).equals('world');
    });
  });

  describe('localStore.getInitialState', function() {
    it('is a function', function() {
      expect(localStore.getInitialState).to.exist;
      expect(typeof localStore.getInitialState).equals('function');
    });
  });

  describe('localStore.getItem', function() {
    var data = {blocks: {mine: ['a', 'b'], yours: [1,2,3]}};

    before(function(){
      localStore.init(data, console.log);
    });

    it('is a function', function() {
      expect(localStore.getItem).to.exist;
      expect(typeof localStore.getItem).equals('function');
    });

    it('retrieves an item from the store', function() {
      console.log('inretrieve: ',localStore, localStore.getItem);
      var intLocalStore = localStore;
      var getItem = localStore.getItem;
      debugger;
      expect(localStore.getItem('blocks', console.log)).deep.equals(data.blocks);
    });
  });

  describe('localStore.setItem', function() {
    it('is a function', function() {
      expect(localStore.setItem).to.exist;
      expect(typeof localStore.setItem).equals('function');
    });

    it('adds an item to the store', function() {
      localStore.setItem({foo: 'bar'});
      expect(localStore.getItem('foo')).equals('bar');
    });

    it('overwrites an existing item', function() {
      localStore.setItem({foo: 'blocks'});
      expect(localStore.getItem('foo')).equals('blocks');
    });
  });
});
*/
