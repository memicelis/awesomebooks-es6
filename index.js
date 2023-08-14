import displayDate from './modules/currentdate.js';
import Navigation from './modules/navigation.js';
import BookCollection from './modules/bookcollection.js';

displayDate();

const nav = new Navigation();
nav.pageNavigation();

const books = new BookCollection();
books.initElements();
