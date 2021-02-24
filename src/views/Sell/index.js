import { Typography } from '@material-ui/core'
import Form from 'components/Form'
import Header from 'components/Header/Header'
import { SnackbarProvider } from 'notistack'
import React from 'react'

export default function Sell({ user }) {
  return (
    <div>
      <Header user={user} />
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontWeight: 700, margin: '100px 20px 0px' }}>
          Hoila, Thanks for contributing to AutoBot
      </h3>
        <h6>
          The best data are made by the best people
      </h6>
      </div>
      <SnackbarProvider>
        <Form title="Say the World that you are working" user={user} />
      </SnackbarProvider>
    </div>
  )
}