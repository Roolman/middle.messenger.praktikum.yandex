type ServiceInfo = {
    interfaceType: Function,
    instance: Object
}

class ServiceLocator {
    services: Array<ServiceInfo>

    constructor() {
        this.services = []
    }

    registerService(interfaceType: Function, instance: Object): void {
        let record = this.services.find((x) => x.interfaceType === interfaceType)
        if (!record) {
            record = { interfaceType, instance }
            this.services.push(record)
        } else {
            record.instance = instance
        }
    }

    getService(interfaceType: Function): Object | null {
        return this.services.find((x) => x.interfaceType === interfaceType)?.instance || null
    }
}

export default (new ServiceLocator())