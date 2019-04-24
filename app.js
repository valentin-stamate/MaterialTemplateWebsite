import mdcAutoInit from '@material/auto-init';
import {MDCRipple} from '@material/ripple';
import {MDCList} from "@material/list";
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";
import {MDCTextField} from '@material/textfield';
//Ripples
// const ripple = document.querySelectorAll('.mdc-button, .mdc-icon-button, .mdc-card__primary-action');
// ripple.forEach(ripple => MDCRipple.attachTo(ripple));

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});


// Drawer
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

// Top App Bar
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

//List Drawer Ripple
const list = new MDCList(document.querySelector('.mdc-list'));
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

// Text Fields
const selectortextField = '.mdc-text-field';
const textField = [].map.call(document.querySelectorAll(selectortextField), function(el){
  return new MDCTextField(el);
});