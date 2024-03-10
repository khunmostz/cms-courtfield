import { ModelLogin } from "@/models/loginModel";
import { loginContoller } from "@/networks/apiController/login/login.repos";

export const loginByPass = async (body: any): Promise<ModelLogin> => {

    try {
        let formData = new FormData();
        formData.append('username', body.username);
        formData.append('password', body.password);

        const loginService = loginContoller({
            method: 'POST',
            body: formData,
        });

        const res = await loginService.login();

        // Assuming loginService.login() returns the appropriate data
        let data: ModelLogin = res.data;


        return data;
    } catch (error) {
        // Handle errors more gracefully, throw an error or return a meaningful response
        console.error('Login error:', error);
        throw new Error('Login failed');
    }

}