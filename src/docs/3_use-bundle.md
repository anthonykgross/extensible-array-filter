---
title: Use bundle for your HTML
category: Get Started
---

# Use bundle for your HTML

## Include the javascript file
```html
<!doctype html>
<html lang="en">
    <body>
        ...
        <script src="./node_modules/@anthonykgross/extensible-array-filter/dist/bundle.js"></script>
        ...
    </body>
</html>
```

## Example
```html
<!doctype html>
<html lang="en">
    <body>
        <script src="./node_modules/@anthonykgross/extensible-array-filter/dist/bundle.js"></script>
        <script>
            fetch('https://api.github.com/users/anthonykgross/repos')
                    .then(res => res.json())
                    .then(res => {
                        res.orWhere([
                            {field: 'stargazers_count', operator: '>=', value: 1},
                            {field: 'forks_count', operator: '>=', value: 1}
                        ]).forEach(repo => {
                            console.log(repo);
                        })
                    })
        </script>
    </body>
</html>
```

## See also
- [Installation](0_index.md)
- [How to use](1_how-to-use.md)
- [Create your own filter](2_extending-filter.md)