describe('GraphQL Type: User', () => {
    it(`fetch all users' only scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                users {
                    id
                    email
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch only scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                user(id: 1) {
                    id
                    email
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch friend's scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                user(id: 1) {
                    friends {
                        id
                        email
                    }
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });
});
