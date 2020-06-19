// mocks
module.exports = function doDemo(app, baseUrl) {
    app.get(`${baseUrl}/users`, (req, res) => {
        setTimeout(() => {
            res.json({
                code: 200,
                result: [
                    {
                        name: 'jack'
                    },
                    {
                        name: 'jack2'
                    }
                ]
            });
        }, 600);
    });
};
