export default function Tabs({ children, buttons, ButtonsContainer }) {
    //const ButtonsContainer = buttonsContainer; //react will recognize wheter it is a component or a string
    return(
    <>
    <ButtonsContainer>
        {buttons}
    </ButtonsContainer>
    {children}
    </>
    );
}