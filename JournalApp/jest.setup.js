// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import { getEnviroments } from './src/helpers';

require('dotenv').config({
    path: '.env.test',

});

jest.mock('./src/helpers/getEnviroments', () => ({
    getEnviroments: ( ) => ({...process.env})
}));
