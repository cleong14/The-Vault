'use strict';
module.exports = function() {

  var vaultValue = {

    setValue: function (key, value) {
      this.key = value;
      return this.key;
    },

    getValue: function (key) {
      if(!this.key) {
        return null;
      }
      return this.key;
    }
  };

  return vaultValue;
};