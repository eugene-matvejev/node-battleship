describe('GraphQL Type: Cell', () => {
    it(`fetch cell's only scalar values`, async () => {
        const { data } = await query(
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

        expect(data).toMatchSnapshot();
    });

    it(`fetch cell's battlefield's scalar values`, async () => {
        const { data } = await query(
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

        expect(data).toMatchSnapshot();
    });
});
