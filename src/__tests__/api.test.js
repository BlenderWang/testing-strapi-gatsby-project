const fetchStrapiData = require('../api/api')

test("Should return matching title", async () => {
    expect.assertions(1);
    const data = await fetchStrapiData.fetchNews();
    expect(data.title.toLowerCase()).toEqual("news title 1");
});

test("Should contain word ipsum in excerpt", async () => {
    expect.assertions(1);
    const data = await fetchStrapiData.fetchJobs();
    expect(data.excerpt).toContain("ipsum");
});