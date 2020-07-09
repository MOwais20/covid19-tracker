import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

import CountryData from './CountryData/CountryData';
import ProgressSpinner from './ProgessSpinner';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        padding: 5,
        margin: 10,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        color: 'black',
    },
}));


export default function FullWidthGrid() {
    const classes = useStyles();

    const [globalData, setGlobalData] = useState();
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        async function fetchGlobalData() {
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats')
            console.log(apiResponse);
            const dataFromApi = await apiResponse.json();
            console.log(dataFromApi);
            setGlobalData(dataFromApi);
            setDataLoading(false);
        }
        fetchGlobalData();
    }, [])

    if (dataLoading) {
        return <ProgressSpinner/>
    }
    else {

        return (
            <div className={classes.root}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid item xs={5} sm={2}>
                        <Paper className={classes.paper}>
                            <Typography variant="body1" gutterBottom>
                                Infected
                        </Typography>
                            <Typography variant="h6" gutterBottom>
                                <NumberFormat value={globalData ? globalData.results[0].total_serious_cases : 'Loading'} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={5} sm={2}>
                        <Paper className={classes.paper}>
                            <Typography variant="body1" gutterBottom>
                                Recovered
                        </Typography>
                            <Typography variant="h6" gutterBottom>
                                <NumberFormat value={globalData ? globalData.results[0].total_recovered : 'Loading'} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={5} sm={2}>
                        <Paper className={classes.paper}>
                            <Typography variant="body1" gutterBottom>
                                Deaths
                        </Typography>
                            <Typography variant="h6" gutterBottom>
                                <NumberFormat value={globalData ? globalData.results[0].total_deaths : 'Loading'} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={5} sm={2}>
                        <Paper className={classes.paper}>
                            <Typography variant="body1" gutterBottom>
                                Total
                        </Typography>
                            <Typography variant="h6" gutterBottom>
                                <NumberFormat value={globalData ? globalData.results[0].total_cases : 'Loading'} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <CountryData />
                    </Grid>
                </Grid>
            </div>
        );
    }

}
