// 1. find right plugin and how to install it with yarn
// 2. inside plugins folder, create a file for the plug 'init_pluginName.js'
// 3. read documentation and implement the plugin
// 4. export the function
// 5. import the funciton on index.js
// 6. call the function

// Selectors
const form = document.querySelector('#search-form');

// imports
import { fetchMovies, fillList } from './movie.js'
import { sortMovies } from './plugins/init_sortable.js'
import { menuSelect } from './plugins/init_select2.js'
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"


// API calls
fetchMovies('batman'); // on 1st page load


// Listeners
form.addEventListener('submit', fillList);

// Functions
sortMovies();
menuSelect();

// Stimulus start
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

