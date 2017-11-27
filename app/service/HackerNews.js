"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * HackerNews Api Service
 */
class HackerNews extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
    }
    getConfig() {
        return this.app.config.news;
    }
    /**
     * request hacker-news api
     * @param api - Api name
     * @param opts - urllib options
     */
    async request(api, opts) {
        const options = Object.assign({
            dataType: 'json',
            timeout: ['30s', '30s'],
        }, opts);
        const result = await this.ctx.curl(`${this.getConfig().serverUrl}/${api}`, options);
        return result.data;
    }
    /**
     * get top story ids
     * @param page - page number, 1-ase
     * @param pageSize - page count
     */
    async getTopStories(page, pageSize) {
        page = page || 1;
        pageSize = pageSize || this.getConfig().pageSize;
        try {
            const result = await this.request('topstories.json', {
                data: {
                    orderBy: '"$key"',
                    startAt: `"${pageSize * (page - 1)}"`,
                    endAt: `"${pageSize * page - 1}"`,
                },
            });
            return Object.keys(result).map((key) => result[key]);
        }
        catch (e) {
            this.ctx.logger.error(e);
            return [];
        }
    }
    /**
     * query item
     * @param id - itemId
     */
    async getItem(id) {
        return await this.request(`item/${id}.json`);
    }
    /**
     * get user info
     * @param id - userId
     */
    async getUser(id) {
        return await this.request(`user/${id}.json`);
    }
}
exports.HackerNews = HackerNews;
exports.default = HackerNews;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFja2VyTmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhY2tlck5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBdUM7QUFjdkM7O0dBRUc7QUFDSCxnQkFBd0IsU0FBUSxhQUFPO0lBQ3JDLFlBQVksR0FBWTtRQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsU0FBUztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFhO1FBQzdDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDNUIsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUN4QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQWEsRUFBRSxRQUFpQjtRQUN6RCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNqQixRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFFakQsSUFBSSxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUNuRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRztvQkFDckMsS0FBSyxFQUFFLElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUc7aUJBQ2xDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQVU7UUFDN0IsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBVTtRQUM3QixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0Y7QUE5REQsZ0NBOERDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIn0=