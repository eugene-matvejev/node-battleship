describe('GraphQL Type: Cell', () => {
    it(`fetch all cells' only scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                cells {
                    id
                    seq
                    coordinate
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch only scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                cell(id: 1) {
                    id
                    seq
                    coordinate
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });

    it(`fetch battlefield's scalar values`, async () => {
        const { data } = await query({
            query: `
            {
                cell(id: 1) {
                    battlefield {
                        id
                    }
                }
            }`
        });

        expect(data).toMatchSnapshot();
    });
});
