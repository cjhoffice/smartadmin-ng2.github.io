webpackJsonp([10,52],{1159:function(t,e,n){"use strict";var o=n(0),i=n(9),d=n(1227),a=n(1299),r=n(1198),c=n(508);n.d(e,"BootstrapEditorsModule",function(){return u});var s=this&&this.__decorate||function(t,e,n,o){var i,d=arguments.length,a=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(d<3?i(a):d>3?i(e,n,a):i(e,n))||a);return d>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return t=s([n.i(o.NgModule)({imports:[i.CommonModule,a.a,r.a,c.a],declarations:[d.a]}),l("design:paramtypes",[])],t)}()},1197:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,d=arguments.length,a=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(d<3?i(a):d>3?i(e,n,a):i(e,n))||a);return d>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.el=t}return t.prototype.ngOnInit=function(){var t=this;n.e(25).then(n.bind(null,1276)).then(function(){t.render()})},t.prototype.render=function(){$(this.el.nativeElement).markdown(this.markdownEditor||{})},i([n.i(o.Input)(),d("design:type",Object)],t.prototype,"markdownEditor",void 0),t=i([n.i(o.Directive)({selector:"[markdownEditor]"}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ElementRef&&o.ElementRef)&&e||Object])],t);var e}()},1198:function(t,e,n){"use strict";var o=n(0),i=n(9),d=n(1201),a=n(1199),r=n(1200),c=n(1197);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,o){var i,d=arguments.length,a=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(d<3?i(a):d>3?i(e,n,a):i(e,n))||a);return d>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return t=s([n.i(o.NgModule)({imports:[i.CommonModule],declarations:[d.a,a.a,r.a,c.a],exports:[d.a,a.a,r.a,c.a]}),l("design:paramtypes",[])],t)}()},1199:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,d=arguments.length,a=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(d<3?i(a):d>3?i(e,n,a):i(e,n))||a);return d>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.render=function(){$(this.summernoteAttach).summernote({focus:!0})},t.prototype.ngOnInit=function(){n.e(23).then(n.bind(null,1187))},i([n.i(o.Input)(),d("design:type",Object)],t.prototype,"summernoteAttach",void 0),i([n.i(o.HostListener)("click"),d("design:type",Function),d("design:paramtypes",[]),d("design:returntype",void 0)],t.prototype,"render",null),t=i([n.i(o.Directive)({selector:"[summernoteAttach]"}),d("design:paramtypes",[])],t)}()},1200:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,d=arguments.length,a=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(d<3?i(a):d>3?i(e,n,a):i(e,n))||a);return d>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.render=function(){$(this.summernoteDetach).summernote("destroy")},i([n.i(o.Input)(),d("design:type",Object)],t.prototype,"summernoteDetach",void 0),i([n.i(o.HostListener)("click"),d("design:type",Function),d("design:paramtypes",[]),d("design:returntype",void 0)],t.prototype,"render",null),t=i([n.i(o.Directive)({selector:"[summernoteDetach]"}),d("design:paramtypes",[])],t)}()},1201:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,d=arguments.length,a=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(d<3?i(a):d>3?i(e,n,a):i(e,n))||a);return d>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.el=t,this.summernote={},this.change=new o.EventEmitter}return t.prototype.ngOnInit=function(){var t=this;n.e(23).then(n.bind(null,1187)).then(function(){t.render()})},t.prototype.render=function(){var t=this;$(this.el.nativeElement).summernote(Object.assign(this.summernote,{focus:!0,tabsize:2,callbacks:{onChange:function(e,n,o){t.change.emit(n)}}}))},i([n.i(o.Input)(),d("design:type",Object)],t.prototype,"summernote",void 0),i([n.i(o.Output)(),d("design:type",Object)],t.prototype,"change",void 0),t=i([n.i(o.Directive)({selector:"[summernote]"}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ElementRef&&o.ElementRef)&&e||Object])],t);var e}()},1227:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,d=arguments.length,a=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(d<3?i(a):d>3?i(e,n,a):i(e,n))||a);return d>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([n.i(o.Component)({selector:"app-bootstrap-editors",template:n(1434)}),d("design:paramtypes",[])],t)}()},1299:function(t,e,n){"use strict";var o=n(64),i=n(1227);n.d(e,"a",function(){return a});var d=[{path:"",component:i.a}],a=o.a.forChild(d)},1434:function(t,e){t.exports='<div id="content">\n  <div class="row">\n    <sa-big-breadcrumbs [items]="[\'Forms\', \'Bootstrap Editors\']" icon="table" class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n\n  <!-- widget grid -->\n\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class="row">\n\n      <!-- NEW WIDGET START -->\n      <article class="col-sm-12 col-md-12 col-lg-6">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget [colorbutton]="false" [editbutton]="false" [togglebutton]="false" [fullscreenbutton]="false" [sortable]="false" color="purple">\n          <!-- widget options:\n          usage: <div jarvis-widget id="wid-id-0" [editbutton]="false">\n\n          [colorbutton]="false"\n          [editbutton]="false"\n          [togglebutton]="false"\n          [deletebutton]="false"\n          [fullscreenbutton]="false"\n          [custombutton]="false"\n          [collapsed]="true"\n          [sortable]="false"\n\n          -->\n          <header>\n            <span class="widget-icon"> <i class="fa fa-pencil"></i> </span>\n\n            <h2>Markdown</h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class="widget-body no-padding">\n\n                <textarea markdownEditor class="custom-scroll" data-height="270">\n### Hello there\nHow are you?\n\nI have bellow task for you :\n\nSelect from this text...\nClick the bold on THIS WORD and make THESE ONE italic\nLink GOOGLE to google.com\nTest to insert image (and try to tab after write the image description)\nTest Preview\nAnd ending here... Click "List"\n\nEnjoy!\n                </textarea>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </sa-widget>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget class="well" [colorbutton]="false" [editbutton]="false" [togglebutton]="false" [fullscreenbutton]="false" [sortable]="false">\n          <!-- widget options:\n          usage: <div jarvis-widget id="wid-id-0" [editbutton]="false">\n\n          [colorbutton]="false"\n          [editbutton]="false"\n          [togglebutton]="false"\n          [deletebutton]="false"\n          [fullscreenbutton]="false"\n          [custombutton]="false"\n          [collapsed]="true"\n          [sortable]="false"\n\n          -->\n          <header>\n            <span class="widget-icon"> <i class="fa fa-pencil"></i> </span>\n\n            <h2>Markdown API</h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class="widget-body">\n\n              <h3>Markdown API</h3>\n\n              <table class="table table-bordered table-striped">\n                <thead>\n                <tr>\n                  <th>Method Name</th>\n                  <th>Description</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td><code>\n                    showEditor()</code></td>\n                  <td>Toggle on the editor visibility</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    showPreview()</code></td>\n                  <td>Toggle on the preview visibility</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    hidePreview()</code></td>\n                  <td>Toggle off the editor visibility</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    isDirty()</code></td>\n                  <td>Check the editor content state, return true if the original content was changed</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    getContent()</code></td>\n                  <td>Get the editor content</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    setContent(<em>string</em> content)</code></td>\n                  <td>Set the editor content</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    findSelection(<em>string</em> words)</code></td>\n                  <td>Find some words/sentence within the editor and returned selection object(containing word\n                    position and other useful information).\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    getSelection()</code></td>\n                  <td>Get the current selected chunk of words within the editor.</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    setSelection(<em>int</em> start, <em>int</em> end)</code></td>\n                  <td>Tell the editor to select a span of words from <code>\n                    start</code> to <code>\n                    end</code>.\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    replaceSelection(<em>string</em> content)</code></td>\n                  <td>Replace the current selected chunk of words within the editor with any content.</td>\n                </tr>\n                <tr>\n                  <td><code>\n                    getNextTab()</code></td>\n                  <td>Get the next tab memory. Returned selection object(containing word position and other useful\n                    information).\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    setNextTab(<em>int</em> start, <em>int</em> end)</code></td>\n                  <td>Tell the editor to select a span of words from <code>\n                    start</code> to <code>\n                    end</code> at next <code>\n                    tab</code> keypress event.\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    enableButtons(<em>string</em> name)</code></td>\n                  <td>Enabled a button by <code>\n                    name</code> that described in <code>\n                    buttons</code> or <code>\n                    additionalButtons</code> arrays. Passing <code>\n                    all</code> will enabled all buttons.\n                  </td>\n                </tr>\n                <tr>\n                  <td><code>\n                    disableButtons(<em>string</em> name)</code></td>\n                  <td>Disabled a button by <code>\n                    name</code> that described in <code>\n                    buttons</code> or <code>\n                    additionalButtons</code> arrays. Passing <code>\n                    all</code> will disabled all buttons.\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </sa-widget>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n      <!-- NEW WIDGET START -->\n      <article class="col-sm-12 col-md-12 col-lg-6">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget [colorbutton]="false" [editbutton]="false" [togglebutton]="false" [fullscreenbutton]="false" [sortable]="false" color="blue">\n          <!-- widget options:\n          usage: <div jarvis-widget id="wid-id-0" [editbutton]="false">\n\n          [colorbutton]="false"\n          [editbutton]="false"\n          [togglebutton]="false"\n          [deletebutton]="false"\n          [fullscreenbutton]="false"\n          [custombutton]="false"\n          [collapsed]="true"\n          [sortable]="false"\n\n          -->\n          <header>\n            <span class="widget-icon"> <i class="fa fa-pencil"></i> </span>\n\n            <h2>Summernote (Lightweight)</h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n\n            <!-- widget content -->\n            <div class="widget-body no-padding">\n\n              <div class="summernote" [summernote]="{height: 180}">\n\n              </div>\n\n              <div class="widget-footer smart-form">\n\n                <div class="btn-group">\n\n                  <button class="btn btn-sm btn-primary" type="button">\n                    <i class="fa fa-times"></i> Cancel\n                  </button>\n\n                </div>\n                <div class="btn-group">\n\n                  <button class="btn btn-sm btn-success" type="button">\n                    <i class="fa fa-check"></i> Save\n                  </button>\n\n                </div>\n\n                <label class="checkbox pull-left">\n                  <input type="checkbox" checked="checked" name="autosave" id="autosave">\n                  <i></i>Auto Save\n                </label>\n\n              </div>\n\n            </div>\n            <!-- end widget content -->\n\n          </div>\n          <!-- end widget div -->\n\n        </sa-widget>\n        <!-- end widget -->\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget class="well">\n          <!-- widget options:\n          usage: <div jarvis-widget id="wid-id-0" [editbutton]="false">\n\n          [colorbutton]="false"\n          [editbutton]="false"\n          [togglebutton]="false"\n          [deletebutton]="false"\n          [fullscreenbutton]="false"\n          [custombutton]="false"\n          [collapsed]="true"\n          [sortable]="false"\n\n          -->\n          <header>\n            <span class="widget-icon"> <i class="fa fa-pencil"></i> </span>\n\n            <h2>Example </h2>\n\n          </header>\n\n          <!-- widget div-->\n          <div>\n\n            <!-- widget content -->\n            <div class="widget-body">\n\n              <h3>Summernote Example</h3>\n\n              <p>\n                <button class="btn btn-primary" summernoteAttach=".click2edit" type="button">\n                  Edit\n                </button>\n                <button class="btn btn-primary" summernoteDetach=".click2edit" type="button">\n                  Save\n                </button>\n              </p>\n              <p></p>\n\n              <div class="click2edit">\n                To change this text with summernote, click `Edit` button\n              </div>\n\n              <h5>HTML:</h5>\n              <pre><code class="xml">\n&lt;p&gt;\n  &lt;button class=&quot;btn btn-primary&quot; summernoteAttach=&quot;.click2edit&quot; type=&quot;button&quot;&gt;\n  Edit\n  &lt;/button&gt;\n  &lt;button class=&quot;btn btn-primary&quot; summernoteDetach=&quot;.click2edit&quot; type=&quot;button&quot;&gt;\n  Save\n  &lt;/button&gt;\n&lt;/p&gt;\n\n&lt;div class=&quot;click2edit&quot;&gt;\nTo change this text with summernote, click `Edit` button\n&lt;/div&gt;\n                </code></pre>\n              <h5>Script:</h5>\n              <pre><code class="javascript">\n                    //no scripts required\n\t\t\t\t</code></pre>\n\n\n              <h5>Documentation:</h5>\n\n              <p class="alert alert-info">\n                Full API for Summernote.js, including keybored shortcuts, PHP Examples, Django installation, and\n                Rails (gem) integration can be found <a href="http://hackerwins.github.io/summernote/features.html#api">here</a>\n              </p>\n            </div>\n            <!-- end widget content -->\n\n\n            <!-- end widget div -->\n          </div>\n\n        </sa-widget>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n\n  <!-- end widget grid -->\n\n\n</div>\n'}});