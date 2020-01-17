const fetchStrapiData = require("../api/api");

test("type of fetchStrapiData should return object", () => {
    expect(typeof fetchStrapiData).toBe("object");
});

// test('should api data return a json object', () => {
//     return fetchStrapiData.fetchNews().then(data => {
//         expect(() => {
//             JSON.parse(JSON.stringify(data))
//         }).not.toThrow()
//     })
// })

// test('Should data returned from api not be an empty obj', () => {
//     return fetchStrapiData.fetchJobs().then(data => {
//         expect(Object.keys(data).length).toBeGreaterThan(1)
//     })
// })

// test("Should return matching title", async () => {
//     return fetchStrapiData.fetchNews().then(data => {
//         expect(data.title.toLowerCase()).toEqual("news title 1");
//     })
// });

test("Should return matching title", async () => {
    expect.assertions(1);
    const data = await fetchStrapiData.fetchNews();
    expect(data.title.toLowerCase()).toEqual("news title 1");
});

test("Should contain word ipsum in excerpt", async () => {
    return fetchStrapiData.fetchJobs().then(data => {
        expect(data.excerpt).toContain("ipsum");
    });
});

test("Should throw error when news is not found", () => {
    return fetchStrapiData.fetchNews(3).catch(e =>
        expect(e).toEqual({
            error: "news not found"
        })
    );
});

// test("Should contain word ipsum in excerpt", async () => {
//     expect.assertions(1);
//     const data = await fetchStrapiData.fetchJobs();
//     expect(data.excerpt).toContain("ipsum");
// });
