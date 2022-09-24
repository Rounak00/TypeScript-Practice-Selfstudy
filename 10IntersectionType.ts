type dragable={
    drag:()=>void
}
type resizable={
    resize:()=>void
}

type UIWeight=dragable &resizable //both togather 

let textbox: UIWeight={
    drag:()=>{}
    resize:()=>{}
}