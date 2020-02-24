import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SnackbarCustom from '../SnackbarComponent/Snackbar';
import SignUp from './SignUp';
import SignIn from './SignIn';


const Sign = () => {
    const [signSwitch, setSignSwitch] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const { register, handleSubmit, errors, reset, watch, setError, clearError } = useForm({
        mode: 'onChange',
    });

    const [snackbarData, setSnackbarData] = useState({
        open: false,
        message: "test",
        severity: "success",
        hideDuration: 2000,
    });

    const openSnackbar = (open, message, severity, hideDuration) => {
        setSnackbarData({
            open: open,
            message: message,
            severity: severity,
            hideDuration: hideDuration,
        });
    }

    const closeSnackbar = () => {
        setSnackbarData({
            ...snackbarData,
            open: false
        });
    }

    const onChangeBox = () => {
        if(!loadingButton) {
            resetAll()
            setSignSwitch(!signSwitch);
        }
    }

    const disableAll = (bool) => {
        setLoadingButton(bool);
    }

    const resetAll = () => {
        reset({
            reg_username: "",
            username: "",
            email: "",
            password: "",
            cpassword: "",
        });
    }

    return (
        <React.Fragment>
            <SnackbarCustom 
                message={snackbarData.message}
                handleOpen={snackbarData.open}
                handleClose={closeSnackbar}
                severity={snackbarData.severity}
                autoHideDuration={snackbarData.hideDuration}
            />
            {signSwitch ? (
                <SignIn
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    onChangeBox={onChangeBox}
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    setError={setError}
                    loadingButton={loadingButton}
                    disableAll={disableAll}
                    openSnackbar={openSnackbar}
                />
            ) : (
                <SignUp
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    resetAll={resetAll}
                    onChangeBox={onChangeBox}
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    watch={watch}
                    clearError={clearError}
                    setError={setError}
                    loadingButton={loadingButton}
                    disableAll={disableAll}
                    openSnackbar={openSnackbar}
                />
            )}
        </React.Fragment>
    )
}

export default Sign;