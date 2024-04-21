



module.exports = {
    node: {
        fs: 'empty'
    },
    resolve: {
        fallback: {process: require.resolve('process/browser'),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/"),
            "http": require.resolve("stream-http"),
            "crypto": require.resolve("crypto-browserify"),
           },

    }

};