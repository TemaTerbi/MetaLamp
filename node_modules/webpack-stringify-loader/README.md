# webpack-stringify-loader

Simple loader that evals the export string and `JSON.stringify` it. See Usage.

## Usage

```bash
npm install webpack-stringify-loader
```

I use it with [herrstucki/responsive-loader](https://github.com/herrstucki/responsive-loader)
to take the Object from the loader and make a JSON file:

```javascript
module.exports = {
    module: {
        rules: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext].json',
                }
            },
            'eval-loader',
            {
                test: /\.(jpe?g|png)$/i,
                loader: 'responsive-loader',
            }
        ]
    }
}
```