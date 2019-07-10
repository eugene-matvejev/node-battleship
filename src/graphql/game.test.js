describe('GraphQL Type: Game', () => {
    // (new Uint8Array(iter)).forEach((_, i) => {
        it(`fetch game's only scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        game(id: 1) {
                            id
                        }
                    }`
                }
            );

            expect(result).toMatchSnapshot();
        });

        it(`fetch game's battlefield's scalar values`, async () => {
            const result = await query(
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

            expect(result).toMatchSnapshot();
        });
    // });
});
