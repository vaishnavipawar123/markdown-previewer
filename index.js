document.addEventListener('DOMContentLoaded',function(){

    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    const defaultMarkdown = `# Heading 1
## Subheading 1

[Link to Google](https://www.google.com/)

Inline code: \`console.log('Hello, World!')\`

\`\`\`javascript
// Code block
function greet(name) {
    return 'Hello, ' + name + '!';
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote: Markdown is awesome!

![Image]()

**Bolded text**

`;

    // Set default markdown content in the editor textarea
    editor.value = defaultMarkdown;

    const html = marked(defaultMarkdown);
    preview.innerHTML = html;

    editor.addEventListener('input', function() {
        const markdown = editor.value;
        const html = marked(markdown); // Use marked.js to convert markdown to HTML
        const sanitizedHtml = sanitizeHtml(html);
        

        preview.innerHTML = sanitizedHtml;
    });
    const initialMarkdown = editor.value;
    const initialHtml = marked(initialMarkdown);
    preview.innerHTML = initialHtml;
    const sanitizedInitialHtml = sanitizeHtml(initialHtml);
    preview.innerHTML = sanitizedInitialHtml;
});

function sanitizeHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.innerText; // Extract text content, removing any HTML tags
}