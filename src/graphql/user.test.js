describe('GraphQL Type: User', () => {
    it(`fetch user's only scalar values`, async () => {
        const { data } = await query(
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

        expect(data).toMatchSnapshot();
    });

    it(`fetch user's friend's scalar values`, async () => {
        const { data } = await query(
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

        expect(data).toMatchSnapshot();
    });
});
