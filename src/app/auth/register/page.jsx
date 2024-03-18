import {useForm} from 'react-hook-form';

function RegisterPage() {
    const { register } = useForm();

    const onSubmit = handelSubmit(data => {
        console.log(data);
    })

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input 
                    type="text" placeholder="Username"
                    { ...register("username", {required: true})}
                />
                <input 
                    type="email" placeholder="Email"
                    { ...register("email", {required: true})}                      
                />
                <input type="password" placeholder="Password"
                    { ...register("password", {required: true})}
                />
                <input type="password" placeholder="Confirm Password"
                    { ...register("confirmPassword", {required: true})}
                />
        
                <button>
                    Register
                </button>

            </form>
        </div>
    );
}
export default RegisterPage;