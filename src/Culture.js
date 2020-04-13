import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from './Footer';

export default function Culture() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <Paper variant="outlined">
                    To be built, the culture tab.
              </Paper>
            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}