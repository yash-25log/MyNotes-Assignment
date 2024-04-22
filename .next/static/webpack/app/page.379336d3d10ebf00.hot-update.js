"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            title: \"The slow turtle...\",\n            content: \"Content of the slow turtle...\",\n            date: \"11/04/2024\"\n        },\n        {\n            title: \"The clever rabbit...\",\n            content: \"Content of the clever rabbit...\",\n            date: \"11/04/2024\"\n        }\n    ]);\n    const [selectedNote, setSelectedNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const addNote = ()=>{\n        const newNote = {\n            title: \"New Note\",\n            content: \"\",\n            date: new Date().toLocaleDateString() // Set the current date\n        };\n        setNotes([\n            ...notes,\n            newNote\n        ]);\n        setSelectedNote(newNote); // Automatically open the newly added note\n    };\n    const deleteNote = (index)=>{\n        const updatedNotes = [\n            ...notes\n        ];\n        updatedNotes.splice(index, 1);\n        setNotes(updatedNotes);\n        setSelectedNote(null); // Reset selected note when deleted\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex h-screen bg-[#333] text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                    className: \"w-1/4 border-r border-gray-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-b border-gray-600\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-bold\",\n                                    children: \"WEBNOTES\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-col space-y-2 overflow-y-auto p-4\",\n                                children: notes.map((note, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex flex-col\",\n                                        onClick: ()=>setSelectedNote(note),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold truncate\",\n                                                children: note.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs text-gray-400\",\n                                                children: note.date\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"cursor-pointer text-red-500\",\n                                                onClick: ()=>deleteNote(index),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TrashIcon, {\n                                                    className: \"h-4 w-4 ml-auto\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-1 flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex p-4 border-b border-gray-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlusIcon, {\n                                    className: \"h-6 w-6 text-yellow-400\",\n                                    onClick: addNote\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TrashIcon, {\n                                    className: \"h-6 w-6 ml-auto text-red-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 p-4\",\n                            children: selectedNote ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold\",\n                                        children: selectedNote.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-400 mb-4\",\n                                        children: selectedNote.date\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                                        className: \"bg-transparent p-4 text-white placeholder-gray-400\",\n                                        placeholder: \"Start typing your note here...\",\n                                        value: selectedNote.content,\n                                        onChange: (e)=>{\n                                            const updatedNote = {\n                                                ...selectedNote,\n                                                content: e.target.value\n                                            };\n                                            setNotes(notes.map((note, index)=>index === notes.indexOf(selectedNote) ? updatedNote : note));\n                                            setSelectedNote(updatedNote);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center text-gray-400\",\n                                children: \"No note selected\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"sXNSF9Mkh+C57mgoEkIe1nhJG5Q=\");\n_c = Home;\nfunction PlusIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M5 12h14\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M12 5v14\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PlusIcon;\nfunction TrashIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ...props,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"24\",\n        height: \"24\",\n        viewBox: \"0 0 24 24\",\n        fill: \"none\",\n        stroke: \"currentColor\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M3 6h18\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\NotesApp\\\\notes-app\\\\app\\\\page.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_c2 = TrashIcon;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"PlusIcon\");\n$RefreshReg$(_c2, \"TrashIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBRW1CO0FBRXJDLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7UUFDakM7WUFBRUssT0FBTztZQUFzQkMsU0FBUztZQUFpQ0MsTUFBTTtRQUFhO1FBQzVGO1lBQUVGLE9BQU87WUFBd0JDLFNBQVM7WUFBbUNDLE1BQU07UUFBYTtLQUNqRztJQUNELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpELE1BQU1VLFVBQVU7UUFDZCxNQUFNQyxVQUFVO1lBQ2ROLE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNLElBQUlLLE9BQU9DLGtCQUFrQixHQUFHLHVCQUF1QjtRQUMvRDtRQUNBVCxTQUFTO2VBQUlEO1lBQU9RO1NBQVE7UUFDNUJGLGdCQUFnQkUsVUFBVSwwQ0FBMEM7SUFDdEU7SUFFQSxNQUFNRyxhQUFhLENBQUNDO1FBQ2xCLE1BQU1DLGVBQWU7ZUFBSWI7U0FBTTtRQUMvQmEsYUFBYUMsTUFBTSxDQUFDRixPQUFPO1FBQzNCWCxTQUFTWTtRQUNUUCxnQkFBZ0IsT0FBTyxtQ0FBbUM7SUFDNUQ7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFNRCxXQUFVOzhCQUNmLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBb0I7Ozs7Ozs7Ozs7OzBDQUVwQyw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQ1hoQixNQUFNb0IsR0FBRyxDQUFDLENBQUNDLE1BQU1ULHNCQUNoQiw4REFBQ1U7d0NBQWVOLFdBQVU7d0NBQWdCTyxTQUFTLElBQU1qQixnQkFBZ0JlOzswREFDdkUsOERBQUNHO2dEQUFLUixXQUFVOzBEQUEwQkssS0FBS25CLEtBQUs7Ozs7OzswREFDcEQsOERBQUNzQjtnREFBS1IsV0FBVTswREFBeUJLLEtBQUtqQixJQUFJOzs7Ozs7MERBQ2xELDhEQUFDb0I7Z0RBQUtSLFdBQVU7Z0RBQThCTyxTQUFTLElBQU1aLFdBQVdDOzBEQUN0RSw0RUFBQ2E7b0RBQVVULFdBQVU7Ozs7Ozs7Ozs7Ozt1Q0FKaEJKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBV2pCLDhEQUFDRztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQVNWLFdBQVU7b0NBQTBCTyxTQUFTaEI7Ozs7Ozs4Q0FDdkQsOERBQUNrQjtvQ0FBVVQsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUV2Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1pYLDZCQUNDLDhEQUFDVTs7a0RBQ0MsOERBQUNZO3dDQUFHWCxXQUFVO2tEQUFxQlgsYUFBYUgsS0FBSzs7Ozs7O2tEQUNyRCw4REFBQzBCO3dDQUFFWixXQUFVO2tEQUE4QlgsYUFBYUQsSUFBSTs7Ozs7O2tEQUM1RCw4REFBQ04sNkRBQVFBO3dDQUNQa0IsV0FBVTt3Q0FDVmEsYUFBWTt3Q0FDWkMsT0FBT3pCLGFBQWFGLE9BQU87d0NBQzNCNEIsVUFBVSxDQUFDQzs0Q0FDVCxNQUFNQyxjQUFjO2dEQUFFLEdBQUc1QixZQUFZO2dEQUFFRixTQUFTNkIsRUFBRUUsTUFBTSxDQUFDSixLQUFLOzRDQUFDOzRDQUMvRDdCLFNBQVNELE1BQU1vQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVQsUUFBV0EsVUFBVVosTUFBTW1DLE9BQU8sQ0FBQzlCLGdCQUFnQjRCLGNBQWNaOzRDQUMzRmYsZ0JBQWdCMkI7d0NBQ2xCOzs7Ozs7Ozs7OztxREFJSiw4REFBQ2xCO2dDQUFJQyxXQUFVOzBDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pEO0dBMUV3QmpCO0tBQUFBO0FBNkV4QixTQUFTMkIsU0FBU1UsS0FBSztJQUNyQixxQkFDRSw4REFBQ0M7UUFDRSxHQUFHRCxLQUFLO1FBQ1RFLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsTUFBSztRQUNMQyxRQUFPO1FBQ1BDLGFBQVk7UUFDWkMsZUFBYztRQUNkQyxnQkFBZTs7MEJBRWYsOERBQUNDO2dCQUFLQyxHQUFFOzs7Ozs7MEJBQ1IsOERBQUNEO2dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7QUFHZDtNQWxCU3RCO0FBcUJULFNBQVNELFVBQVVXLEtBQUs7SUFDdEIscUJBQ0UsOERBQUNDO1FBQ0UsR0FBR0QsS0FBSztRQUNURSxPQUFNO1FBQ05DLE9BQU07UUFDTkMsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsUUFBTztRQUNQQyxhQUFZO1FBQ1pDLGVBQWM7UUFDZEMsZ0JBQWU7OzBCQUVmLDhEQUFDQztnQkFBS0MsR0FBRTs7Ozs7OzBCQUNSLDhEQUFDRDtnQkFBS0MsR0FBRTs7Ozs7OzBCQUNSLDhEQUFDRDtnQkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7O0FBR2Q7TUFuQlN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlKFtcbiAgICB7IHRpdGxlOiBcIlRoZSBzbG93IHR1cnRsZS4uLlwiLCBjb250ZW50OiBcIkNvbnRlbnQgb2YgdGhlIHNsb3cgdHVydGxlLi4uXCIsIGRhdGU6IFwiMTEvMDQvMjAyNFwiIH0sXG4gICAgeyB0aXRsZTogXCJUaGUgY2xldmVyIHJhYmJpdC4uLlwiLCBjb250ZW50OiBcIkNvbnRlbnQgb2YgdGhlIGNsZXZlciByYWJiaXQuLi5cIiwgZGF0ZTogXCIxMS8wNC8yMDI0XCIgfVxuICBdKTtcbiAgY29uc3QgW3NlbGVjdGVkTm90ZSwgc2V0U2VsZWN0ZWROb3RlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGFkZE5vdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIHRpdGxlOiBcIk5ldyBOb3RlXCIsIC8vIFlvdSBjYW4gc2V0IGEgZGVmYXVsdCB0aXRsZSBvciBwcm9tcHQgdGhlIHVzZXIgZm9yIGl0XG4gICAgICBjb250ZW50OiBcIlwiLCAvLyBJbml0aWFsaXplIGNvbnRlbnQgYXMgZW1wdHlcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgLy8gU2V0IHRoZSBjdXJyZW50IGRhdGVcbiAgICB9O1xuICAgIHNldE5vdGVzKFsuLi5ub3RlcywgbmV3Tm90ZV0pO1xuICAgIHNldFNlbGVjdGVkTm90ZShuZXdOb3RlKTsgLy8gQXV0b21hdGljYWxseSBvcGVuIHRoZSBuZXdseSBhZGRlZCBub3RlXG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTm90ZSA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWROb3RlcyA9IFsuLi5ub3Rlc107XG4gICAgdXBkYXRlZE5vdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0Tm90ZXModXBkYXRlZE5vdGVzKTtcbiAgICBzZXRTZWxlY3RlZE5vdGUobnVsbCk7IC8vIFJlc2V0IHNlbGVjdGVkIG5vdGUgd2hlbiBkZWxldGVkXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGJnLVsjMzMzXSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ3LTEvNCBib3JkZXItciBib3JkZXItZ3JheS02MDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5XRUJOT1RFUzwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBvdmVyZmxvdy15LWF1dG8gcC00XCI+XG4gICAgICAgICAgICAgIHtub3Rlcy5tYXAoKG5vdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5vdGUobm90ZSl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0cnVuY2F0ZVwiPntub3RlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPntub3RlLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1yZWQtNTAwXCIgb25DbGljaz17KCkgPT4gZGVsZXRlTm90ZShpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIGNsYXNzTmFtZT1cImgtNCB3LTQgbWwtYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtNCBib3JkZXItYiBib3JkZXItZ3JheS02MDBcIiA+XG4gICAgICAgICAgICA8UGx1c0ljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXllbGxvdy00MDBcIiBvbkNsaWNrPXthZGROb3RlfSAvPlxuICAgICAgICAgICAgPFRyYXNoSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IG1sLWF1dG8gdGV4dC1yZWQtNTAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTRcIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZE5vdGUgPyAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e3NlbGVjdGVkTm90ZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBtYi00XCI+e3NlbGVjdGVkTm90ZS5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHAtNCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnQgdHlwaW5nIHlvdXIgbm90ZSBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE5vdGUuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTm90ZSA9IHsgLi4uc2VsZWN0ZWROb3RlLCBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICBzZXROb3Rlcyhub3Rlcy5tYXAoKG5vdGUsIGluZGV4KSA9PiAoaW5kZXggPT09IG5vdGVzLmluZGV4T2Yoc2VsZWN0ZWROb3RlKSA/IHVwZGF0ZWROb3RlIDogbm90ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWROb3RlKHVwZGF0ZWROb3RlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS00MDBcIj5ObyBub3RlIHNlbGVjdGVkPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5cbmZ1bmN0aW9uIFBsdXNJY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLnByb3BzfVxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk01IDEyaDE0XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTIgNXYxNFwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuXG5mdW5jdGlvbiBUcmFzaEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTMgNmgxOFwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTE5IDZ2MTRjMCAxLTEgMi0yIDJIN2MtMSAwLTItMS0yLTJWNlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MlwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUZXh0YXJlYSIsIkhvbWUiLCJub3RlcyIsInNldE5vdGVzIiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsInNlbGVjdGVkTm90ZSIsInNldFNlbGVjdGVkTm90ZSIsImFkZE5vdGUiLCJuZXdOb3RlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRlbGV0ZU5vdGUiLCJpbmRleCIsInVwZGF0ZWROb3RlcyIsInNwbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImFzaWRlIiwiaDEiLCJ1bCIsIm1hcCIsIm5vdGUiLCJsaSIsIm9uQ2xpY2siLCJzcGFuIiwiVHJhc2hJY29uIiwiUGx1c0ljb24iLCJoMiIsInAiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidXBkYXRlZE5vdGUiLCJ0YXJnZXQiLCJpbmRleE9mIiwicHJvcHMiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});