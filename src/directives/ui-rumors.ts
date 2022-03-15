import { Directive } from 'nefbl'

let update = function (el, binding) {

    if (binding.value && binding.value.success) {

        let template = ""
        for (let index in binding.value.results) {
            let rumor = binding.value.results[index]

            template += ` <tr>
            <th>${+index + 1}</th>
            <th>${rumor.title}</th>
            <th style="width:300px">${rumor.body}</th>
            <th>${rumor.mainSummary}</th>
        </tr>`
        }
        el.innerHTML = template
    }

}


@Directive({
    selector: "ui-rumors"
})
export default class {
    $inserted(el, binding) {
        update(el, binding)
    }
    $update(el, binding) {
        update(el, binding)
    }
}
