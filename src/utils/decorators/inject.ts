import ServiceLocator from "../../services/core/serviceLocator"

/* eslint-disable */
export function Inject(propType: Function) {
    return (target: Object, propKey: string): any => {
        // Переопределяем декорируемое свойство
        const descriptor = {
            get() {
                return ServiceLocator.getService(propType)
            },
        }
        Object.defineProperty(target, propKey, descriptor)
        return descriptor
    }
}
/* eslint-enable */