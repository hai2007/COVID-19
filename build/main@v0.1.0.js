/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/main.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var platform=__etcpack__scope_args__.platform;

__etcpack__scope_args__=window.__etcpack__getBundle('3');
var normalize =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var style =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('5');
 // 引入主模块

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var appModule =__etcpack__scope_args__.default;
 // 先获取平台实例

platform({
  // 框架管理的区域
  el: document.getElementById('root'),
  // 全局样式
  styles: [normalize, style]
}) // 然后启动主模块
.bootstrap(appModule);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');
var Nefbl =__etcpack__scope_args__.default;
 // 装饰器

__etcpack__scope_bundle__.Module = Nefbl.Module;
__etcpack__scope_bundle__.Component = Nefbl.Component;
__etcpack__scope_bundle__.Directive = Nefbl.Directive; // 核心方法

__etcpack__scope_bundle__.platform = Nefbl.platform;
__etcpack__scope_bundle__.mountComponent = Nefbl.mountComponent;
__etcpack__scope_bundle__.evalExpress = Nefbl.evalExpress;
__etcpack__scope_bundle__.getValue = Nefbl.getValue;
__etcpack__scope_bundle__.setValue = Nefbl.setValue; // 暴露的一些有用的方法

__etcpack__scope_bundle__.ref = Nefbl.ref;
__etcpack__scope_bundle__.reactive = Nefbl.reactive;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/nefbl/dist/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * nefbl - 新一代前端框架
 *
 * git+https://github.com/nefbl/nefbl.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.6
 *
 * Copyright (c) 2021-2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Thu Dec 02 2021 16:51:00 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }

  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */

  function _isFunction (value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }

  /*!
   * 💡 - 值类型判断方法
   * https://github.com/hai2007/tool.js/blob/master/type.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */


  var isObject = _isObject; // 基本类型

  var isFunction = _isFunction;
  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  /**
   * 模块
   */

  function Module () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var component = {},
        directive = {};
    var bootstrapComponent = null;
    var exports = {
      component: {},
      directive: {}
    };

    if (isArray(config.declarations)) {
      // 分析出指令和组件
      var _iterator = _createForOfIteratorHelper(config.declarations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Item = _step.value;
          var needExports = false;

          if (isArray(config.exports)) {
            // 判断是否需要暴露

            /**
             * 为什么这里暴露出去的需要从declarations中取？
             * 因为考虑到后期改造的时候，可能新增一些需要在本模块实例化等，
             * 这样的好处是保罗出去的和内置使用的保持一致，不会乱。
             */
            var _iterator2 = _createForOfIteratorHelper(config.exports),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var ExportItem = _step2.value;

                if (ExportItem === Item) {
                  needExports = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // 组件


          if (Item.prototype.__type__ == "Component") {
            component[Item.prototype.__selector__] = Item; // bootstrap用于标记启动组件

            if (config.bootstrap === Item) {
              bootstrapComponent = Item;
            }

            if (needExports) {
              exports.component[Item.prototype.__selector__] = Item;
            }
          } // 指令
          else if (Item.prototype.__type__ == "Directive") {
              directive[Item.prototype.__selector__] = Item;

              if (needExports) {
                exports.directive[Item.prototype.__selector__] = Item;
              }
            }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (isArray(config.imports)) {
      // 分析导入的模块
      var _iterator3 = _createForOfIteratorHelper(config.imports),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var module = _step3.value;

          // 组件
          for (var key in module.prototype.__exports__.component) {
            component[key] = module.prototype.__exports__.component[key];
          } // 指令


          for (var _key in module.prototype.__exports__.directive) {
            directive[_key] = module.prototype.__exports__.directive[_key];
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Module'; // 登记所有的指令、组件（包括依赖的模块的）

      target.prototype.__component__ = component;
      target.prototype.__directive__ = directive; // 暴露出去的

      target.prototype.__exports__ = exports; // 可能还有启动组件

      target.prototype.__bootstrapComponent__ = bootstrapComponent;
    };
  }

  var $RegExp = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    // 标志符
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  };

  var toString$1 = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType$1 (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString$1.call(value);
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function _isString (value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType$1(value) === '[object String]';
  }

  var isString = _isString;
  var isArray$1 = function isArray(input) {
    return Array.isArray(input);
  };

  function analyseTag (attrString) {
    var attr = {},
        index = 0;
    attrString = attrString.trim();

    var getOneAttr = function getOneAttr() {
      // 属性名和属性值
      var attrName = "",
          attrValue = ""; // 先寻找属性名

      for (; index < attrString.length; index++) {
        // 寻找属性名的时候遇到空白或结尾的时候，肯定没有属性值
        if ($RegExp.blanksReg.test(attrString[index]) || index == attrString.length - 1) {
          attrName += attrString[index]; // 如果属性名是空白，就不需要记录了

          if (!$RegExp.blanksReg.test(attrName)) {
            attr[attrName.trim()] = "";
          }

          index += 1;
          break;
        } // 如果遇到等号，说明属性名寻找结束了
        else if (attrString[index] == '=') {
            // 接着寻找属性值
            index += 1; // 由于属性可能由引号包裹或直接暴露

            var preCode = null,
                preLeng = -1; // 如果是由'或者"包裹

            if (attrString.substr(index, 1) == '"' || attrString.substr(index, 1) == "'") {
              preCode = attrString.substr(index, 1);
              preLeng = 1;
              index += 1;
            } // 如果是由\'或\"包裹
            else if (attrString.substr(index, 2) == '\"' || attrString.substr(index, 2) == "\'") {
                preCode = attrString.substr(index, 2);
                preLeng = 2;
                index += 2;
              } // 开始正式寻找属性值
            // 如果没有包裹，是直接暴露在外面的
            // 我们寻找到空格或结尾即可


            if (preCode !== null) {
              for (; index < attrString.length; index++) {
                if (attrString.substr(index, preLeng) == preCode) {
                  attr[attrName.trim()] = attrValue.trim();
                  index += 2;
                  break;
                } else {
                  attrValue += attrString[index];
                }
              }
            } // 如果是包裹的
            // 我们确定寻找到对应的包裹闭合即可
            else {
                for (; index < attrString.length; index++) {
                  if ($RegExp.blanksReg.test(attrString[index])) {
                    attr[attrName.trim()] = attrValue.trim();
                    index += 1;
                    break;
                  } else {
                    attrValue += attrString[index];
                  }
                }
              }

            break;
          } else {
            attrName += attrString[index];
          }
      } // 如果还有字符串，继续解析


      if (index < attrString.length) {
        getOneAttr();
      }
    };

    getOneAttr();
    return attr;
  }

  function nextTagFun (template) {
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 如果前面是获取的js或css，还有pre等开始标签，比较特殊，直接寻址闭合的

    var preIsSpecial = false,
        specialCode = "";
    var specialTag = ['script', 'pre', 'style', 'code']; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < template.length - 1 ? template[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return template.substring(i, n + i > template.length ? template.length : n + i);
    };

    next(); // 剔除开头的空白

    while ($RegExp.blankReg.test(currentChar) && i < template.length - 1) {
      next();
    }
    /**
     * 一个Tag存在哪些类型？如下：
     * 1.<tag-name>       { tagName:'tag-name', type:'beginTag', attrs:{} }      开始标签
     * 2.</tag-name>      { tagName:'tag-name', type:'endTag'   }                结束标签
     * 3.<tag-name />     { tagName:'tag-name', type:'fullTag',  attrs:{} }      自闭合标签
     * 4.text             { tagName:'text',     type:'textcode' }                文本结点
     * 5.<!-- text -->    { tagName:'text',     type:'comment'  }                注释
     * 6.<!DOCTYPE text>  { tagName:'text',     type:'DOCTYPE'  }                声明
     *
     *
     */


    return function () {
      var tag = currentChar,
          tagObj = {};
      if (tag == null) return null;
      /**
       * 特殊标签内容获取
       * ========================================
       */
      // 如果是获取特殊标签里面的内容
      // 先不考虑里面包含'</XXX>'

      if (preIsSpecial) {
        tagObj.type = 'textcode';
        tagObj.tagName = tag;

        while (nextNValue(specialCode.length + 3) != '</' + specialCode + '>' && i < template.length) {
          tagObj.tagName += next();
        }

        tagObj.tagName = tagObj.tagName.replace(/<$/, '');
        preIsSpecial = false;
        return tagObj;
      }
      /**
       * 特殊标签获取
       * ========================================
       */
      // 针对特殊的comment


      if (nextNValue(4) == '<!--') {
        tagObj.type = 'comment';
        tagObj.tagName = tag;

        while (nextNValue(3) != '-->' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        next();
        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!--/, '').replace(/-$/, '');
        return tagObj;
      } // 针对特殊的doctype


      if (nextNValue(9) == '<!DOCTYPE') {
        tagObj.type = 'DOCTYPE';
        tagObj.tagName = tag;

        while (nextNValue(1) != '>' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!DOCTYPE/, '').replace(/>$/, '');
        return tagObj;
      }
      /**
       * 普通的
       * ========================================
       */
      // 如果是期望归结非文本结点
      else if (tag == '<') {
          // 标记是否处于属性值是字符串包裹中
          var isAttrString = false,
              attrLeftValue = null,
              attrLeftLen = null; // 如果在包裹中或者没有遇到‘>’说明没有结束

          while ((isAttrString || currentChar != '>') && i < template.length) {
            tag += next(); // 如果是包裹里面，试探是否即将遇到了结束

            if (isAttrString) {
              var next23Value = nextNValue(attrLeftLen + 1).substring(1);

              if (next23Value == attrLeftValue) {
                isAttrString = false;
              }
            } // 如果在包裹外面，试探是否即将进入包裹
            else {
                var next23Value = nextNValue(2);

                if (next23Value == '="' || next23Value == "='") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 1;
                  isAttrString = true;
                }

                next23Value = nextNValue(3);

                if (next23Value == '=\"' || next23Value == "=\'") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 2;
                  isAttrString = true;
                }
              }
          } // 针对特殊的结束标签


          if (/^<\//.test(tag)) {
            tagObj.tagName = tag.replace(/^<\//, '').replace(/>$/, '');
            tagObj.type = 'endTag';
          } else {
            if (/\/>$/.test(tag)) {
              tagObj.type = 'fullTag';
              tag = tag.replace(/\/>$/, '');
            } else {
              tagObj.type = 'beginTag';
              tag = tag.replace(/>$/, '');
            }

            tag = tag.replace(/^</, '');
            tagObj.tagName = "";
            var j = 0;

            for (; j < tag.length; j++) {
              if (tag[j] == ' ') break;
              tagObj.tagName += tag[j];
            }

            var attrString = tag.substring(j);

            if ($RegExp.blanksReg.test(attrString)) {
              tagObj.attrs = {};
            } else {
              tagObj.attrs = analyseTag(attrString);
            }
          }
        } // 如果是归结文本结点
        // 如果文本中包含<的先忽略考虑
        else {
            tagObj.type = 'textcode';
            tagObj.tagName = currentChar;

            while (nextNValue(1) != '<' && i < template.length) {
              tagObj.tagName += next();
            }

            tagObj.tagName = tagObj.tagName.replace(/<$/, '');
            i -= 1;
          } // 如果遇到开始script或者style、pre等特殊标签，标记开始获取特殊文本


      if (tagObj.type == 'beginTag') {
        if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
          preIsSpecial = true;
          specialCode = tagObj.tagName;
        }
      } // 如果遇到结束script或者style、pre等特殊标签，标记结束获取特殊文本
      else if (tagObj.type == 'endTag') {
          if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
            preIsSpecial = false;
          }
        }

      next();
      return tagObj;
    };
  }

  // 分析deep
  // 我们会在这里校对那些没有结束标签的开始标签
  // 这步结束以后，每个都是一个单独的标签
  // 也就是不用再区分开始或闭合了
  function analyseDeep (tagArray) {
    // 闭合标签
    tagArray = closeTag(tagArray);
    var deep = 0,
        tagDeepArray = [];
    tagArray.forEach(function (tag) {
      if (tag.type == 'beginTag') {
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: ++deep,
          __tagType__: "double"
        });
      } else if (tag.type == 'endTag') {
        deep -= 1;
      } else if (tag.type == 'textcode') {
        // 如果是文本
        tagDeepArray.push({
          type: "text",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else if (tag.type == 'comment') {
        // 如果是注释
        tagDeepArray.push({
          type: "comment",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else {
        // 如果是自闭合结点
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: deep + 1,
          __tagType__: "single"
        });
      }
    });
    return tagDeepArray;
  }

  var closeTag = function closeTag(tagArray) {
    var needClose = [];
    tagArray.forEach(function (tag, i) {
      if (tag.type == 'beginTag') {
        needClose.push([i, tag.tagName]);
      } else if (tag.type == 'endTag') {
        while (needClose.length > 0) {
          var needCloseTag = needClose.pop();

          if (needCloseTag[1] == tag.tagName) {
            break;
          } else {
            tagArray[needCloseTag[0]].type = 'fullTag';
          }
        }
      }
    });
    return tagArray;
  };

  /*!
   * 🔪 - 解析xhtml为json对象返回
   * https://github.com/hai2007/algorithm.js/blob/master/xhtmlToJson.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // noIgnore为true表示不忽略任何标签

  function xhtmlToJson (template, noIgnore) {
    if (!isString(template)) throw new Error("Template must be a String!"); // 获取读取下一个标签对象

    var nextTag = nextTagFun(template.trim());
    var tag = nextTag(),
        DomTree = [];

    while (tag != null) {
      if (tag.type == 'textcode' && $RegExp.blanksReg.test(tag.tagName)) ; else if (tag.type == 'DOCTYPE') ; else if (tag.type == 'comment') {
        // 注释目前也默认过滤掉，除非显示声明不忽略
        if (noIgnore) {
          DomTree.push(tag);
        }
      } else {
        tag.tagName = tag.tagName.trim();
        DomTree.push(tag);
      }

      tag = nextTag();
    } // 分析层次


    DomTree = analyseDeep(DomTree);
    /**
     * 模仿浏览器构建的一棵树,每个结点有如下属性：
     *
     * 1.parentNode index  父结点
     * 2.childNodes []     孩子结点
     * 3.preNode    index  前一个兄弟结点
     * 4.nextNode   index  后一个兄弟结点
     *
     * 5.attrs:{}          当前结点的属性
     * 6.name              节点名称
     * 7.type              节点类型（tag和text）
     * 8.content           文本结点内容
     *
     * 需要注意的是：如果一个文本结点内容只包含回车，tab，空格等空白字符，会直接被忽视
     */

    var presNode = [null],
        preDeep = 0;

    for (var i = 0; i < DomTree.length; i++) {
      // 当前结点
      var currentIndex = i,
          currentDeep = DomTree[i].__deep__;
      DomTree[i].childNodes = [];
      DomTree[i].preNode = null;
      DomTree[i].nextNode = null; // 前置三个结点

      var lastPre = presNode[presNode.length - 1];
      var last2Pre = presNode.length > 1 ? presNode[presNode.length - 2] : null; // 如果遇到的是兄弟结点

      if (currentDeep == preDeep) {
        // 修改兄弟关系
        DomTree[currentIndex].preNode = lastPre;
        DomTree[lastPre].nextNode = currentIndex; // 修改父子关系

        DomTree[currentIndex].parentNode = last2Pre;
        DomTree[last2Pre].childNodes.push(currentIndex); // 校对presNode

        presNode[presNode.length - 1] = currentIndex;
      } // 如果是遇到了孩子
      else if (currentDeep > preDeep) {
          // 修改兄弟关系
          // todo
          // 修改父子关系
          DomTree[currentIndex].parentNode = lastPre;
          if (lastPre != null) DomTree[lastPre].childNodes.push(currentIndex); // 校对presNode

          presNode.push(currentIndex);
        } // 如果是遇到了祖先
        else {
            var preTempIndex = presNode[presNode.length - 1 - (preDeep - currentDeep)];
            var preTemp2Index = presNode[presNode.length - 2 - (preDeep - currentDeep)]; // 修改兄弟关系

            DomTree[currentIndex].preNode = preTempIndex;
            if (preTempIndex != null) DomTree[preTempIndex].nextNode = currentIndex; // 修改父子关系

            DomTree[currentIndex].parentNode = preTemp2Index;
            if (preTemp2Index != null) DomTree[preTemp2Index].childNodes.push(currentIndex); // 校对presNode

            for (var j = 0; j < preDeep - currentDeep; j++) {
              presNode.pop();
            }

            presNode[presNode.length - 1] = currentIndex;
          }

      preDeep = currentDeep;
    }

    return DomTree;
  }

  // 在浏览器中利用style标签插入样式
  function addStylesClient(styles, uniqueId) {
    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = styles.join(''); // 如果需要包裹

    if (uniqueId) {
      style = style.replace(/( {0,}){/g, "{");
      style = style.replace(/( {0,}),/g, ",");
      var temp = ""; // 分别表示：是否处于注释中、是否处于内容中、是否由于特殊情况在遇到{前完成了hash

      var isSpecial = false,
          isContent = false,
          hadComplete = false;

      for (var i = 0; i < style.length; i++) {
        if (style[i] == ':' && !isSpecial && !hadComplete && !isContent) {
          hadComplete = true;
          temp += "[" + uniqueId + "]";
        } else if (style[i] == '{' && !isSpecial) {
          isContent = true;
          if (!hadComplete) temp += "[" + uniqueId + "]";
        } else if (style[i] == '}' && !isSpecial) {
          isContent = false;
          hadComplete = false;
        } else if (style[i] == '/' && style[i + 1] == '*') {
          isSpecial = true;
        } else if (style[i] == '*' && style[i + 1] == '/') {
          isSpecial = false;
        } else if (style[i] == ',' && !isSpecial && !isContent) {
          if (!hadComplete) temp += "[" + uniqueId + "]";
          hadComplete = false;
        }

        temp += style[i];
      }

      style = temp;
    }

    styleElement.innerHTML = style;
    styleElement.setAttribute('type', 'text/css');
    head.appendChild(styleElement);
  }

  /**
   * 组件
   */

  var index = 0;
  function Component (config) {
    var uniqueId = null; // 加载css

    if (isArray(config.styles)) {
      uniqueId = "nefbl-scoped-" + index++;
      addStylesClient(config.styles, uniqueId);
    }

    var template = xhtmlToJson("<nefbl-component>" + config.template + "</nefbl-component>");
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Component'; // 登记选择器

      target.prototype.__selector__ = config.selector; // 登记模板对象

      target.prototype.__template__ = template; // 记录唯一标识

      target.prototype.__uniqueId__ = uniqueId;
    };
  }

  /**
   * 指令
   */
  function Directive (config) {
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Directive'; // 登记选择器

      target.prototype.__selector__ = config.selector;
    };
  }

  // 判断是否是合法的方法或数据key
  function isValidKey (key) {
    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
      throw new Error('The beginning of _ or $ is not allowed：' + key);
    }
  }

  function watcher (component, data, key, doback) {
    // 记录值
    var value = data.value;
    var getter_setter = {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        value = newValue; // 回调通知组件更新

        doback();
      }
    }; // setter和getter添加监听

    Object.defineProperty(data, 'value', getter_setter); // 组件实例新增属性

    component[key] = value;
    Object.defineProperty(component, key, getter_setter);
  }

  function proxy (component, data, key, doback) {
    var proxy = new Proxy(data.value, {
      get: function get(_target, _key) {
        return _target[_key];
      },
      set: function set(_target, _key, _value) {
        var flag = Reflect.set(_target, _key, _value); // 回调通知组件更新

        doback();
        return flag;
      }
    });
    data.value = proxy;
    component[key] = proxy;
  }

  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */
  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];
  function analyseExpress (target, express, scope) {
    // 剔除开头和结尾的空白
    express = express.trim();
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < express.length - 1 ? express[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();
    var expressArray = [];

    while (true) {
      if (i >= express.length) break; // 先匹配普通的符号
      // + - * / %
      // && || !
      // ? :
      // [ ] ( )
      // > < >= <= == === != !==
      // 如果是&或者|比较特殊

      if (specialCode1.indexOf(currentChar) > -1) {
        // 对于特殊的符号
        if (['&', '|', '='].indexOf(currentChar) > -1) {
          if (['==='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } else {
            throw new Error("Illegal expression : " + express + "\nstep='analyseExpress',index=" + i);
          }
        } else {
          // 拦截部分比较特殊的
          if (['!=='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } // 普通的单一的
          else {
              expressArray.push(currentChar);
              next();
            }
        }
      } // 如果是字符串
      else if (['"', "'"].indexOf(currentChar) > -1) {
          var temp = "",
              beginTag = currentChar;
          next(); // 如果没有遇到结束标签
          // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
          // 后续如果希望支持，优化这里即可

          while (currentChar != beginTag) {
            if (i >= express.length) {
              // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
              throw new Error("String unclosed error : " + express + "\nstep='analyseExpress',index=" + i);
            } // 继续拼接


            temp += currentChar;
            next();
          }

          expressArray.push(temp + "@string");
          next();
        } // 如果是数字
        else if (/\d/.test(currentChar)) {
            var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error

            var temp = currentChar;
            next();

            while (i < express.length) {
              if (/\d/.test(currentChar)) {
                temp += currentChar;
                if (dotFlag == 'error') dotFlag = 'yes';
              } else if ('.' == currentChar && dotFlag == 'no') {
                temp += currentChar;
                dotFlag = 'error';
              } else {
                break;
              }

              next();
            } // 如果小数点后面没有数字，辅助添加一个0


            if (dotFlag == 'error') temp += "0";
            expressArray.push(+temp);
          } // 如果是特殊符号
          // 也就是类似null、undefined等
          else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
              expressArray.push({
                "null": null,
                "true": true
              }[nextNValue(4)]);
              i += 3;
              next();
            } else if (['false'].indexOf(nextNValue(5)) > -1) {
              expressArray.push({
                'false': false
              }[nextNValue(5)]);
              i += 4;
              next();
            } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
              expressArray.push({
                "undefined": undefined
              }[nextNValue(9)]);
              i += 8;
              next();
            } // 如果是空格
            else if ($RegExp.blankReg.test(currentChar)) {
                do {
                  next();
                } while ($RegExp.blankReg.test(currentChar) && i < express.length);
              } else {
                var dot = false; // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
                // 这是为了和[key]进行区分，例如：
                // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
                // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
                // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源

                if (currentChar == '.') {
                  dot = true;
                  next();
                } // 如果是标志符

                /**
                 *  命名一个标识符时需要遵守如下的规则：
                 *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
                 *  2.标识符不能以数字开头
                 */
                // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
                // 也就是类似flag等局部变量


                if ($RegExp.identifier.test(currentChar)) {
                  var len = 1;

                  while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) {
                    len += 1;
                  }

                  if (dot) {
                    expressArray.push('[');
                    expressArray.push(nextNValue(len - 1) + '@string');
                    expressArray.push(']');
                  } else {
                    var tempKey = nextNValue(len - 1); // 如果不是有前置.，那就是需要求解了

                    var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
                    expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
                  }

                  i += len - 2;
                  next();
                } // 都不是，那就是错误
                else {
                    throw new Error("Illegal express : " + express + "\nstep='analyseExpress',index=" + i);
                  }
              }
    } // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下


    var length = 0;

    for (var j = 0; j < expressArray.length; j++) {
      if (["+", "-"].indexOf(expressArray[j]) > -1 && ( // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
      j == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
        expressArray[length++] = +(expressArray[j] + expressArray[j + 1]);
        j += 1;
      } else {
        expressArray[length++] = expressArray[j];
      }
    }

    expressArray.length = length;
    return expressArray;
  }

  var getExpressValue = function getExpressValue(value) {
    // 这里是计算的内部，不需要考虑那么复杂的类型
    if (typeof value == 'string') return value.replace(/@string$/, '');
    return value;
  };

  var setExpressValue = function setExpressValue(value) {
    if (typeof value == 'string') return value + "@string";
    return value;
  };

  function evalValue (expressArray) {
    // 采用按照优先级顺序归约的思想进行
    // 需要明白，这里不会出现括号
    // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
    // 这也是我们可以如此归约的前提
    // + - * / %
    // && || !
    // ? :
    // > < >= <= == === != !==
    // !
    // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
    var length = 0,
        i = 0;

    for (; i < expressArray.length; i++) {
      if (expressArray[i] == '!') {
        // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
        expressArray[length] = !expressArray[++i];
      } else expressArray[length] = expressArray[i];

      length += 1;
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // * / %

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '*') {
        // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '/') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '%') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
      } else {
        // 上面不会导致数组增长
        expressArray[length++] = expressArray[i];
      }
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // + -

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '+') {
        expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
      } else if (expressArray[i] == '-') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // > < >= <=

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '>') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '>=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // == === != !==

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '===') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // && ||

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '&&') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
        i += 1;
      } else if (expressArray[i] == '||') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
        i += 1;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // ?:

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '?') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
        i += 3;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length;
    throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");
  }

  function calcValue (target, expressArray, scope) {
    var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];

    for (var i = 1; i < expressArray.length; i++) {
      try {
        value = value[expressArray[i]];
      } catch (e) {
        console.error({
          target: target,
          scope: scope,
          expressArray: expressArray,
          index: i
        });
        throw e;
      }
    }

    return value;
  }

  var doit1 = function doit1(target, expressArray, scope) {
    // 先消小括号
    // 其实也就是归约小括号
    if (expressArray.indexOf('(') > -1) {
      var newExpressArray = [],
          temp = [],
          // 0表示还没有遇到左边的小括号
      // 1表示遇到了一个，以此类推，遇到一个右边的会减1
      flag = 0;

      for (var i = 0; i < expressArray.length; i++) {
        if (expressArray[i] == '(') {
          if (flag > 0) {
            // 说明这个应该是需要计算的括号里面的括号
            temp.push('(');
          }

          flag += 1;
        } else if (expressArray[i] == ')') {
          if (flag > 1) temp.push(')');
          flag -= 1; // 为0说明主的小括号归约结束了

          if (flag == 0) {
            var _value = evalValue(doit1(target, temp));

            newExpressArray.push(isString(_value) ? _value + '@string' : _value);
            temp = [];
          }
        } else {
          if (flag > 0) temp.push(expressArray[i]);else newExpressArray.push(expressArray[i]);
        }
      }

      expressArray = newExpressArray;
    } // 去掉小括号以后，调用中括号去掉方法


    return doit2(expressArray);
  }; // 中括号嵌套去掉方法


  var doit2 = function doit2(expressArray) {
    var hadMore = true;

    while (hadMore) {
      hadMore = false;
      var newExpressArray = [],
          temp = [],
          // 如果为true表示当前在试探寻找归约最小单元的结束
      flag = false; // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）

      for (var i = 0; i < expressArray.length; i++) {
        // 这说明这是一个需要归约的
        // 不过不一定是最小单元
        // 遇到了，先记下了
        if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
          if (flag) {
            // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
            newExpressArray.push('[');

            for (var j = 0; j < temp.length; j++) {
              newExpressArray.push(temp[j]);
            }
          } else {
            // 如果之前没有遇到，修改标记即可
            flag = true;
          }

          temp = [];
        } // 如果遇到了结束，这说明当前暂存的就是最小归结单元
        // 计算后放回主数组
        else if (expressArray[i] == ']' && flag) {
            hadMore = true; // 计算

            var tempValue = evalValue(temp);
            var _value = newExpressArray[newExpressArray.length - 1][tempValue];
            newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value; // 状态恢复

            flag = false;
          } else {
            if (flag) {
              temp.push(expressArray[i]);
            } else {
              newExpressArray.push(expressArray[i]);
            }
          }
      }

      expressArray = newExpressArray;
    }

    return expressArray;
  }; // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]


  var doit3 = function doit3(expressArray) {
    var newExpressArray = [],
        temp = [];

    for (var i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '[') {
        temp = [];
      } else if (expressArray[i] == ']') {
        newExpressArray.push(evalValue(temp));
      } else {
        temp.push(expressArray[i]);
      }
    }

    return newExpressArray;
  }; // 获取路径数组(核心是归约的思想)


  function toPath(target, expressArray, scope) {
    var newExpressArray = doit1(target, expressArray); // 其实无法就三类
    // 第一类：[express][express][express]express
    // 第二类：express
    // 第三类：[express][express][express]

    var path; // 第二类

    if (newExpressArray[0] != '[') {
      path = [evalValue(newExpressArray)];
    } // 第三类
    else if (newExpressArray[newExpressArray.length - 1] == ']') {
        path = doit3(newExpressArray);
      } // 第一类
      else {
          var lastIndex = newExpressArray.lastIndexOf(']');
          var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
          var tempArray = newExpressArray.slice(lastIndex + 1);
          tempArray.unshift(calcValue(target, tempPath, scope));
          path = [evalValue(tempArray)];
        }

    return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  /**
   * express举例子：
   *
   * [00]  ["a"].b[c]
   * [01]  a
   * [02]  [0]['value-index'][index+1]
   *
   * 如果是getValue,express还可以包含运算符：
   *  + - * / %  数值运算符
   *  && || !    逻辑运算符
   *
   * [03]  flag+10
   * [04]  a.b[index+1]-10
   * [05]  (a+b)/10-c[d]
   * [06]  [((a+b)-c)*f]+d
   *
   * [07]  !flag
   * [08]  (a>0 && b<=1) || !flag
   * [09]  '(flag)' == "("+temp+")"
   * [10]  a>10?"flag1":"flag2"
   *
   */
  // 解析一段表达式

  var evalExpress = function evalExpress(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope); // 如果不是表达式

    if (path.length > 1) throw new Error("Illegal expression : " + express + "\nstep='evalExpress',path=" + path + ",expressArray=" + expressArray);
    return path[0];
  }; // 获取

  var getValue = function getValue(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    return calcValue(target, path, scope);
  }; // 设置

  var setValue = function setValue(target, express, value, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    var _target = target;

    for (var i = 0; i < path.length - 1; i++) {
      // 如果需要补充
      if (!(path[i] in _target)) _target[path[i]] = isArray$1(_target) ? [] : {}; // 拼接下一个

      _target = _target[path[i]];
    }

    _target[path[path.length - 1]] = value;
    return target;
  };

  function toNode(tagname) {
    if (['svg', 'circle', 'path', 'rect', 'ellipse', 'line', 'polyline', 'polygon', 'text'].indexOf(tagname) > -1) {
      return document.createElementNS('http://www.w3.org/2000/svg', tagname);
    } else {
      return document.createElement(tagname);
    }
  }

  function mountComponent(target, Component, module) {
    var component = new Component();
    var hadWillUpdate = false;

    var observeFunction = function observeFunction() {
      if (!hadWillUpdate) {
        hadWillUpdate = true;
        setTimeout(function () {
          if (isFunction(component.$beforeUpdate)) component.$beforeUpdate(); // 触发指令

          var _iterator = _createForOfIteratorHelper(component.__directives),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var directiveInstance = _step.value;

              if (isFunction(directiveInstance.instance.$update)) {
                directiveInstance.instance.$update(directiveInstance.el, {
                  type: directiveInstance.type,
                  exp: directiveInstance.exp,
                  value: directiveInstance.exp ? evalExpress(component, directiveInstance.exp) : undefined,
                  target: component
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (isFunction(component.$updated)) component.$updated();
          hadWillUpdate = false;
        }, 0);
      }
    };

    if (isFunction(component.$setup)) {
      // 获取当前组件需要双向绑定的数据、方法等
      var instance = component.$setup();

      for (var key in instance) {
        isValidKey(key); // ref

        if (instance[key].type == 'ref') {
          watcher(component, instance[key], key, observeFunction);
        } // reactive
        else if (instance[key].type == 'reactive') {
            proxy(component, instance[key], key, observeFunction);
          } // 方法
          else if (isFunction(instance[key])) {
              component[key] = instance[key];
            }
      }
    } // 记录子组件


    component.__children = []; // 记录指令

    component.__directives = [];
    var templateObj = component.__template__;

    (function createElement(index, pEl) {
      var vnode = templateObj[index],
          el = null;

      if (vnode.type == 'tag') {
        // 如果是组件
        if (vnode.name in module.__component__) {
          // 编译子组件并登记
          component.__children.push(mountComponent(pEl, module.__component__[vnode.name], module));
        } // 否则就是普通的标签
        else {
            el = toNode(vnode.name);

            for (var attrKey in vnode.attrs) {
              var attrKeys = (attrKey + ":").split(':'); // 指令

              if (attrKeys[0] in module.__directive__) {
                (function () {
                  var directiveInstance = new module.__directive__[attrKeys[0]]();
                  var type = attrKeys[1];
                  var exp = vnode.attrs[attrKey];

                  if (isFunction(directiveInstance.$inserted)) {
                    setTimeout(function () {
                      directiveInstance.$inserted(el, {
                        type: type,
                        exp: exp,
                        value: exp ? evalExpress(component, exp) : undefined,
                        target: component
                      });
                    });
                  }

                  component.__directives.push({
                    instance: directiveInstance,
                    el: el,
                    type: type,
                    exp: exp
                  });
                })();
              } // 普通属性
              else {
                  el.setAttribute(attrKey, vnode.attrs[attrKey]);
                }
            }

            if (component.__uniqueId__ != null) {
              // 配置唯一标识
              el.setAttribute(component.__uniqueId__, "");
            } // 追加孩子


            var _iterator2 = _createForOfIteratorHelper(vnode.childNodes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subVnode = _step2.value;
                createElement(subVnode, el);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
      } else if (vnode.type == 'text') {
        el = document.createTextNode("");
        el.textContent = vnode.content.replace(/↵/g, '\n') // 特殊转义字符进行校对
        .replace(/\&lt;/g, '<').replace(/\&gt;/g, '>').replace(/\&amp;/g, '&');
      }

      if (el != null) {
        // 追加到父亲结点
        pEl.appendChild(el);
      }
    })(0, target);

    if (isFunction(component.$mounted)) component.$mounted();
    return component;
  }

  function platform (options) {
    // 样式生效
    addStylesClient(options.styles || []); // 记录根组件

    var rootComponent = null;
    return {
      bootstrap: function bootstrap(Module) {
        var module = new Module(); // 在所有的指令和组件中登记所在模块

        var allList = _objectSpread2(_objectSpread2({}, module.__component__), module.__directive__);

        for (var key in allList) {
          allList[key].prototype._module = module;
        } // 通过启动组件，启动


        rootComponent = mountComponent(options.el, module.__bootstrapComponent__, module);
        return {
          // 根组件
          rootComponent: rootComponent,
          // 当前模块对象
          module: module
        };
      }
    };
  }

  function ref (data) {
    // 如果是定义的数据，不好监听，嵌套一层壳
    return {
      value: data,
      type: 'ref'
    };
  }

  function reactive (data) {
    // 如果是对象
    if (isObject(data)) {
      return {
        value: data,
        type: 'reactive'
      };
    } // 否则，还是用ref
    else {
        return ref(data);
      }
  }

  /**
   * 整理好对象并对外暴露调用接口
   */

  var Nefbl = {
    // 装饰器
    Module: Module,
    Component: Component,
    Directive: Directive,
    // 核心方法
    platform: platform,
    mountComponent: mountComponent,
    evalExpress: evalExpress,
    getValue: getValue,
    setValue: setValue,
    // 暴露的一些有用的方法
    ref: ref,
    reactive: reactive
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Nefbl;
  } else {
    window.Nefbl = Nefbl;
  }

}());


        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n body{\n\nbackground-color: aliceblue;\n\n}\n\n .hover{\n\nposition: absolute;\n\nleft: 0;\n\ntop: 0;\n\nbackground-color: #ffffffda;\n\nborder-radius: 5px;\n\npadding: 5px 10px;\n\nfont-size: 12px;\n\nline-height: 1.6em;\n\ncolor: rgb(0, 0, 0);\n\nbox-shadow: 0 0 10px 0 grey;\n\nwidth: 300px;\n\npointer-events: none;\n\n}\n\n .hover[show='no']{\n\ndisplay: none;\n\n}\n\n .hover>h2{\n\nfont-size: inherit;\n\n}\n\n .hover>ul>li{\n\ndisplay: inline-block;\n\nwidth: 50%;\n\n}\n\n .hover>ul>li::before{\n\ncontent: \"◆\";\n\nmargin-right: 5px;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('17');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('15');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('16');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('16');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.module.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Module=__etcpack__scope_args__.Module;
 // 组件

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var AppComponent =__etcpack__scope_args__.default;
 // 指令

__etcpack__scope_args__=window.__etcpack__getBundle('28');
var uiBind =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('29');
var uiModel =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('31');
var uiOn =__etcpack__scope_args__.default;


var _class = (_dec = Module({
  declarations: [AppComponent, uiBind, uiModel, uiOn],
  imports: [],
  exports: [],
  bootstrap: AppComponent
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;
var ref=__etcpack__scope_args__.ref;

__etcpack__scope_args__=window.__etcpack__getBundle('20');
var xhr =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('21');
var Clunch =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var map =__etcpack__scope_args__.default;

Clunch.series('ui-map', map);
__etcpack__scope_args__=window.__etcpack__getBundle('24');
var chinaGeoJSON =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('25');
var image =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('26');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('27');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "app-root",
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "process", void 0);

    _defineProperty(this, "hadLoad", void 0);

    _defineProperty(this, "flag", void 0);

    _defineProperty(this, "left", void 0);

    _defineProperty(this, "top", void 0);

    _defineProperty(this, "title", void 0);
  }

  _createClass(_class2, [{
    key: "$setup",
    value: function $setup() {
      return {
        process: ref(0),
        hadLoad: ref(true),
        flag: ref(false),
        left: ref(0),
        top: ref(0),
        title: ref('')
      };
    }
  }, {
    key: "evalCallback",
    value: function evalCallback(_data, callback) {
      var chinaData = {};

      for (var i = 0; i < _data.results.length; i++) {
        if (_data.results[i].countryEnglishName == 'China') {
          chinaData[_data.results[i].provinceShortName] = _data.results[i];
        }
      }

      callback({
        chinaData: chinaData
      });
    }
  }, {
    key: "getData",
    value: function getData(callback) {
      var _this = this;

      var data = sessionStorage.getItem("covid-19/area");

      if (data) {
        this.evalCallback(JSON.parse(data), callback);
        return;
      }

      this.hadLoad = false;
      xhr({
        method: "GET",
        url: "https://lab.isaaclin.cn/nCoV/api/area",
        timeout: 60000,
        xhr: function xhr() {
          var xmlhttp = new XMLHttpRequest();

          xmlhttp.onprogress = function (data) {
            _this.process = +(data.loaded / data.total * 100).toFixed(2);
          };

          return xmlhttp;
        }
      }, function (data) {
        _this.hadLoad = true;

        _this.evalCallback(JSON.parse(data.data), callback);

        sessionStorage.setItem("covid-19/area", data.data);
      }, function (error) {
        // 错误回调
        console.error(error);
        alert('载入出错，请刷新浏览器重试~');
      });
    }
  }, {
    key: "$mounted",
    value: function $mounted() {
      var _this2 = this;

      this.getData(function (data) {
        new Clunch({
          el: document.getElementById('map'),
          render: image,
          data: function data() {
            return {
              chinaGeoJSON: chinaGeoJSON,
              hoverData: {
                flag: false
              }
            };
          },
          methods: {
            calcColor: function calcColor(properties) {
              var count = data.chinaData[properties.name].currentConfirmedCount;

              if (count >= 10000) {
                return "#7a361f";
              } else if (count >= 1000) {
                return "#c95539";
              } else if (count >= 500) {
                return "#f77649";
              } else if (count >= 100) {
                return "#f8a077";
              } else if (count >= 10) {
                return "#f9c8b1";
              } else if (count >= 1) {
                return "#f5e6de";
              } else {
                return "white";
              }
            }
          }
        }).$bind('mousemove', function (target) {
          if (target.region) {
            var _title = target.data.properties.name;
            var curData = data.chinaData[_title]; // 右边有空余的地方就右边显示，不然去左边

            _this2.left = target.left > window.innerWidth * 0.5 ? target.left - 310 : target.left + 10;
            _this2.top = target.top - curData.cities.length * 5;

            if (_this2.title != _title) {
              _this2.title = _title;
              var _template = '';

              var _iterator = _createForOfIteratorHelper(curData.cities),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var city = _step.value;
                  _template += "<li>".concat(city.cityName, " : ").concat(city.currentConfirmedCount, "</li>");
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              document.getElementById('hover-list').innerHTML = _template;
            }

            _this2.flag = true;
          } else {
            _this2.flag = false;
          }
        });
      });
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/xhr/dist/xhr.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * xhr.js - General purpose HTTP / HTTPS client. Supports transparent gzip / deflate decoding.
 * git+https://github.com/hai2007/xhr.js.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.2
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Fri May 21 2021 10:10:06 GMT+0800 (GMT+08:00)
 */
(function(){"use strict";function n(t){var e=typeof t;return t!=null&&(e==="object"||e==="function")}var e=Object.prototype.toString;function r(t){if(t==null){return t===undefined?"[object Undefined]":"[object Null]"}return e.call(t)}function t(t){var e=typeof t;return e==="string"||e==="object"&&t!=null&&!Array.isArray(t)&&r(t)==="[object String]"}function o(t){if(!n(t)){return false}var e=r(t);return e==="[object Function]"||e==="[object AsyncFunction]"||e==="[object GeneratorFunction]"||e==="[object Proxy]"}function u(t){if(t===null||typeof t!=="object"||r(t)!="[object Object]"){return false}if(Object.getPrototypeOf(t)===null){return true}var e=t;while(Object.getPrototypeOf(e)!==null){e=Object.getPrototypeOf(e)}return Object.getPrototypeOf(t)===e}var i=function(t){return t===undefined};var f=t;var a=o;var c=u;function s(t){if(f(t)){return t}else if(c(t)){return JSON.stringify(t)}else if(i(t)){return""}else{return t}}var l=function(t,e,n){var r;if(a(t.xhr)){r=t.xhr()}else{r=new XMLHttpRequest}r.onload=function(){if(r.readyState==4){e({status:r.status,data:r.responseText})}};r.ontimeout=function(){n({status:r.status,data:"请求超时了"})};r.onerror=function(){n({status:r.status,data:r.responseText})};r.open(t.method,t.url,true);for(var o in t.header){r.setRequestHeader(o,t.header[o])}r.timeout="timeout"in t?t.timeout:6e3;r.send(s(t.data))};if(typeof module==="object"&&typeof module.exports==="object"){module.exports=l}else{window.xhr=l}})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/clunch/dist/clunch.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * clunch.js - 🎨 The Progressive JavaScript Interactive Picture Framework.
 * git+https://github.com/hai2007/clunch.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 2.3.5
 *
 * Copyright (c) 2018-2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sun Dec 12 2021 18:51:19 GMT+0800 (GMT+08:00)
 */
(function(){"use strict";function n(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){n=function(e){return typeof e}}else{n=function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return n(e)}function p(e){return t(e)||r(e)||i(e)||o()}function t(e){if(Array.isArray(e))return a(e)}function r(e){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function i(e,t){if(!e)return;if(typeof e==="string")return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}function a(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){var t=n(e);return e!=null&&(t==="object"||t==="function")}var l=Object.prototype.toString;function u(e){if(e==null){return e===undefined?"[object Undefined]":"[object Null]"}return l.call(e)}function e(e){return typeof e==="number"||e!==null&&n(e)==="object"&&u(e)==="[object Number]"}function f(e){var t=n(e);return t==="string"||t==="object"&&e!=null&&!Array.isArray(e)&&u(e)==="[object String]"}function c(e){if(!s(e)){return false}var t=u(e);return t==="[object Function]"||t==="[object AsyncFunction]"||t==="[object GeneratorFunction]"||t==="[object Proxy]"}function h(e){if(e===null||n(e)!=="object"||u(e)!="[object Object]"){return false}if(Object.getPrototypeOf(e)===null){return true}var t=e;while(Object.getPrototypeOf(t)!==null){t=Object.getPrototypeOf(t)}return Object.getPrototypeOf(e)===t}var d=function e(t,r){return r!==null&&n(r)==="object"&&t.indexOf(r.nodeType)>-1&&!h(r)};var A=e;var $=f;var x=c;var S=function e(t){return Array.isArray(t)};var v=function e(t){return d([1,9,11],t)};var g=[];var _=13;var y=400;var b=null;function m(t,e,r){if(arguments.length<2)e=y;var l={timer:function e(t,r,n){if(!t){throw new Error("Tick is required!")}var i=(new Date).valueOf()+"_"+(Math.random()*1e3).toFixed(0);g.push({id:i,createTime:new Date,tick:t,duration:r,callback:n});l.start();return i},start:function e(){if(!b){b=setInterval(l.tick,_)}},tick:function e(){var t,r,e,n,i,a,o,s=g;g=[];g.length=0;for(r=0;r<s.length;r++){i=s[r];t=i.createTime;e=i.tick;a=i.duration;n=i.callback;o=(+new Date-t)/a;o=o>1?1:o;e(o);if(o<1&&i.id){g.push(i)}else if(n){n(o)}}if(g.length<=0){l.stop()}},stop:function e(){if(b){clearInterval(b);b=null}}};var n=l.timer(function(e){t(e)},e,r);return function(){var e;for(e in g){if(g[e].id==n){g[e].id=undefined;return}}}}var w=function e(t,r){for(var n in r){try{t[n]=r[n]}catch(e){throw new Error("Illegal property value！")}}return t};var k={whitespace:"[\\x20\\t\\r\\n\\f]"};var T=function e(t){if(/^[_$]/.test(t)){console.warn("The beginning of _ or $ is not allowed："+t)}};function M(e,t){for(var r in t){try{e[r]=t[r]}catch(e){throw new Error("Illegal property value！")}}return e}function O(l){l=M({u:.5},l);var u,f,c;var h=function e(t){if(u){var r=(t-f)/(c-f),n=r*r,i=r*n;var a=i*u[0]+n*u[1]+r*u[2]+u[3];return a*(c-f)}else throw new Error("You shoud first set the position!")};h.setP=function(e,t,r,n,i,a){if(e<r){f=e;c=r;var o=l.u*i,s=l.u*a;t/=r-e;n/=r-e;u=[2*t-2*n+o+s,3*n-3*t-2*o-s,o,t]}else throw new Error("The point x-position should be increamented!");return h};return h}function z(i){i=w({t:0},i);var a,r;var o=function e(t){if(a){r=-1;while(r+1<a.x.length&&(t>a.x[r+1]||r==-1&&t>=a.x[r+1])){r+=1}if(r==-1||r>=a.h.length)throw new Error("Coordinate crossing!");return a.h[r](t)}else{throw new Error("You shoud first set the position!")}};o.setT=function(e){if(typeof e==="number"){i.t=e}else{throw new Error("Expecting a figure!")}return o};o.setP=function(e){a={x:[],h:[]};var t,r=(e[1][1]-e[0][1])/(e[1][0]-e[0][0]),n;a.x[0]=e[0][0];for(t=1;t<e.length;t++){if(e[t][0]<=e[t-1][0])throw new Error("The point position should be increamented!");a.x[t]=e[t][0];n=t<e.length-1?(e[t+1][1]-e[t-1][1])/(e[t+1][0]-e[t-1][0]):(e[t][1]-e[t-1][1])/(e[t][0]-e[t-1][0]);a.h[t-1]=O({u:(1-i.t)*.5}).setP(e[t-1][0],e[t-1][1],e[t][0],e[t][1],r,n);r=n}return o};return o}function P(e,t){var r=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return $(t)?r.getPropertyValue(t):r}var R=function e(t){var r=document.getElementsByTagName("head")[0];r.style["color"]=t;var n=P(r,"color");var i=n.replace(/^rgba?\(([^)]+)\)$/,"$1").split(new RegExp("\\,"+k.whitespace));return[+i[0],+i[1],+i[2],i[3]==undefined?1:+i[3]]};var I=function e(t,r){if(!(r&&r>=0&&r<=1))r=1;var n=[];for(var i=1;i<=t;i++){n.push("rgba("+(Math.random()*230+20).toFixed(0)+","+(Math.random()*230+20).toFixed(0)+","+(Math.random()*230+20).toFixed(0)+","+r+")")}return n};var E=function e(t,r){if(!(r&&r>=0&&r<=1))r=1;var n=["rgba(84,112,198,"+r+")","rgba(145,204,117,"+r+")","rgba(250,200,88,"+r+")","rgba(238,102,102,"+r+")","rgba(115,192,222,"+r+")","rgba(59,162,114,"+r+")","rgba(252,132,82,"+r+")","rgba(154,96,180,"+r+")","rgba(234,124,204,"+r+")"];var i=[];if(t<=n.length){return n}else{if(t%n.length==0){for(var a=0;a<t/n.length;a++){i=i.concat(n)}}else{for(var o=1;o<t/n.length;o++){i=i.concat(n)}if(t%n.length==1){i=i.concat(n[4])}else{for(var s=0;s<t%n.length;s++){i=i.concat(n[s])}}}}return i};function C(e){var u=e||{},f,n;var i=function e(){var o=[],s=0,l=0;(function e(t,r){if(r>l)l=r;var n;for(n=0;n<t.children.length;n++){e(f[t.children[n]],r+1)}f[t.id].left=r+.5;if(n==0){if(o[r]==undefined)o[r]=-.5;if(o[r-1]==undefined)o[r-1]=-.5;f[t.id].top=o[r]+1;var i=o[r]+1+(f[t.pid].children.length-1)*.5;if(i-1<o[r-1])f[t.id].top=o[r-1]+1-(f[t.pid].children.length-1)*.5}else{f[t.id].top=(f[t.children[0]].top+f[t.children[n-1]].top)*.5}if(f[t.id].top<=o[r]){var a=o[r]+1-f[t.id].top;(function e(t,r){f[t].top+=a;if(o[r]<f[t].top)o[r]=f[t].top;var n;for(n=0;n<f[t].children.length;n++){e(f[t].children[n],r+1)}})(t.id,r)}o[r]=f[t.id].top;if(f[t.id].top+.5>s)s=f[t.id].top+.5})(f[n],0);return{node:f,root:n,size:s,deep:l+1}};var a=function e(a){var o={};var t=u.root(a),s,r;s=r=u.id(t);o[s]={data:t,pid:null,id:s,children:[]};var l=1;(function e(t,r){var n=u.child(t,a),i;l+=n?n.length:0;for(i=0;n&&i<n.length;i++){s=u.id(n[i]);o[r].children.push(s);o[s]={data:n[i],pid:r,id:s,children:[]};e(n[i],s)}})(t,s);return{value:[r,o],num:l}};var t=function e(t){var r=a(t);f=r.value[1];n=r.value[0];if(r.num==1){f[n].left=.5;f[n].top=.5;return{deep:1,node:f,root:n,size:1}}return i()};t.root=function(e){u.root=e;return t};t.child=function(e){u.child=e;return t};t.id=function(e){u.id=e;return t};return t}var j=function e(t,r,n,i,a){var o=Math.cos(n),s=Math.sin(n);return[+((i-t)*o-(a-r)*s+t).toFixed(7),+((i-t)*s+(a-r)*o+r).toFixed(7)]};var W=function e(t,r,n,i,a){var o=Math.sqrt(t*t+r*r);return[+(t*n/o+i).toFixed(7),+(r*n/o+a).toFixed(7)]};var D=function e(t,r,n,i,a){return[+(n*(i-t)+t).toFixed(7),+(n*(a-r)+r).toFixed(7)]};var N=function e(a){a=w({d:[1,1],c:[0,0],p:[0,0]},a);var o={rotate:function e(t){var r=a.d[0]+a.p[0],n=a.d[1]+a.p[1];var i=j(a.p[0],a.p[1],t,r,n);a.d=[i[0]-a.p[0],i[1]-a.p[1]];return o},move:function e(t){a.p=W(a.d[0],a.d[1],t,a.p[0],a.p[1]);return o},scale:function e(t){a.p=D(a.c[0],a.c[1],t,a.p[0],a.p[1]);return o},value:function e(){return a.p}};return o};function B(b){b=w({"begin-deg":0,deg:Math.PI*2},b);var m=C().root(b.root).child(b.child).id(b.id);var t=function e(t){var r=m(t);for(var n in r.node){r.node[n].deep=r.node[n].left-.5}if(b.type==="LR"||b.type==="RL"){var i=b.width/r.deep;if("RL"===b.type)i*=-1;var a=b.height/(r.size- -.5);for(var o in r.node){var s=r.node[o];r.node[o].left=+(("RL"==b.type?b.width:0)- -s.left*i).toFixed(7);r.node[o].top=+(s.top*a).toFixed(7)}}else if(b.type==="TB"||b.type==="BT"){var l=b.height/r.deep;if("BT"==b.type)l*=-1;var u=b.width/(r.size- -.5);var f,c;for(var h in r.node){var d=r.node[h];f=d.left;c=d.top;r.node[h].top=+(("BT"==b.type?b.height:0)- -f*l).toFixed(7);r.node[h].left=+(c*u).toFixed(7)}}else if(b.type==="circle"){if(r.deep==1&&r.size==1){r.node[r.root].left=b.cx;r.node[r.root].top=b.cy}else{var v=b.radius/(r.deep-1);var p=b.deg/(r.size- -.5);for(var g in r.node){var _=r.node[g];r.node[g].deg=(b["begin-deg"]- -p*_.top)%(Math.PI*2);var y=j(b.cx,b.cy,r.node[g].deg,b.cx- -v*(_.left-.5),b.cy);r.node[g].left=+y[0];r.node[g].top=+y[1]}}}if(x(b.drawer)){b.drawer(r);return e}else{return r}};t.config=function(e){b=w(b,e);return t};t.drawer=function(e){b.drawer=e;return t};return t}var F=function e(t,r,n,i){var a=Math.cos(t),o=Math.sin(t);return[r,n*a-i*o,n*o+i*a]},L=function e(t,r,n,i){var a=Math.cos(t),o=Math.sin(t);return[i*o+r*a,n,i*a-r*o]},U=function e(t,r,n,i){var a=Math.cos(t),o=Math.sin(t);return[r*a-n*o,r*o+n*a,i]};var q=[];function J(e,t,r){q=L((360-r)/180*Math.PI,100*e.scale,0,0);q=U(t/180*Math.PI,q[0],q[1],q[2]);q=U((90-e.center[0])/180*Math.PI,q[0],q[1],q[2]);q=F((90-e.center[1])/180*Math.PI,q[0],q[1],q[2]);return[-q[0],q[1],q[2]]}function V(e){var n=w({type:"eoap",scale:1,center:[107,36]},e);var t=function e(t,r){if(n.type=="eoap"){return J(n,t,r)}else{throw new Error("Map type configuration error!")}};t.config=function(e){n=w(n,e);return t};return t}function G(e,t,r){if(e<t){var n=t;t=e;e=n}else if(e==t){return[e]}var i=(e+".").split(".")[1].length;var a=(t+".").split(".")[1].length;var o=i>a?i:a;var s=function(e){var t=e<100&&e>-100?10:.1;var r=1,n=e;while(t==10?n>=-100&&n<=100:n<=-100||n>=100){r*=t;n*=t}return r}(e-t);var l=+(Math.ceil((e-t)*s/r)/s).toFixed(o);if(l<=0)return[t,e];var u=Math.floor(t/l)*l;var f=[],c;f.push(u);for(c=1;f[f.length-1]<e;c++){f.push(+(u+l*c).toFixed(o))}f[0]=+u.toFixed(o);var h=[f[0]];for(var d=1;d<f.length;d++){if(h[h.length-1]!=f[d]){h.push(f[d])}}return h}function Z(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:5;var n=G(e,t,r);return{min:n[0],max:n[n.length-1],distance:n.length<=1?0:n[1]-n[0],num:n.length-1,ruler:n}}function H(i){var t=[];var e=function e(n){if(["boolean","number","json","string","color","any"].indexOf(i[n])>-1){t.unshift(function(t){var r=arguments.length>0?false:true;return function(e){return{type:i[n],required:r,animation:e,default:t}}})}else{t.unshift({$animation:m,$cardinal:z,$formatColor:R,$getRandomColors:I,$tree:B,$dot:N,$rotate:j,$move:W,$scale:D,$map:V,$getLoopColors:E,$ruler:Z}[i[n]])}};for(var r=i.length-2;r>=0;r--){e(r)}return i[i.length-1].apply(this,t)}function Y(t){var r={index:-1,currentChar:null};r.readNext=function(){r.currentChar=r.index++<t.length-1?t[r.index]:null;return r.currentChar};r.getNextN=function(e){return t.substring(r.index,e+r.index>t.length?t.length:e+r.index)};return r}var X=Y;function K(e){e=e.trim();var t=X(e);var r=[];var n="";t.readNext();var i=function e(){n=n.trim();if(n!=""){r.push({type:"normal",value:n})}n=""};while(true){if(t.index>=e.length)break;if(t.getNextN(2)=="//"){while(!/\n/.test(t.readNext())&&t.index<e.length){}}else if(t.getNextN(2)=="/*"){while(t.getNextN(2)!="*/"){if(t.index>=e.length){throw new Error("Multiline comment not closed correctly : "+e+"\nstep='analyseWord-searchEndComment'")}t.readNext()}t.readNext();t.readNext()}else if(["{","}",",","[","]",":"].indexOf(t.currentChar)>-1){i();r.push({type:"insign",value:t.currentChar});t.readNext()}else if(['"',"'"].indexOf(t.currentChar)>-1){var a="";while(['"',"'"].indexOf(t.readNext())<0){if(t.index>=e.length){throw new Error("The string is not closed correctly : "+e+"\nstep='analyseWord-searchString',currentStrWord="+a)}a+=t.currentChar}t.readNext();r.push({type:"string",value:a})}else{n+=t.currentChar;t.readNext()}}return r}var Q=function e(t){if(t.type!="string"&&t.type!="object"){if(/[+-]{0,1}\d{1,}\.{0,1}\d{0,}/.test(t.value)){return+t.value}else if(t.value=="undefined"){return undefined}else if(t.value=="null"){return null}else if(t.value=="false"){return false}else if(t.value=="true"){return true}}return t.value};function ee(e){var t,r;if(e[0].value=="{"){t={};for(r=3;r<e.length;r+=4){t[e[r-2].value]=Q(e[r])}}else{t=[];for(r=2;r<e.length;r+=2){t.push(Q(e[r-1]))}}return{type:"object",value:t}}var te=function e(t){if($(t)){var r=K(t);var n=r.length-1,i;while(r.length>1){while(n>=0&&(r[n].type!="insign"||["{","["].indexOf(r[n].value)<0)){n=n-1}if(n<0){throw new Error("Illegal express : "+t+"\nstep='toOne-searchBeginIndex',wordArray="+r)}i=n+1;var a=[r[n]];while(i<r.length&&(r[i].type!="insign"||r[i].value!={"{":"}","[":"]"}[r[n].value])){a.push(r[i]);i=i+1}if(i>=r.length){throw new Error("Illegal express : "+t+"\nstep='toOne-searchEndIndex',wordArray="+r)}else{a.push(r[i]);r[n]=ee(a);r.splice(n+1,i-n)}}return r[0].value}else{throw new Error("The data passed is not a string.")}};var re=function e(t,r){switch(t){case"boolean":{return r=="false"||r==false?false:true}case"number":{if(/deg$/.test(r))return(0- -r.replace(/deg$/,""))/180*Math.PI;if(/pi$/.test(r))return(0- -r.replace(/pi$/,""))*Math.PI;if($(r))return+r;return r}case"json":{if($(r)){return te(r.replace(/\&quot;/g,""))}return r}}return r};function ne(e,x){e=JSON.parse(JSON.stringify(e));var w=0;return function e(t,r){var n=[];for(var i=0;i<t.length;i++){var a=t[i];if(r||a.name in x){var o={name:a.name,attrs:{},events:[],scope:{},index:w++};var s=r?{attrs:x[r].subAttrs[a.name]}:x[a.name];for(var l in a.attrs){if(/^c\-bind\:/.test(l)||/^\:/.test(l)){a.attrs[l.replace(/^(?:c\-bind){0,1}\:/,"")]={isBind:true,express:a.attrs[l]};delete a.attrs[l]}else if(/^c\-on\:/.test(l)){var u=(l.replace(/^c\-on\:/,"")+"@default").split("@");o.events.push({event:u[0],region:u[1],method:a.attrs[l]})}else if("c-for"==l){var f=/^ {0,}\(/.test(a.attrs[l]);var c=f?/^ {0,}\( {0,}([0-9a-zA-Z_$]+) {0,}, {0,}([0-9a-zA-Z_$]+) {0,}\) {1,}in {1,}([^ ]+) {0,}$/.exec(a.attrs[l]):/^ {0,}([0-9a-zA-Z_$]+) {1,}in {1,}([^ ]+) {0,}$/.exec(a.attrs[l]);o["c-for"]={key:f?c[2]:null,value:c[1],data:f?c[3]:c[2]};if(/^\d{1,}$/.test(o["c-for"].data)){var h=+o["c-for"].data;o["c-for"].data=[];for(var d=0;d<h;d++){o["c-for"].data.push(d)}}}else if("c-if"==l){o["c-if"]=a.attrs[l]}else{a.attrs[l]={isBind:false,express:a.attrs[l]}}}for(var v in a.attrs){if(/^c\-/.test(v));else if(v=="_id"){o._id=a.attrs._id}else if(v=="_animation"){o._animation=a.attrs._animation}else if(!(v in s.attrs)){console.warn("attrs."+v+" is not defined for "+(r?r+" > "+a.name:a.name)+"!")}}for(var p in s.attrs){var g=s.attrs[p];if(g.required&&!(p in a.attrs)){throw new Error("attrs."+p+" is required for "+(r?r+" > "+a.name:a.name)+"!")}o.attrs[p]={animation:g.animation,type:g.type,value:p in a.attrs?a.attrs[p]:{isBind:false,express:g["default"]}};if(!o.attrs[p].value.isBind){o.attrs[p].value.express=re(o.attrs[p].type,o.attrs[p].value.express)}}var _=[],y=[],b=[];if(a.children){for(var m=0;m<a.children.length;m++){if($(a.children[m])){b.push(a.children[m])}else if(s.subAttrs&&a.children[m].name in s.subAttrs){y.push(a.children[m])}else{_.push(a.children[m])}}}o.children=e(_);o.subAttrs=e(y,a.name);o.text=b;n.push(o)}else{console.warn("Series "+a.name+" is not defined!")}}return n}(e)}var ie=function e(t,r,n,i,a){var o=Math.cos(n),s=Math.sin(n);return[+((i-t)*o-(a-r)*s+t).toFixed(7),+((i-t)*s+(a-r)*o+r).toFixed(7)]};function ae(e,t,r,n,i,a,o){if(t<0){e+=t;t*=-1}var s=[],l;l=ie(0,0,e,i,0);s[0]=l[0];s[1]=l[1];l=ie(0,0,t,l[0],l[1]);s[2]=l[0];s[3]=l[1];l=ie(0,0,e,a,0);s[4]=l[0];s[5]=l[1];l=ie(0,0,t,l[0],l[1]);s[6]=l[0];s[7]=l[1];o(e,e+t,s[0]+r,s[1]+n,s[4]+r,s[5]+n,s[2]+r,s[3]+n,s[6]+r,s[7]+n,(a-i)*.5)}var oe={fillStyle:"black",strokeStyle:"black",lineWidth:1,textAlign:"left",textBaseline:"middle","font-size":16,"font-family":"sans-serif","arc-start-cap":"butt","arc-end-cap":"butt",lineDash:[],shadowBlur:0,shadowColor:"black"};var se=function e(t,r,n,i,a,o){t.beginPath();t.translate(n,i);t.rotate(a);if(o!="default"){t.setFontSize(r["font-size"])}else{t.font=r["font-size"]+"px "+r["font-family"]}return t};var le=function e(c,h,d,v,p,g,t,r){if(p>g){var n=p;p=g;g=n}t=t%(Math.PI*2);if(r>=Math.PI*1.999999||r<=-Math.PI*1.999999){r=Math.PI*2}else{r=r%(Math.PI*2)}ae(t,r,d,v,p,g,function(e,t,r,n,i,a,o,s,l,u,f){if(f<0)f=-f;c.beginPath();c.moveTo(r,n);c.arc(d,v,p,e,t,false);if(h["arc-end-cap"]=="round")c.arc((o+l)*.5,(s+u)*.5,f,t-Math.PI,t,true);else if(h["arc-end-cap"]=="-round")c.arc((o+l)*.5,(s+u)*.5,f,t-Math.PI,t,false);else c.lineTo(l,u);c.arc(d,v,g,t,e,true);if(h["arc-start-cap"]=="round")c.arc((r+i)*.5,(n+a)*.5,f,e,e-Math.PI,true);else if(h["arc-start-cap"]=="-round")c.arc((r+i)*.5,(n+a)*.5,f,e,e-Math.PI,false);else c.lineTo(r,n)});if(h["arc-start-cap"]=="butt")c.closePath();return c};var ue=function e(t,r,n,i){t.beginPath();t.moveTo(r+i,n);t.arc(r,n,i,0,Math.PI*2);return t};var fe=function e(t,r,n,i,a){t.beginPath();t.rect(r,n,i,a);return t};var ce=function e(t,r,n,i,a){var o=t.createLinearGradient(r,n,i,a);var s={value:function e(){return o},addColorStop:function e(t,r){o.addColorStop(t,r);return s}};return s};var he=function e(t,r,n,i){var a=t.createRadialGradient(r,n,0,r,n,i);var o={value:function e(){return a},addColorStop:function e(t,r){a.addColorStop(t,r);return o}};return o};var de={};function ve(a,t,f,c){var h;if(a!="default"){h=t.painter}else{h=t.getContext("2d");t.style.width=f+"px";t.style.height=c+"px";t.setAttribute("width",f*2);t.setAttribute("height",c*2);h.scale(2,2)}var s={};var r=a=="uni-app"?function(t,e){if(["font-size","font-family","arc-start-cap","arc-end-cap"].indexOf(t)>-1){s[t]=e}else{try{h["set"+t[0].toUpperCase()+t.substr(1)](e)}catch(e){if(!de[a]){de[a]={}}if(!de[a][t]){de[a][t]=true;console.warn("Clunch内置画笔的"+t+"属性在"+a+"平台上不支持！")}}}}:function(t,e){if(t=="lineDash"){try{h.setLineDash(e)}catch(e){if(!de[a]){de[a]={}}if(!de[a][t]){de[a][t]=true;console.warn("Clunch内置画笔的"+t+"属性在"+a+"平台上不支持！")}}}else if(["font-size","font-family","arc-start-cap","arc-end-cap"].indexOf(t)>-1){s[t]=e}else if(t in oe){h[t]=e}else{throw new Error("Illegal configuration item of painter : "+t+" !")}};var d={config:function e(){if(arguments.length===1){if(n(arguments[0])!=="object")return h[arguments[0]];for(var t in arguments[0]){r(t,arguments[0][t])}}else if(arguments.length===2){r(arguments[0],arguments[1])}return d},fillText:function e(t,r,n,i){h.save();se(h,s,r,n,i||0,a).fillText(t,0,0);h.restore();return d},strokeText:function e(t,r,n,i){h.save();se(h,s,r,n,i||0,a).strokeText(t,0,0);h.restore();return d},fullText:function e(t,r,n,i){h.save();se(h,s,r,n,i||0,a);h.fillText(t,0,0);h.strokeText(t,0,0);h.restore();return d},beginPath:function e(){h.beginPath();return d},closePath:function e(){h.closePath();return d},moveTo:function e(t,r){h.moveTo(t,r);return d},lineTo:function e(t,r){h.lineTo(t,r);return d},arc:function e(t,r,n,i,a){h.arc(t,r,n,i,i+a,a<0);return d},fill:function e(){h.fill();return d},stroke:function e(){h.stroke();return d},full:function e(){h.fill();h.stroke();return d},save:function e(){h.save();return d},restore:function e(){h.restore();return d},quadraticCurveTo:function e(t,r,n,i){h.quadraticCurveTo(t,r,n,i);return d},bezierCurveTo:function e(t,r,n,i,a,o){h.bezierCurveTo(t,r,n,i,a,o);return d},clearRect:function e(t,r,n,i){h.clearRect(t||0,r||0,n||f,i||c);return d},toDataURL:function e(){return t.toDataURL()},drawImage:function e(t,r,n,i,a,o,s,l,u){r=r||0;n=n||0;o=o||0;s=s||0;l=l?l*2:f*2;u=u?u*2:c*2;if(t.nodeName=="CANVAS"){l=l/2;u=u/2;i=i?i*2:f*2;a=a?a*2:c*2}else{i=(i||t.width)*2;a=(a||t.height)*2}h.drawImage(t,r,n,i,a,o,s,l,u);return d},fillArc:function e(t,r,n,i,a,o){le(h,s,t,r,n,i,a,o).fill();return d},strokeArc:function e(t,r,n,i,a,o){le(h,s,t,r,n,i,a,o).stroke();return d},fullArc:function e(t,r,n,i,a,o){le(h,s,t,r,n,i,a,o);h.fill();h.stroke();return d},fillCircle:function e(t,r,n){ue(h,t,r,n).fill();return d},strokeCircle:function e(t,r,n){ue(h,t,r,n).stroke();return d},fullCircle:function e(t,r,n){ue(h,t,r,n);h.fill();h.stroke();return d},fillRect:function e(t,r,n,i){fe(h,t,r,n,i).fill();return d},strokeRect:function e(t,r,n,i){fe(h,t,r,n,i).stroke();return d},fullRect:function e(t,r,n,i){fe(h,t,r,n,i);h.fill();h.stroke();return d},createLinearGradient:function e(t,r,n,i){return ce(h,t,r,n,i)},createRadialGradient:function e(t,r,n){return he(h,t,r,n)}};return d}function pe(e,t,r){if(window.attachEvent){e.attachEvent("on"+t,r)}else{e.addEventListener(t,r,false)}}var ge=function e(t,r){if(r.type=="result")return{x:r.position.left,y:r.position.top};var n=t.getBoundingClientRect();return{x:r.clientX-n.left,y:r.clientY-n.top}};function _e(o,n){var i=1,a=1;var s={},l={},u=[0,0,0],f="r";var c,h;if(o._platform=="default"){c=document.createElement("canvas");h=ve(o._platform,c,1,1)}else{c=n.region;h=ve(o._platform,{painter:n.region},n.width,n.height);i=n.width;a=n.height}return{draw:function e(){c.draw()},erase:function e(){h.config({fillStyle:"rgb(255,255,255)"}).fillRect(0,0,i,a)},updateSize:function e(t,r){i=t;a=r;if(o._platform=="default"){h=ve(o._platform,c,t,r)}else{h=ve(o._platform,{painter:n.region},t,r)}},painter:function e(t,r){if(s[t]==undefined){s[t]={r:function e(){u[0]+=1;f="g";return"rgb("+u[0]+","+u[1]+","+u[2]+")"},g:function e(){u[1]+=1;f="b";return"rgb("+u[0]+","+u[1]+","+u[2]+")"},b:function e(){u[2]+=1;f="r";return"rgb("+u[0]+","+u[1]+","+u[2]+")"}}[f]()}l[t]=r;h.config(oe).config({fillStyle:s[t],strokeStyle:s[t]});return h},getRegion:function e(t,r){var n=ge(o.__canvas,t),i;var a=function e(){for(var t in s){if("rgb("+i[0]+","+i[1]+","+i[2]+")"==s[t]){r([t,n.x,n.y,l[t]]);return}}r([null,n.x,n.y,undefined])};if(o._platform=="default"){n.x-=P(o.__canvas,"border-left-width").replace("px","");n.y-=P(o.__canvas,"border-top-width").replace("px","");i=c.getContext("2d").getImageData(n.x*2-.5,n.y*2-.5,1,1).data;a()}else{o.__options.el.getRegionColor({x:n.x-.5,y:n.y-.5,width:1,height:1,canvasId:o.__options.el.regionid,success:function e(t){i=t.data;a()},fail:function e(t){throw new Error(t)}})}}}}function ye(e){e.prototype.$$init=function(e){var i=this;this.__options=e;this._debug="debug"in e?e.debug:false;this._platform="platform"in e?e.platform:"default";this.__data=S(e.data)?H(e.data):x(e.data)?e.data():e.data;this.__animation="animation"in e?e.animation:true;this._isMounted=false;this._isDestroyed=false;for(var t in e.methods){T(t);this[t]=S(e.methods[t])?H(e.methods[t]):e.methods[t]}for(var r in this.__data){T(r);this[r]=this.__data[r]}this.__renderFlag=!!e.render||!!e.template;if(!!e.render){this.__renderAOP=ne(e.render,this.__defineSerirs)}else if(!!e.template){this.__renderOptions=this.$$templateCompiler(e.template);this.__renderAOP=ne(this.__renderOptions,this.__defineSerirs)}this.__observeWatcher={flag:false,stop:null,time:"time"in e?e.time:500};this.__observeResize={help:true,flag:false,observer:null};this.__painter=null;this._width=0;this._height=0;this._min=0;this._max=0;if(this._platform=="default"){this.__regionManager=_e(this)}else{this.__regionManager=_e(this,e.el)}this.$$trigger=function(e,t){var r=i.__events_platform[e];for(var n=0;n<r.length;n++){r[n]({type:"result",position:t})}}}}function be(e){e.prototype.$$lifecycle=function(e){if(x(e)){e()}else{if(["created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","beforeResize","resized","beforeDraw","drawed","beforeDestroy","destroyed"].indexOf(e)>-1&&x(this.__options[e])){this.__options[e].call(this)}}return this}}var me={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/};var xe=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="];var we=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function $e(e,r,t){r=r.trim();var n=-1,i=null;var a=function e(){i=n++<r.length-1?r[n]:null;return i};var o=function e(t){return r.substring(n,t+n>r.length?r.length:t+n)};a();var s=[];while(true){if(n>=r.length)break;if(xe.indexOf(i)>-1){if(["&","|","="].indexOf(i)>-1){if(["==="].indexOf(o(3))>-1){s.push(o(3));n+=2;a()}else if(["&&","||","=="].indexOf(o(2))>-1){s.push(o(2));n+=1;a()}else{throw new Error("Illegal expression : "+r+"\nstep='analyseExpress',index="+n)}}else{if(["!=="].indexOf(o(3))>-1){s.push(o(3));n+=2;a()}else if([">=","<=","!="].indexOf(o(2))>-1){s.push(o(2));n+=1;a()}else{s.push(i);a()}}}else if(['"',"'"].indexOf(i)>-1){var l="",u=i;a();while(i!=u){if(n>=r.length){throw new Error("String unclosed error : "+r+"\nstep='analyseExpress',index="+n)}l+=i;a()}s.push(l+"@string");a()}else if(/\d/.test(i)){var f="no";var l=i;a();while(n<r.length){if(/\d/.test(i)){l+=i;if(f=="error")f="yes"}else if("."==i&&f=="no"){l+=i;f="error"}else{break}a()}if(f=="error")l+="0";s.push(+l)}else if(["null","true"].indexOf(o(4))>-1){s.push({null:null,true:true}[o(4)]);n+=3;a()}else if(["false"].indexOf(o(5))>-1){s.push({false:false}[o(5)]);n+=4;a()}else if(["undefined"].indexOf(o(9))>-1){s.push({undefined:undefined}[o(9)]);n+=8;a()}else if(me.blankReg.test(i)){do{a()}while(me.blankReg.test(i)&&n<r.length)}else{var c=false;if(i=="."){c=true;a()}if(me.identifier.test(i)){var h=1;while(n+h<=r.length&&me.identifier.test(o(h))){h+=1}if(c){s.push("[");s.push(o(h-1)+"@string");s.push("]")}else{var d=o(h-1);var v=d in t?t[d]:e[d];s.push($(v)?v+"@string":v)}n+=h-2;a()}else{throw new Error("Illegal express : "+r+"\nstep='analyseExpress',index="+n)}}}var p=0;for(var g=0;g<s.length;g++){if(["+","-"].indexOf(s[g])>-1&&(g==0||we.indexOf(s[p-1])>-1)){s[p++]=+(s[g]+s[g+1]);g+=1}else{s[p++]=s[g]}}s.length=p;return s}var ke=function e(t){if(typeof t=="string")return t.replace(/@string$/,"");return t};var Ae=function e(t){if(typeof t=="string")return t+"@string";return t};function Se(e){var t=0,r=0;for(;r<e.length;r++){if(e[r]=="!"){e[t]=!e[++r]}else e[t]=e[r];t+=1}if(t==1)return ke(e[0]);e.length=t;t=0;for(r=0;r<e.length;r++){if(e[r]=="*"){e[t-1]=ke(e[t-1])*ke(e[++r])}else if(e[r]=="/"){e[t-1]=ke(e[t-1])/ke(e[++r])}else if(e[r]=="%"){e[t-1]=ke(e[t-1])%ke(e[++r])}else{e[t++]=e[r]}}if(t==1)return ke(e[0]);e.length=t;t=0;for(r=0;r<e.length;r++){if(e[r]=="+"){e[t-1]=Ae(ke(e[t-1])+ke(e[++r]))}else if(e[r]=="-"){e[t-1]=ke(e[t-1])-ke(e[++r])}else e[t++]=e[r]}if(t==1)return ke(e[0]);e.length=t;t=0;for(r=0;r<e.length;r++){if(e[r]==">"){e[t-1]=ke(e[t-1])>ke(e[++r])}else if(e[r]=="<"){e[t-1]=ke(e[t-1])<ke(e[++r])}else if(e[r]=="<="){e[t-1]=ke(e[t-1])<=ke(e[++r])}else if(e[r]==">="){e[t-1]=ke(e[t-1])>=ke(e[++r])}else e[t++]=e[r]}if(t==1)return ke(e[0]);e.length=t;t=0;for(r=0;r<e.length;r++){if(e[r]=="=="){e[t-1]=ke(e[t-1])==ke(e[++r])}else if(e[r]=="==="){e[t-1]=ke(e[t-1])===ke(e[++r])}else if(e[r]=="!="){e[t-1]=ke(e[t-1])!=ke(e[++r])}else if(e[r]=="!=="){e[t-1]=ke(e[t-1])!==ke(e[++r])}else e[t++]=e[r]}if(t==1)return ke(e[0]);e.length=t;t=0;for(r=0;r<e.length;r++){if(e[r]=="&&"){e[t-1]=ke(e[t-1])&&ke(e[1+r]);r+=1}else if(e[r]=="||"){e[t-1]=ke(e[t-1])||ke(e[1+r]);r+=1}else e[t++]=e[r]}if(t==1)return ke(e[0]);e.length=t;t=0;for(r=0;r<e.length;r++){if(e[r]=="?"){e[t-1]=ke(e[t-1])?ke(e[r+1]):ke(e[r+3]);r+=3}else e[t++]=e[r]}if(t==1)return ke(e[0]);e.length=t;throw new Error("Unrecognized expression : ["+e.toString()+"]")}function Te(t,r,n){var e=r[0]in n?n[r[0]]:t[r[0]];for(var i=1;i<r.length;i++){try{e=e[r[i]]}catch(e){console.error({target:t,scope:n,expressArray:r,index:i});throw e}}return e}var Me=function e(t,r,n){if(r.indexOf("(")>-1){var i=[],a=[],o=0;for(var s=0;s<r.length;s++){if(r[s]=="("){if(o>0){a.push("(")}o+=1}else if(r[s]==")"){if(o>1)a.push(")");o-=1;if(o==0){var l=Se(e(t,a));i.push($(l)?l+"@string":l);a=[]}}else{if(o>0)a.push(r[s]);else i.push(r[s])}}r=i}return Oe(r)};var Oe=function e(t){var r=true;while(r){r=false;var n=[],i=[],a=false;for(var o=0;o<t.length;o++){if(t[o]=="["&&o!=0&&t[o-1]!="]"){if(a){n.push("[");for(var s=0;s<i.length;s++){n.push(i[s])}}else{a=true}i=[]}else if(t[o]=="]"&&a){r=true;var l=Se(i);var u=n[n.length-1][l];n[n.length-1]=$(u)?u+"@string":u;a=false}else{if(a){i.push(t[o])}else{n.push(t[o])}}}t=n}return t};var ze=function e(t){var r=[],n=[];for(var i=0;i<t.length;i++){if(t[i]=="["){n=[]}else if(t[i]=="]"){r.push(Se(n))}else{n.push(t[i])}}return r};function Pe(e,t,r){var n=Me(e,t);var i;if(n[0]!="["){i=[Se(n)]}else if(n[n.length-1]=="]"){i=ze(n)}else{var a=n.lastIndexOf("]");var o=ze(n.slice(0,a+1));var s=n.slice(a+1);s.unshift(Te(e,o,r));i=[Se(s)]}return i}var Re=function e(t,r,n){if(arguments.length<3)n={};var i=$e(t,r,n);var a=Pe(t,i,n);if(a.length>1)throw new Error("Illegal expression : "+r+"\nstep='evalExpress',path="+a+",expressArray="+i);return a[0]};var Ie=function e(t,r,n){if(r.animation&&t.value!=r.value){if(x(r.animation)){return{type:r.type,animation:true,value:r.animation(r.value,t.value,n)}}if(r.type=="number"){return{type:r.type,animation:true,value:(r.value-t.value)*n+t.value}}}return r};function Ee(c,h){var d={};for(var e=0;e<c.length;e++){var t={};for(var r=0;r<c[e].subAttr.length;r++){t[c[e].subAttr[r].id]=r}d[c[e].id]={index:e,subLinkIdToIndex:t}}return function(e){if(e==1)return h;var t=[];for(var r=0;r<h.length;r++){if(h[r].id in d){var n=c[d[h[r].id].index];var i={};for(var a in n.attr){i[a]=Ie(n.attr[a],h[r].attr[a],e)}var o=[];for(var s=0;s<h[r].subAttr.length;s++){if(h[r].subAttr[s].id in d[h[r].id].subLinkIdToIndex){var l=n.subAttr[d[h[r].id].subLinkIdToIndex[h[r].subAttr[s].id]];var u={};for(var f in l.attr){u[f]=Ie(l.attr[f],h[r].subAttr[s].attr[f],e)}o.push({id:l.id,name:l.name,subText:l.subText,subAttr:[],attr:u})}else{o.push(h[r].subAttr[s])}}t.push({id:h[r].id,name:h[r].name,subText:h[r].subText,subAttr:o,attr:i})}else{if(h[r].animation=="quick"){t.push(h[r])}}}return t}}function Ce(e){var t={};for(var r in e.__data){t[r]=e[r]}return JSON.stringify({version:"v1",render:{Series:e.__renderSeries,AOP:e.__renderAOP},data:t})}function je(e){e.prototype.$$updateView=function(){var f=this;if(!this._isMounted||!this.__painter||this._width<1||this._height<1)return;this.$$lifecycle("beforeDraw");this.__regionManager.erase();this.__painter.clearRect();var e=function e(i){var t={_subTexts:f.__renderSeries[i].subText,_subAttr:[]};for(var r in f.__renderSeries[i].attr){t[r]=f.__renderSeries[i].attr[r].value}for(var n=0;n<f.__renderSeries[i].subAttr.length;n++){var a={series:f.__renderSeries[i].subAttr[n].name,attr:{}};for(var o in f.__renderSeries[i].subAttr[n].attr){a.attr[o]=f.__renderSeries[i].subAttr[n].attr[o].value}t._subAttr.push(a)}f.__painter.config(oe);f.__defineSerirs[f.__renderSeries[i].name].link.call(f,f.__painter,t);var s=f.__defineSerirs[f.__renderSeries[i].name].region;if(s){var l=function e(r){var n=f;s[r].call(n,function(e,t){if(arguments.length>0)e=e+"";else e="default";return n.__regionManager.painter(i+"@"+r+"::"+e,t)},t)};for(var u in s){l(u)}}};for(var t=0;t<this.__renderSeries.length;t++){e(t)}if(this._platform=="uni-app"){setTimeout(function(){f.__platform_painter.draw();if(f.__regionManager!=null){f.__regionManager.draw()}},200)}this.$$lifecycle("drawed")};e.prototype.$$updateWithSize=function(){var e=this;this.$$lifecycle("beforeResize");var t=this.__el.clientWidth-(P(this.__el,"padding-left")+"").replace("px","")-(P(this.__el,"padding-right")+"").replace("px","");var r=this.__el.clientHeight-(P(this.__el,"padding-top")+"").replace("px","")-(P(this.__el,"padding-bottom")+"").replace("px","");this._width=t;this._height=r;this._max=t>r?t:r;this._min=t<r?t:r;if(t==0||r==0){this.__canvas.style.width="0px";this.__canvas.style.height="0px";this.$$lifecycle("resized");return}this.__painter=ve(this._platform,this.__canvas,t,r);this.__regionManager.updateSize(t,r);if(x(this.__observeWatcher.stop)){this.__observeWatcher.stop();this.__observeWatcher.stop=null}setTimeout(function(){e.$$updateWithData(true);e.$$lifecycle("resized")},10)};e.prototype.$$updateWithData=function(e){var t=this;if(x(this.__observeWatcher.stop)){this.__observeWatcher.stop();this.__observeWatcher.stop=null}else{this.$$lifecycle("beforeUpdate")}this.__events={click:{},dblclick:{},mousemove:{},mousedown:{},mouseup:{}};var $=[],k=this;(function e(t,r,n,i,a){var o=[];for(var s=0;s<t.length;s++){for(var l in r){t[s].scope[l]=r[l]}var u=void 0;if("_id"in t[s]){u=t[s]._id.isBind?Re(k,t[s]._id.express,t[s].scope):t[s]._id.express}else{u=i+t[s].index}var f=void 0;if("_animation"in t[s]){f=t[s]._animation.isBind?Re(k,t[s]._animation.express,t[s].scope):t[s]._animation.express}else{f="lazy"}if(!a&&"c-for"in t[s]){var c=t[s]["c-for"];var h=void 0;if(S(c.data)){h=c.data}else{h=Re(k,c.data,t[s].scope);if(A(h)){var d=h;h=[];for(var v=0;v<d;v++){h.push(v)}}}for(var p in h){t[s].scope[c.value]=h[p];if(c.key!=null)t[s].scope[c.key]=S(h)?+p:p;var g=e([t[s]],{},n,u+"for"+p+"-",true);if(n){for(var _=0;_<g.length;_++){o.push(g[_])}}}continue}if("c-if"in t[s]&&!Re(k,t[s]["c-if"],t[s].scope));else{e(t[s].children,t[s].scope,false,u+"-",false);if(t[s].name!="group"){var y={name:t[s].name,attr:{},subAttr:[],subText:t[s].text,id:u,animation:f};for(var b in t[s].attrs){var m=t[s].attrs[b];y.attr[b]={animation:m.animation,type:m.type,value:m.value.isBind?Re(k,m.value.express,t[s].scope):m.value.express}}y.subAttr=e(t[s].subAttrs,t[s].scope,true,u+"-",false);for(var x=0;x<t[s].events.length;x++){var w=t[s].events[x];k.__events[w.event][$.length+"@"+w.region]=k[w.method]}if(n)o.push(y);else $.push(y)}}}return o})(this.__renderAOP,{},false,"",false);if(this._platform=="default"&&this._debug){this.__el.getElementsByTagName("canvas")[0].setAttribute("__clunch__devtool__target__",Ce(this))}if(!this.__renderSeries||e||!this.__animation){this.__renderSeries=$;this.$$updateView();this.$$lifecycle("updated");return}var r=Ee(this.__renderSeries,$);this.__observeWatcher.stop=m(function(e){t.__renderSeries=r(e);t.$$updateView()},this.__observeWatcher.time,function(e){if(e==1){t.__observeWatcher.stop=null;t.$$lifecycle("updated")}})}}function We(n){var e=function e(t){var r=n.__data[t];n[t]=r;Object.defineProperty(n,t,{get:function e(){return r},set:function e(t){r=t;if(!n.__observeWatcher.flag){setTimeout(function(){n.$$updateWithData();n.__observeWatcher.flag=false},0)}n.__observeWatcher.flag=true}})};for(var t in n.__data){e(t)}}function De(t){if(!(this instanceof De)){console.warn("Clunch is a constructor and should be called with the `new` keyword");return}["beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","beforeResize","resized","beforeDestroy","destroyed"].forEach(function(e){if(S(t[e])){t[e]=H(t[e])}});this.$$lifecycle(t.beforeCreate);this.$$init(t);We(this);this.$$lifecycle("created");this.$mount(t.el)}ye(De);be(De);je(De);De.prototype.__defineSerirs={};function Ne(t){try{t.__observeResize.observer=new ResizeObserver(function(){if(!t.__observeResize.flag){t.__observeResize.flag=true;var e=setInterval(function(){if(t.__observeResize.help){clearInterval(e);t.__observeResize.flag=false;t.$$updateWithSize()}t.__observeResize.help=true},200)}else{t.__observeResize.help=false}});t.__observeResize.observer.observe(t.__el)}catch(e){t.$$updateWithSize();console.warn("ResizeObserver undefined!")}}function Be(e){var t=H(e);for(var r in t.attrs){if(x(t.attrs[r])){t.attrs[r]=t.attrs[r](false)}}for(var n in t.subAttrs){for(var i in t.subAttrs[n]){if(x(t.subAttrs[n][i])){t.subAttrs[n][i]=t.subAttrs[n][i](false)}}}return t}function Fe(e){e.prototype.$reuseSeriesLink=function(e,t){this.__painter.config(oe);var r=this.__defineSerirs[e];var n={_subAttr:[],_subTexts:"texts"in t?t.texts:[]};for(var i in r.attrs){if(i in t.attr){n[i]=t.attr[i]}else{n[i]=r.attrs[i]["default"]}}if("subSeries"in t){for(var a=0;a<t.subSeries.length;a++){var o=t.subSeries[a];var s=r.subAttrs[o.name];var l={series:o.name,attr:{}};for(var u in o.attr){if(u in o.attr){l.attr[u]=o.attr[u]}else{l.attr[u]=s[u]["default"]}}n._subAttr.push(l)}}r.link.call(this,this.__painter,n)}}function Le(n){Fe(n);n.series=function(e,t){if(arguments.length==1){for(var r in e){n.series(r,e[r])}}else{if(x(n.prototype.__defineSerirs[e])){console.warn("The series["+e+"] has been registered!")}n.prototype.__defineSerirs[e]=Be(t)}return n}}Le(De);De.prototype.$mount=function(e){var l=this;if(this._isDestroyed){console.warn("The clunch has been destroyed!");return this}if(this._isMounted){console.warn("The clunch is already mounted!");return}if(this._platform=="default"&&!v(e)){console.warn("Mount node does not exist!");return this}this.$$lifecycle("beforeMount");if(!this.__renderFlag){this.__renderOptions=this.$$templateCompiler(e.innerHTML);this.__renderAOP=ne(this.__renderOptions,this.__defineSerirs)}this.__el=e;if(this._platform=="default"){if(this._debug)this.__el.setAttribute("__clunch__devtool__",(new Date).valueOf()+""+(Math.random()*1e5).toFixed(0));e.innerHTML="<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>";this.__canvas=e.getElementsByTagName("canvas")[0];Ne(this)}this.$$updateWithData();this.__events_platform={click:[],dblclick:[],mousemove:[],mousedown:[],mouseup:[]};["click","dblclick","mousemove","mousedown","mouseup"].forEach(function(s){var e=function e(t){l.__regionManager.getRegion(t,function(e){if(e[0]!=null){var t=e[0].split("::");var r=l.__events[s][t[0]];if(x(r)){var n=t[0].split("@");var i=l.__renderSeries[n[0]];var a={};for(var o in i.attr){a[o]=i.attr[o].value}r.call(l,{id:i.id,series:i.name,region:n[1],subRegion:t[1],attr:a,left:e[1],top:e[2],data:e[3]})}}})};if(l._platform=="default"){pe(l.__canvas,s,e)}else{l.__events_platform[s].push(e)}});this.$bind=function(e,s){var l=this;var t=function e(t){l.__regionManager.getRegion(t,function(e){var t;if(e[0]!=null){var r=e[0].split("::");var n=r[0].split("@");var i=l.__renderSeries[n[0]];var a={};for(var o in i.attr){a[o]=i.attr[o].value}t={id:i.id,series:i.name,region:n[1],subRegion:r[1],attr:a,left:e[1],top:e[2],data:e[3]}}else{t={series:null,region:null,subRegion:null,attr:{},left:-1,top:-1,data:null}}t.left=e[1];t.top=e[2];s.call(l,t)})};if(this._platform=="default"){pe(this.__canvas,e,t)}else{if(!(e in this.__events_platform))this.__events_platform[e]=[];this.__events_platform[e].push(t)}return this};this._isMounted=true;this.$$lifecycle("mounted");if(this._platform!="default"){this.__painter=ve(this._platform,e,e.width,e.height);this.__platform_painter=e.painter;this.$resize(e.width,e.height)}return this};De.prototype.$unmount=function(){if(this._isDestroyed){console.warn("The object has been destroyed!");return this}if(!this._isMounted){console.warn("Object not mounted!");return this}this.$$lifecycle("beforeUnmount");this.__observeResize.observer.disconnect();this.__painter=null;this.__canvas=null;this._isMounted=false;this.$$lifecycle("unmounted");return this};De.prototype.$destroy=function(){if(this._isDestroyed){console.warn("The object has been destroyed!");return this}if(this._isMounted)this.$unmount();this.$$lifecycle("beforeDestroy");delete this.__regionManager;this.__observeResize={};this.__observeWatcher={};this._isDestroyed=true;this.$$lifecycle("destroyed");return this};De.prototype.$resize=function(e,t){if(this._isMounted||this._platform!="default"){if(this._platform!="default"){if(!A(e)){console.warn("The width undefined!");return this}if(!A(t)){console.warn("The height undefined!");return this}this.$$lifecycle("beforeResize");this._width=e;this._height=t;this._max=e>t?e:t;this._min=e<t?e:t;if(this.__regionManager!=null){this.__regionManager.updateSize(e,t)}this.$$updateWithData(true);this.$$lifecycle("resized")}else{this.$$updateWithSize()}}else{console.warn("The clunch not mounted!")}return this};De.series("group",[function(){return{attrs:{}}}]);var Ue=["number","json","string","color",function(e,t,r,n){return{attrs:{"fill-color":n("black"),"stroke-color":n("black"),"line-width":e(1)(true),dash:t([]),type:r("fill"),cx:e()(true),cy:e()(true),radius1:e()(true),radius2:e()(true),begin:e(0)(true),deg:e()(true)},region:{default:function e(t,r){t().config({lineWidth:r["line-width"],lineDash:r.dash})[r.type+"Arc"](r.cx,r.cy,r.radius1,r.radius2,r.begin,r.deg)}},link:function e(t,r){t.config({fillStyle:r["fill-color"],strokeStyle:r["stroke-color"],lineWidth:r["line-width"],lineDash:r.dash});var n=r.type;if(x(t[n+"Arc"])){t[n+"Arc"](r.cx,r.cy,r.radius1,r.radius2,r.begin,r.deg)}else{throw new Error("Type error!"+JSON.stringify({series:"arc",type:n}))}}}}];var qe=["number","json","string","color",function(e,t,r,n){return{attrs:{"fill-color":n("black"),"stroke-color":n("black"),"line-width":e(1),dash:t([]),type:r("fill"),cx:e()(true),cy:e()(true),radius:e()(true)},region:{default:function e(t,r){t().config({lineWidth:r["line-width"],lineDash:r.dash})[r.type+"Circle"](r.cx,r.cy,r.radius)}},link:function e(t,r){t.config({fillStyle:r["fill-color"],strokeStyle:r["stroke-color"],lineWidth:r["line-width"],lineDash:r.dash});var n=r.type;if(x(t[n+"Circle"])){t[n+"Circle"](r.cx,r.cy,r.radius)}else{throw new Error("Type error!"+JSON.stringify({series:"circle",type:n}))}}}}];var Je=["number","string","boolean","json","color",function(e,t,r,n,i){return{attrs:{"fill-color":i("black"),"stroke-color":i("black"),"line-width":e(1)(true),dash:n([]),type:t("stroke"),close:r(false)},subAttrs:{"move-to":{x:e()(true),y:e()(true)},"line-to":{x:e()(true),y:e()(true)},"bezier-to":{x:e()(true),y:e()(true),cp1x:e()(true),cp1y:e()(true),cp2x:e(null)(true),cp2y:e(null)(true)}},link:function e(t,r){t.config({fillStyle:r["fill-color"],strokeStyle:r["stroke-color"],lineWidth:r["line-width"],lineDash:r.dash});t.beginPath();for(var n=0;n<r._subAttr.length;n++){if(r._subAttr[n].series=="move-to"){t.moveTo(r._subAttr[n].attr.x,r._subAttr[n].attr.y)}else if(r._subAttr[n].series=="line-to"){t.lineTo(r._subAttr[n].attr.x,r._subAttr[n].attr.y)}else if(r._subAttr[n].series=="bezier-to"){if(r._subAttr[n].attr.cp2x==null&&r._subAttr[n].attr.cp2y==null){t.quadraticCurveTo(r._subAttr[n].attr.cp1x,r._subAttr[n].attr.cp1y,r._subAttr[n].attr.x,r._subAttr[n].attr.y)}else{t.bezierCurveTo(r._subAttr[n].attr.cp1x,r._subAttr[n].attr.cp1y,r._subAttr[n].attr.cp2x,r._subAttr[n].attr.cp2y,r._subAttr[n].attr.x,r._subAttr[n].attr.y)}}}if(r.close)t.closePath();var i=r.type;if(x(t[i])){t[i]()}else{throw new Error("Type error!"+JSON.stringify({series:"path",type:i}))}}}}];var Ve=["number","json","string","color","$rotate",function(e,t,r,n,h){return{attrs:{begin:e(0),deg:e(Math.PI*2),color:n("black"),cx:e(),cy:e(),radius:e(),"mark-direction":r("outer"),"value-position":r("mark"),value:t()},link:function e(t,r){var n=r.value;t.config({lineWidth:1,fillStyle:r.color,strokeStyle:r.color,"font-size":"12",textAlign:"center",textBaseline:"middle",lineDash:[]});t.beginPath().arc(r.cx,r.cy,r.radius,r.begin,r.deg).stroke();var i=r["value-position"]=="mark"?n.length:n.length+1;var a=r.deg/(i-1);for(var o=0;o<i;o++){var s,l;(s=(l=t.beginPath()).moveTo.apply(l,p(h(r.cx,r.cy,r.begin+o*a,r.cx+r.radius,r.cy)))).lineTo.apply(s,p(h(r.cx,r.cy,r.begin+o*a,r.cx+r.radius+5*(r["mark-direction"]=="inner"?-1:1),r.cy))).stroke()}for(var u=0;u<n.length;u++){var f=r.begin+a*(u+(r["value-position"]=="mark"?0:.5));var c=f%(Math.PI*2);t.fillText.apply(t,[n[u]].concat(p(h(r.cx,r.cy,f,r.cx+r.radius+15*(r["mark-direction"]=="inner"?-1:1),r.cy)),[f+(c>0&&c<Math.PI||c>-2*Math.PI&&c<-Math.PI?-Math.PI*.5:Math.PI*.5)]))}}}}];var Ge=["number","json","string","color",function(e,t,r,n){return{attrs:{"fill-color":n("black"),"stroke-color":n("black"),"line-width":e(1),dash:t([]),type:r("fill"),align:r("left"),baseline:r("top"),x:e()(true),y:e()(true),width:e()(true),height:e()(true)},region:{default:function e(t,r){t().config({lineWidth:r["line-width"],lineDash:r.dash})[r.type+"Rect"](r.x,r.y,r.width,r.height)}},link:function e(t,r){if(r.align=="center")r.x-=r.width*.5;else if(r.align=="right")r.x-=r.width;if(r.baseline=="middle")r.y-=r.height*.5;else if(r.baseline=="bottom")r.y-=r.height;t.config({fillStyle:r["fill-color"],strokeStyle:r["stroke-color"],lineWidth:r["line-width"],lineDash:r.dash});var n=r.type;if(x(t[n+"Rect"])){t[n+"Rect"](r.x,r.y,r.width,r.height)}else{throw new Error("Type error!"+JSON.stringify({series:"rect",type:n}))}}}}];var Ze=["number","json","string","color","$dot",function(e,t,r,n,v){return{attrs:{x:e(),y:e(),direction:r("LR"),length:e(),"mark-direction":r("right"),"value-position":r("mark"),color:n("black"),value:t()},link:function e(t,r){var n=r.value;t.config({lineWidth:1,fillStyle:r.color,strokeStyle:r.color,"font-size":"12",textAlign:r.direction=="LR"||r.direction=="RL"?"center":r.direction=="BT"&&r["mark-direction"]=="right"||r.direction=="TB"&&r["mark-direction"]=="left"?"left":"right",lineDash:[],textBaseline:"middle"});var i;var a;if(r.direction=="LR"){i={x:r.x+r.length,y:r.y};a=r["mark-direction"]=="right"?[0,1]:[0,-1]}else if(r.direction=="RL"){i={x:r.x-r.length,y:r.y};a=r["mark-direction"]=="right"?[0,-1]:[0,1]}else if(r.direction=="TB"){i={x:r.x,y:r.y+r.length};a=r["mark-direction"]=="right"?[-1,0]:[1,0]}else if(r.direction=="BT"){i={x:r.x,y:r.y-r.length};a=r["mark-direction"]=="right"?[1,0]:[-1,0]}else{throw new Error("Type error!"+JSON.stringify({series:"ruler",type:type}))}t.beginPath().moveTo(r.x,r.y).lineTo(i.x,i.y).stroke();var o=r["value-position"]=="mark"?n.length:n.length+1;var s=r.length/(o-1);var l=v({d:[i.x-r.x,i.y-r.y],p:[r.x,r.y]});for(var u=0;u<o;u++){var f;var c=l.value();(f=t.beginPath()).moveTo.apply(f,p(c)).lineTo(c[0]+a[0]*5,c[1]+a[1]*5).stroke();l.move(s)}l=v({d:[i.x-r.x,i.y-r.y],p:[r.x,r.y]});if(r["value-position"]=="between")l.move(s*.5);for(var h=0;h<n.length;h++){var d=l.value();t.fillText(n[h],d[0]+a[0]*15,d[1]+a[1]*15);l.move(s)}}}}];var He=["number","string","json","color",function(e,t,r,n){return{attrs:{"fill-color":n("black"),"stroke-color":n("black"),"font-size":e(16)(true),"font-family":t("sans-serif"),"line-width":e(1),align:t("left"),baseline:t("middle"),type:t("fill"),content:t(null),x:e()(true),y:e()(true),deg:e(0)(true),dash:r([])},region:{default:function e(t,r){t().config({"font-size":r["font-size"],"font-family":r["font-family"],lineWidth:r["line-width"],textAlign:r["align"],textBaseline:r["baseline"],lineDash:r.dash})[r.type+"Text"]((r.content+"").trim(),r.x,r.y,r.deg)}},link:function e(t,r){if(r.content==null){r.content=r._subTexts.join("\n")}t.config({fillStyle:r["fill-color"],strokeStyle:r["stroke-color"],"font-size":r["font-size"],"font-family":r["font-family"],lineWidth:r["line-width"],textAlign:r["align"],textBaseline:r["baseline"],lineDash:r.dash});var n=r.type;if(x(t[n+"Text"])){t[n+"Text"]((r.content+"").trim(),r.x,r.y,r.deg)}else{throw new Error("Type error!"+JSON.stringify({series:"text",type:n}))}}}}];De.prototype.$$templateCompiler=function(e){throw new Error("Sorry, setting template property is not supported in the current environment : \n"+e)};De.series({arc:Ue,circle:qe,path:Je,"polar-ruler":Ve,rect:Ge,ruler:Ze,text:He});if((typeof module==="undefined"?"undefined":n(module))==="object"&&n(module.exports)==="object"){module.exports=De}else{window.Clunch=De}})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@clunch/map/index.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var isFunction=__etcpack__scope_args__.isFunction;

__etcpack__scope_args__=window.__etcpack__getBundle('23');
var getCenter =__etcpack__scope_args__.default;


/**
 * 地图
*/

// type='Polygon'

var drawPolygon = function (map, painter, data, cx, cy, type) {
    var i, dxy;
    // 绘制区域
    painter.beginPath();
    for (i = 0; i < data.length; i++) {
        dxy = map(data[i][0], data[i][1]);
        painter.lineTo(cx + dxy[0], cy + dxy[1]);
    }
    painter.closePath()[type]();
};


// type='MultiPolygon | Polygon'

var drawMultiPolygon = function (map, painter, data, cx, cy, type) {
    var i, j;
    if (data.type == 'Polygon') {
        for (i = 0; i < data.coordinates.length; i++) {
            drawPolygon(map, painter, data.coordinates[i], cx, cy, type);
        }
    } else {
        for (i = 0; i < data.coordinates.length; i++) {
            for (j = 0; j < data.coordinates[i].length; j++) {
                drawPolygon(map, painter, data.coordinates[i][j], cx, cy, type);
            }
        }
    }
};

var getMapFun = function ($map, attr) {

    return $map({
        scale: attr.scale,
        center: attr.center,
        type: "eoap"
    });

};

var initConfig = function (attr, that) {

    var center = getCenter(attr['geo-json']);

    if (attr.center.length < 2) attr.center = [center[0], center[1]];

    if (attr.cx == -1) attr.cx = that._width * 0.5;
    if (attr.cy == -1) attr.cy = that._height * 0.5;
    if (attr.width == -1) attr.width = that._width;
    if (attr.height == -1) attr.height = that._height;

    if (attr.scale == -1) {

        var xScale = 0.5 * attr.width / center[2];
        var yScale = 0.5 * attr.height / center[3];

        // 选择缩放最小的
        attr.scale = xScale < yScale ? xScale : yScale;

    }

    return center[4];

}

__etcpack__scope_bundle__.default= ["number", "json", "string", "$map", "color", function ($number, $json, $string, $map, $color) {
    return {
        attrs: {
            'fill-color': $color('green'),
            'stroke-color': $color('white'),
            'font-color': $color('blue'),
            type: $string('full'),
            cx: $number(-1)(true),
            cy: $number(-1)(true),
            width: $number(-1)(true),
            height: $number(-1)(true),

            // 地图缩放比例
            scale: $number(-1)(true),

            // 地图中心
            center: $json([])(function (newValue, oldValue, deep) {
                return [
                    (newValue[0] - oldValue[0]) * deep + oldValue[0],
                    (newValue[1] - oldValue[1]) * deep + oldValue[1]
                ];
            }),

            // 区域地图数据
            'geo-json': $json()
        },
        region: {
            default: function (render, attr) {

                var map = getMapFun($map, attr), i;

                if (attr['geo-json'].type == 'FeatureCollection') {

                    for (i = 0; i < attr['geo-json'].features.length; i++) {

                        // 绘制
                        drawMultiPolygon(map, render(i, attr['geo-json'].features[i]).config({
                            "lineWidth": 1,
                            "lineDash": []
                        }), attr['geo-json'].features[i].geometry, attr.cx, attr.cy, attr.type);

                    }

                } else if (attr['geo-json'].type == 'Feature') {

                    // 绘制
                    drawMultiPolygon(map, render().config({
                        "lineWidth": 1,
                        "lineDash": []
                    }), attr['geo-json'].geometry, attr.cx, attr.cy, attr.type);

                }

            },
        },
        link: function (painter, attr) {

            var centers = initConfig(attr, this);

            var map = getMapFun($map, attr);

            // 绘制前，设置画笔
            painter.config({
                "fillStyle": attr['fill-color'],
                "strokeStyle": attr['stroke-color'],
                "lineWidth": 1,
                "lineDash": []
            });

            var type = attr.type, i, textPosition;

            if (attr['geo-json'].type == 'FeatureCollection') {

                for (i = 0; i < attr['geo-json'].features.length; i++) {

                    // 如果颜色是函数
                    if (isFunction(attr['fill-color'])) painter.config('fillStyle', attr['fill-color'].call(this, attr['geo-json'].features[i].properties, i));
                    if (isFunction(attr['stroke-color'])) painter.config('strokeStyle', attr['stroke-color'].call(this, attr['geo-json'].features[i].properties, i));

                    // 绘制
                    drawMultiPolygon(map, painter, attr['geo-json'].features[i].geometry, attr.cx, attr.cy, type);

                }

            } else if (attr['geo-json'].type == 'Feature') {

                // 如果颜色是函数
                if (isFunction(attr['fill-color'])) painter.config('fillStyle', attr['fill-color'].call(this, attr['geo-json'].properties, 0));
                if (isFunction(attr['stroke-color'])) painter.config('strokeStyle', attr['stroke-color'].call(this, attr['geo-json'].properties, 0));

                // 绘制
                drawMultiPolygon(map, painter, attr['geo-json'].geometry, attr.cx, attr.cy, type);

            }

            painter.config({
                textAlign: "center",
                textBaseline: "middle",
                "font-size": 10,
                "fillStyle": attr['font-color']
            });

            // 绘制文字
            if (attr['geo-json'].type == 'FeatureCollection') {

                for (i = 0; i < attr['geo-json'].features.length; i++) {
                    if ('cp' in attr['geo-json'].features[i].properties) {
                        textPosition = map(attr['geo-json'].features[i].properties.cp[0], attr['geo-json'].features[i].properties.cp[1]);
                    } else {
                        textPosition = map(centers[i][0], centers[i][1]);
                    }
                    painter.fillText(attr['geo-json'].features[i].properties.name, attr.cx + textPosition[0], attr.cy + textPosition[1]);
                }

            } else if (attr['geo-json'].type == 'Feature') {
                painter.fillText(attr['geo-json'].properties.name, attr.cx, attr.cy);
            }

        }
    };
}];


  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@clunch/map/getCenter.js
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    
function calcFeatureCollection(data) {

    var temp = calcFeature(data.features[0]),
        minX = temp.minX,
        maxX = temp.maxX,
        minY = temp.minY,
        maxY = temp.maxY,
        centers = [[
            (temp.maxX + temp.minX) * 0.5,
            (temp.maxY + temp.minY) * 0.5
        ]],
        i,
        temp;

    for (i = 1; i < data.features.length; i++) {
        temp = calcFeature(data.features[i]);

        if (temp.minX < minX) minX = temp.minX;
        if (temp.maxX > maxX) maxX = temp.maxX;
        if (temp.minY < minY) minY = temp.minY;
        if (temp.maxY > maxY) maxY = temp.maxY;

        centers.push([
            (temp.maxX + temp.minX) * 0.5,
            (temp.maxY + temp.minY) * 0.5
        ]);
    }

    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
        centers: centers
    };

}

// 计算边界值
// 自动区分区域类型
function calcFeature(data) {

    if (data.geometry.type == 'Polygon') {
        return calcPolygon(data.geometry.coordinates);
    } else {
        return calcMultiPolygon(data.geometry.coordinates);
    }

}

// 获取多区域的统一边界值
function calcMultiPolygon(data) {

    var minX = data[0][0][0][0],
        maxX = data[0][0][0][0],
        minY = data[0][0][0][1],
        maxY = data[0][0][0][1],
        i,
        temp;

    for (i = 0; i < data.length; i++) {
        temp = calcPolygon(data[i]);

        if (temp.minX < minX) minX = temp.minX;
        if (temp.maxX > maxX) maxX = temp.maxX;
        if (temp.minY < minY) minY = temp.minY;
        if (temp.maxY > maxY) maxY = temp.maxY;

    }

    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY
    };

}

// 获取坐标的最值
function calcPolygon(data) {

    var minX = data[0][0][0],
        maxX = data[0][0][0],
        minY = data[0][0][1],
        maxY = data[0][0][1],
        i,
        j;

    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].length; j++) {

            if (minX > data[i][j][0]) minX = data[i][j][0];
            else if (maxX < data[i][j][0]) maxX = data[i][j][0];

            if (minY > data[i][j][1]) minY = data[i][j][1];
            else if (maxY < data[i][j][1]) maxY = data[i][j][1];

        }
    }

    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY
    };

}

__etcpack__scope_bundle__.default= function (data) {

    var temp;

    if (data.type == 'FeatureCollection') {
        temp = calcFeatureCollection(data);
    } else if (data.type == 'Feature') {
        temp = calcFeature(data);
    } else {
        throw new Error('Type error!' + JSON.stringify({ function: "getCenter", type: data.type }));
    }

    return [
        (temp.maxX + temp.minX) * 0.5,
        (temp.maxY + temp.minY) * 0.5,
        temp.maxX - temp.minX,
        temp.maxY - temp.minY,
        temp.centers
    ];

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@datapool/china.geojson/china.geoJSON.js
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        var chinaGeoJSON = {
    "type": "FeatureCollection",
    "features":
        [
            { "type": "Feature", "properties": { "id": "65", "name": "新疆", "cp": [84.9023, 41.748], "childNum": 18 }, "geometry": { "type": "Polygon", "coordinates": [[[96.416, 42.7588], [96.416, 42.7148], [95.9766, 42.4951], [96.0645, 42.3193], [96.2402, 42.2314], [95.9766, 41.9238], [95.2734, 41.6162], [95.1855, 41.792], [94.5703, 41.4844], [94.043, 41.0889], [93.8672, 40.6934], [93.0762, 40.6494], [92.6367, 39.6387], [92.373, 39.3311], [92.373, 39.1113], [92.373, 39.0234], [90.1758, 38.4961], [90.3516, 38.2324], [90.6152, 38.3203], [90.5273, 37.8369], [91.0547, 37.4414], [91.3184, 37.0898], [90.7031, 36.7822], [90.791, 36.6064], [91.0547, 36.5186], [91.0547, 36.0791], [90.8789, 36.0352], [90, 36.2549], [89.9121, 36.0791], [89.7363, 36.0791], [89.209, 36.2988], [88.7695, 36.3428], [88.5938, 36.4746], [87.3633, 36.4307], [86.2207, 36.167], [86.1328, 35.8594], [85.6055, 35.6836], [85.0781, 35.7275], [84.1992, 35.376], [83.1445, 35.4199], [82.8809, 35.6836], [82.4414, 35.7275], [82.002, 35.332], [81.6504, 35.2441], [80.4199, 35.4199], [80.2441, 35.2881], [80.332, 35.1563], [80.2441, 35.2002], [79.8926, 34.8047], [79.8047, 34.4971], [79.1016, 34.4531], [79.0137, 34.3213], [78.2227, 34.7168], [78.0469, 35.2441], [78.0469, 35.5078], [77.4316, 35.4639], [76.8164, 35.6396], [76.5527, 35.8594], [76.2012, 35.8154], [75.9375, 36.0352], [76.0254, 36.4746], [75.8496, 36.6943], [75.498, 36.7383], [75.4102, 36.958], [75.0586, 37.002], [74.8828, 36.9141], [74.7949, 37.0459], [74.5313, 37.0898], [74.5313, 37.2217], [74.8828, 37.2217], [75.1465, 37.4414], [74.8828, 37.5732], [74.9707, 37.749], [74.8828, 38.4521], [74.3555, 38.6719], [74.1797, 38.6719], [74.0918, 38.54], [73.8281, 38.584], [73.7402, 38.8477], [73.8281, 38.9795], [73.4766, 39.375], [73.916, 39.5068], [73.916, 39.6826], [73.8281, 39.7705], [74.0039, 40.0342], [74.8828, 40.3418], [74.7949, 40.5176], [75.2344, 40.4297], [75.5859, 40.6494], [75.7617, 40.2979], [76.377, 40.3857], [76.9043, 41.001], [77.6074, 41.001], [78.1348, 41.2207], [78.1348, 41.3965], [80.1563, 42.0557], [80.2441, 42.2754], [80.1563, 42.627], [80.2441, 42.8467], [80.5078, 42.8906], [80.4199, 43.0664], [80.7715, 43.1982], [80.4199, 44.165], [80.4199, 44.6045], [79.9805, 44.8242], [79.9805, 44.9561], [81.7383, 45.3955], [82.0898, 45.2197], [82.5293, 45.2197], [82.2656, 45.6592], [83.0566, 47.2412], [83.6719, 47.0215], [84.7266, 47.0215], [84.9023, 46.8896], [85.5176, 47.0654], [85.6934, 47.2852], [85.5176, 48.1201], [85.7813, 48.4277], [86.5723, 48.5596], [86.8359, 48.8232], [86.748, 48.9551], [86.8359, 49.1309], [87.8027, 49.1748], [87.8906, 48.999], [87.7148, 48.9111], [88.0664, 48.7354], [87.9785, 48.6035], [88.5059, 48.3838], [88.6816, 48.1641], [89.1211, 47.9883], [89.5605, 48.0322], [89.7363, 47.8564], [90.0879, 47.8564], [90.3516, 47.6807], [90.5273, 47.2412], [90.8789, 46.9775], [91.0547, 46.582], [90.8789, 46.3184], [91.0547, 46.0107], [90.7031, 45.7471], [90.7031, 45.5273], [90.8789, 45.2197], [91.582, 45.0879], [93.5156, 44.9561], [94.7461, 44.3408], [95.3613, 44.2969], [95.3613, 44.0332], [95.5371, 43.9014], [95.8887, 43.2422], [96.3281, 42.9346], [96.416, 42.7588]]] } },
            { "type": "Feature", "properties": { "id": "54", "name": "西藏", "cp": [88.7695, 31.6846], "childNum": 7 }, "geometry": { "type": "Polygon", "coordinates": [[[79.0137, 34.3213], [79.1016, 34.4531], [79.8047, 34.4971], [79.8926, 34.8047], [80.2441, 35.2002], [80.332, 35.1563], [80.2441, 35.2881], [80.4199, 35.4199], [81.6504, 35.2441], [82.002, 35.332], [82.4414, 35.7275], [82.8809, 35.6836], [83.1445, 35.4199], [84.1992, 35.376], [85.0781, 35.7275], [85.6055, 35.6836], [86.1328, 35.8594], [86.2207, 36.167], [87.3633, 36.4307], [88.5938, 36.4746], [88.7695, 36.3428], [89.209, 36.2988], [89.7363, 36.0791], [89.3848, 36.0352], [89.4727, 35.9033], [89.7363, 35.7715], [89.7363, 35.4199], [89.4727, 35.376], [89.4727, 35.2441], [89.5605, 34.8926], [89.8242, 34.8486], [89.7363, 34.6729], [89.8242, 34.3652], [89.6484, 34.0137], [90.0879, 33.4863], [90.7031, 33.1348], [91.4063, 33.1348], [91.9336, 32.8271], [92.1973, 32.8271], [92.2852, 32.7393], [92.9883, 32.7393], [93.5156, 32.4756], [93.7793, 32.5635], [94.1309, 32.4316], [94.6582, 32.6074], [95.1855, 32.4316], [95.0098, 32.2998], [95.1855, 32.3438], [95.2734, 32.2119], [95.3613, 32.168], [95.3613, 31.9922], [95.4492, 31.8164], [95.8008, 31.6846], [95.9766, 31.8164], [96.1523, 31.5967], [96.2402, 31.9482], [96.5039, 31.7285], [96.8555, 31.6846], [96.7676, 31.9922], [97.2949, 32.0801], [97.3828, 32.5635], [97.7344, 32.5195], [98.1738, 32.3438], [98.4375, 31.8604], [98.877, 31.4209], [98.6133, 31.2012], [98.9648, 30.7617], [99.1406, 29.2676], [98.9648, 29.1357], [98.9648, 28.8281], [98.7891, 28.8721], [98.7891, 29.0039], [98.7012, 28.916], [98.6133, 28.5205], [98.7891, 28.3447], [98.7012, 28.2129], [98.3496, 28.125], [98.2617, 28.3887], [98.1738, 28.125], [97.5586, 28.5205], [97.2949, 28.0811], [97.3828, 27.9053], [97.0313, 27.7295], [96.5039, 28.125], [95.7129, 28.2568], [95.3613, 28.125], [95.2734, 27.9492], [94.2188, 27.5537], [93.8672, 27.0264], [93.6035, 26.9385], [92.1094, 26.8506], [92.0215, 27.4658], [91.582, 27.5537], [91.582, 27.9053], [91.4063, 28.0371], [91.0547, 27.8613], [90.7031, 28.0811], [89.8242, 28.2129], [89.6484, 28.1689], [89.1211, 27.5977], [89.1211, 27.334], [89.0332, 27.2021], [88.7695, 27.4219], [88.8574, 27.9932], [88.6816, 28.125], [88.1543, 27.9053], [87.8906, 27.9492], [87.7148, 27.8174], [87.0996, 27.8174], [86.748, 28.125], [86.5723, 28.125], [86.4844, 27.9053], [86.1328, 28.125], [86.0449, 27.9053], [85.6934, 28.3447], [85.6055, 28.2568], [85.166, 28.3447], [85.166, 28.6523], [84.9023, 28.5645], [84.4629, 28.7402], [84.2871, 28.8721], [84.1992, 29.2236], [84.1113, 29.2676], [83.584, 29.1797], [83.2324, 29.5752], [82.1777, 30.0586], [82.0898, 30.3223], [81.3867, 30.3662], [81.2109, 30.0146], [81.0352, 30.2344], [80.0684, 30.5859], [79.7168, 30.9375], [79.0137, 31.0693], [78.75, 31.333], [78.8379, 31.5967], [78.6621, 31.8164], [78.75, 31.9043], [78.4863, 32.124], [78.3984, 32.5195], [78.75, 32.6953], [78.9258, 32.3438], [79.2773, 32.5635], [79.1016, 33.1787], [78.6621, 33.6621], [78.6621, 34.1016], [78.9258, 34.1455], [79.0137, 34.3213]]] } },
            { "type": "Feature", "properties": { "id": "15", "name": "内蒙古", "cp": [117.5977, 44.3408], "childNum": 12 }, "geometry": { "type": "Polygon", "coordinates": [[[97.207, 42.8027], [99.4922, 42.583], [100.8105, 42.6709], [101.7773, 42.4951], [102.041, 42.2314], [102.7441, 42.1436], [103.3594, 41.8799], [103.8867, 41.792], [104.502, 41.8799], [104.502, 41.6602], [105.0293, 41.5723], [105.7324, 41.9238], [107.4023, 42.4512], [109.4238, 42.4512], [110.3906, 42.7588], [111.0059, 43.3301], [111.9727, 43.6816], [111.9727, 43.8135], [111.4453, 44.3848], [111.7969, 45], [111.9727, 45.0879], [113.6426, 44.7363], [114.1699, 44.9561], [114.5215, 45.3955], [115.6641, 45.4395], [116.1914, 45.7031], [116.2793, 45.9668], [116.543, 46.2744], [117.334, 46.3623], [117.4219, 46.582], [117.7734, 46.5381], [118.3008, 46.7578], [118.7402, 46.7139], [118.916, 46.7578], [119.0918, 46.6699], [119.707, 46.626], [119.9707, 46.7139], [119.707, 47.1973], [118.4766, 47.9883], [117.8613, 48.0322], [117.334, 47.6807], [116.8066, 47.9004], [116.1914, 47.8564], [115.9277, 47.6807], [115.5762, 47.9004], [115.4883, 48.1641], [115.8398, 48.252], [115.8398, 48.5596], [116.7188, 49.834], [117.7734, 49.5264], [118.5645, 49.9219], [119.2676, 50.0977], [119.3555, 50.3174], [119.1797, 50.3613], [119.5313, 50.7568], [119.5313, 50.8887], [119.707, 51.0645], [120.1465, 51.6797], [120.6738, 51.9434], [120.7617, 52.1191], [120.7617, 52.251], [120.5859, 52.3389], [120.6738, 52.5146], [120.4102, 52.6465], [120.0586, 52.6025], [120.0586, 52.7344], [120.8496, 53.2617], [121.4648, 53.3496], [121.8164, 53.042], [121.2012, 52.5586], [121.6406, 52.4268], [121.7285, 52.2949], [121.9922, 52.2949], [122.168, 52.5146], [122.6953, 52.251], [122.6074, 52.0752], [122.959, 51.3281], [123.3105, 51.2402], [123.6621, 51.3721], [124.3652, 51.2842], [124.541, 51.3721], [124.8926, 51.3721], [125.0684, 51.6357], [125.332, 51.6357], [126.0352, 51.0205], [125.7715, 50.7568], [125.7715, 50.5371], [125.332, 50.1416], [125.1563, 49.834], [125.2441, 49.1748], [124.8047, 49.1309], [124.4531, 48.1201], [124.2773, 48.5156], [122.4316, 47.373], [123.0469, 46.7139], [123.3984, 46.8896], [123.3984, 46.9775], [123.4863, 46.9775], [123.5742, 46.8457], [123.5742, 46.8896], [123.5742, 46.6699], [123.0469, 46.582], [123.2227, 46.2305], [122.7832, 46.0107], [122.6953, 45.7031], [122.4316, 45.8789], [122.2559, 45.791], [121.8164, 46.0107], [121.7285, 45.7471], [121.9043, 45.7031], [122.2559, 45.2637], [122.0801, 44.8682], [122.3438, 44.2529], [123.1348, 44.4727], [123.4863, 43.7256], [123.3105, 43.5059], [123.6621, 43.374], [123.5742, 43.0225], [123.3105, 42.9785], [123.1348, 42.8027], [122.7832, 42.7148], [122.3438, 42.8467], [122.3438, 42.6709], [121.9922, 42.7148], [121.7285, 42.4512], [121.4648, 42.4951], [120.498, 42.0996], [120.1465, 41.7041], [119.8828, 42.1875], [119.5313, 42.3633], [119.3555, 42.2754], [119.2676, 41.7041], [119.4434, 41.6162], [119.2676, 41.3086], [118.3887, 41.3086], [118.125, 41.748], [118.3008, 41.792], [118.3008, 42.0996], [118.125, 42.0557], [117.9492, 42.2314], [118.0371, 42.4072], [117.7734, 42.627], [117.5098, 42.583], [117.334, 42.4512], [116.8945, 42.4072], [116.8066, 42.0117], [116.2793, 42.0117], [116.0156, 41.792], [115.9277, 41.9238], [115.2246, 41.5723], [114.9609, 41.6162], [114.873, 42.0996], [114.5215, 42.1436], [114.1699, 41.792], [114.2578, 41.5723], [113.9063, 41.4404], [113.9941, 41.2207], [113.9063, 41.1328], [114.082, 40.7373], [114.082, 40.5176], [113.8184, 40.5176], [113.5547, 40.3418], [113.2031, 40.3857], [112.7637, 40.166], [112.3242, 40.2539], [111.9727, 39.5947], [111.4453, 39.6387], [111.3574, 39.4189], [111.0938, 39.375], [111.0938, 39.5947], [110.6543, 39.2871], [110.127, 39.4629], [110.2148, 39.2871], [109.8633, 39.2432], [109.9512, 39.1553], [108.9844, 38.3203], [109.0723, 38.0127], [108.8965, 37.9688], [108.8086, 38.0127], [108.7207, 37.7051], [108.1934, 37.6172], [107.666, 37.8809], [107.3145, 38.1006], [106.7871, 38.1885], [106.5234, 38.3203], [106.9629, 38.9795], [106.7871, 39.375], [106.3477, 39.2871], [105.9082, 38.7158], [105.8203, 37.793], [104.3262, 37.4414], [103.4473, 37.8369], [103.3594, 38.0127], [103.5352, 38.1445], [103.4473, 38.3643], [104.2383, 38.9795], [104.0625, 39.4189], [103.3594, 39.3311], [103.0078, 39.1113], [102.4805, 39.2432], [101.8652, 39.1113], [102.041, 38.8916], [101.7773, 38.6719], [101.3379, 38.7598], [101.25, 39.0234], [100.9863, 38.9355], [100.8105, 39.4189], [100.5469, 39.4189], [100.0195, 39.7705], [99.4922, 39.8584], [100.1074, 40.2539], [100.1953, 40.6494], [99.9316, 41.001], [99.2285, 40.8691], [99.0527, 40.6934], [98.9648, 40.7813], [98.7891, 40.6055], [98.5254, 40.7373], [98.6133, 40.6494], [98.3496, 40.5615], [98.3496, 40.9131], [97.4707, 41.4844], [97.8223, 41.6162], [97.8223, 41.748], [97.207, 42.8027]]] } },
            { "type": "Feature", "properties": { "id": "63", "name": "青海", "cp": [96.2402, 35.4199], "childNum": 8 }, "geometry": { "type": "Polygon", "coordinates": [[[89.7363, 36.0791], [89.9121, 36.0791], [90, 36.2549], [90.8789, 36.0352], [91.0547, 36.0791], [91.0547, 36.5186], [90.791, 36.6064], [90.7031, 36.7822], [91.3184, 37.0898], [91.0547, 37.4414], [90.5273, 37.8369], [90.6152, 38.3203], [90.3516, 38.2324], [90.1758, 38.4961], [92.373, 39.0234], [92.373, 39.1113], [93.1641, 39.1992], [93.1641, 38.9795], [93.6914, 38.9355], [93.8672, 38.7158], [94.3066, 38.7598], [94.5703, 38.3643], [95.0098, 38.4082], [95.4492, 38.2764], [95.7129, 38.3643], [96.2402, 38.1006], [96.416, 38.2324], [96.6797, 38.1885], [96.6797, 38.4521], [97.1191, 38.584], [97.0313, 39.1992], [98.1738, 38.8037], [98.3496, 39.0234], [98.6133, 38.9355], [98.7891, 39.0674], [99.1406, 38.9355], [99.8438, 38.3643], [100.1953, 38.2764], [100.0195, 38.4521], [100.1074, 38.4961], [100.459, 38.2764], [100.7227, 38.2324], [101.1621, 37.8369], [101.5137, 37.8809], [101.7773, 37.6172], [101.9531, 37.7051], [102.1289, 37.4414], [102.5684, 37.1777], [102.4805, 36.958], [102.6563, 36.8262], [102.5684, 36.7383], [102.832, 36.3428], [103.0078, 36.2549], [102.9199, 36.0791], [102.9199, 35.9033], [102.6563, 35.7715], [102.832, 35.5957], [102.4805, 35.5957], [102.3047, 35.4199], [102.3926, 35.2002], [101.9531, 34.8486], [101.9531, 34.6289], [102.2168, 34.4092], [102.1289, 34.2773], [101.6895, 34.1016], [100.9863, 34.3652], [100.8105, 34.2773], [101.25, 33.6621], [101.5137, 33.7061], [101.6016, 33.5303], [101.7773, 33.5303], [101.6895, 33.3105], [101.7773, 33.2227], [101.6016, 33.1348], [101.1621, 33.2227], [101.25, 32.6953], [100.7227, 32.6514], [100.7227, 32.5195], [100.3711, 32.7393], [100.1074, 32.6514], [100.1074, 32.8711], [99.8438, 33.0029], [99.7559, 32.7393], [99.2285, 32.915], [99.2285, 33.0469], [98.877, 33.1787], [98.4375, 34.0576], [97.8223, 34.1895], [97.6465, 34.1016], [97.7344, 33.9258], [97.3828, 33.8818], [97.4707, 33.5742], [97.7344, 33.3984], [97.3828, 32.8711], [97.4707, 32.6953], [97.7344, 32.5195], [97.3828, 32.5635], [97.2949, 32.0801], [96.7676, 31.9922], [96.8555, 31.6846], [96.5039, 31.7285], [96.2402, 31.9482], [96.1523, 31.5967], [95.9766, 31.8164], [95.8008, 31.6846], [95.4492, 31.8164], [95.3613, 31.9922], [95.3613, 32.168], [95.2734, 32.2119], [95.1855, 32.3438], [95.0098, 32.2998], [95.1855, 32.4316], [94.6582, 32.6074], [94.1309, 32.4316], [93.7793, 32.5635], [93.5156, 32.4756], [92.9883, 32.7393], [92.2852, 32.7393], [92.1973, 32.8271], [91.9336, 32.8271], [91.4063, 33.1348], [90.7031, 33.1348], [90.0879, 33.4863], [89.6484, 34.0137], [89.8242, 34.3652], [89.7363, 34.6729], [89.8242, 34.8486], [89.5605, 34.8926], [89.4727, 35.2441], [89.4727, 35.376], [89.7363, 35.4199], [89.7363, 35.7715], [89.4727, 35.9033], [89.3848, 36.0352], [89.7363, 36.0791]]] } },
            { "type": "Feature", "properties": { "id": "51", "name": "四川", "cp": [102.9199, 30.1904], "childNum": 21 }, "geometry": { "type": "Polygon", "coordinates": [[[101.7773, 33.5303], [101.8652, 33.5742], [101.9531, 33.4424], [101.8652, 33.0908], [102.4805, 33.4424], [102.2168, 33.9258], [102.9199, 34.3213], [103.0957, 34.1895], [103.1836, 33.7939], [104.1504, 33.6182], [104.2383, 33.3984], [104.4141, 33.3105], [104.3262, 33.2227], [104.4141, 33.0469], [104.3262, 32.8711], [104.4141, 32.7393], [105.2051, 32.6074], [105.3809, 32.7393], [105.3809, 32.8711], [105.4688, 32.915], [105.5566, 32.7393], [106.084, 32.8711], [106.084, 32.7393], [106.3477, 32.6514], [107.0508, 32.6953], [107.1387, 32.4756], [107.2266, 32.4316], [107.4023, 32.5195], [108.0176, 32.168], [108.2813, 32.2559], [108.5449, 32.2119], [108.3691, 32.168], [108.2813, 31.9043], [108.5449, 31.6846], [108.1934, 31.5088], [107.9297, 30.8496], [107.4902, 30.8496], [107.4023, 30.7617], [107.4902, 30.6299], [107.0508, 30.0146], [106.7871, 30.0146], [106.6113, 30.3223], [106.2598, 30.1904], [105.8203, 30.4541], [105.6445, 30.2783], [105.5566, 30.1025], [105.7324, 29.8828], [105.293, 29.5313], [105.4688, 29.3115], [105.7324, 29.2676], [105.8203, 28.96], [106.2598, 28.8721], [106.3477, 28.5205], [105.9961, 28.7402], [105.6445, 28.4326], [105.9082, 28.125], [106.1719, 28.125], [106.3477, 27.8174], [105.6445, 27.6416], [105.5566, 27.7734], [105.293, 27.7295], [105.2051, 27.9932], [105.0293, 28.0811], [104.8535, 27.9053], [104.4141, 27.9492], [104.3262, 28.0371], [104.4141, 28.125], [104.4141, 28.2568], [104.2383, 28.4326], [104.4141, 28.6084], [103.8867, 28.6523], [103.7988, 28.3008], [103.4473, 28.125], [103.4473, 27.7734], [102.9199, 27.29], [103.0078, 26.3672], [102.6563, 26.1914], [102.5684, 26.3672], [102.1289, 26.1035], [101.8652, 26.0596], [101.6016, 26.2354], [101.6895, 26.3672], [101.4258, 26.5869], [101.4258, 26.8066], [101.4258, 26.7188], [101.1621, 27.0264], [101.1621, 27.1582], [100.7227, 27.8613], [100.3711, 27.8174], [100.2832, 27.7295], [100.0195, 28.125], [100.1953, 28.3447], [99.668, 28.8281], [99.4043, 28.5205], [99.4043, 28.1689], [99.2285, 28.3008], [99.1406, 29.2676], [98.9648, 30.7617], [98.6133, 31.2012], [98.877, 31.4209], [98.4375, 31.8604], [98.1738, 32.3438], [97.7344, 32.5195], [97.4707, 32.6953], [97.3828, 32.8711], [97.7344, 33.3984], [97.4707, 33.5742], [97.3828, 33.8818], [97.7344, 33.9258], [97.6465, 34.1016], [97.8223, 34.1895], [98.4375, 34.0576], [98.877, 33.1787], [99.2285, 33.0469], [99.2285, 32.915], [99.7559, 32.7393], [99.8438, 33.0029], [100.1074, 32.8711], [100.1074, 32.6514], [100.3711, 32.7393], [100.7227, 32.5195], [100.7227, 32.6514], [101.25, 32.6953], [101.1621, 33.2227], [101.6016, 33.1348], [101.7773, 33.2227], [101.6895, 33.3105], [101.7773, 33.5303]]] } },
            { "type": "Feature", "properties": { "id": "23", "name": "黑龙江", "cp": [128.1445, 48.5156], "childNum": 13 }, "geometry": { "type": "Polygon", "coordinates": [[[121.4648, 53.3496], [123.6621, 53.5693], [124.8926, 53.0859], [125.0684, 53.2178], [125.5957, 53.0859], [125.6836, 52.9102], [126.123, 52.7783], [126.0352, 52.6025], [126.2109, 52.5146], [126.3867, 52.2949], [126.3867, 52.207], [126.5625, 52.1631], [126.4746, 51.9434], [126.9141, 51.3721], [126.8262, 51.2842], [127.002, 51.3281], [126.9141, 51.1084], [127.2656, 50.7568], [127.3535, 50.2734], [127.6172, 50.2295], [127.5293, 49.8779], [127.793, 49.6143], [128.7598, 49.5703], [129.1113, 49.3506], [129.4629, 49.4385], [130.2539, 48.8672], [130.6934, 48.8672], [130.5176, 48.6475], [130.8691, 48.2959], [130.6934, 48.1201], [131.0449, 47.6807], [132.5391, 47.7246], [132.627, 47.9443], [133.0664, 48.1201], [133.5059, 48.1201], [134.209, 48.3838], [135.0879, 48.4277], [134.7363, 48.252], [134.5605, 47.9883], [134.7363, 47.6807], [134.5605, 47.4609], [134.3848, 47.4609], [134.209, 47.2852], [134.209, 47.1533], [133.8574, 46.5381], [133.9453, 46.2744], [133.5059, 45.835], [133.418, 45.5713], [133.2422, 45.5273], [133.0664, 45.1318], [132.8906, 45.0439], [131.9238, 45.3516], [131.5723, 45.0439], [131.0449, 44.8682], [131.3086, 44.0771], [131.2207, 43.7256], [131.3086, 43.4619], [130.8691, 43.418], [130.5176, 43.6377], [130.3418, 43.9893], [129.9902, 43.8574], [129.9023, 44.0332], [129.8145, 43.9014], [129.2871, 43.8135], [129.1992, 43.5938], [128.8477, 43.5498], [128.4961, 44.165], [128.4082, 44.4727], [128.0566, 44.3408], [128.0566, 44.1211], [127.7051, 44.1211], [127.5293, 44.6045], [127.0898, 44.6045], [127.002, 44.7803], [127.0898, 45], [126.9141, 45.1318], [126.5625, 45.2637], [126.0352, 45.1758], [125.7715, 45.3076], [125.6836, 45.5273], [125.0684, 45.3955], [124.8926, 45.5273], [124.3652, 45.4395], [124.0137, 45.7471], [123.9258, 46.2305], [123.2227, 46.2305], [123.0469, 46.582], [123.5742, 46.6699], [123.5742, 46.8896], [123.5742, 46.8457], [123.4863, 46.9775], [123.3984, 46.9775], [123.3984, 46.8896], [123.0469, 46.7139], [122.4316, 47.373], [124.2773, 48.5156], [124.4531, 48.1201], [124.8047, 49.1309], [125.2441, 49.1748], [125.1563, 49.834], [125.332, 50.1416], [125.7715, 50.5371], [125.7715, 50.7568], [126.0352, 51.0205], [125.332, 51.6357], [125.0684, 51.6357], [124.8926, 51.3721], [124.541, 51.3721], [124.3652, 51.2842], [123.6621, 51.3721], [123.3105, 51.2402], [122.959, 51.3281], [122.6074, 52.0752], [122.6953, 52.251], [122.168, 52.5146], [121.9922, 52.2949], [121.7285, 52.2949], [121.6406, 52.4268], [121.2012, 52.5586], [121.8164, 53.042], [121.4648, 53.3496]]] } },
            { "type": "Feature", "properties": { "id": "62", "name": "甘肃", "cp": [95.7129, 40.166], "childNum": 14 }, "geometry": { "type": "Polygon", "coordinates": [[[96.416, 42.7148], [97.207, 42.8027], [97.8223, 41.748], [97.8223, 41.6162], [97.4707, 41.4844], [98.3496, 40.9131], [98.3496, 40.5615], [98.6133, 40.6494], [98.5254, 40.7373], [98.7891, 40.6055], [98.9648, 40.7813], [99.0527, 40.6934], [99.2285, 40.8691], [99.9316, 41.001], [100.1953, 40.6494], [100.1074, 40.2539], [99.4922, 39.8584], [100.0195, 39.7705], [100.5469, 39.4189], [100.8105, 39.4189], [100.9863, 38.9355], [101.25, 39.0234], [101.3379, 38.7598], [101.7773, 38.6719], [102.041, 38.8916], [101.8652, 39.1113], [102.4805, 39.2432], [103.0078, 39.1113], [103.3594, 39.3311], [104.0625, 39.4189], [104.2383, 38.9795], [103.4473, 38.3643], [103.5352, 38.1445], [103.3594, 38.0127], [103.4473, 37.8369], [104.3262, 37.4414], [104.5898, 37.4414], [104.5898, 37.2217], [104.8535, 37.2217], [105.293, 36.8262], [105.2051, 36.6943], [105.4688, 36.123], [105.293, 35.9912], [105.3809, 35.7715], [105.7324, 35.7275], [105.8203, 35.5518], [105.9961, 35.4639], [105.9082, 35.4199], [105.9961, 35.4199], [106.084, 35.376], [106.2598, 35.4199], [106.3477, 35.2441], [106.5234, 35.332], [106.4355, 35.6836], [106.6992, 35.6836], [106.9629, 35.8154], [106.875, 36.123], [106.5234, 36.2549], [106.5234, 36.4746], [106.4355, 36.5625], [106.6113, 36.7822], [106.6113, 37.0898], [107.3145, 37.0898], [107.3145, 36.9141], [108.7207, 36.3428], [108.6328, 35.9912], [108.5449, 35.8594], [108.6328, 35.5518], [108.5449, 35.2881], [107.7539, 35.2881], [107.7539, 35.1123], [107.8418, 35.0244], [107.666, 34.9365], [107.2266, 34.8926], [106.9629, 35.0684], [106.6113, 35.0684], [106.5234, 34.7607], [106.3477, 34.585], [106.6992, 34.3213], [106.5234, 34.2773], [106.6113, 34.1455], [106.4355, 33.9258], [106.5234, 33.5303], [105.9961, 33.6182], [105.7324, 33.3984], [105.9961, 33.1787], [105.9082, 33.0029], [105.4688, 32.915], [105.3809, 32.8711], [105.3809, 32.7393], [105.2051, 32.6074], [104.4141, 32.7393], [104.3262, 32.8711], [104.4141, 33.0469], [104.3262, 33.2227], [104.4141, 33.3105], [104.2383, 33.3984], [104.1504, 33.6182], [103.1836, 33.7939], [103.0957, 34.1895], [102.9199, 34.3213], [102.2168, 33.9258], [102.4805, 33.4424], [101.8652, 33.0908], [101.9531, 33.4424], [101.8652, 33.5742], [101.7773, 33.5303], [101.6016, 33.5303], [101.5137, 33.7061], [101.25, 33.6621], [100.8105, 34.2773], [100.9863, 34.3652], [101.6895, 34.1016], [102.1289, 34.2773], [102.2168, 34.4092], [101.9531, 34.6289], [101.9531, 34.8486], [102.3926, 35.2002], [102.3047, 35.4199], [102.4805, 35.5957], [102.832, 35.5957], [102.6563, 35.7715], [102.9199, 35.9033], [102.9199, 36.0791], [103.0078, 36.2549], [102.832, 36.3428], [102.5684, 36.7383], [102.6563, 36.8262], [102.4805, 36.958], [102.5684, 37.1777], [102.1289, 37.4414], [101.9531, 37.7051], [101.7773, 37.6172], [101.5137, 37.8809], [101.1621, 37.8369], [100.7227, 38.2324], [100.459, 38.2764], [100.1074, 38.4961], [100.0195, 38.4521], [100.1953, 38.2764], [99.8438, 38.3643], [99.1406, 38.9355], [98.7891, 39.0674], [98.6133, 38.9355], [98.3496, 39.0234], [98.1738, 38.8037], [97.0313, 39.1992], [97.1191, 38.584], [96.6797, 38.4521], [96.6797, 38.1885], [96.416, 38.2324], [96.2402, 38.1006], [95.7129, 38.3643], [95.4492, 38.2764], [95.0098, 38.4082], [94.5703, 38.3643], [94.3066, 38.7598], [93.8672, 38.7158], [93.6914, 38.9355], [93.1641, 38.9795], [93.1641, 39.1992], [92.373, 39.1113], [92.373, 39.3311], [92.6367, 39.6387], [93.0762, 40.6494], [93.8672, 40.6934], [94.043, 41.0889], [94.5703, 41.4844], [95.1855, 41.792], [95.2734, 41.6162], [95.9766, 41.9238], [96.2402, 42.2314], [96.0645, 42.3193], [95.9766, 42.4951], [96.416, 42.7148]]] } },
            { "type": "Feature", "properties": { "id": "53", "name": "云南", "cp": [101.8652, 25.1807], "childNum": 16 }, "geometry": { "type": "Polygon", "coordinates": [[[98.1738, 28.125], [98.2617, 28.3887], [98.3496, 28.125], [98.7012, 28.2129], [98.7891, 28.3447], [98.6133, 28.5205], [98.7012, 28.916], [98.7891, 29.0039], [98.7891, 28.8721], [98.9648, 28.8281], [98.9648, 29.1357], [99.1406, 29.2676], [99.2285, 28.3008], [99.4043, 28.1689], [99.4043, 28.5205], [99.668, 28.8281], [100.1953, 28.3447], [100.0195, 28.125], [100.2832, 27.7295], [100.3711, 27.8174], [100.7227, 27.8613], [101.1621, 27.1582], [101.1621, 27.0264], [101.4258, 26.7188], [101.4258, 26.8066], [101.4258, 26.5869], [101.6895, 26.3672], [101.6016, 26.2354], [101.8652, 26.0596], [102.1289, 26.1035], [102.5684, 26.3672], [102.6563, 26.1914], [103.0078, 26.3672], [102.9199, 27.29], [103.4473, 27.7734], [103.4473, 28.125], [103.7988, 28.3008], [103.8867, 28.6523], [104.4141, 28.6084], [104.2383, 28.4326], [104.4141, 28.2568], [104.4141, 28.125], [104.3262, 28.0371], [104.4141, 27.9492], [104.8535, 27.9053], [105.0293, 28.0811], [105.2051, 27.9932], [105.293, 27.7295], [105.2051, 27.3779], [104.5898, 27.334], [104.4141, 27.4658], [104.1504, 27.2461], [103.8867, 27.4219], [103.623, 27.0264], [103.7109, 26.9824], [103.7109, 26.7627], [103.8867, 26.543], [104.4141, 26.6748], [104.6777, 26.4111], [104.3262, 25.708], [104.8535, 25.2246], [104.5898, 25.0488], [104.6777, 24.9609], [104.502, 24.7412], [104.6777, 24.3457], [104.7656, 24.4775], [105.0293, 24.4336], [105.2051, 24.082], [105.4688, 24.0381], [105.5566, 24.126], [105.9961, 24.126], [106.1719, 23.8184], [106.1719, 23.5547], [105.6445, 23.4229], [105.5566, 23.2031], [105.293, 23.3789], [104.8535, 23.1592], [104.7656, 22.8516], [104.3262, 22.6758], [104.1504, 22.8076], [103.9746, 22.5439], [103.623, 22.7637], [103.5352, 22.5879], [103.3594, 22.8076], [103.0957, 22.4561], [102.4805, 22.7637], [102.3047, 22.4121], [101.8652, 22.3682], [101.7773, 22.5], [101.6016, 22.1924], [101.8652, 21.6211], [101.7773, 21.1377], [101.6016, 21.2256], [101.25, 21.1816], [101.1621, 21.7529], [100.6348, 21.4453], [100.1074, 21.4893], [99.9316, 22.0605], [99.2285, 22.1484], [99.4043, 22.5879], [99.3164, 22.7197], [99.4922, 23.0713], [98.877, 23.2031], [98.7012, 23.9502], [98.877, 24.126], [98.1738, 24.082], [97.7344, 23.8623], [97.5586, 23.9063], [97.7344, 24.126], [97.6465, 24.4336], [97.5586, 24.4336], [97.5586, 24.7412], [97.7344, 24.8291], [97.8223, 25.2686], [98.1738, 25.4004], [98.1738, 25.6201], [98.3496, 25.5762], [98.5254, 25.8398], [98.7012, 25.8838], [98.6133, 26.0596], [98.7012, 26.1475], [98.7891, 26.5869], [98.7012, 27.5098], [98.5254, 27.6416], [98.3496, 27.5098], [98.1738, 28.125]]] } },
            { "type": "Feature", "properties": { "id": "45", "name": "广西", "cp": [108.2813, 23.6426], "childNum": 14 }, "geometry": { "type": "Polygon", "coordinates": [[[104.502, 24.7412], [104.6777, 24.6094], [105.2051, 24.9609], [105.9961, 24.6533], [106.1719, 24.7852], [106.1719, 24.9609], [106.875, 25.1807], [107.0508, 25.2686], [106.9629, 25.4883], [107.2266, 25.6201], [107.4902, 25.2246], [107.7539, 25.2246], [107.8418, 25.1367], [108.1055, 25.2246], [108.1934, 25.4443], [108.3691, 25.5322], [108.6328, 25.3125], [108.6328, 25.5762], [109.0723, 25.5322], [108.9844, 25.752], [109.3359, 25.708], [109.5117, 26.0156], [109.7754, 25.8838], [109.9512, 26.1914], [110.2148, 25.9717], [110.5664, 26.3232], [111.1816, 26.3232], [111.2695, 26.2354], [111.2695, 25.8838], [111.4453, 25.8398], [111.0059, 25.0049], [111.0938, 24.9609], [111.3574, 25.1367], [111.5332, 24.6533], [111.709, 24.7852], [112.0605, 24.7412], [111.8848, 24.6533], [112.0605, 24.3457], [111.8848, 24.2139], [111.8848, 23.9941], [111.7969, 23.8184], [111.6211, 23.8184], [111.6211, 23.6865], [111.3574, 23.4668], [111.4453, 23.0273], [111.2695, 22.8076], [110.7422, 22.5439], [110.7422, 22.2803], [110.6543, 22.1484], [110.3027, 22.1484], [110.3027, 21.8848], [109.9512, 21.8408], [109.8633, 21.665], [109.7754, 21.6211], [109.7754, 21.4014], [109.5996, 21.4453], [109.1602, 21.3574], [109.248, 20.874], [109.0723, 20.9619], [109.0723, 21.5332], [108.7207, 21.5332], [108.6328, 21.665], [108.2813, 21.4893], [107.8418, 21.6211], [107.4023, 21.6211], [107.0508, 21.7969], [107.0508, 21.9287], [106.6992, 22.0166], [106.6113, 22.4121], [106.7871, 22.7637], [106.6992, 22.8955], [105.9082, 22.9395], [105.5566, 23.0713], [105.5566, 23.2031], [105.6445, 23.4229], [106.1719, 23.5547], [106.1719, 23.8184], [105.9961, 24.126], [105.5566, 24.126], [105.4688, 24.0381], [105.2051, 24.082], [105.0293, 24.4336], [104.7656, 24.4775], [104.6777, 24.3457], [104.502, 24.7412]]] } },
            { "type": "Feature", "properties": { "id": "43", "name": "湖南", "cp": [111.5332, 27.3779], "childNum": 14 }, "geometry": { "type": "Polygon", "coordinates": [[[109.248, 28.4766], [109.248, 29.1357], [109.5117, 29.6191], [109.6875, 29.6191], [109.7754, 29.751], [110.4785, 29.6631], [110.6543, 29.751], [110.4785, 30.0146], [110.8301, 30.1465], [111.7969, 29.9268], [112.2363, 29.5313], [112.5, 29.6191], [112.6758, 29.5752], [112.9395, 29.7949], [113.0273, 29.751], [112.9395, 29.4873], [113.0273, 29.4434], [113.5547, 29.8389], [113.5547, 29.707], [113.7305, 29.5752], [113.6426, 29.3115], [113.7305, 29.0918], [113.9063, 29.0479], [114.1699, 28.8281], [114.082, 28.5645], [114.2578, 28.3447], [113.7305, 27.9492], [113.6426, 27.5977], [113.6426, 27.3779], [113.8184, 27.29], [113.7305, 27.1143], [113.9063, 26.9385], [113.9063, 26.6309], [114.082, 26.5869], [113.9941, 26.1914], [114.2578, 26.1475], [113.9941, 26.0596], [113.9063, 25.4443], [113.6426, 25.3125], [113.2031, 25.5322], [112.8516, 25.3564], [113.0273, 25.2246], [113.0273, 24.9609], [112.8516, 24.917], [112.5879, 25.1367], [112.2363, 25.1807], [112.1484, 24.873], [112.0605, 24.7412], [111.709, 24.7852], [111.5332, 24.6533], [111.3574, 25.1367], [111.0938, 24.9609], [111.0059, 25.0049], [111.4453, 25.8398], [111.2695, 25.8838], [111.2695, 26.2354], [111.1816, 26.3232], [110.5664, 26.3232], [110.2148, 25.9717], [109.9512, 26.1914], [109.7754, 25.8838], [109.5117, 26.0156], [109.4238, 26.2793], [109.248, 26.3232], [109.4238, 26.5869], [109.3359, 26.7188], [109.5117, 26.8066], [109.5117, 27.0264], [109.3359, 27.1582], [108.8965, 27.0264], [108.8086, 27.1143], [109.4238, 27.5977], [109.3359, 27.9053], [109.3359, 28.2568], [109.248, 28.4766]]] } },
            { "type": "Feature", "properties": { "id": "61", "name": "陕西", "cp": [109.5996, 35.6396], "childNum": 10 }, "geometry": { "type": "Polygon", "coordinates": [[[105.4688, 32.915], [105.9082, 33.0029], [105.9961, 33.1787], [105.7324, 33.3984], [105.9961, 33.6182], [106.5234, 33.5303], [106.4355, 33.9258], [106.6113, 34.1455], [106.5234, 34.2773], [106.6992, 34.3213], [106.3477, 34.585], [106.5234, 34.7607], [106.6113, 35.0684], [106.9629, 35.0684], [107.2266, 34.8926], [107.666, 34.9365], [107.8418, 35.0244], [107.7539, 35.1123], [107.7539, 35.2881], [108.5449, 35.2881], [108.6328, 35.5518], [108.5449, 35.8594], [108.6328, 35.9912], [108.7207, 36.3428], [107.3145, 36.9141], [107.3145, 37.0898], [107.3145, 37.6172], [107.666, 37.8809], [108.1934, 37.6172], [108.7207, 37.7051], [108.8086, 38.0127], [108.8965, 37.9688], [109.0723, 38.0127], [108.9844, 38.3203], [109.9512, 39.1553], [109.8633, 39.2432], [110.2148, 39.2871], [110.127, 39.4629], [110.6543, 39.2871], [111.0938, 39.5947], [111.0938, 39.375], [111.1816, 39.2432], [110.918, 38.7158], [110.8301, 38.4961], [110.4785, 38.1885], [110.4785, 37.9688], [110.8301, 37.6611], [110.3906, 37.002], [110.4785, 36.123], [110.5664, 35.6396], [110.2148, 34.8926], [110.2148, 34.6729], [110.3906, 34.585], [110.4785, 34.2334], [110.6543, 34.1455], [110.6543, 33.8379], [111.0059, 33.5303], [111.0059, 33.2666], [110.7422, 33.1348], [110.5664, 33.2666], [110.3027, 33.1787], [109.5996, 33.2666], [109.4238, 33.1348], [109.7754, 33.0469], [109.7754, 32.915], [110.127, 32.7393], [110.127, 32.6074], [109.6875, 32.6074], [109.5117, 32.4316], [109.5996, 31.7285], [109.248, 31.7285], [109.0723, 31.9482], [108.5449, 32.2119], [108.2813, 32.2559], [108.0176, 32.168], [107.4023, 32.5195], [107.2266, 32.4316], [107.1387, 32.4756], [107.0508, 32.6953], [106.3477, 32.6514], [106.084, 32.7393], [106.084, 32.8711], [105.5566, 32.7393], [105.4688, 32.915]]] } },
            { "type": "Feature", "properties": { "id": "44", "name": "广东", "cp": [113.4668, 22.8076], "childNum": 21 }, "geometry": { "type": "Polygon", "coordinates": [[[109.7754, 21.4014], [109.7754, 21.6211], [109.8633, 21.665], [109.9512, 21.8408], [110.3027, 21.8848], [110.3027, 22.1484], [110.6543, 22.1484], [110.7422, 22.2803], [110.7422, 22.5439], [111.2695, 22.8076], [111.4453, 23.0273], [111.3574, 23.4668], [111.6211, 23.6865], [111.6211, 23.8184], [111.7969, 23.8184], [111.8848, 23.9941], [111.8848, 24.2139], [112.0605, 24.3457], [111.8848, 24.6533], [112.0605, 24.7412], [112.1484, 24.873], [112.2363, 25.1807], [112.5879, 25.1367], [112.8516, 24.917], [113.0273, 24.9609], [113.0273, 25.2246], [112.8516, 25.3564], [113.2031, 25.5322], [113.6426, 25.3125], [113.9063, 25.4443], [113.9941, 25.2686], [114.6094, 25.4004], [114.7852, 25.2686], [114.6973, 25.1367], [114.4336, 24.9609], [114.1699, 24.6973], [114.4336, 24.5215], [115.4004, 24.7852], [115.8398, 24.5654], [115.752, 24.7852], [115.9277, 24.917], [116.2793, 24.7852], [116.3672, 24.873], [116.543, 24.6094], [116.7188, 24.6533], [116.9824, 24.1699], [116.9824, 23.9063], [117.1582, 23.5547], [117.334, 23.2471], [116.8945, 23.3789], [116.6309, 23.1152], [116.543, 22.8516], [115.9277, 22.7197], [115.6641, 22.7637], [115.5762, 22.6318], [115.0488, 22.6758], [114.6094, 22.3682], [114.3457, 22.5439], [113.9941, 22.5], [113.8184, 22.1924], [114.3457, 22.1484], [114.4336, 22.0166], [114.082, 21.9287], [113.9941, 21.7969], [113.5547, 22.0166], [113.1152, 21.8408], [112.9395, 21.5771], [112.4121, 21.4453], [112.2363, 21.5332], [111.5332, 21.4893], [111.2695, 21.3574], [110.7422, 21.3574], [110.6543, 21.2256], [110.7422, 20.918], [110.4785, 20.874], [110.6543, 20.2588], [110.5664, 20.2588], [110.3906, 20.127], [110.0391, 20.127], [109.8633, 20.127], [109.8633, 20.3027], [109.5996, 20.918], [109.7754, 21.4014], [109.7754, 21.4014]], [[113.5986, 22.1649], [113.6096, 22.1265], [113.5547, 22.11], [113.5437, 22.2034], [113.5767, 22.2034], [113.5986, 22.1649]]] } },
            { "type": "Feature", "properties": { "id": "22", "name": "吉林", "cp": [126.4746, 43.5938], "childNum": 9 }, "geometry": { "type": "Polygon", "coordinates": [[[123.2227, 46.2305], [123.9258, 46.2305], [124.0137, 45.7471], [124.3652, 45.4395], [124.8926, 45.5273], [125.0684, 45.3955], [125.6836, 45.5273], [125.7715, 45.3076], [126.0352, 45.1758], [126.5625, 45.2637], [126.9141, 45.1318], [127.0898, 45], [127.002, 44.7803], [127.0898, 44.6045], [127.5293, 44.6045], [127.7051, 44.1211], [128.0566, 44.1211], [128.0566, 44.3408], [128.4082, 44.4727], [128.4961, 44.165], [128.8477, 43.5498], [129.1992, 43.5938], [129.2871, 43.8135], [129.8145, 43.9014], [129.9023, 44.0332], [129.9902, 43.8574], [130.3418, 43.9893], [130.5176, 43.6377], [130.8691, 43.418], [131.3086, 43.4619], [131.3086, 43.3301], [131.1328, 42.9346], [130.4297, 42.7148], [130.6055, 42.6709], [130.6055, 42.4512], [130.2539, 42.7588], [130.2539, 42.8906], [130.166, 42.9785], [129.9023, 43.0225], [129.7266, 42.4951], [129.375, 42.4512], [128.9355, 42.0117], [128.0566, 42.0117], [128.3203, 41.5723], [128.1445, 41.3525], [127.0898, 41.5283], [127.1777, 41.5723], [126.9141, 41.792], [126.6504, 41.6602], [126.4746, 41.3965], [126.123, 40.957], [125.6836, 40.8691], [125.5957, 40.9131], [125.7715, 41.2207], [125.332, 41.6602], [125.332, 41.9678], [125.4199, 42.0996], [125.332, 42.1436], [124.8926, 42.8027], [124.8926, 43.0664], [124.7168, 43.0664], [124.4531, 42.8467], [124.2773, 43.2422], [123.8379, 43.4619], [123.6621, 43.374], [123.3105, 43.5059], [123.4863, 43.7256], [123.1348, 44.4727], [122.3438, 44.2529], [122.0801, 44.8682], [122.2559, 45.2637], [121.9043, 45.7031], [121.7285, 45.7471], [121.8164, 46.0107], [122.2559, 45.791], [122.4316, 45.8789], [122.6953, 45.7031], [122.7832, 46.0107], [123.2227, 46.2305]]] } },
            { "type": "Feature", "properties": { "id": "13", "name": "河北", "cp": [115.4004, 37.9688], "childNum": 11 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[114.5215, 39.5068], [114.3457, 39.8584], [113.9941, 39.9902], [114.5215, 40.3418], [114.3457, 40.3857], [114.2578, 40.6055], [114.082, 40.7373], [113.9063, 41.1328], [113.9941, 41.2207], [113.9063, 41.4404], [114.2578, 41.5723], [114.1699, 41.792], [114.5215, 42.1436], [114.873, 42.0996], [114.9609, 41.6162], [115.2246, 41.5723], [115.9277, 41.9238], [116.0156, 41.792], [116.2793, 42.0117], [116.8066, 42.0117], [116.8945, 42.4072], [117.334, 42.4512], [117.5098, 42.583], [117.7734, 42.627], [118.0371, 42.4072], [117.9492, 42.2314], [118.125, 42.0557], [118.3008, 42.0996], [118.3008, 41.792], [118.125, 41.748], [118.3887, 41.3086], [119.2676, 41.3086], [118.8281, 40.8252], [119.2676, 40.5176], [119.5313, 40.5615], [119.707, 40.1221], [119.8828, 39.9463], [119.5313, 39.6826], [119.4434, 39.4189], [118.916, 39.0674], [118.4766, 38.9355], [118.125, 39.0234], [118.0371, 39.1992], [118.0371, 39.2432], [117.8613, 39.4189], [117.9492, 39.5947], [117.6855, 39.5947], [117.5098, 39.7705], [117.5098, 39.9902], [117.6855, 39.9902], [117.6855, 40.0781], [117.4219, 40.21], [117.2461, 40.5176], [117.4219, 40.6494], [116.9824, 40.6934], [116.6309, 41.0449], [116.3672, 40.9131], [116.4551, 40.7813], [116.1914, 40.7813], [116.1035, 40.6055], [115.752, 40.5615], [115.9277, 40.2539], [115.4004, 39.9463], [115.4883, 39.6387], [115.752, 39.5068], [116.1914, 39.5947], [116.3672, 39.4629], [116.543, 39.5947], [116.8066, 39.5947], [116.8945, 39.1113], [116.7188, 38.9355], [116.7188, 38.8037], [117.2461, 38.54], [117.5977, 38.6279], [117.9492, 38.3203], [117.4219, 37.8369], [116.8066, 37.8369], [116.4551, 37.4854], [116.2793, 37.5732], [116.2793, 37.3535], [116.0156, 37.3535], [115.752, 36.9141], [115.3125, 36.5186], [115.4883, 36.167], [115.3125, 36.0791], [115.1367, 36.2109], [114.9609, 36.0791], [114.873, 36.123], [113.7305, 36.3428], [113.4668, 36.6504], [113.7305, 36.8701], [113.7305, 37.1338], [114.1699, 37.6611], [113.9941, 37.7051], [113.8184, 38.1445], [113.5547, 38.2764], [113.5547, 38.54], [113.8184, 38.8037], [113.8184, 38.9355], [113.9063, 39.0234], [114.3457, 39.0674], [114.5215, 39.5068]]], [[[117.2461, 40.0781], [117.1582, 39.8145], [117.1582, 39.6387], [116.8945, 39.6826], [116.8945, 39.8145], [116.8066, 39.9902], [117.2461, 40.0781]]]] } },
            { "type": "Feature", "properties": { "id": "42", "name": "湖北", "cp": [112.2363, 31.1572], "childNum": 17 }, "geometry": { "type": "Polygon", "coordinates": [[[110.2148, 31.1572], [110.127, 31.377], [109.6875, 31.5527], [109.7754, 31.6846], [109.5996, 31.7285], [109.5117, 32.4316], [109.6875, 32.6074], [110.127, 32.6074], [110.127, 32.7393], [109.7754, 32.915], [109.7754, 33.0469], [109.4238, 33.1348], [109.5996, 33.2666], [110.3027, 33.1787], [110.5664, 33.2666], [110.7422, 33.1348], [111.0059, 33.2666], [111.5332, 32.6074], [112.3242, 32.3438], [113.2031, 32.4316], [113.4668, 32.2998], [113.7305, 32.4316], [113.8184, 31.8604], [113.9941, 31.7725], [114.1699, 31.8604], [114.5215, 31.7725], [114.6094, 31.5527], [114.7852, 31.4648], [115.1367, 31.5967], [115.2246, 31.4209], [115.4004, 31.4209], [115.5762, 31.2012], [116.0156, 31.0254], [115.752, 30.6738], [116.1035, 30.1904], [116.1035, 29.8389], [115.9277, 29.707], [115.4883, 29.7949], [114.873, 29.3994], [114.2578, 29.3555], [113.9063, 29.0479], [113.7305, 29.0918], [113.6426, 29.3115], [113.7305, 29.5752], [113.5547, 29.707], [113.5547, 29.8389], [113.0273, 29.4434], [112.9395, 29.4873], [113.0273, 29.751], [112.9395, 29.7949], [112.6758, 29.5752], [112.5, 29.6191], [112.2363, 29.5313], [111.7969, 29.9268], [110.8301, 30.1465], [110.4785, 30.0146], [110.6543, 29.751], [110.4785, 29.6631], [109.7754, 29.751], [109.6875, 29.6191], [109.5117, 29.6191], [109.248, 29.1357], [109.0723, 29.3555], [108.9844, 29.3115], [108.6328, 29.8389], [108.457, 29.7949], [108.5449, 30.2344], [108.457, 30.4102], [108.6328, 30.5859], [108.8086, 30.498], [109.0723, 30.6299], [109.1602, 30.542], [109.248, 30.6299], [109.4238, 30.542], [109.8633, 30.8936], [110.0391, 30.8057], [110.2148, 31.1572]]] } },
            { "type": "Feature", "properties": { "id": "52", "name": "贵州", "cp": [106.6113, 26.9385], "childNum": 9 }, "geometry": { "type": "Polygon", "coordinates": [[[104.1504, 27.2461], [104.4141, 27.4658], [104.5898, 27.334], [105.2051, 27.3779], [105.293, 27.7295], [105.5566, 27.7734], [105.6445, 27.6416], [106.3477, 27.8174], [106.1719, 28.125], [105.9082, 28.125], [105.6445, 28.4326], [105.9961, 28.7402], [106.3477, 28.5205], [106.5234, 28.5645], [106.4355, 28.7842], [106.5234, 28.7842], [106.6113, 28.6523], [106.6113, 28.5205], [106.6992, 28.4766], [106.875, 28.7842], [107.4023, 28.8721], [107.4023, 29.1797], [107.5781, 29.2236], [107.8418, 29.1357], [107.8418, 29.0039], [108.2813, 29.0918], [108.3691, 28.6523], [108.5449, 28.6523], [108.5449, 28.3887], [108.7207, 28.4766], [108.7207, 28.2129], [109.0723, 28.2129], [109.248, 28.4766], [109.3359, 28.2568], [109.3359, 27.9053], [109.4238, 27.5977], [108.8086, 27.1143], [108.8965, 27.0264], [109.3359, 27.1582], [109.5117, 27.0264], [109.5117, 26.8066], [109.3359, 26.7188], [109.4238, 26.5869], [109.248, 26.3232], [109.4238, 26.2793], [109.5117, 26.0156], [109.3359, 25.708], [108.9844, 25.752], [109.0723, 25.5322], [108.6328, 25.5762], [108.6328, 25.3125], [108.3691, 25.5322], [108.1934, 25.4443], [108.1055, 25.2246], [107.8418, 25.1367], [107.7539, 25.2246], [107.4902, 25.2246], [107.2266, 25.6201], [106.9629, 25.4883], [107.0508, 25.2686], [106.875, 25.1807], [106.1719, 24.9609], [106.1719, 24.7852], [105.9961, 24.6533], [105.2051, 24.9609], [104.6777, 24.6094], [104.502, 24.7412], [104.6777, 24.9609], [104.5898, 25.0488], [104.8535, 25.2246], [104.3262, 25.708], [104.6777, 26.4111], [104.4141, 26.6748], [103.8867, 26.543], [103.7109, 26.7627], [103.7109, 26.9824], [103.623, 27.0264], [103.8867, 27.4219], [104.1504, 27.2461]]] } },
            { "type": "Feature", "properties": { "id": "37", "name": "山东", "cp": [118.7402, 36.4307], "childNum": 17 }, "geometry": { "type": "Polygon", "coordinates": [[[115.4883, 36.167], [115.3125, 36.5186], [115.752, 36.9141], [116.0156, 37.3535], [116.2793, 37.3535], [116.2793, 37.5732], [116.4551, 37.4854], [116.8066, 37.8369], [117.4219, 37.8369], [117.9492, 38.3203], [118.125, 38.1445], [118.916, 38.1445], [119.3555, 37.6611], [119.0039, 37.5293], [119.0039, 37.3535], [119.3555, 37.1338], [119.707, 37.1338], [119.8828, 37.3975], [120.498, 37.8369], [120.5859, 38.1445], [120.9375, 38.4521], [121.0254, 37.8369], [121.2012, 37.6611], [121.9043, 37.4854], [122.168, 37.6172], [122.2559, 37.4854], [122.6074, 37.4854], [122.6953, 37.3535], [122.6074, 36.9141], [122.4316, 36.7822], [121.8164, 36.8701], [121.7285, 36.6943], [121.1133, 36.6064], [121.1133, 36.4307], [121.377, 36.2549], [120.7617, 36.167], [120.9375, 35.8594], [120.6738, 36.0352], [119.707, 35.4639], [119.9707, 34.9805], [119.3555, 35.0244], [119.2676, 35.1123], [118.916, 35.0244], [118.7402, 34.7168], [118.4766, 34.6729], [118.3887, 34.4092], [118.2129, 34.4092], [118.125, 34.6289], [117.9492, 34.6729], [117.5977, 34.4531], [117.334, 34.585], [117.2461, 34.4531], [116.8066, 34.9365], [116.4551, 34.8926], [116.3672, 34.6289], [116.1914, 34.585], [115.5762, 34.585], [115.4004, 34.8486], [114.7852, 35.0684], [115.0488, 35.376], [115.2246, 35.4199], [115.4883, 35.7275], [116.1035, 36.0791], [115.3125, 35.8154], [115.4883, 36.167]]] } },
            { "type": "Feature", "properties": { "id": "36", "name": "江西", "cp": [116.0156, 27.29], "childNum": 11 }, "geometry": { "type": "Polygon", "coordinates": [[[114.2578, 28.3447], [114.082, 28.5645], [114.1699, 28.8281], [113.9063, 29.0479], [114.2578, 29.3555], [114.873, 29.3994], [115.4883, 29.7949], [115.9277, 29.707], [116.1035, 29.8389], [116.2793, 29.7949], [116.7188, 30.0586], [116.8945, 29.9268], [116.7188, 29.751], [116.7188, 29.6191], [117.1582, 29.707], [117.0703, 29.8389], [117.1582, 29.9268], [117.5098, 29.6191], [118.0371, 29.5752], [118.2129, 29.3994], [118.0371, 29.1797], [118.0371, 29.0479], [118.3887, 28.7842], [118.4766, 28.3447], [118.4766, 28.3008], [118.3008, 28.0811], [117.7734, 27.8174], [117.5098, 27.9932], [116.9824, 27.6416], [117.1582, 27.29], [117.0703, 27.1143], [116.543, 26.8066], [116.6309, 26.4551], [116.3672, 26.2354], [116.4551, 26.1035], [116.1914, 25.8838], [116.0156, 25.2686], [115.8398, 25.2246], [115.9277, 24.917], [115.752, 24.7852], [115.8398, 24.5654], [115.4004, 24.7852], [114.4336, 24.5215], [114.1699, 24.6973], [114.4336, 24.9609], [114.6973, 25.1367], [114.7852, 25.2686], [114.6094, 25.4004], [113.9941, 25.2686], [113.9063, 25.4443], [113.9941, 26.0596], [114.2578, 26.1475], [113.9941, 26.1914], [114.082, 26.5869], [113.9063, 26.6309], [113.9063, 26.9385], [113.7305, 27.1143], [113.8184, 27.29], [113.6426, 27.3779], [113.6426, 27.5977], [113.7305, 27.9492], [114.2578, 28.3447]]] } },
            { "type": "Feature", "properties": { "id": "41", "name": "河南", "cp": [113.4668, 33.8818], "childNum": 17 }, "geometry": { "type": "Polygon", "coordinates": [[[110.3906, 34.585], [110.8301, 34.6289], [111.1816, 34.8047], [111.5332, 34.8486], [111.7969, 35.0684], [112.0605, 35.0684], [112.0605, 35.2881], [112.7637, 35.2002], [113.1152, 35.332], [113.6426, 35.6836], [113.7305, 36.3428], [114.873, 36.123], [114.9609, 36.0791], [115.1367, 36.2109], [115.3125, 36.0791], [115.4883, 36.167], [115.3125, 35.8154], [116.1035, 36.0791], [115.4883, 35.7275], [115.2246, 35.4199], [115.0488, 35.376], [114.7852, 35.0684], [115.4004, 34.8486], [115.5762, 34.585], [116.1914, 34.585], [116.1914, 34.4092], [116.543, 34.2773], [116.6309, 33.9258], [116.1914, 33.7061], [116.0156, 33.9697], [115.6641, 34.0576], [115.5762, 33.9258], [115.5762, 33.6621], [115.4004, 33.5303], [115.3125, 33.1787], [114.873, 33.1348], [114.873, 33.0029], [115.1367, 32.8711], [115.2246, 32.6074], [115.5762, 32.4316], [115.8398, 32.5195], [115.9277, 31.7725], [115.4883, 31.6846], [115.4004, 31.4209], [115.2246, 31.4209], [115.1367, 31.5967], [114.7852, 31.4648], [114.6094, 31.5527], [114.5215, 31.7725], [114.1699, 31.8604], [113.9941, 31.7725], [113.8184, 31.8604], [113.7305, 32.4316], [113.4668, 32.2998], [113.2031, 32.4316], [112.3242, 32.3438], [111.5332, 32.6074], [111.0059, 33.2666], [111.0059, 33.5303], [110.6543, 33.8379], [110.6543, 34.1455], [110.4785, 34.2334], [110.3906, 34.585]]] } },
            { "type": "Feature", "properties": { "id": "21", "name": "辽宁", "cp": [122.3438, 41.0889], "childNum": 14 }, "geometry": { "type": "Polygon", "coordinates": [[[119.2676, 41.3086], [119.4434, 41.6162], [119.2676, 41.7041], [119.3555, 42.2754], [119.5313, 42.3633], [119.8828, 42.1875], [120.1465, 41.7041], [120.498, 42.0996], [121.4648, 42.4951], [121.7285, 42.4512], [121.9922, 42.7148], [122.3438, 42.6709], [122.3438, 42.8467], [122.7832, 42.7148], [123.1348, 42.8027], [123.3105, 42.9785], [123.5742, 43.0225], [123.6621, 43.374], [123.8379, 43.4619], [124.2773, 43.2422], [124.4531, 42.8467], [124.7168, 43.0664], [124.8926, 43.0664], [124.8926, 42.8027], [125.332, 42.1436], [125.4199, 42.0996], [125.332, 41.9678], [125.332, 41.6602], [125.7715, 41.2207], [125.5957, 40.9131], [125.6836, 40.8691], [124.541, 40.21], [124.1016, 39.6826], [123.3984, 39.6826], [123.1348, 39.4189], [123.1348, 39.0234], [122.0801, 39.0234], [121.5527, 38.7158], [121.1133, 38.6719], [120.9375, 38.9795], [121.377, 39.1992], [121.2012, 39.5508], [122.0801, 40.3857], [121.9922, 40.6934], [121.7285, 40.8252], [121.2012, 40.8252], [120.5859, 40.21], [119.8828, 39.9463], [119.707, 40.1221], [119.5313, 40.5615], [119.2676, 40.5176], [118.8281, 40.8252], [119.2676, 41.3086]]] } },
            { "type": "Feature", "properties": { "id": "14", "name": "山西", "cp": [112.4121, 37.6611], "childNum": 11 }, "geometry": { "type": "Polygon", "coordinates": [[[110.918, 38.7158], [111.1816, 39.2432], [111.0938, 39.375], [111.3574, 39.4189], [111.4453, 39.6387], [111.9727, 39.5947], [112.3242, 40.2539], [112.7637, 40.166], [113.2031, 40.3857], [113.5547, 40.3418], [113.8184, 40.5176], [114.082, 40.5176], [114.082, 40.7373], [114.2578, 40.6055], [114.3457, 40.3857], [114.5215, 40.3418], [113.9941, 39.9902], [114.3457, 39.8584], [114.5215, 39.5068], [114.3457, 39.0674], [113.9063, 39.0234], [113.8184, 38.9355], [113.8184, 38.8037], [113.5547, 38.54], [113.5547, 38.2764], [113.8184, 38.1445], [113.9941, 37.7051], [114.1699, 37.6611], [113.7305, 37.1338], [113.7305, 36.8701], [113.4668, 36.6504], [113.7305, 36.3428], [113.6426, 35.6836], [113.1152, 35.332], [112.7637, 35.2002], [112.0605, 35.2881], [112.0605, 35.0684], [111.7969, 35.0684], [111.5332, 34.8486], [111.1816, 34.8047], [110.8301, 34.6289], [110.3906, 34.585], [110.2148, 34.6729], [110.2148, 34.8926], [110.5664, 35.6396], [110.4785, 36.123], [110.3906, 37.002], [110.8301, 37.6611], [110.4785, 37.9688], [110.4785, 38.1885], [110.8301, 38.4961], [110.918, 38.7158]]] } },
            { "type": "Feature", "properties": { "id": "34", "name": "安徽", "cp": [117.2461, 32.0361], "childNum": 17 }, "geometry": { "type": "Polygon", "coordinates": [[[116.6309, 33.9258], [116.543, 34.2773], [116.1914, 34.4092], [116.1914, 34.585], [116.3672, 34.6289], [116.8945, 34.4092], [117.1582, 34.0576], [117.5977, 34.0137], [117.7734, 33.7061], [118.125, 33.75], [117.9492, 33.2227], [118.0371, 33.1348], [118.2129, 33.2227], [118.3008, 32.7832], [118.7402, 32.7393], [118.916, 32.959], [119.1797, 32.8271], [119.1797, 32.4756], [118.5645, 32.5635], [118.6523, 32.2119], [118.4766, 32.168], [118.3887, 31.9482], [118.916, 31.5527], [118.7402, 31.377], [118.8281, 31.2451], [119.3555, 31.2891], [119.4434, 31.1572], [119.6191, 31.1133], [119.6191, 31.0693], [119.4434, 30.6738], [119.2676, 30.6299], [119.3555, 30.4102], [118.916, 30.3223], [118.916, 29.9707], [118.7402, 29.707], [118.2129, 29.3994], [118.0371, 29.5752], [117.5098, 29.6191], [117.1582, 29.9268], [117.0703, 29.8389], [117.1582, 29.707], [116.7188, 29.6191], [116.7188, 29.751], [116.8945, 29.9268], [116.7188, 30.0586], [116.2793, 29.7949], [116.1035, 29.8389], [116.1035, 30.1904], [115.752, 30.6738], [116.0156, 31.0254], [115.5762, 31.2012], [115.4004, 31.4209], [115.4883, 31.6846], [115.9277, 31.7725], [115.8398, 32.5195], [115.5762, 32.4316], [115.2246, 32.6074], [115.1367, 32.8711], [114.873, 33.0029], [114.873, 33.1348], [115.3125, 33.1787], [115.4004, 33.5303], [115.5762, 33.6621], [115.5762, 33.9258], [115.6641, 34.0576], [116.0156, 33.9697], [116.1914, 33.7061], [116.6309, 33.9258]]] } },
            { "type": "Feature", "properties": { "id": "35", "name": "福建", "cp": [118.3008, 25.9277], "childNum": 9 }, "geometry": { "type": "Polygon", "coordinates": [[[118.4766, 28.3008], [118.8281, 28.2568], [118.7402, 28.0371], [118.916, 27.4658], [119.2676, 27.4219], [119.6191, 27.6855], [119.7949, 27.29], [120.2344, 27.4219], [120.4102, 27.1582], [120.7617, 27.0264], [120.6738, 26.8945], [120.2344, 26.8506], [120.2344, 26.7188], [120.4102, 26.6748], [120.498, 26.3672], [120.2344, 26.2793], [120.4102, 26.1475], [120.0586, 26.1914], [119.9707, 25.9277], [119.7949, 25.9277], [119.9707, 25.4004], [119.7949, 25.2686], [119.5313, 25.1367], [119.4434, 25.0049], [119.2676, 25.0928], [118.916, 24.8291], [118.6523, 24.5215], [118.4766, 24.5215], [118.4766, 24.4336], [118.2129, 24.3457], [118.2129, 24.1699], [117.8613, 23.9941], [117.7734, 23.7744], [117.5098, 23.5986], [117.1582, 23.5547], [116.9824, 23.9063], [116.9824, 24.1699], [116.7188, 24.6533], [116.543, 24.6094], [116.3672, 24.873], [116.2793, 24.7852], [115.9277, 24.917], [115.8398, 25.2246], [116.0156, 25.2686], [116.1914, 25.8838], [116.4551, 26.1035], [116.3672, 26.2354], [116.6309, 26.4551], [116.543, 26.8066], [117.0703, 27.1143], [117.1582, 27.29], [116.9824, 27.6416], [117.5098, 27.9932], [117.7734, 27.8174], [118.3008, 28.0811], [118.4766, 28.3008]]] } },
            { "type": "Feature", "properties": { "id": "33", "name": "浙江", "cp": [120.498, 29.0918], "childNum": 11 }, "geometry": { "type": "Polygon", "coordinates": [[[118.2129, 29.3994], [118.7402, 29.707], [118.916, 29.9707], [118.916, 30.3223], [119.3555, 30.4102], [119.2676, 30.6299], [119.4434, 30.6738], [119.6191, 31.0693], [119.6191, 31.1133], [119.9707, 31.1572], [120.498, 30.8057], [120.9375, 31.0254], [121.2891, 30.6738], [121.9922, 30.8057], [122.6953, 30.8936], [122.8711, 30.7178], [122.959, 30.1465], [122.6074, 30.1025], [122.6074, 29.9268], [122.168, 29.5313], [122.3438, 28.8721], [121.9922, 28.8721], [121.9922, 28.4326], [121.7285, 28.3447], [121.7285, 28.2129], [121.4648, 28.2129], [121.5527, 28.0371], [121.2891, 27.9492], [121.1133, 27.4219], [120.6738, 27.334], [120.6738, 27.1582], [120.9375, 27.0264], [120.7617, 27.0264], [120.4102, 27.1582], [120.2344, 27.4219], [119.7949, 27.29], [119.6191, 27.6855], [119.2676, 27.4219], [118.916, 27.4658], [118.7402, 28.0371], [118.8281, 28.2568], [118.4766, 28.3008], [118.4766, 28.3447], [118.3887, 28.7842], [118.0371, 29.0479], [118.0371, 29.1797], [118.2129, 29.3994]]] } },
            { "type": "Feature", "properties": { "id": "32", "name": "江苏", "cp": [120.0586, 32.915], "childNum": 13 }, "geometry": { "type": "Polygon", "coordinates": [[[116.3672, 34.6289], [116.4551, 34.8926], [116.8066, 34.9365], [117.2461, 34.4531], [117.334, 34.585], [117.5977, 34.4531], [117.9492, 34.6729], [118.125, 34.6289], [118.2129, 34.4092], [118.3887, 34.4092], [118.4766, 34.6729], [118.7402, 34.7168], [118.916, 35.0244], [119.2676, 35.1123], [119.3555, 35.0244], [119.3555, 34.8486], [119.707, 34.585], [120.3223, 34.3652], [120.9375, 33.0469], [121.0254, 32.6514], [121.377, 32.4756], [121.4648, 32.168], [121.9043, 31.9922], [121.9922, 31.6846], [121.9922, 31.5967], [121.2012, 31.8604], [121.1133, 31.7285], [121.377, 31.5088], [121.2012, 31.4648], [120.9375, 31.0254], [120.498, 30.8057], [119.9707, 31.1572], [119.6191, 31.1133], [119.4434, 31.1572], [119.3555, 31.2891], [118.8281, 31.2451], [118.7402, 31.377], [118.916, 31.5527], [118.3887, 31.9482], [118.4766, 32.168], [118.6523, 32.2119], [118.5645, 32.5635], [119.1797, 32.4756], [119.1797, 32.8271], [118.916, 32.959], [118.7402, 32.7393], [118.3008, 32.7832], [118.2129, 33.2227], [118.0371, 33.1348], [117.9492, 33.2227], [118.125, 33.75], [117.7734, 33.7061], [117.5977, 34.0137], [117.1582, 34.0576], [116.8945, 34.4092], [116.3672, 34.6289]]] } },
            { "type": "Feature", "properties": { "id": "50", "name": "重庆", "cp": [107.7539, 30.1904], "childNum": 40 }, "geometry": { "type": "Polygon", "coordinates": [[[108.5449, 31.6846], [108.2813, 31.9043], [108.3691, 32.168], [108.5449, 32.2119], [109.0723, 31.9482], [109.248, 31.7285], [109.5996, 31.7285], [109.7754, 31.6846], [109.6875, 31.5527], [110.127, 31.377], [110.2148, 31.1572], [110.0391, 30.8057], [109.8633, 30.8936], [109.4238, 30.542], [109.248, 30.6299], [109.1602, 30.542], [109.0723, 30.6299], [108.8086, 30.498], [108.6328, 30.5859], [108.457, 30.4102], [108.5449, 30.2344], [108.457, 29.7949], [108.6328, 29.8389], [108.9844, 29.3115], [109.0723, 29.3555], [109.248, 29.1357], [109.248, 28.4766], [109.0723, 28.2129], [108.7207, 28.2129], [108.7207, 28.4766], [108.5449, 28.3887], [108.5449, 28.6523], [108.3691, 28.6523], [108.2813, 29.0918], [107.8418, 29.0039], [107.8418, 29.1357], [107.5781, 29.2236], [107.4023, 29.1797], [107.4023, 28.8721], [106.875, 28.7842], [106.6992, 28.4766], [106.6113, 28.5205], [106.6113, 28.6523], [106.5234, 28.7842], [106.4355, 28.7842], [106.5234, 28.5645], [106.3477, 28.5205], [106.2598, 28.8721], [105.8203, 28.96], [105.7324, 29.2676], [105.4688, 29.3115], [105.293, 29.5313], [105.7324, 29.8828], [105.5566, 30.1025], [105.6445, 30.2783], [105.8203, 30.4541], [106.2598, 30.1904], [106.6113, 30.3223], [106.7871, 30.0146], [107.0508, 30.0146], [107.4902, 30.6299], [107.4023, 30.7617], [107.4902, 30.8496], [107.9297, 30.8496], [108.1934, 31.5088], [108.5449, 31.6846]]] } },
            { "type": "Feature", "properties": { "id": "64", "name": "宁夏", "cp": [105.9961, 37.3096], "childNum": 5 }, "geometry": { "type": "Polygon", "coordinates": [[[104.3262, 37.4414], [105.8203, 37.793], [105.9082, 38.7158], [106.3477, 39.2871], [106.7871, 39.375], [106.9629, 38.9795], [106.5234, 38.3203], [106.7871, 38.1885], [107.3145, 38.1006], [107.666, 37.8809], [107.3145, 37.6172], [107.3145, 37.0898], [106.6113, 37.0898], [106.6113, 36.7822], [106.4355, 36.5625], [106.5234, 36.4746], [106.5234, 36.2549], [106.875, 36.123], [106.9629, 35.8154], [106.6992, 35.6836], [106.4355, 35.6836], [106.5234, 35.332], [106.3477, 35.2441], [106.2598, 35.4199], [106.084, 35.376], [105.9961, 35.4199], [106.084, 35.4639], [105.9961, 35.4639], [105.8203, 35.5518], [105.7324, 35.7275], [105.3809, 35.7715], [105.293, 35.9912], [105.4688, 36.123], [105.2051, 36.6943], [105.293, 36.8262], [104.8535, 37.2217], [104.5898, 37.2217], [104.5898, 37.4414], [104.3262, 37.4414]]] } },
            { "type": "Feature", "properties": { "id": "46", "name": "海南", "cp": [109.9512, 19.2041], "childNum": 18 }, "geometry": { "type": "Polygon", "coordinates": [[[108.6328, 19.3799], [109.0723, 19.6436], [109.248, 19.9512], [109.5996, 20.0391], [110.0391, 20.127], [110.3906, 20.127], [110.5664, 20.2588], [110.6543, 20.2588], [111.0938, 19.9512], [111.2695, 19.9951], [110.6543, 19.1602], [110.5664, 18.6768], [110.2148, 18.5889], [110.0391, 18.3691], [109.8633, 18.3691], [109.6875, 18.1055], [108.9844, 18.2813], [108.6328, 18.457], [108.6328, 19.3799]]] } },
            { "type": "Feature", "properties": { "id": "71", "name": "台湾", "cp": [121.0254, 23.5986], "childNum": 1 }, "geometry": { "type": "Polygon", "coordinates": [[[121.9043, 25.0488], [121.9922, 25.0049], [121.8164, 24.7412], [121.9043, 24.5654], [121.6406, 24.0381], [121.377, 23.1152], [121.0254, 22.6758], [120.8496, 22.0605], [120.7617, 21.9287], [120.6738, 22.3242], [120.2344, 22.5879], [120.0586, 23.0713], [120.1465, 23.6865], [121.0254, 25.0488], [121.5527, 25.3125], [121.9043, 25.0488]]] } },
            { "type": "Feature", "properties": { "id": "11", "name": "北京", "cp": [116.4551, 40.2539], "childNum": 19 }, "geometry": { "type": "Polygon", "coordinates": [[[117.4219, 40.21], [117.334, 40.1221], [117.2461, 40.0781], [116.8066, 39.9902], [116.8945, 39.8145], [116.8945, 39.6826], [116.8066, 39.5947], [116.543, 39.5947], [116.3672, 39.4629], [116.1914, 39.5947], [115.752, 39.5068], [115.4883, 39.6387], [115.4004, 39.9463], [115.9277, 40.2539], [115.752, 40.5615], [116.1035, 40.6055], [116.1914, 40.7813], [116.4551, 40.7813], [116.3672, 40.9131], [116.6309, 41.0449], [116.9824, 40.6934], [117.4219, 40.6494], [117.2461, 40.5176], [117.4219, 40.21]]] } },
            { "type": "Feature", "properties": { "id": "12", "name": "天津", "cp": [117.4219, 39.4189], "childNum": 18 }, "geometry": { "type": "Polygon", "coordinates": [[[116.8066, 39.5947], [116.8945, 39.6826], [117.1582, 39.6387], [117.1582, 39.8145], [117.2461, 40.0781], [117.334, 40.1221], [117.4219, 40.21], [117.6855, 40.0781], [117.6855, 39.9902], [117.5098, 39.9902], [117.5098, 39.7705], [117.6855, 39.5947], [117.9492, 39.5947], [117.8613, 39.4189], [118.0371, 39.2432], [118.0371, 39.1992], [117.8613, 39.1113], [117.5977, 38.6279], [117.2461, 38.54], [116.7188, 38.8037], [116.7188, 38.9355], [116.8945, 39.1113], [116.8066, 39.5947]]] } },
            { "type": "Feature", "properties": { "id": "31", "name": "上海", "cp": [121.4648, 31.2891], "childNum": 19 }, "geometry": { "type": "Polygon", "coordinates": [[[120.9375, 31.0254], [121.2012, 31.4648], [121.377, 31.5088], [121.1133, 31.7285], [121.2012, 31.8604], [121.9922, 31.5967], [121.9043, 31.1572], [121.9922, 30.8057], [121.2891, 30.6738], [120.9375, 31.0254]]] } },
            { "type": "Feature", "properties": { "id": "81", "name": "香港", "cp": [114.2578, 22.3242], "childNum": 1 }, "geometry": { "type": "Polygon", "coordinates": [[[114.6094, 22.4121], [114.5215, 22.1484], [114.3457, 22.1484], [113.9063, 22.1484], [113.8184, 22.1924], [113.9063, 22.4121], [114.1699, 22.5439], [114.3457, 22.5439], [114.4336, 22.5439], [114.4336, 22.4121], [114.6094, 22.4121]]] } },
            { "type": "Feature", "properties": { "id": "82", "name": "澳门", "cp": [113.5547, 22.1484], "childNum": 1 }, "geometry": { "type": "Polygon", "coordinates": [[[113.5986, 22.1649], [113.6096, 22.1265], [113.5547, 22.11], [113.5437, 22.2034], [113.5767, 22.2034], [113.5986, 22.1649]]] } }
        ]
};

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = chinaGeoJSON;
} else {
    window.chinaGeoJSON = chinaGeoJSON;
}



        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.clunch
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    
    __etcpack__scope_bundle__.default= [{"name":"ui-map","attrs":{":geo-json":"chinaGeoJSON","font-color":"black","stroke-color":"gray",":fill-color":"calcColor"},"children":[]},{"name":"rect","attrs":{"x":"50","y":"405","width":"20","height":"10","fill-color":"#7a361f"},"children":[]},{"name":"text","attrs":{"x":"80","y":"410","font-size":"10"},"children":["≥10000"]},{"name":"rect","attrs":{"x":"50","y":"420","width":"20","height":"10","fill-color":"#c95539"},"children":[]},{"name":"text","attrs":{"x":"80","y":"425","font-size":"10"},"children":["≥1000"]},{"name":"rect","attrs":{"x":"50","y":"435","width":"20","height":"10","fill-color":"#f77649"},"children":[]},{"name":"text","attrs":{"x":"80","y":"440","font-size":"10"},"children":["≥500"]},{"name":"rect","attrs":{"x":"50","y":"450","width":"20","height":"10","fill-color":"#f8a077"},"children":[]},{"name":"text","attrs":{"x":"80","y":"455","font-size":"10"},"children":["≥100"]},{"name":"rect","attrs":{"x":"50","y":"465","width":"20","height":"10","fill-color":"#f9c8b1"},"children":[]},{"name":"text","attrs":{"x":"80","y":"470","font-size":"10"},"children":["≥10"]},{"name":"rect","attrs":{"x":"50","y":"480","width":"20","height":"10","fill-color":"#f5e6de"},"children":[]},{"name":"text","attrs":{"x":"80","y":"485","font-size":"10"},"children":["≥1"]}];

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\nmargin: auto;\n\nwidth: 700px;\n\nmin-height: 100vh;\n\nbackground-color: white;\n\npadding: 20px 0;\n\n}\n\n .view>header{\n\ntext-align: center;\n\nfont-size: 30px;\n\n}\n\n .view>header>span{\n\ncolor: red;\n\nfont-size: 12px;\n\nfont-weight: 800;\n\npadding-left: 10px;\n\n}\n\n .view>div{\n\nposition: relative;\n\n}\n\n .view>div #map{\n\nheight: 500px;\n\n}\n\n .process{\n\ncolor: rgb(0, 0, 0);\n\ntop: calc(50vh - 25px);\n\nleft: calc(50vw - 250px);\n\nposition: fixed;\n\ntext-align: center;\n\nwidth: 500px;\n\nheight: 50px;\n\n}\n\n .process>span.icon{\n\nborder: 2px solid gray;\n\nborder-radius: 10px;\n\nwidth: 300px;\n\nheight: 24px;\n\npadding: 2px;\n\ndisplay: inline-block;\n\ntext-align: left;\n\nmargin-bottom: 10px;\n\n}\n\n .process>span.icon>i{\n\nbackground-color: #73c944;\n\ndisplay: inline-block;\n\nheight: 16px;\n\nborder-radius: 10px;\n\n}\n\n .process[load='yes']{\n\ndisplay: none;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n    <header>\n        新型冠状病毒肺炎\n        <span>\n            COVID-19\n        </span>\n    </header>\n    <div>\n        <div id=\"map\"></div>\n        <div class=\"hover\" ui-bind:style='\"left:\"+left+\"px;top:\"+top+\"px;\"' ui-bind:show='flag?\"yes\":\"no\"'>\n            <h2 ui-bind='title'>简单</h2>\n            <ul id='hover-list'></ul>\n        </div>\n    </div>\n</div>\n\n<div class=\"process\" ui-bind:load='hadLoad?\"yes\":\"no\"'>\n    <span class='icon'>\n        <i ui-bind:style='\"width:\"+process+\"%\"'></i>\n    </span>\n    <br />\n    <span ui-bind='\"统计数据载入中：\"+process+\"%\"'></span>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-bind.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isString=__etcpack__scope_args__.isString;


var update = function update(el, binding) {
  // 如果有type表示给属性赋值
  if (isString(binding.type) && binding.type.length > 0) {
    if (el.getAttribute(binding.type) != binding.value) {
      el.setAttribute(binding.type, binding.value);
    }
  } // 否则是设置内容或值
  else {
    if (el.value != binding.value || el.textContent != binding.value) {
      el.value = el.textContent = binding.value;
    }
  }
};

var _class = (_dec = Directive({
  selector: "ui-bind"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      update(el, binding);
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      update(el, binding);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-model.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;
var setValue=__etcpack__scope_args__.setValue;

__etcpack__scope_args__=window.__etcpack__getBundle('30');
var xhtml =__etcpack__scope_args__.default;


var _class = (_dec = Directive({
  selector: "ui-model"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      el.value = binding.value;
      xhtml.bind(el, 'input', function () {
        setValue(binding.target, "." + binding.exp, el.value);
      });
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      el.value = binding.value;
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 提供常用的DOM操作方法
 * https://github.com/hai2007/browser.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

// 命名空间路径
var namespace = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 判断是否是结点
    "isNode": function (param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    },

    // 绑定事件
    "bind": function (dom, eventType, callback) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.bind(dom[i], eventType, callback);
            }
            return;
        }

        if (window.attachEvent)
            dom.attachEvent("on" + eventType, callback);
        else
            dom.addEventListener(eventType, callback, false);
    },
    // 去掉绑定事件
    "unbind": function (dom, eventType, handler) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.unbind(dom[i], eventType, handler);
            }
            return;
        }

        if (window.detachEvent)
            dom.detachEvent('on' + eventType, handler);
        else
            dom.removeEventListener(eventType, handler, false);

    },

    // 在当前上下文context上查找结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "find": function (context, selectFun, tagName) {
        if (!this.isNode(context)) return [];
        var nodes = context.getElementsByTagName(tagName || '*');
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 寻找当前结点的孩子结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "children": function (dom, selectFun) {
        var nodes = dom.childNodes;
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 判断结点是否有指定class
    // clazzs可以是字符串或数组字符串
    // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
    "hasClass": function (dom, clazzs, notStrict) {
        if (clazzs.constructor !== Array) clazzs = [clazzs];

        var class_str = " " + (dom.getAttribute('class') || "") + " ";
        for (var i = 0; i < clazzs.length; i++) {
            if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                if (notStrict) return true;
            } else {
                if (!notStrict) return false;
            }
        }
        return true;
    },

    // 删除指定class
    "removeClass": function (dom, clazz) {
        var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
        var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
        dom.setAttribute('class', newClazz.trim());
    },

    // 添加指定class
    "addClass": function (dom, clazz) {
        if (this.hasClass(dom, clazz)) return;
        var oldClazz = dom.getAttribute('class') || "";
        dom.setAttribute('class', oldClazz + " " + clazz);
    },

    // 字符串变成结点
    // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
    "toNode": function (template, isSvg) {
        var frame;

        // html和svg上下文不一样
        if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
        else {

            var frameTagName = 'div';

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";

            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";

            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";

            }

            frame = document.createElement(frameTagName);
        }

        // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
        frame.innerHTML = template;

        var childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (this.isNode(childNodes[i])) return childNodes[i];
        }
    },

    // 主动触发事件
    "trigger": function (dom, eventType) {

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            dom.fireEvent('on' + eventType, document.createEventObject());
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            var _event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            _event.initEvent(eventType, true, false);
            dom.dispatchEvent(_event);
        }

    },

    // 获取样式
    "getStyle": function (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    },

    // 获取元素位置
    "offsetPosition": function (dom) {
        var left = 0;
        var top = 0;
        top = dom.offsetTop;
        left = dom.offsetLeft;
        dom = dom.offsetParent;
        while (dom) {
            top += dom.offsetTop;
            left += dom.offsetLeft;
            dom = dom.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    },

    // 获取鼠标相对元素位置
    "mousePosition": function (dom, event) {
        var bounding = dom.getBoundingClientRect();
        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    },

    // 删除结点
    "remove": function (dom) {
        dom.parentNode.removeChild(dom);
    },

    // 设置多个样式
    "setStyles": function (dom, styles) {
        for (var key in styles)
            dom.style[key] = styles[key];
    },

    // 获取元素大小
    "size": function (dom, type) {
        var elemHeight, elemWidth;
        if (type == 'content') { //内容
            elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
            elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
        } else if (type == 'padding') { //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') { //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') { //滚动的宽（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    },

    // 在被选元素内部的结尾插入内容
    "append": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 在被选元素内部的开头插入内容
    "prepend": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.insertBefore(node, el.childNodes[0]);
        return node;
    },

    // 在被选元素之后插入内容
    "after": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el.nextSibling);
        return node;
    },

    // 在被选元素之前插入内容
    "before": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el);
        return node;
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-on.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('30');
var xhtml =__etcpack__scope_args__.default;

/**
 * [可以使用的修饰符]
 * .prevent 阻止默认事件
 * .stop    阻止冒泡
 * .once    只执行一次
 */

var _class = (_dec = Directive({
  selector: "ui-on"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      var types = binding.type.split('.'),
          modifier = {
        "prevent": false,
        "stop": false,
        "once": false
      },
          callback = function callback(event) {
        if (modifier.stop) xhtml.stopPropagation(event);
        if (modifier.prevent) xhtml.preventDefault(event);
        binding.value.apply(binding.target, [event]);

        if (modifier.once) {
          xhtml.unbind(el, types[0], callback);
        }
      };

      for (var i = 1; i < types.length; i++) {
        modifier[types[i]] = true;
      }

      xhtml.bind(el, types[0], callback);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();