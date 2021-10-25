import ServiceLocator from "../../services/core/serviceLocator"

export function Inject(propType: Function) {
    return (target: Object, propKey: string): any => {
        // Переопределяем декорируемое свойство
        let descriptor = {
            get: function () {
              return ServiceLocator.getService(propType)
            }
        }
        Object.defineProperty(target, propKey, descriptor)
        return descriptor
    }
}