import { Card, CardContent, Typography } from '@material-ui/core'
import React ,{forwardRef } from 'react'
import './message.css'
const Message = forwardRef(({ username, message } , ref) =>{
    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && `message__user`}`}>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                       {!isUser && `${message.username} : ` }  {message.message}
                    </Typography>
                </CardContent>
            </Card>
            {/* <h2> </h2> */}
        </div>
    )
})

export default Message
