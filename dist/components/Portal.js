Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _config=require('../temp/config');var _config2=_interopRequireDefault(_config);var _component=require('../temp/component');var _component2=_interopRequireDefault(_component);var _Previewer=require('./Previewer');var _Previewer2=_interopRequireDefault(_Previewer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Portal=function(_Component){_inherits(Portal,_Component);function Portal(){_classCallCheck(this,Portal);return _possibleConstructorReturn(this,(Portal.__proto__||Object.getPrototypeOf(Portal)).apply(this,arguments));}_createClass(Portal,[{key:'render',value:function render(){if(_config2.default.type=='view'){return _react2.default.createElement(_component2.default);}if(_config2.default.type==='component'){return _react2.default.createElement(_Previewer2.default);}return this.props.children;}}]);return Portal;}(_react.Component);exports.default=Portal;