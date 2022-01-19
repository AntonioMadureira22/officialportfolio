button{
    border: 2px solid $textColor;
    border-radius: 4px;
    padding: 10px ;
    cursor: pointer;
    font-size: 20px;
    background: $mainColor;
    color: $textColor;
    margin: 20px;

    //to set up a blinking animation
    // animation: buttonBlink 3s infinite;

    &:hover{
        opacity: 1;
        background: transparent;
    }

    //to allow the defining style
    // @keyframes buttonBlink {
    //     100%{
    //         opacity: 0;
    //     }
        
    // }