    import Login from "../Login";
    import React, { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    const Auth = (props) => {
        const { Component } = props;
        const navigate = useNavigate();
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const checkUserToken = () => {
            const userToken = localStorage.getItem('token');
            if (!userToken || userToken === 'undefined') {
                setIsLoggedIn(false);
                return navigate('/');
            } else {
                setIsLoggedIn(true);
            }
        }

        const checkExpireToken = () => {
            const userExpireToken = localStorage.getItem('token');
            if (!userExpireToken || userExpireToken === 'undefined') {
                setIsLoggedIn(false);
                return navigate('/');
            }
        }



        useEffect(() => {
            checkExpireToken();
            checkUserToken();
        }, [isLoggedIn]);

        // if (isLoggedIn) {
        //     return <Component/>;
        // }
        return (
            <>
                {isLoggedIn ? <Component /> : null}
            </>
        );
    }
    export default Auth;