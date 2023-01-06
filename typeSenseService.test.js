const sinon = require("sinon");
const axios = require('axios');

describe("Type Sense Service", function () {
    let typeSenseService;
    let axiosGetStub;
    let axiosPostStub;

    beforeEach(() => {
        typeSenseService = require('./typeSenseService');
        const axiosMock = {
            get: () => [],
            interceptors: {
                request: {
                    use: sinon.fake(),
                },
            },
            post: () => [],
        };
        axiosGetStub = sinon.stub(axiosMock, 'get');
        axiosPostStub = sinon.stub(axiosMock, 'post');
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('fetchCollection', () => {
        it('should check if fetch collection called', async () => {
            axiosGetStub.resolves({
                data: {
                    id: 1
                }
            });
            const result = await typeSenseService.fetchCollection();
            sinon.assert.match(result, { id: 1 });
        });
    });

    describe('createCollection', () => {
        it('should check if create collection called', async () => {
            axiosPostStub.resolves({
                data: {
                    id: 1
                }
            });
            const result = await typeSenseService.createCollection();
            sinon.assert.match(result, { id: 1 });
        });
    });

    describe('createDocument', () => {
        it('should check if create document called', async () => {
            axiosPostStub.resolves({
                data: {
                    id: 1
                }
            });
            const result = await typeSenseService.createDocument();
            sinon.assert.match(result, { id: 1 });
        });
    });

    describe('searchCollection', () => {
        it('should check if search collection called', async () => {
            axiosGetStub.resolves({
                data: {
                    id: 1
                }
            });
            const result = await typeSenseService.searchCollection();
            sinon.assert.match(result, { id: 1 });
        });
    });

});