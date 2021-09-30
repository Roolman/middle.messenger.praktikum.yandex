import Handlebars from 'handlebars'

import {sum} from './sum'
import source from './sum.tmpl'
import './sum.scss'

export default function() {
    const root = document.querySelector('#root')
    const sumResult = sum(5, -1).toString()
    const template = Handlebars.compile(source)
    const result = template({sumResult})
    root.innerHTML = result
}