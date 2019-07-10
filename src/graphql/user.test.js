describe('GraphQL Type: User', () => {
    // (new Uint8Array(iter)).forEach((_, i) => {
        it(`fetch user's only scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        user(id: 1) {
                            id
                            email
                        }
                    }`
                }
            );

            expect(result).toMatchSnapshot();
        });

        it(`fetch user's friend's scalar values`, async () => {
            const result = await query(
                {
                    query: `
                    {
                        user(id: 1) {
                            friends {
                                id
                                email
                            }
                        }
                    }`
                }
            );

            expect(result).toMatchSnapshot();
        });
    // });
});
