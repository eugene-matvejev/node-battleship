describe('GraphQL Type: Game', () => {
    it(`fetch all games' only scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                games {
                    id
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch only scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                game(id: 1) {
                    id
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch battlefields' scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                game(id: 1) {
                    battlefields {
                        id
                    }
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });
});
