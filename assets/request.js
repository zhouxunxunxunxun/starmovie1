export default async function (url, type='GET', opt) {
    
    const options = Object.assign({
      method: type,
    }, opt);
  
    try {
      const response = await fetch(url, options);
      const { data, status } = await response.json();
  
      if (status === 0) {
        return data;
      } else {
        // 错误处理
      }
    } catch (e) {
      // 错误处理
      // 提示/弹窗
    }
  
  }