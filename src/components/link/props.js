const BASE_PROPS = [
    'id',
    'className',
    'tabIndex',
    'lang',
    'aria-hidden',
    'children',
  ];
  const FOCUS_EVENTS = ['onFocus', 'onBlur'];
  const MOUSE_EVENTS = [
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
  ];
  
  const LINK_PROPS = [
    'href',
    'hrefLang',
    'rel',
    'target',
    'autoFocus',
    'aria-label',
    'aria-current',
    'to',
    'download',
    'title',
  ];
  
  export default [...BASE_PROPS, ...LINK_PROPS, ...FOCUS_EVENTS, ...MOUSE_EVENTS];
  