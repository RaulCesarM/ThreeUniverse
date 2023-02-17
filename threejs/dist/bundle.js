/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.5, 300);\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\r\n  canvas: document.querySelector('#bg'),\r\n});\r\n\r\nrenderer.setPixelRatio(window.devicePixelRatio);\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\ncamera.position.setZ(100);\r\ncamera.position.setX(-50);;\r\ncamera.position.set(0, 0, 20);\r\nrenderer.render(scene, camera);\r\n\r\nconst pointLight = new three__WEBPACK_IMPORTED_MODULE_1__.PointLight(0xffffff);\r\npointLight.intensity = 3;\r\n\r\npointLight.position.set(0, 0, 25);\r\n\r\nconst ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff);\r\nscene.add(pointLight, ambientLight);\r\n\r\nconst spaceTexture = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader().load('Assets/energy.jpg');\r\nscene.background = spaceTexture;\r\n\r\n\r\n\r\nconst proton = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.5, 600, 600),  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst electron1 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.2, 200, 20), new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst electron2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.2, 200, 20), new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst electron3 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.2, 200, 20), new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0 }));\r\n\r\n\r\nconst atomo1 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1, 600, 600),  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst atomo2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.5, 600, 600),  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst atomo3 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.5, 600, 600),  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst atomo4 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.4, 600, 600),  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst atomo5 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.5, 600, 600),  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\nconst atomo6 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.5, 600, 600),  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 0Xffffff, metalness: 1, roughness: 0}));\r\n\r\nconst atom1Trajectory = new three__WEBPACK_IMPORTED_MODULE_1__.Line(new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints([atomo1.position, atomo1.position]), new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0x00ff00 }));\r\nconst atom2Trajectory = new three__WEBPACK_IMPORTED_MODULE_1__.Line(new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints([atomo1.position, atomo2.position]), new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0x00ff00 }));\r\nconst atom3Trajectory = new three__WEBPACK_IMPORTED_MODULE_1__.Line(new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints([atomo1.position, atomo3.position]), new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0x00ff00 }));\r\nconst atom4Trajectory = new three__WEBPACK_IMPORTED_MODULE_1__.Line(new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints([atomo1.position, atomo4.position]), new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0x00ff00 }));\r\nconst atom5Trajectory = new three__WEBPACK_IMPORTED_MODULE_1__.Line(new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints([atomo1.position, atomo5.position]), new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0x00ff00 }));\r\nconst atom6Trajectory = new three__WEBPACK_IMPORTED_MODULE_1__.Line(new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints([atomo1.position, atomo6.position]), new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0x00ff00 }));\r\nconst electron1AngularSpeed = 0.1;\r\nconst electron2AngularSpeed = 0.1;\r\nconst electron3AngularSpeed = 0.1;\r\nconst electron1Position = electron1.position;  \r\nconst electron2Position = electron2.position;\r\nconst electron3Position = electron3.position;\r\n\r\nconst atomo1posicao = atomo1.position;\r\nconst atomo2posicao = atomo2.position;\r\nconst atomo3posicao = atomo3.position;\r\nconst atomo4posicao = atomo4.position;\r\nconst atomo5posicao = atomo5.position;\r\nconst atomo6posicao = atomo6.position;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nproton.position.set(0, 0, 0);\r\nelectron1.position.set(2, 2, 0);\r\nelectron2.position.set(2, 0, 2);\r\nelectron3.position.set(0, 0, 2);\r\natomo1.position.set(0, 0, 10);//central\r\natomo2.position.set(0,-2, 10);\r\natomo3.position.set(1, 2, 10);\r\natomo4.position.set(-2, 2, 10);\r\natomo5.position.set(-2,0, 10);\r\natomo6.position.set(2,-1, 10);\r\n\r\nscene.add(proton);\r\nscene.add(electron1);\r\nscene.add(electron2);\r\nscene.add(electron3);\r\nscene.add(atomo1);\r\nscene.add(atomo2);\r\nscene.add(atomo3);\r\nscene.add(atomo4);\r\nscene.add(atomo5);\r\nscene.add(atomo6);\r\n\r\nscene.add(atom1Trajectory);\r\nscene.add(atom2Trajectory);\r\nscene.add(atom3Trajectory);\r\nscene.add(atom4Trajectory);\r\nscene.add(atom5Trajectory);\r\nscene.add(atom6Trajectory);\r\n\r\n\r\nconst terraTexture = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader().load('Assets/earthmap.jpg');\r\nconst normalTexture = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader().load('Assets/normal.jpg');\r\n\r\nconst terra = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(\r\n  new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(3, 32, 32),\r\n  new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({\r\n    map: terraTexture,\r\n    normalMap: normalTexture,\r\n  })\r\n);\r\n\r\nscene.add(terra);\r\nterra.position.set(-5,-1, 20);\r\n\r\nfunction moveCamera() {\r\n  const t = document.body.getBoundingClientRect().top;\r\n  camera.position.z = t * -0.01;\r\n  camera.position.x = t * -0.0001;\r\n  camera.rotation.y = t * -0.000002;\r\n  \r\n  // terra.rotation.x += 0.05;\r\n  // terra.rotation.y += 0.075;\r\n  // terra.rotation.z += 0.05;\r\n}\r\n\r\ndocument.body.onscroll = moveCamera;\r\nmoveCamera();\r\n\r\n\r\n\r\n\r\nfunction animate() {\r\n  requestAnimationFrame(animate);\r\n  terra.rotation.x += 0.005;\r\n  \r\n  \r\n  atom1Trajectory.geometry.setFromPoints([atomo1.position, atomo1.position]);\r\n  atom2Trajectory.geometry.setFromPoints([atomo1.position, atomo2.position]);\r\n  atom3Trajectory.geometry.setFromPoints([atomo1.position, atomo3.position]);\r\n  atom4Trajectory.geometry.setFromPoints([atomo1.position, atomo4.position]);\r\n  atom5Trajectory.geometry.setFromPoints([atomo1.position, atomo5.position]);\r\n  atom6Trajectory.geometry.setFromPoints([atomo1.position, atomo6.position]); \r\n       \r\n   electron1Position.applyAxisAngle(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1), electron1AngularSpeed);\r\n   electron2Position.applyAxisAngle(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), electron2AngularSpeed);\r\n   electron3Position.applyAxisAngle(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0), electron3AngularSpeed);\r\n\r\n  renderer.render(scene, camera);\r\n}\r\n\r\nanimate();\r\n\n\n//# sourceURL=webpack://three-demo/./main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"canvas {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n}\\r\\n:root {\\r\\n  --dark-bg: rgba(15, 15, 15, 0.95);\\r\\n  --spacing: 350px;\\r\\n  font-family: brandon-grotesque, sans-serif;\\r\\n  font-weight: 40;\\r\\n  font-style: normal;\\r\\n}\\r\\np{\\r\\n  font-size: 14px;\\r\\n}\\r\\nmain {\\r\\n  width: 100vw;\\r\\n  color: white;\\r\\n  z-index: 99;\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  margin: 0px auto;\\r\\n  padding: 120px 0px;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(12, 1fr);\\r\\n}\\r\\nh1, h2, h3, blockquote {\\r\\n  font-size: 18px;\\r\\n}\\r\\n@media (max-width: 600px) {\\r\\n  main {\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n  h1{\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n  .left {\\r\\n    float: none;\\r\\n    margin-right: 0;\\r\\n  }\\r\\n}\\r\\n  header {\\r\\n    background: var(--dark-bg);\\r\\n    grid-column: 2 / span 5;\\r\\n    font-size: 2.5rem;\\r\\n    padding: 2rem;\\r\\n    margin-bottom: var(--spacing);\\r\\n  }\\r\\n  section {\\r\\n    grid-column: 2 / 8;\\r\\n    padding: 1rem;\\r\\n    background: var(--dark-bg);\\r\\n    font-size: 1.25rem;\\r\\n    line-height: 1.5;\\r\\n    margin-bottom: var(--spacing);\\r\\n  }\\r\\n  .left {\\r\\n    grid-column: 6 / 12;\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://three-demo/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://three-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://three-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://three-demo/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://three-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://three-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://three-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://three-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://three-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://three-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;