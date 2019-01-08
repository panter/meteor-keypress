trigger = function(eventType, which, modifiers) {
  const event = $.Event(eventType);
  event.which = Keypress.Keys.a;

  // Object.assign(event, modifiers);
  $(document).trigger(event);
};

Tinytest.add('Keypress - without modifier', function(test) {
  trigger('keydown', Keypress.Keys.a);
  test.isTrue(Keypress.is(Keypress.Keys.a));
  test.isTrue(Keypress.is(Keypress.Keys.a, null));
  test.isTrue(Keypress.is(Keypress.Keys.a, { altKey: false, ctrlKey: false }));
  test.isFalse(Keypress.is(Keypress.Keys.a, { shiftKey: true }));
  test.isFalse(Keypress.is(Keypress.Keys.a, { shiftKey: true, altKey: true }));
  // toggles back
  trigger('keyup');
  test.isFalse(Keypress.is(Keypress.Keys.a));
});

Tinytest.add('Keypress - one modifier', function(test) {
  trigger('keydown', Keypress.Keys.a, { shiftKey: true });
  test.isFalse(Keypress.is(Keypress.Keys.a));
  test.isTrue(Keypress.is(Keypress.Keys.a, { shiftKey: true }));
  test.isTrue(Keypress.is(Keypress.Keys.a, { shiftKey: true, altKey: false }));
  test.isFalse(Keypress.is(Keypress.Keys.a, { shiftKey: true, altKey: true }));
  trigger('keyup');
  test.isFalse(Keypress.is(Keypress.Keys.a, { shiftKey: true }));
});

Tinytest.add('Keypress - multiple modifiers', function(test) {
  trigger('keydown', Keypress.Keys.a, { shiftKey: true, ctrlKey: true });
  test.isFalse(Keypress.is(Keypress.Keys.a));
  test.isTrue(Keypress.is(Keypress.Keys.a, { shiftKey: true, ctrlKey: true }));
  test.isTrue(
    Keypress.is(Keypress.Keys.a, {
      shiftKey: true,
      altKey: false,
      ctrlKey: true,
    })
  );
  test.isFalse(Keypress.is(Keypress.Keys.a, { shiftKey: true }));
  test.isFalse(Keypress.is(Keypress.Keys.a, { ctrlKey: true }));
  test.isFalse(
    Keypress.is(Keypress.Keys.a, {
      shiftKey: true,
      altKey: true,
      ctrlKey: true,
    })
  );
  trigger('keyup');
  test.isFalse(Keypress.is(Keypress.Keys.a, { shiftKey: true, ctrlKey: true }));
});

Tinytest.add('Keypress - all modifiers', function(test) {
  trigger('keydown', Keypress.Keys.a, {
    shiftKey: true,
    ctrlKey: true,
    altKey: true,
    metaKey: true,
  });
  test.isFalse(Keypress.is(Keypress.Keys.a));
  test.isTrue(
    Keypress.is(Keypress.Keys.a, {
      shiftKey: true,
      ctrlKey: true,
      altKey: true,
      metaKey: true,
    })
  );

  test.isFalse(
    Keypress.is(Keypress.Keys.a, {
      shiftKey: true,
      altKey: true,
      ctrlKey: true,
    })
  );
  trigger('keyup');
  test.isFalse(
    Keypress.is(Keypress.Keys.a, {
      shiftKey: true,
      ctrlKey: true,
      altKey: true,
      metaKey: true,
    })
  );
});
