import styled from 'styled-components'

export default function Home () {
    return (
        <>
        <Test>
            <header>Login</header>
            <form action="username">username</form>
            <form action="user">user</form>
            <form action="password">password</form>
        </Test>
        </>
    )
}

const Test = styled.div`
width: 200px;
height: 200px;

background-color: blue;
`