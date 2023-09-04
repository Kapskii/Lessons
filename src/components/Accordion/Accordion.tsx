import React from "react"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion Rendering')

    if (props.collapsed === true) {
        return <AccordionTitle title={props.titleValue} />
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                <AccordionBody />
            </div>
        )
    }

    // return (
    //     <>
    //         <AccordionTitle title={props.titleValue} />
    //         {!props.collapsed && <AccordionBody />}
    //     </>
    // )
}

type AccordionPropsTitleType = {
    title: string
}

function AccordionTitle(props: AccordionPropsTitleType) {
    console.log('Title Rendering')
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('Body rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default Accordion;

