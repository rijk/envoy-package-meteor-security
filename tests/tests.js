// Tests are run only on the client because we are only concerned about client-initiated DB operations

/*
 * control
 */

Tinytest.addAsync('Security - control - insert', function(test, next) {
  Collections.control.insert({}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - control - update', function(test, next) {
  Collections.control.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - control - remove', function(test, next) {
  Collections.control.remove("test", function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

/*
 * allowAnyone
 */

Tinytest.addAsync('Security - allowAnyone - insert', function(test, next) {
  Collections.allowAnyone.insert({}, function (error, result) {
    test.isFalse(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyone - update', function(test, next) {
  Collections.allowAnyone.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isFalse(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyone - remove', function(test, next) {
  Collections.allowAnyone.remove("test", function (error, result) {
    test.isFalse(!!error);
    next();
  });
});

/*
 * allowAnyoneToInsert
 */

Tinytest.addAsync('Security - allowAnyoneToInsert - insert', function(test, next) {
  Collections.allowAnyoneToInsert.insert({}, function (error, result) {
    test.isFalse(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyoneToInsert - update', function(test, next) {
  Collections.allowAnyoneToInsert.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyoneToInsert - remove', function(test, next) {
  Collections.allowAnyoneToInsert.remove("test", function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

/*
 * allowAnyoneToUpdate
 */

Tinytest.addAsync('Security - allowAnyoneToUpdate - insert', function(test, next) {
  Collections.allowAnyoneToUpdate.insert({}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyoneToUpdate - update', function(test, next) {
  Collections.allowAnyoneToUpdate.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isFalse(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyoneToUpdate - remove', function(test, next) {
  Collections.allowAnyoneToUpdate.remove("test", function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

/*
 * allowAnyoneToRemove
 */

Tinytest.addAsync('Security - allowAnyoneToRemove - insert', function(test, next) {
  Collections.allowAnyoneToRemove.insert({}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyoneToRemove - update', function(test, next) {
  Collections.allowAnyoneToRemove.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowAnyoneToRemove - remove', function(test, next) {
  Collections.allowAnyoneToRemove.remove("test", function (error, result) {
    test.isFalse(!!error);
    next();
  });
});

/*
 * allowNoOne
 */

Tinytest.addAsync('Security - allowNoOne - insert', function(test, next) {
  Collections.allowNoOne.insert({}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOne - update', function(test, next) {
  Collections.allowNoOne.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOne - remove', function(test, next) {
  Collections.allowNoOne.remove("test", function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

/*
 * allowNoOneToInsert
 */

Tinytest.addAsync('Security - allowNoOneToInsert - insert', function(test, next) {
  Collections.allowNoOneToInsert.insert({}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOneToInsert - update', function(test, next) {
  Collections.allowNoOneToInsert.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOneToInsert - remove', function(test, next) {
  Collections.allowNoOneToInsert.remove("test", function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

/*
 * allowNoOneToUpdate
 */

Tinytest.addAsync('Security - allowNoOneToUpdate - insert', function(test, next) {
  Collections.allowNoOneToUpdate.insert({}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOneToUpdate - update', function(test, next) {
  Collections.allowNoOneToUpdate.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOneToUpdate - remove', function(test, next) {
  Collections.allowNoOneToUpdate.remove("test", function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

/*
 * allowNoOneToRemove
 */

Tinytest.addAsync('Security - allowNoOneToRemove - insert', function(test, next) {
  Collections.allowNoOneToRemove.insert({}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOneToRemove - update', function(test, next) {
  Collections.allowNoOneToRemove.update("test", {$set: {foo: "bar"}}, function (error, result) {
    test.isTrue(!!error);
    next();
  });
});

Tinytest.addAsync('Security - allowNoOneToRemove - remove', function(test, next) {
  Collections.allowNoOneToRemove.remove("test", function (error, result) {
    test.isTrue(!!error);
    next();
  });
});