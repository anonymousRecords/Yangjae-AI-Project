const SignInForm = ({signInData, onChangeSignInData}) => {
    return (
        <div className="album">
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={signInData.email} onChange={onChangeSignInData} className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" value={signInData.password} onChange={onChangeSignInData} name="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">로그인</button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;