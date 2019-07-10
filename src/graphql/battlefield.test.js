describe('GraphQL Type: Battlefield', () => {
    // (new Uint8Array(iter)).forEach((_, i) => {
        it(`fetch battlefield's only scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        battlefield(id: 1) {
                            id
                        }
                    }`
                }
            );

            expect(result).toMatchSnapshot();
        });

        it(`fetch battlefield's owner's scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        battlefield(id: 1) {
                            owner {
                                id
                                email
                            }
                        }
                    }`
                }
            );

            expect(result).toMatchSnapshot();
        });

        it(`fetch battlefield's cells' scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        battlefield(id: 1) {
                            cells {
                                id
                                seq
                                coordinate
                            }
                        }
                    }`
                }
            );

            expect(result).toMatchSnapshot();
        });
    // });
});
