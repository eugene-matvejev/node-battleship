describe('GraphQL Type: Battlefield', () => {
    it(`fetch battlefield's only scalar values`, async () => {
        const { data } = await query(
            {
                query: `
                    {
                        battlefield(id: 1) {
                            id
                        }
                    }`
            }
        );

        expect(data).toMatchSnapshot();
    });

    it(`fetch battlefield's owner's scalar values`, async () => {
        const { data } = await query(
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

        expect(data).toMatchSnapshot();
    });

    it(`fetch battlefield's cells' scalar values`, async () => {
        const { data } = await query(
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

        expect(data).toMatchSnapshot();
    });
});
