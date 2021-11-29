import { PROFILE_DATA } from "../../mock/profile"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"

export type ProfileFieldValue = {
    name: string,
    value: string | boolean | number
}

export type ProfileField = {
    name: string,
    type: string,
    title: string,
    value: string | boolean | number
}

// NOTE: Это все тестовый код. В будущем будет переписано
export class ProfileService {
    public profileObservable: Observable
    private _profileSubject: Subject<ProfileField[]>
    private _profile: ProfileField[]

    constructor() {
        this._profile = []
        this._profileSubject = new Subject()
        this.profileObservable = this._profileSubject.asObservable()
    }

    getProfile(): void {
        this._profile = PROFILE_DATA
        this._profileSubject.next(this._profile)
    }

    setProfile(fieldValues: ProfileFieldValue[]): void {
        for (const fieldValue of fieldValues) {
            const field = this._profile.find((f) => f.name === fieldValue.name)
            if (field) field.value = fieldValue.value
        }
        this._profileSubject.next(this._profile)
    }
}