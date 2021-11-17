export function throttle(target: any, ms: number): typeof target {
    let isThrottled: boolean = false
    let savedArgs: IArguments | null
    let savedThis: any
  
    function wrapper() {
  
      if (isThrottled) {
        savedArgs = arguments
        savedThis = this
        return
      }
  
      target.apply(this, arguments)
  
      isThrottled = true
  
      setTimeout(function() {
        isThrottled = false
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs)
          savedArgs = savedThis = null
        }
      }, ms)
    }
  
    return wrapper
}