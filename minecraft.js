var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function () {
    'use strict';

    var SyfaroAPI, MinecraftAPI, baseURL;

    baseURL = 'https://web.archive.org/web/20220408201928/https://mcapi.us';

    SyfaroAPI = (function () {
        /**
         * @constructor
         */
        function SyfaroAPI() {}

        /**
         * Generates a query string from an object
         * @param  {Object} params params
         * @return {String}        querystring
         */
        SyfaroAPI.prototype.queryString = function (params) {
            var str, p;

            str = [];

            for (p in params) {
                if (params[p] === undefined) {
                    continue;
                }

                if (params.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
                }
            }

            return '?' + str.join('&');
        };

        /**
         * Runs an XHR request for JSON
         * @param  {String}   endpoint API endpoint
         * @param  {Object}   params   GET params
         * @param  {Function} callback function to call when done
         * @return {undefined}            does not return
         */
        SyfaroAPI.prototype.loadJSON = function (endpoint, params, callback) {
            var xhr, url;

            if (typeof (params) === 'function') {
                callback = params;
                params = {};
            }

            params = this.queryString(params);

            url = baseURL + endpoint + params;

            xhr = new XMLHttpRequest();

            xhr.onerror = function () {
                callback(true);
            };

            xhr.onload = function () {
                var data;

                try {
                    data = JSON.parse(xhr.responseText);
                } catch (e) {
                    return callback(e);
                }

                if (data.status === 'error') {
                    return callback(data.error);
                }

                callback(undefined, data);
            };

            xhr.open('GET', url, true);

            xhr.send();
        };

        return SyfaroAPI;
    }());

    MinecraftAPI = (function () {
        var api;

        /**
         * @constructor
         */
        function MinecraftAPI() {}

        api = new SyfaroAPI();

        /**
         * Gets the status of a Minecraft server
         * @param  {String}   ip       ip or domain of server
         * @param  {Object}   options  extra options, such as port
         * @param  {Function} callback callback function
         * @return {undefined}            does not return
         */
        MinecraftAPI.prototype.getServerStatus = function (ip, options, callback) {
            if (typeof (options) === 'function') {
                callback = options;
                options = {};
            }

            options['ip'] = ip;

            api.loadJSON('/server/status', options, callback);
        };
        MinecraftAPI.prototype['getServerStatus'] = MinecraftAPI.prototype.getServerStatus;

        /**
         * Gets all available query information of a Minecraft server
         * @param  {String}   ip       ip or domain of server
         * @param  {Object}   options  extra options, such as port
         * @param  {Function} callback callback function
         * @return {undefined}            does not return
         */
        MinecraftAPI.prototype.getServerQuery = function (ip, options, callback) {
            if (typeof (options) === 'function') {
                callback = options;
                options = {};
            }

            options['ip'] = ip;

            api.loadJSON('/server/query', options, callback);
        };
        MinecraftAPI.prototype['getServerQuery'] = MinecraftAPI.prototype.getServerQuery;

        return MinecraftAPI;
    }());

    window['MinecraftAPI'] = new MinecraftAPI();
}());


}
/*
     FILE ARCHIVED ON 20:19:28 Apr 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:41:04 Nov 08, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 132.894
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.069
  cdx.remote: 0.062
  esindex: 0.01
  LoadShardBlock: 101.708 (3)
  PetaboxLoader3.datanode: 75.808 (4)
  load_resource: 105.5
  PetaboxLoader3.resolve: 58.605
*/