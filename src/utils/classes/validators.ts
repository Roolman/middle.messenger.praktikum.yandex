export enum VALIDITY_TYPES {
    required = "required",
    pattern = "pattern",
    max = "max",
    min = "min",
    maxLength = "maxLength",
    minLength = "minLength",
    type = "type"
}

export type Validator = {
    type: string
    value: string | number
    error?: string
}

export class Validators {
    private _validityFields: Map<string, string>

    private _validators: Validator[]
    private _invalidities: string[]

    constructor(validators: Validator[]) {
        this._checkValidators(validators)
        this._setValidityFields()
        this._validators = validators
        this._invalidities = []
    }

    setValidators(input: HTMLInputElement): void {
        // Тип всегда проверяется
        if(!this._validators.map(x => x.type).includes(VALIDITY_TYPES.type)) {
            this._validators.push({
                type: VALIDITY_TYPES.type,
                value: input.type
            })
        }

        for(let validator of this._validators) {
            input.setAttribute(validator.type, validator.value.toString())
        }
    }

    checkValidity(input: HTMLInputElement): void {
        this._invalidities = []

        let validity = input.validity

        for(let validator of this._validators) {
            const validityField = this._getValidityField(validator.type)
            if((validity as any)[validityField]) {
                switch(validator.type) {
                    case VALIDITY_TYPES.required:
                        this.addInvalidity(validator.error || "Это поле обязательное")
                        break
                    case VALIDITY_TYPES.max:
                        this.addInvalidity(validator.error || "Значение выше маскимума")
                        break
                    case VALIDITY_TYPES.min:
                        this.addInvalidity(validator.error || "Значение ниже минимума")
                        break
                    case VALIDITY_TYPES.maxLength:
                        this.addInvalidity(validator.error || "Превышен маскимум символов")
                        break
                    case VALIDITY_TYPES.minLength:
                        this.addInvalidity(validator.error || "Символов недостаточно")
                        break                        
                    case VALIDITY_TYPES.pattern:
                        this.addInvalidity(validator.error || "Значение не совпадает с шаблоном")
                        break 
                    case VALIDITY_TYPES.type:
                        this.addInvalidity(validator.error || "Значение не соответствует типу поля")
                        break                         
                    default: 
                        break
                }
            }
        }

    }

    addInvalidity(message: string): void {
        this._invalidities.push(`• ${message}`)
    }

    getInvalidities(): string {
        return this._invalidities.join('\n') || ''
    }

    _checkValidators(validators: Validator[]): void {
        for(let validator of validators) {
            const validityOptions = Object.values(VALIDITY_TYPES) as Array<string>
            if(!validityOptions.includes(validator.type)){
                throw new Error(`Не существует валидатора ${validator.type}`)
            }
        }
    }

    _setValidityFields(): void {
        this._validityFields = new Map<string, string>()
        this._validityFields.set(VALIDITY_TYPES.required, "valueMissing")
        this._validityFields.set(VALIDITY_TYPES.pattern, "patternMismatch")
        this._validityFields.set(VALIDITY_TYPES.max, "rangeOverflow")
        this._validityFields.set(VALIDITY_TYPES.min, "rangeUnderflow")
        this._validityFields.set(VALIDITY_TYPES.maxLength, "tooLong")
        this._validityFields.set(VALIDITY_TYPES.minLength, "tooShort")
        this._validityFields.set(VALIDITY_TYPES.type, "typeMismatch")
    }

    _getValidityField(validityType: string): string {
        return this._validityFields.get(validityType) || ''
    }

}