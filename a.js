alert("abc");
document.evaluate("//*[@id='inner-column-container']/div[2]/div/h3/b", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'Lynn';
