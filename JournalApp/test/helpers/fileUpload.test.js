import {v2 as cloudinary} from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dozhfy8u0',
    api_key: '165323384892891',
    api_secret: 'NkQRua9Giu9WUhWJNWSetYihzl4',
    secure: true
});

describe('Pruebas en fileUpload.js', () => {
  
    test('Debe de subir el archivo correctamente a cloudinary', async () => {

        const imageUrl = 'https://images.squarespace-cdn.com/content/v1/51142d0be4b067782b66f751/1443215472429-OGX4F08A16BV9HEZJPHG/image-asset.jpeg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        console.log(url);
        
        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId],{
            resource_type: 'image'
        });
    });

    test('Debe de retornar null', async() => {

        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);
        expect( url).toBe(null);
      
    })
    
    

});
