import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"

export class MutationsObservation {

    public mutationsObservable: Observable
    private _mutationsSubject: Subject<MutationRecord[]>
    private _mutationObserber: MutationObserver

    constructor() {
        this._mutationObserber = new MutationObserver(mutationRecords => {
            this._mutationsSubject.next(mutationRecords)
        })
        this._mutationObserber.observe(document.body, {
            childList: true,
            subtree: true
        })

        this._mutationsSubject = new Subject()
        this.mutationsObservable = this._mutationsSubject.asObservable()
    }

}