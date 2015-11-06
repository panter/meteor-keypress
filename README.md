# Keypress - React to keypress - reactivly

## Usage

`meteor add panter:keypress`

Now, you can use:

`Keypress.is(Keypress.Keys.c, {ctrlKey: true})`

Which returns true if ctrl + c is pressed. It is a reactive datasource, so you can use it in a template helper or any other reactive context.

## API


`Keypress.is(keyCode, modifiers)`

returns true whether the given key is currently pressed. A reactive datasource. 

The keycode is compatible with jQuery's keycode. `Keypress.Keys` contains constants for all possible keycodes.

You can optionally pass an object with modifiers:

````
modifiers = {
  shiftKey: true,
  altKey: true,
  ctrlKey: true,
  metaKey: true
};
````

The function only returns true, if the exact key-combination is pressed.

E.g. `Keypress.is(Keypress.Keys.c, {ctrlKey: true, altKey: true})` will only return true
if ctrl+alt+c is pressed, but not when ctrl+c or alt+c is pressed.

