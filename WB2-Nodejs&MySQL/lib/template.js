var sanitizeHTML = require('sanitize-html');

module.exports = {
    html: function (title, list, body, control) {
        return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <a href="/author">author</a>
        ${list}
        ${control}
        ${body}
      </body>
      </html>`;
    },

    list: function templateList(topics) {
        var list = '<ul>';
        for (var i = 0; i < topics.length; i++) {
            list += `<li><a href="../?id=${topics[i].id}">${sanitizeHTML(topics[i].title)}</a></li>`;
        }
        list += '</ul>';
        return list;
    },

    authorSelect:function(authors,author_id){
      var tag = '';
        for(var i = 0; i < authors.length; i++){
          var selected = '';
          if(authors[i].id == author_id){
            selected = ` selected`;
          }
          tag += `<option value="${authors[i].id}"${selected}>${sanitizeHTML(authors[i].name)}</option>`
        }
        return `
        <select name = "author">
        ${tag}
        </select>
        `
    },

    authorTable:function(authors){
      var tag = '<table>';
      for(var i = 0; i < authors.length; i++){
          tag += `
              <tr>
                  <td>${sanitizeHTML(authors[i].name)}</td>
                  <td>${sanitizeHTML(authors[i].profile)}</td>
                  <td><a href="/author/update?id=${authors[i].id}">update</a></td>
                  <td>
                    <form action="/author/delete_process" method="post">
                      <input type="hidden" name="id" value="${authors[i].id}">
                      <input type="submit" value="delete">
                    </form>
                  </td>
              </tr>

              `
      }
      tag += '</table>';
      return tag;
    }
}