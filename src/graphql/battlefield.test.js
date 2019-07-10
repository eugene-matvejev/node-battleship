describe('GraphQL Type: Battlefield', () => {
    it(`fetch all battlefields' scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                battlefields {
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
                battlefield(id: 1) {
                    id
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch owner's scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                battlefield(id: 1) {
                    owner {
                        id
                        email
                    }
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch cells' scalar values`, async () => {
        const { data } = await query({
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
        });

        expect(data).toMatchSnapshot();
    });
});
