'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const cheerio = require("cheerio");
const mm = require("egg-mock");
describe('test/app/controller/news.test.ts', () => {
    const app = mm.app();
    before(async () => {
        await app.ready();
    });
    after(() => app.close());
    afterEach(mm.restore);
    it('should GET /news', async () => {
        const result = await app.httpRequest().get('/news').expect(200);
        const $ = cheerio.load(result.text);
        const listItem = $('.news-view .item');
        assert(listItem.length === app.config.news.pageSize);
    });
    it('should GET /news/item/:id', async () => {
        await app.httpRequest()
            .get('/news/item/1')
            .expect(/\/news\/item\/1/)
            .expect(200);
    });
    it('should GET /news/user/:id', async () => {
        await app.httpRequest()
            .get('/news/user/activatedgeek')
            .expect(/<span class="label">user:<\/span> activatedgeek/)
            .expect(200);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixpQ0FBaUM7QUFDakMsbUNBQW1DO0FBQ25DLCtCQUErQjtBQUUvQixRQUFRLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxFQUFFO0lBQ2hELE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDaEIsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFekIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV0QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN6QyxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDdEIsR0FBRyxDQUFDLGNBQWMsQ0FBQzthQUVuQixNQUFNLENBQUMsaUJBQWlCLENBQUM7YUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDekMsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFO2FBQ3RCLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQzthQUUvQixNQUFNLENBQUMsaURBQWlELENBQUM7YUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9