import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";
jest.mock('../../../src/firebase/providers');


describe('Pruebas en authThunks', () => {

    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks);

    test('Debe de invocar le checkingCredentials', async () => {

        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            "type": "auth/checkingCredentials",
            "payload": undefined,
        });

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

    });

    test('StartGoogleSignIn debe de llamar cgeckingCredentials y login - exito', async () => {
        const loginData = {
            ok: true,
            ...demoUser
        };

        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('StartGoogleSignIn debe de llamar cgeckingCredentials y logout - error', async () => {

        const loginData = {
            ok: false,
            errorMessage: 'Un error en google'
        };

        await singInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));


    });

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login -exito', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('startLogout debe de llamar logoutFirebase, clearNores y logout', async () => { 

        await startLogout()(dispatch);
        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        
     })



});