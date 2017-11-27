'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
require("source-map-support/register");
const defaultConfig_1 = require("./defaultConfig");
exports.default = (appInfo) => {
    const config = {};
    // should change to your own
    config.keys = appInfo.name + '123456';
    config.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
    };
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };
    return Object.assign({}, config, defaultConfig_1.default);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYix5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLHVDQUFxQztBQUNyQyxtREFBNEM7QUFFNUMsa0JBQWUsQ0FBQyxPQUFxQixFQUFFLEVBQUU7SUFDdkMsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO0lBRXZCLDRCQUE0QjtJQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBRXRDLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsY0FBYyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUM7S0FDdEYsQ0FBQztJQUVGLE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFDWixpQkFBaUIsRUFBRSxVQUFVO1FBQzdCLE9BQU8sRUFBRTtZQUNQLE1BQU0sRUFBRSxVQUFVO1NBQ25CO0tBQ0YsQ0FBQztJQUVGLE1BQU0sbUJBQU0sTUFBTSxFQUFLLHVCQUFhLEVBQUc7QUFDekMsQ0FBQyxDQUFDIn0=