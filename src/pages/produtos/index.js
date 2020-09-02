import React, { useEffect, useState } from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        flexBasis: '20%'
    },
    main: {
        display: 'flex',
        flexWrap: 'wrap'
    }
});

export default function ImgMediaCard() {
    const [datas, setData] = useState([]);
    // const [nome, setNome] = useState(null);
    // const [imagem, setImagem] = useState(null);

    const url = "http://localhost:3001/produtos";

    useEffect(() => {
        fetch(url)
            .then((results) => results.json())
            .then((data) => {
                setData(data)
            })
    })
    const classes = useStyles();

    return (
        <div className={classes.main}>
            {datas.map((data) => {
                return (
                    <Card className={classes.root} key={data.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={data.image}
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title={data.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {data.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>)
            })}
        </div>
    );
}
