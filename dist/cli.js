#!/usr/bin/env node
var _commander=require('commander');var _commander2=_interopRequireDefault(_commander);var _cliColor=require('cli-color');var _cliColor2=_interopRequireDefault(_cliColor);var _package=require('../package.json');var _package2=_interopRequireDefault(_package);var _api=require('./api');var _api2=_interopRequireDefault(_api);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_commander2.default.version(_package2.default.version);_commander2.default.command('dc <name>').action(function(name){console.log(_cliColor2.default.magenta('[Wayke]')+' Hot drop-in component: %s',name);_api2.default.dropInComponent(name);});_commander2.default.command('dv <type> <name>').action(function(type,name){console.log(_cliColor2.default.magenta('[Wayke]')+' Hot drop-in view: %s/%s',type,name);_api2.default.dropInView(type,name);});_commander2.default.command('clear').action(function(){console.log(_cliColor2.default.magenta('[Wayke]')+' Clearing Hot drop-in');_api2.default.clear();});_commander2.default.parse(process.argv);