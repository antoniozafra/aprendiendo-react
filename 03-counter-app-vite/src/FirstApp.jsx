import Proptypes from 'prop-types';


export const FirstApp = ( {title, subtitle, name} ) => {

    return (
        //Return a Fragment
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}



FirstApp.propTypes = {
    title : Proptypes.string.isRequired,
    subtitle : Proptypes.number
}
FirstApp.defaultProps = {
    title : 'No hay titulo',
    subtitle: ' No hay subtitutlo',
    name: ' Antonio z'
}