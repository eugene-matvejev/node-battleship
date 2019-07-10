describe('GraphQL Type: Game', () => {
    it(`fetch game's only scalar values`, async () => {
        const { data } = await query(
            {
                query: `
                {
                    game(id: 1) {
                        id
                    }
                }`
            }
        );

        expect(data).toMatchSnapshot();
    });

    it(`fetch game's battlefield's scalar values`, async () => {
        const { data } = await query(
            {
                query: `
                {
                    game(id: 1) {
                        battlefields {
                            id
                        }
                    }
                }`
            }
        );

        expect(data).toMatchSnapshot();
    });
});
