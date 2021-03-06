javascript: (function() {
  const url = location.href;

  fetch(url).then(res => res.text()).then(text => {
      const el = new DOMParser().parseFromString(text, "text/html");
      const headEls = (el.head.children);
  
      return Array.from(headEls).map(v => {
          const prop = v.getAttribute('property');
          if (!prop) return;
          return { prop: prop.replace("og:",""),content: v.getAttribute("content")}
      })
  }).then(list=>{
      return list.filter(v=>v);
  }).then(result=>{
      const title = result.filter(v=>v.prop==="title")[0].content;
      const url = result.filter(v=>v.prop==="url")[0].content;
      const image = result.filter(v=>v.prop==="image")[0].content;
      const description = result.filter(v=>v.prop==="description")[0].content;
      const content = `{{< blogcard title="${title}" url="${url}" image="${image}" >}}${description}{{< /blogcard >}}`;
      console.log(content);
      navigator.clipboard.writeText(content);
      alert(content);
  })
})()