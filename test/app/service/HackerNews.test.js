'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const mm = require("egg-mock");
describe('test/app/service/HackerNews.test.js', () => {
    const app = mm.app();
    let ctx;
    before(async () => {
        await app.ready();
        ctx = app.mockContext();
    });
    after(() => app.close());
    afterEach(mm.restore);
    it('getTopStories', async () => {
        const list = await ctx.service.hackerNews.getTopStories();
        assert(list.length === 30);
    });
    it('getItem', async () => {
        const item = await ctx.service.hackerNews.getItem(1);
        assert(item.id && item.title && item.url);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFja2VyTmV3cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGFja2VyTmV3cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixpQ0FBaUM7QUFFakMsK0JBQStCO0FBRS9CLFFBQVEsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7SUFDbkQsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksR0FBWSxDQUFDO0lBRWpCLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNoQixNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEIsRUFBRSxDQUFDLGVBQWUsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN2QixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=