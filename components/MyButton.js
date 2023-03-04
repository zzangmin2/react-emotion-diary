const MyButton = ({text,type,onClick}) =>{

    const btnType = ['positive', 'negative'].includes(type) ? type: 'default';
    
    return(
        <button class={["MyButton","MyButton_"+type].join(" ")} onClick ={onClick}>
            {text}
        </button>
    );
};

MyButton.defaultProps = {
    type: "default",
}

export default MyButton;