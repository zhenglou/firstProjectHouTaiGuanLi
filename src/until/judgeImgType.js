export  function imgType(type){
    switch(type){
      case 'image/png':
        return true
      case 'image/jpeg':
        return true
      case 'image/webp':
        return true
      case 'image/gif':
        return true  
      default:
        return false  
    }
  }

export function isMd(type){
  if(/^(.+)\.md$/.test(type)) return true
  return false
}
