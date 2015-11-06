@Keypress = {}
@Keypress.Keys =
  'Backspace': 8
  'Tab': 9
  'Enter': 13
  'Shift': 16
  'Ctrl': 17
  'Alt': 18
  'Pause': 19
  'Capslock': 20
  'Esc': 27
  'Pageup': 33
  'Pagedown': 34
  'End': 35
  'Home': 36
  'Leftarrow': 37
  'Uparrow': 38
  'Rightarrow': 39
  'Downarrow': 40
  'Insert': 45
  'Delete': 46
  '0': 48
  '1': 49
  '2': 50
  '3': 51
  '4': 52
  '5': 53
  '6': 54
  '7': 55
  '8': 56
  '9': 57
  'a': 65
  'b': 66
  'c': 67
  'd': 68
  'e': 69
  'f': 70
  'g': 71
  'h': 72
  'i': 73
  'j': 74
  'k': 75
  'l': 76
  'm': 77
  'n': 78
  'o': 79
  'p': 80
  'q': 81
  'r': 82
  's': 83
  't': 84
  'u': 85
  'v': 86
  'w': 87
  'x': 88
  'y': 89
  'z': 90
  '0numpad': 96
  '1numpad': 97
  '2numpad': 98
  '3numpad': 99
  '4numpad': 100
  '5numpad': 101
  '6numpad': 102
  '7numpad': 103
  '8numpad': 104
  '9numpad': 105
  'Multiply': 106
  'Plus': 107
  'Minut': 109
  'Dot': 110
  'Slash1': 111
  'F1': 112
  'F2': 113
  'F3': 114
  'F4': 115
  'F5': 116
  'F6': 117
  'F7': 118
  'F8': 119
  'F9': 120
  'F10': 121
  'F11': 122
  'F12': 123
  'equal': 187
  'Coma': 188
  'Slash': 191
  'Backslash': 220

allModifiers =
  'ctrlKey': Keypress.Keys.Ctrl
  'shiftKey': Keypress.Keys.Shift
  'altKey': Keypress.Keys.Alt
  'metaKey': Keypress.Keys.Meta


STORE_KEY = 'key'
store = new ReactiveDict('KEYPRESS')

Meteor.startup ->
  $(document).on 'keydown', (event) ->
    store.set STORE_KEY, createValue event.which, event

  $(document).on 'keyup', (event) ->
    store.set STORE_KEY, null


@Keypress.get = -> store.get(STORE_KEY)

@Keypress.is = (keyCode, modifiers) ->
  store.equals STORE_KEY, createValue keyCode, modifiers


createValue = (keyCode, modifiers) ->
  value = "#{keyCode}"
  if modifiers?
    for eventKey, modifierKeyCode of allModifiers
      # when only a modifier is pressed, it should only set the keycode, not the modifier also
      if modifiers[eventKey] and keyCode isnt modifierKeyCode
        value += "_#{eventKey}"
  return value
