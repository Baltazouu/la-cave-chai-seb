import {StyledCard} from "../styled-card/StyledCard";
import CardMedia from "@mui/material/CardMedia";
import {StyledCardContent} from "../styled-card/StyledCardContent";
import Typography from "@mui/material/Typography";
import {StyledTypography} from "../styled-card/StyledTypoGraphy";
import * as React from "react";


export default function Event({img,alt,title,description} : {img : string,alt:string,title:string,date:string,description:string}) {

    return (
        <StyledCard
            variant="outlined"
            tabIndex={0}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                image={img}
                sx={{
                    //aspectRatio: '16 / 9',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            />
            <StyledCardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                    {description}
                </StyledTypography>
            </StyledCardContent>
        </StyledCard>
    )

}