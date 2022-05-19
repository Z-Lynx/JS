alert("abc");
document.evaluate("//*[@id='inner-column-container']/div[2]/div/h3/b", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'Lynn';
document.evaluate("//*[@id='pagemain']/div/div[1]/form/table/tbody/tr[2]/td/text()[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'Họ và tên :   Tiến Đẹp Zai Nhất =))';

