// Unwrap stupid&invalid comment links
document
    .querySelectorAll('.comments .comment-content a[name][href*="/komentar/"][rel~="ugc"]')
    .forEach((node)=>{
        node.replaceWith(...node.childNodes);
    });
