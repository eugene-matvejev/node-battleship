describe('GraphQL Type: Cell', () => {
    // (new Uint8Array(iter)).forEach((_, i) => {
        it(`fetch cell's only scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        cell(id: 1) {
                            id
                            seq
                            coordinate
                        }
                    }`
                }
            );

            expect(result).toMatchSnapshot();
        });

        it(`fetch cell's battlefield's scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        cell(id: 1) {
                            battlefield {
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
