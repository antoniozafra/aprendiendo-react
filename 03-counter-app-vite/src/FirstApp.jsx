import Proptypes from 'prop-types';


export const FirstApp = ( {title, subtitle, name} ) => {

    return (
        //Return a Fragment
        <>
            <div data-testid="test-title">{title}</div>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}



FirstApp.propTypes = {
    title : Proptypes.string.isRequired,
    // subtitle : Proptypes.number
}


FirstApp.defaultProps = {
    subtitle: ' No hay subtitutlo',
    name: ' Antonio z',
    // title : 'No hay titulo'
}