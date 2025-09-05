import React from "react";

const RawHtml: React.FC = () => {
  const html = `
    <div class="container">
      <h1 style="color:red;">Hello World</h1>
      <p>This is a paragraph.</p>
      <script>
        console.log('This runs like a script tag');
      </script>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RawHtml;
